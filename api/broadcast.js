// Admin only: send one email to all learners (or only inactive ones).
const { isConfigured, siteUrl, rpc, sendMany } = require("../lib/mailer");

module.exports = async (req, res) => {
  if (req.method !== "POST") return res.status(405).json({ error: "Use POST." });
  const token = (req.headers.authorization || "").replace(/^Bearer\s+/i, "");
  if (!token) return res.status(401).json({ error: "Please log in." });

  let b = req.body;
  if (typeof b === "string") { try { b = JSON.parse(b); } catch (e) { b = null; } }
  const subject = String((b && b.subject) || "").trim().slice(0, 150);
  const message = String((b && b.message) || "").trim().slice(0, 5000);
  const audience = b && b.audience === "inactive" ? "inactive" : "all";
  if (!subject || !message) return res.status(400).json({ error: "Add a subject and a message." });

  // The database function only answers for admins, so this also checks permission.
  let recipients;
  try { recipients = await rpc("admin_recipients", { audience }, token); }
  catch (e) { return res.status(403).json({ error: "Only admins can send emails." }); }

  if (b.preview) return res.status(200).json({ count: recipients.length, ready: isConfigured() });
  if (!isConfigured()) return res.status(500).json({ error: "Email isn’t set up yet. Add BREVO_API_KEY and SENDER_EMAIL in Vercel, then redeploy." });
  if (!recipients.length) return res.status(200).json({ sent: 0, failed: 0 });

  const result = await sendMany(recipients, { subject, message, buttonText: "Open Zero2Gig", url: siteUrl(req) });
  if (!result.sent && result.failed) return res.status(502).json({ error: "The emails couldn’t be sent. Check your Brevo key and sender email. (" + result.firstError + ")" });
  return res.status(200).json(result);
};

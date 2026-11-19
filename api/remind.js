// Runs once a day (see "crons" in vercel.json). Emails learners who haven't taken a class in 2+ days.
// Vercel calls this with "Authorization: Bearer <CRON_SECRET>", so nobody else can trigger it.
const { isConfigured, siteUrl, rpc, sendMany } = require("../lib/mailer");

const MESSAGES = [
  ["Your next class is waiting", "It’s been a couple of days since your last class. Fifteen minutes today is enough to keep moving towards your first gig.\n\nPick up exactly where you stopped."],
  ["15 minutes today?", "Small steps add up. One short class today keeps your skill growing and gets your streak going again.\n\nStuck on something? Ask Zee, your AI tutor, right inside the class."],
  ["Don’t let your progress go cold", "You’ve already started, and that’s the hardest part. Come back for one class and keep building.\n\nYour points and progress are saved, ready for you."]
];

module.exports = async (req, res) => {
  const secret = process.env.CRON_SECRET;
  if (!secret || req.headers.authorization !== `Bearer ${secret}`) return res.status(401).json({ error: "Not allowed." });
  if (!isConfigured()) return res.status(500).json({ error: "Email isn’t set up yet." });

  let due;
  try { due = await rpc("reminder_batch", { p_secret: secret }); }
  catch (e) { return res.status(500).json({ error: "Couldn’t load the reminder list: " + e.message }); }
  if (!due.length) return res.status(200).json({ sent: 0, failed: 0 });

  const pick = MESSAGES[new Date().getUTCDate() % MESSAGES.length];
  const result = await sendMany(due, { subject: pick[0], message: pick[1], buttonText: "Continue learning", url: siteUrl(req) });
  return res.status(200).json(result);
};

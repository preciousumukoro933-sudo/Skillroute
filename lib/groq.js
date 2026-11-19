// Shared Groq chat helper. Tries a list of models in order, so a retired model
// doesn't break the site: if one is unavailable, the next one is used.

const TEXT_MODELS = [process.env.GROQ_CHAT_MODEL, process.env.GROQ_MODEL, "openai/gpt-oss-120b", "openai/gpt-oss-20b"].filter(Boolean);
const VISION_MODELS = [process.env.GROQ_VISION_MODEL, "qwen/qwen3.6-27b"].filter(Boolean);

async function chat({ messages, models, maxTokens = 2000, temperature = 0.4 }) {
  const key = process.env.GROQ_API_KEY;
  let last = { status: 0, detail: "No model was available." };
  for (const model of [...new Set(models)]) {
    let r;
    try {
      r = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
        body: JSON.stringify({ model, temperature, max_completion_tokens: maxTokens, messages })
      });
    } catch (e) {
      last = { status: 0, detail: "network" };
      continue;
    }
    if (r.ok) {
      const data = await r.json();
      const text = (data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content) || "";
      if (text.trim()) return { text: text.trim(), model };
      last = { status: 200, detail: "empty reply" };
      continue;
    }
    const detail = (await r.text()).slice(0, 300);
    console.error("Groq error", model, r.status, detail);
    last = { status: r.status, detail };
    // Wrong key or rate limit: another model won't help.
    if (r.status === 401 || r.status === 403 || r.status === 429) break;
  }
  const e = new Error(last.detail);
  e.status = last.status;
  throw e;
}

function friendly(e, who) {
  if (e.status === 401 || e.status === 403) return `${who} can’t connect: the GROQ_API_KEY in Vercel is missing or wrong.`;
  if (e.status === 429) return `${who} is busy right now. Please try again in a minute.`;
  return `${who} had a problem answering (code ${e.status || "network"}). Please try again.`;
}

module.exports = { chat, friendly, TEXT_MODELS, VISION_MODELS };

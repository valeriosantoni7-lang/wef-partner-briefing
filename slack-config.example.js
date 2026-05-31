// ── Optional: enable REAL Slack posting from the prototype ──────────────
// 1. Copy this file to  slack-config.js   (that name is gitignored)
// 2. Create a Slack Incoming Webhook:  https://api.slack.com/messaging/webhooks
//    (Create app → Incoming Webhooks → Add to a channel → copy the URL)
// 3. Paste the URL below.
// With it set, the "📨 Send to my Slack" button posts the brief for real.
// Without this file, the button shows a clean simulation toast — the demo
// still works perfectly offline.
window.SLACK_WEBHOOK_URL = ""; // e.g. "https://hooks.slack.com/services/T000/B000/XXXX"

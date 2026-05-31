# Partner Briefing

> A working prototype for the World Economic Forum — **Digital Product Specialist, AI & Business Transformation** panel task.
> Built with Claude Code. *"The best documentation is a working system."*
>
> **▶ Live demo:** https://valeriosantoni7-lang.github.io/wef-partner-briefing/

---

## The problem (as given)

> Before any external meeting, Forum staff need a quick brief on the organisation they're meeting — history with us, current initiatives, key contacts on both sides, recent interactions, and relevant external context. Today they piece it together from Salesforce, email, Slack, internal documents, and ad-hoc web searches, often the morning of the meeting.

## The reframe

This looks like a *document* problem. It's actually a **fragmentation** problem: the context already exists — it's just scattered across five systems and stitched together by hand, under time pressure, the morning of.

So the goal isn't a better template. It's to make the brief **assemble itself** and arrive **before anyone has to ask.**

---

## What this prototype shows

| View | What it demonstrates |
|------|----------------------|
| **Upcoming meetings** | Briefs triggered by calendar events; generate one live (watch it query all 5 sources). Plus an **"any organisation"** box — type any company and the agent assembles a brief on demand. |
| **Partner brief** | A one-screen synthesis: 60-sec summary · talking points · history · initiatives · contacts (both sides) · interactions · external context — every claim traceable to its source, low-confidence items flagged. Plus **"Ask this brief"** — a conversational box to interrogate the brief (the AgentForce "conversation flow" pattern). |
| **Slack delivery** | How it lands: an AgentForce → Slack DM the day before, with an inline "fix it" feedback loop. |
| **Build spec** | The part most prototypes skip: the Salesforce objects & fields, the AgentForce agent definition, the Slack integration logic, and the guardrails — what a delivery team actually builds from. |
| **Impact** | How success is measured: animated edit-rate trend (the north-star metric), time saved, and adoption by team — all derivable from the `Brief_Feedback__c` object in the spec. |
| **How it works** | Problem → current vs. future state → architecture → 90-day rollout. |

## Two design decisions worth noting

1. **Provenance over polish.** Every brief separates **REAL & sourced** data (org profile, WEF initiatives, external context — public, cited) from **illustrative sample** data (CRM/Slack/email/contacts — I don't have the Forum's live systems). The same mechanism in production keeps the agent honest: cite sources, flag what's uncertain, never widen access.
2. **Human-in-the-loop.** The agent drafts; a person signs off. Confidence flags say exactly where to look, and corrections feed back to tune future briefs. **Edit-rate is the north-star quality metric**, not "briefs generated".

---

## Run it

It's a single self-contained file — no build, no install.

```bash
open index.html          # macOS
# or just double-click index.html
```

## Optional: real Slack posting

The "📨 Send to my Slack" button works for real if you add a webhook:

```bash
cp slack-config.example.js slack-config.js   # gitignored
# paste a Slack Incoming Webhook URL inside, then reload
```

Without it, the button shows a clean simulation toast — the demo still works fully offline.

## Tech

Plain HTML/CSS/JS, zero dependencies, fully offline. Built with **Claude Code** — chosen deliberately: it's one of the AI-assisted tools the role calls for, and the fastest path from problem to working artefact.

## Repo

- `index.html` — the prototype
- `presenter-guide.html` — a readable walkthrough + collapsible Q&A (open in a browser)
- `onepager.html` / `Partner-Briefing-Onepager.pdf` — one-page leave-behind
- `TALK-SCRIPT.md` — the 10-minute panel walkthrough + anticipated Q&A (plain text)
- Built on a feature branch and merged via PR — mirroring the GitHub/PR workflow the role uses.

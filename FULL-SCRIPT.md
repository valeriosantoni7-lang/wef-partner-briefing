# Partner Briefing — Full presentation script
### Word-for-word, read-aloud version · ~9–10 minutes

> **How to use this:** Lines in **plain prose** are what you say out loud. Lines in *[italics in brackets]* are stage directions — don't read those aloud. Times in the margin are cumulative.
>
> **Before you start:** open the prototype on the **cover screen**. Have the live link / GitHub repo open in a second tab. Notifications off.
> **Live demo link:** https://valeriosantoni7-lang.github.io/wef-partner-briefing/

---

## The one sentence to anchor everything

**"I reframed a document problem as a fragmentation problem, and built a working agent that assembles the brief itself and delivers it in Slack the day before — with provenance and a human in the loop so people actually trust it."**

---

### ⏱ 0:00 — Open (cover screen showing, before you click)

"Thanks for the time today. Before I share my screen, I want to tell you how I read this task — because I think the framing matters more than the tool.

The brief you described — the one staff put together before a partner meeting — *sounds* like a document problem. Something you'd solve with a better template.

I don't think it is. I think it's a **fragmentation** problem. The context already exists — the history, the contacts, the initiatives, the news. It's just scattered across five different systems, and somebody has to log into each one and stitch it together by hand, usually the morning of the meeting.

So I didn't design a better document. I designed something that **assembles the brief itself, and delivers it before anyone has to ask.** And because the best way to show that is to show it — I built it. Let me share my screen."

*[Share screen. The cover screen is up.]*

---

### ⏱ 0:45 — Enter the prototype

"This is a working prototype — I built it with Claude Code, one of the tools in the job description. It runs entirely in the browser."

*[Click "Enter the prototype." You land on the meetings list — 5 partner meetings, each with its real logo.]*

"This is a staffer's view of their upcoming external partner meetings, pulled from the calendar. Notice some already have a brief ready, and one doesn't yet."

---

### ⏱ 1:15 — Today vs. future

*[Click "How it works." Point at the red "Today" column.]*

"Today, to prep one meeting, a staffer queries Salesforce, then digs through email, then Slack, then internal documents, then runs web searches — one system at a time. It's manual, reactive, inconsistent, and it doesn't scale: every meeting starts from a blank page."

*[Point at the green column.]*

"The shift: it triggers automatically off the calendar event, the brief is waiting in Slack the day before, the structure is consistent every time, and there's a human in the loop who reviews and corrects — and those corrections make the next brief better."

---

### ⏱ 2:15 — Generate a brief live

*[Click "Upcoming meetings" → click the Maersk card, marked "Not generated."]*

"Let me generate the one that isn't done. In production this runs overnight — here I'll trigger it so you can see what it does."

*[Animation plays.]*

"It queries all five sources — you can see the actual queries — and the important step at the end: it doesn't dump what it found, it **synthesizes**, cites where each piece came from, and flags anything it's unsure about."

---

### ⏱ 3:00 — The honesty moment (do not skip)

*[Point at the REAL vs SAMPLE legend bar.]*

"One thing I want to be upfront about. Everything tagged **REAL** is genuinely real and sourced — I had the tool search the live web. Maersk really is a founding member of the Forum's First Movers Coalition; *Laura Maersk* really is the world's first methanol-powered container ship — and those citations link to the real sources.

The parts tagged **SAMPLE** — the CRM records, the Slack messages, the contacts — are illustrative, because I don't have access to the Forum's live systems.

I built that distinction into the interface on purpose, because in production that's exactly what keeps an agent like this trustworthy: it shows what it knows, where from, and where it's guessing."

---

### ⏱ 4:00 — Walk the brief

"The brief maps directly to what your email asked for. The **60-second version** at the top. Then **talking points** — not just what's true, but what to do with it in the room. Then **history, current initiatives, contacts on both sides, recent interactions, and external context** — every card showing its source, with the external items linking to real articles."

*[Scroll to the flags.]*

"And the detail I'm most proud of — the **flags.** It tells you what it's *not sure about.* For Maersk: internal history is thin, treat the relationship data as lower-confidence, verify with Elena. An agent that admits what it doesn't know is the one people will trust."

---

### ⏱ 5:00 — Ask the brief

*[Scroll to "💬 Ask this brief." Click a suggested question.]*

"It's also conversational — if I want to go deeper, I just ask. So the brief isn't a dead document, you can interrogate it. That's the 'define conversation flows' part of the AgentForce work, made concrete."

---

### ⏱ 5:30 — A richer partner + Slack delivery

*[Go back, click Microsoft.]*

"A different shape of relationship — Microsoft, a founding partner of the Collaboration Village and a leader in the AI Governance Alliance. The brief surfaces where the opportunity is — anchoring them as a flagship voice at the Annual Meeting."

*[Click "View Slack delivery."]*

"And this is where it lands — an AgentForce-style Slack message the day before, with the heads-up and a 'Something off? Fix it' button. That button is the human-in-the-loop and the Salesforce–Slack integration in one screen."

---

### ⏱ 6:15 — Generate for ANY company (the wow)

*[Back to meetings, point at the box at the top.]*

"It's not limited to a fixed list. If you're about to meet anyone — give me a name — it builds a brief on demand."

*[Type "Salesforce," hit Generate, land on the brief.]*

"I'll use Salesforce — nice meta-point, they're behind Agentforce, the platform a production version would run on. For organisations we have public data on, the context comes back real and sourced; for anything else it builds the structure and is explicit the CRM layer would come from live Salesforce. Either way, nobody prepared anything."

---

### ⏱ 7:00 — Build spec (your differentiator)

*[Click "Build spec." Click through the tabs.]*

"This is the part I'd actually want to talk about, because a nice interface is the easy bit. The value of this role is writing the requirements a Salesforce delivery team can build from — so I wrote them.

The **data model** — Salesforce as system of record, standard objects plus two custom ones: an Engagement object modelling which partner is in which initiative and how healthy it is, and a Feedback object that closes the loop. The health field drives the flags; the feedback field tunes the agent.

The **AgentForce agent** — trigger logic, the actions it can call, the instructions: synthesize, cite, flag low-confidence, never widen access.

The **Slack integration** — when it fires, the message structure, what the 'fix it' button writes back.

And the **guardrails** — permissions, human-in-the-loop, traceability, thin-slice rollout.

This is the job description's line about understanding objects, flows, and data models well enough to write clear requirements and review delivered work."

---

### ⏱ 8:15 — Impact + how it was built

*[Click "Impact."]*

"How I'd know it's working. Not 'briefs generated' — adoption, time saved, and the one I'd report: **edit-rate**, the share of briefs a human had to correct. Watch it fall. A falling edit-rate means the agent is earning trust, and because every correction is logged, this chart builds itself."

*[Flip to the GitHub tab.]*

"And on how I built it — this is a real public repository. Claude Code, a feature branch, shipped through a pull request. So 'push pull requests using AI-assisted tools' isn't a line on my CV — it's in the commit history."

---

### ⏱ 9:00 — Close

"So to be clear what this is — a prototype I built in a few hours. Sample data, rough edges. Polish was never the point.

The point is the loop: understand the problem, reframe it, ship a working thing that points at the real solution — exactly what this role does every week. Your job description says the best documentation is a working system. So instead of writing about it, I brought one. Happy to dig into any part of it."

*[Stop. Let them respond.]*

---

## Pacing cheatsheet (tape this next to your screen)

| Time | Beat |
|---|---|
| 0:00 | Reframe (before sharing screen) |
| 0:45 | Enter prototype |
| 1:15 | Today vs. future |
| 2:15 | Generate Maersk live |
| 3:00 | **Honesty moment** (REAL/SAMPLE) |
| 4:00 | Walk the brief → flags |
| 5:00 | Ask the brief |
| 5:30 | Microsoft + Slack delivery |
| 6:15 | Any-company (wow) |
| 7:00 | **Build spec** (differentiator) |
| 8:15 | Impact + GitHub |
| 9:00 | Close |

**Running long?** Cut the richer-partner detour (5:30) and Ask-the-brief (5:00). Never cut the reframe, the honesty moment, or the build spec.

**They interrupt with questions?** Good — that's the discussion starting early. Answer, then "let me show you one more thing that speaks to that." Full Q&A answers live in `presenter-guide.html`.

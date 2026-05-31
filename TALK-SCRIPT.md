# WEF Panel — Partner Briefing
### Your 10-minute walkthrough + Q&A prep

> **The artefact:** open `index.html` (double-click — no install, works offline).
> **The story below** is what you say while screen-sharing it. Target: ~10 min.

---

## 0 · The 20-second framing (say this before you share your screen)

> "Before I show you anything — I want to be clear about how I read the task. The brief you described sounds like a *document* problem. I think it's actually a *fragmentation* problem: the context already exists, it's just scattered across five systems and stitched together by hand, under time pressure, the morning of. So I didn't design a better template. I designed something that **assembles the brief itself and delivers it before anyone has to ask.** Let me show you."

This single move — reframing the problem before touching the tool — is the thing the JD is testing ("rethink how work gets done, not just implement a tool"). Lead with it.

---

## 1 · Problem & current state (~1.5 min)

Walk them through what happens today (you can open the **"How it works"** tab, left sidebar — the red "Today" column):

- A staffer manually queries Salesforce → digs through email → scrolls Slack → hunts internal docs → Googles the org.
- It's done the **morning of**, under pressure.
- ~30–45 min per meeting, and **quality depends on who does it** — knowledge is trapped in one person's head.

> "Four things make this painful: it's **manual**, it's **reactive** (morning-of), it's **inconsistent**, and it **doesn't scale** — every meeting starts from zero."

---

## 2 · The reframe / future state (~1 min)

Stay on **"How it works"** — point to the green "With Partner Briefing" column:

> "Same context, four changes: the agent triggers off the **calendar event** so no one runs anything; the brief is **waiting in Slack the day before**; it has a **consistent structure** every time; and there's a **human in the loop** — the staffer reviews and corrects, and those corrections tune the agent."

---

## 3 · Live demo (~4 min — this is the core)

Go to **"Upcoming meetings"** (sidebar).

**a) The trigger.** "These are upcoming external meetings, pulled from the calendar. Two briefs are ready; one hasn't been generated yet."

**b) Show generation — click the Maersk meeting (the amber 'Not generated' one).**
> "Normally this runs automatically the night before. Watch what it does: it queries Salesforce, email, Slack, internal docs, and the web in turn, then synthesizes."
Let the animation play. Point out the **last step — "Synthesizing with AI… structuring + flagging gaps for review."**

**c) The brief itself (Maersk opens).** Walk top to bottom — it maps *exactly* to what the email asked for:
- **60-second brief** — "If you read nothing else. The synthesis, not raw data."
- **Suggested talking points** — "This is the value-add: not just *what's true*, but *what to do with it*." Note the 👍/👎 — "feedback tunes future briefs."
- **Flagged for attention** — *(this is your strongest detail — dwell here)* "It tells you what it's **not sure about**. Maersk has thin internal history, so it explicitly says 'treat relationship facts as lower-confidence, verify with Elena.' The agent that knows its limits is the one people trust."
- Then the five requested blocks: **History with us · Current initiatives · Key contacts (both sides) · Recent interactions · External context.**
- **Source pills** on every card — "Every claim is traceable to where it came from: Salesforce, email, Slack, docs, web. Provenance is what makes this trustworthy instead of a black box."

**d) Open a richer one — go back, click Nestlé.** "Here's a mature relationship. Notice the brief surfaced a *tension*: an unresolved data-sharing question the other side knows about, flagged so our lead isn't caught flat-footed."

**e) Delivery — click "View Slack delivery."**
> "And here's where it actually lands — an AgentForce-style Slack DM the day before. The 60-second version, what to lead with, the heads-up — and a 'Something off? Fix it' button. That's the human-in-the-loop and the AgentForce + Salesforce integration the role calls for, in one screen."

---

## 4 · Architecture & roadmap (~1.5 min)

Back to **"How it works"**, scroll to the architecture row:

> "Salesforce is the **system of record**; the other four are sources. An AgentForce agent retrieves, de-dupes, synthesizes, structures, and flags gaps. It delivers to Slack, this web view, or PDF — and every brief is reviewable, with corrections feeding back."

Then the 90-day plan at the bottom:
> "I wouldn't build all of this first. **Weeks 1–3 I'd shadow 3–4 staffers** and map what they actually pull — validate the problem. **Then a thin slice: Salesforce-only briefs for one team**, to prove the structure earns trust before adding sources. Email/Slack/web and the Slack delivery come next. Then measure adoption and time saved, and expand."

---

## 5 · Close (~30 sec)

> "To be clear on what this is: a prototype I built with Claude Code in a few hours — sample data, rough edges. The point isn't the polish. It's that I can move from *understanding the problem*, to *reframing it*, to *a working artefact that points at the real solution* — which is exactly the loop this role runs every week. The best documentation is a working system, so I brought one."

*(That last line is lifted straight from the JD — say it.)*

---

## Q&A prep — likely questions & strong answers

**"How accurate would the AI synthesis really be? What about hallucination?"**
> "Two safeguards baked into the design. **Provenance** — every claim links to a source, so it's verifiable, not trusted blindly. And **explicit confidence flags** — the agent surfaces what's thin or stale, like it did for Maersk. Plus a human reviews every brief before the meeting. The agent drafts; the human signs off."

**"Why Salesforce as the system of record, not just dump everything into the LLM?"**
> "Salesforce already holds the structured relationship data — accounts, contacts, opportunities, activities — and it's where staff already log interactions. Anchoring there means the brief writes back into the workflow people already maintain, instead of creating a parallel source of truth. The LLM is the synthesis layer on top, not the database."

**"How does AgentForce fit specifically?"**
> "AgentForce is the orchestration + action layer native to Salesforce — it can read Salesforce objects, call out to other systems, run the synthesis, and post to Slack via the Slack integration. So the trigger logic, data inputs, and the Slack conversation flow all live where the data already is. That's the 'Salesforce ↔ Slack AgentForce' integration the role describes."

**"What would you actually build first / how do you de-risk?"**
> "Thinnest slice that proves trust: Salesforce-only briefs for one team. If people trust a brief built from data they already own, adding email/Slack/web is additive. If they don't trust the structure, no amount of sources fixes it. I'd rather learn that in week 4 than month 4."

**"How do you measure success?"**
> "Not 'briefs generated.' Three things: **adoption** (do staff open and use them), **time saved** per meeting, and **edit rate** — how much humans have to correct a brief. Falling edit rate over time = the agent is earning trust. That's the real signal."

**"What about data privacy / sensitive partner info?"**
> "Respect existing permissions — the agent should only surface what the viewer can already access in each source, never widen access. And keep it internal-only with clear provenance, so anything sensitive is traceable and governed, not floating in a model's context."

**"Where could this break / what's the hard part?"**
> "The hard part isn't the build — it's **source quality and trust**. If Salesforce activity logging is patchy, the brief inherits the gaps. So part of the work is improving the *inputs* — and the flags help by making gaps visible, which actually nudges people to log better. The transformation is as much about the workflow as the tool."

**"This isn't an engineering role — how technical are you really?"**
> "I built this. Claude Code, single self-contained app, in a few hours — and I can read the data model well enough to write Salesforce requirements and review what a delivery team ships. I'm not here to replace engineers; I'm here to prototype fast enough that the spec *is* a working thing, and to speak both sides fluently."

---

## One-line summary if you only remember one thing
**"I reframed a document problem as a fragmentation problem, and built a working agent that assembles the brief itself and delivers it in Slack the day before — with provenance and human-in-the-loop so people actually trust it."**

# WEF Panel — Partner Briefing
### Your 10-minute walkthrough + Q&A prep

> **Format reminder:** 10 min you present · 15 min discussion on it · 30 min general interview.
> **The artefact:** open `index.html` (double-click — no install, works offline, survives flaky wifi).
> **Demo over Zoom:** share your screen, full-screen the browser. Have the GitHub PR open in a second tab.

---

## The one sentence to anchor everything

**"I reframed a document problem as a fragmentation problem, and built a working agent that assembles the brief itself and delivers it in Slack the day before — with provenance and a human in the loop so people actually trust it."**

Everything below serves that sentence.

---

## 0 · Framing — say this BEFORE you share your screen (~30 sec)

> "Before I show anything — how I read the task. The brief you described sounds like a *document* problem. I think it's actually a *fragmentation* problem: the context already exists, it's just scattered across five systems and stitched together by hand, under time pressure, the morning of. So I didn't design a better template. I designed something that **assembles the brief itself and delivers it before anyone has to ask.** And I built it — let me show you."

*Why this wins: the JD's #1 theme is "rethink how work gets done, don't just implement a tool." You're doing that in your first 30 seconds.*

---

## 1 · Problem & current state (~1 min)

Open **"How it works"** (sidebar) → point at the red **Today** column:

> "Today a staffer manually queries Salesforce, then email, then Slack, then internal docs, then Google — one by one, the morning of. It's **manual**, it's **reactive**, it's **inconsistent** — quality depends on who does it — and it **doesn't scale**: every meeting starts from zero, and the knowledge stays trapped in one person's head."

---

## 2 · The reframe / future state (~45 sec)

Same screen → green **With Partner Briefing** column:

> "Four changes: it triggers off the **calendar event** so no one runs anything; the brief is **waiting in Slack the day before**; it has a **consistent structure** every time; and there's a **human in the loop** — the staffer reviews, corrects, and those corrections tune the agent."

---

## 3 · Live demo — the core (~4 min)

Go to **"Upcoming meetings."**

**a) The trigger.** "Upcoming external meetings, from the calendar. Two briefs are ready; one isn't generated yet." *(Note the "Generate a brief for any organisation" box at the top — you'll come back to it in step 3g.)*

**b) Generate it — click the Maersk meeting (amber 'Not generated').**
> "Normally this runs automatically the night before. Watch: it queries Salesforce, email, Slack, internal docs, and the web — you can see the actual queries — then synthesizes."
Let it play. Call out the last step: **"structure, cite sources, and flag low-confidence items for review."**

**c) The brief opens. First, point at the legend bar — THIS is your honesty move:**
> "One thing I want to be upfront about. Everything tagged **REAL** — the org profile, the WEF initiatives, the external context — is genuinely real and sourced; I had Claude search the live web. Maersk really is a founding member of the First Movers Coalition; *Laura Maersk* really is the first methanol container ship. The parts tagged **SAMPLE** — the CRM records, Slack, named contacts — are illustrative, because I obviously don't have the Forum's live systems. In production that exact same mechanism keeps the agent honest."

*This single move — building the honesty into the UI — is what separates you from candidates who present fake data as if it's real.*

**d) Walk the brief top to bottom** (it maps 1:1 to the email's ask):
- **60-second brief** — "If you read nothing else."
- **Talking points** — "Not just *what's true* — *what to do with it*. Note the 👍/👎: feedback tunes future briefs."
- **Flagged for attention** — *(dwell here — your strongest detail)* "It tells you what it's **not sure about**. Maersk has thin internal history, so it says 'treat CRM facts as lower-confidence, verify with Elena.' **An agent that admits what it doesn't know is the one people trust.**"
- Then **History · Initiatives · Contacts (both sides) · Recent interactions · External context** — each with **source pills** and clickable real sources. "Provenance is what makes this trustworthy instead of a black box."

**e) Open a mature one — back, click Nestlé.** "Different shape: a 15-year relationship mid leadership-reset under a new CEO. The brief flags it so our lead doesn't walk in with last year's plan."

**f) Delivery — click "View Slack delivery."**
> "Where it actually lands: an AgentForce-style Slack DM the day before — 60-second version, what to lead with, the heads-up, and a 'Something off? Fix it' button. That's the human-in-the-loop and the AgentForce + Slack integration in one screen."

*(Optional, only if you set up the webhook: click "📨 Send to my Slack" and switch to your Slack window to show it actually arrived. If no webhook, leave this button alone — it just shows a simulation toast.)*

**g) The "wow" — generate one live for any org.** Go back to meetings, point at the box at the top:
> "And it's not limited to a fixed list. If you're about to meet anyone — say, give me a name — it assembles a brief on demand."
Type a company (try **Salesforce** — there's a nice meta-beat: *"note this is the company behind Agentforce, the exact platform a production version would run on"*) and hit Generate. Let the animation play, land on the brief.
> "For orgs we have public data on, the context is real and sourced. For anything else, it builds the structure and is explicit that the CRM layer would come from live Salesforce. Either way — no one had to prepare anything."

⚠️ *If asked to type a company you don't know: it still works — it returns a labelled scaffold explaining what each section would pull live. That's a feature, not a failure. Say so.*

---

## 4 · The differentiator — "Build spec" (~2 min) ⭐

Go to **"Build spec."** *This is what no generalist candidate will have.*

> "A nice UI is easy. The value of this role is the **requirements a Salesforce delivery team can actually build from** — so I wrote them."

- **Salesforce data model tab:** "Salesforce as system of record. Standard objects — Account, Contact, Opportunity, Activity — plus two custom objects: an `Engagement__c` junction that models which partner is in which initiative and its health, and a `Brief_Feedback__c` object that closes the loop. The health field *drives the flags*; the feedback field *tunes the agent*. Reports on those two give you adoption and quality metrics for free."
- **AgentForce agent tab:** "The agent definition — trigger logic, the seven actions it can call, and the instructions: synthesize, cite, flag low-confidence, never widen access. This is the 'define business logic for AgentForce-powered Slack integrations' deliverable, written out."
- **Slack integration tab:** "The integration as a requirement — when it fires, the Block Kit message, and what the 'fix it' button writes back."
- **Guardrails tab:** "The non-negotiables: respect existing permissions, human-in-the-loop, traceability, feedback loop, thin-slice rollout."

> "That's the part of the JD that says *understand objects, flows, and data models well enough to write clear requirements and review delivered work.*"

---

## 5 · How I built it + roadmap (~1 min)

> "Two quick things on *how*, since the role is about AI-assisted building. First: I built this with **Claude Code** — one of the tools you named — and shipped it the way your team works: on a feature branch, merged via a **pull request**." *(Flip to the GitHub PR tab for 5 seconds — show the diff/description.)* "So the 'push PRs with AI-assisted tools' part isn't a claim, it's in the repo."

Back to **How it works**, scroll to the 90-day plan:
> "And I wouldn't build all of this first. **Weeks 1–3: shadow staffers, validate the problem.** Then a **thin slice — Salesforce-only briefs for one team** — to prove the structure earns trust before adding sources. Email, Slack, web and the Slack delivery come next. Then measure and expand."

---

## 6 · Close (~30 sec)

> "To be clear on what this is: a prototype I built in a few hours — sample data, rough edges. Polish isn't the point. The point is the loop: **understand the problem → reframe it → ship a working artefact that points at the real solution** — which is exactly what this role does every week. The best documentation is a working system, so I brought one."

---

## Q&A prep — likely questions & strong answers

**"How accurate is the AI synthesis? What about hallucination?"**
> "Three safeguards, and you can see two of them live. **Provenance** — every claim links to a source. **Explicit confidence flags** — the agent surfaces what's thin or stale, like it did for Maersk. And **a human reviews every brief** before the meeting. The agent drafts; the person signs off."

**"Why Salesforce as system of record — why not just feed everything to the LLM?"**
> "Salesforce already holds the structured relationship data and it's where staff already log interactions. Anchoring there means the brief writes back into a workflow people already maintain, instead of spawning a parallel source of truth. The LLM is the synthesis layer on top — not the database."

**"How does AgentForce specifically fit?"**
> "AgentForce is Salesforce's native agent/orchestration layer — it can read Salesforce objects, call out to other systems, run the synthesis, and post to Slack via the supported Slack integration. So trigger logic, data inputs, and the Slack flow all live where the data already is. I sketched the full agent definition in the Build-spec tab."

**"What would you build first / how do you de-risk?"**
> "Thinnest slice that proves trust: Salesforce-only briefs for one team. If people trust a brief built from data they already own, adding email/Slack/web is purely additive. If they don't trust the *structure*, no number of sources fixes it. I'd rather learn that in week 4 than month 4."

**"How do you measure success?"**
> "Not 'briefs generated.' Three things: **adoption** (do staff open and use them), **time saved** per meeting, and **edit-rate** — how much humans correct a brief. A falling edit-rate means the agent is earning trust. That's the real signal, and I modelled the feedback object to capture it."

**"Data privacy / sensitive partner info?"**
> "Respect existing permissions — the agent only surfaces what the viewer can already access in each source, never widens access. Keep it internal, with provenance visible, so anything sensitive is traceable and governed, not floating in a model's context. It's the first guardrail in the spec."

**"Where does this break? What's the hard part?"**
> "Not the build — it's **source quality and trust**. If Salesforce activity logging is patchy, the brief inherits the gaps. So part of the work is improving the *inputs* — and the flags help, because making gaps visible actually nudges people to log better. The transformation is as much workflow as tool."

**"This isn't an engineering role — how technical are you really?"**
> "I built this — Claude Code, a real repo, merged via PR — and I can read the data model well enough to write the Salesforce requirements and review what a delivery team ships. I'm not here to replace engineers. I'm here to prototype fast enough that the spec *is* a working thing, and to speak both sides fluently."

**"You used real partner names — is that a concern?"**
> "Deliberate, and flagged. Org-level facts and WEF initiatives are real and public — I wanted the demo grounded in truth, not invented. Anything I couldn't source, I tagged SAMPLE right in the interface. I'd never present fabricated data as real — that honesty is the same principle the production agent runs on."

**"Could it generate a brief for any organisation, live?"**
> "Architecturally yes — swap the sample CRM layer for live Salesforce + connector calls and the external-context section already works off live web search. I kept the demo offline on purpose so it's bulletproof over Zoom; the live version is a connector-wiring exercise, not a redesign."

---

## If a panelist asks you to "try my company"
Stay calm — the honest answer is strong:
> "This build has three sample partners so I could go deep on the brief structure. The external-context section is genuinely live web research, so for a real org that part would populate; the CRM layer would need the Forum's Salesforce. Happy to walk through how I'd wire that."

---

## Pre-flight checklist (the morning of)
- [ ] `index.html` opens and the **generate animation** plays (click Maersk).
- [ ] GitHub **PR open in a second browser tab**.
- [ ] Browser zoom so text is readable on a shared screen.
- [ ] Close notifications / other tabs.
- [ ] Practice the 30-sec framing out loud — that's the bit that lands.

# The Postmortem That Made Us Laugh

[![make.fun bounty](https://make.fun/badge/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3.svg)](https://make.fun/bounty/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3)
[![rank](https://make.fun/badge/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3/hadiba924-prog/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3/rank.svg)](https://make.fun/bounty/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3)
[![reward](https://make.fun/badge/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3/hadiba924-prog/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3/reward.svg)](https://make.fun/bounty/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3)

## Entry

> I asked the agent to add dark mode. It inverted every colour on the site — including the QR codes on our event tickets — and shipped it, so not a single phone could scan anyone in at the door that night.

## Why this one

Twenty candidate stories were brainstormed and scored against the judge's criteria: really about a coding agent going wrong; concrete asked → did → broke; a punch in the last clause; reads like a working engineer; believable detail. This one won because:

- **It is unmistakably an agent failure, not a human typo.** Only an agent takes "invert the colours" literally enough to invert functional images too.
- **The detail is fresh and specific.** Inverted QR codes are a picture no other entrant is likely to have — no deleted databases, no `rm -rf`, no "it worked yesterday".
- **The consequence lands in one vivid scene.** A queue at a door, phones failing to scan anyone in: the reader can see it and wince.
- **The punch is the final clause.** The story turns on "and shipped it" — the agent was proud of the breakage — and ends on the door that night.

Runners-up: a search cache that served "toilet paper" results for every query for a week (funny, but a generic caching bug rather than distinctively agent behaviour), and a migration that renamed `orders` to `orders_backup` and created a fresh empty `orders` ("zero downtime").

## How it works

`main.ts` (Node 22, stdlib only, no dependencies) writes the entry text to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output`), with guards enforcing 1–400 characters and exactly 1–2 sentences, and no trailing newline.

Run it with:

```sh
MAKEFUN_OUTPUT_DIR=./out node main.ts
```

## Bounty

[The Postmortem That Made Us Laugh](https://make.fun/bounty/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3) on make.fun

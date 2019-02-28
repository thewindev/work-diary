---
title: Be careful with RunOnStartup for Azure Functions
date: "2019-01-02T22:10:00.000Z"
description: ""
---

I created an Azure timer function that gets triggered every hour and sends a push notification to my Android device.
However, instead of receiving only one push notification per hour I always received two. One was triggered every time at the minute '59, and another at '00.
Turns out that this was happening because I set RunOnStartup to true. So my function was waking ap every hour at '59 and it was triggered on startup, then another time at '00 because of the cron schedule.

Conclusion: use RunOnStartup only in development, or be aware that it will trigger your function again on production.
---
title: Wrong .NET Core runtime used for DevOps builds
date: "2019-03-02T22:00:00.000Z"
description: ""
---

Today I got back to working on my PicSort project and when I pushed my code to Github I noticed that my DevOps
build was failing. It's weird because it used to work before and I haven't made any changes. Anyway, this is the error:

######[error]src\PicSort.CLI\PicSort.CLI.csproj(0,0): Error : NETSDK1061: The project was restored using Microsoft.NETCore.App version 1.0.0, but with current settings, version 2.1.0 would be used instead. To resolve this issue, make sure the same settings are used for restore and for subsequent operations such as build or publish. Typically this issue can occur if the RuntimeIdentifier property is set during build or publish but not during restore. For more information, see https://aka.ms/dotnet-runtime-patch-selection.

Lucky for me, the issue was in the first Google results. I just have to add this in my .csproj for every project that is failing.

`<RuntimeFrameworkVersion>2.1.0</RuntimeFrameworkVersion>`

Once I pushed my [commit](https://github.com/thewindev/PicSort/commit/834bb69b78fe0c269b0a315faff0a35393f99068), the build worked perfectly.
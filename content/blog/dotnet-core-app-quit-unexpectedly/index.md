---
title: dotnet core global tool quitting unexpectedly without exceptions
date: "2019-04-08T23:46:37.121Z"
description: ""
---

Yesterday I began implementing the sorting of files by location in my [FileSort](https://github.com/thewindev/FileSort) library. Things were going great until I noticed that my dotnet core app was stopping instantly without throwing any exceptions, but this happened only when I was calling a function from an external library.
Luckily for me, that library was open source, so I downloaded the files, changed the references to point to them and that's when I noticed that a call to HttpClient.GetAsync() was the last line that was executing, and then it would just close my app.

After a lot of debugging and trying all sort of stuff(catching all exceptions, going through event viewer logs, etc.), I realized that my Main function was not async, and that's why the program was exiting. Fortunately, the [CommandLineUtils](https://github.com/natemcmaster/CommandLineUtils) library allows you to use an async Main function, and this solved my issue.

Here's how it looked before:

`gist:thewindev/b4cc07133703d4203ad6953b7731f2ea`

And after:

`gist:thewindev/5473080c5680e224eb0f0c241cb65fdb`
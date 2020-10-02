---
title: Comparing strings with diacritics in .NET
date: "2020-09-15T18:00:00.121Z"
description: ""
---

I'm working on a new version of [RezultateVot.ro](https://rezultatevot.ro) and I need to import a list of past elections. One of the difficulties I have here is that cities don't have a unique ID, so I have to do a lot of string matching in order to make sure that two cities are the same even though someone accidentally used different diacritics. For example, I have to know that "București" and "Bucuresti" are the same city, so when someone wants to see past elections by city they won't see this one duplicated.

I learned two things while trying to solve this:

1. You can search in a database and ignore diacritics by setting a collation like utf8mb4\_general\_ci for MySQL or Latin1\_General\_CI\_AS for SQL Server. That way when you want to find rows _where name like '%bucuresti%'_, you will get rows with both "Bucuresti" and "București".
2. In C#, when you want to compare two strings and ignore diacritics, you can use the "CompareOptions.IgnoreNonSpace". If you also want to ignore case, you can combine this with the "CompareOptions.IgnoreCase" option. I used these two in this extension method:

`gist:thewindev/5db5610d0344d9b5ba84bbb853431bed`

Now, I can use it like this:

```
"Bucuresti".EqualsIgnoringDiacritics("București"); //returns true
"BUCURESTI".EqualsIgnoringDiacritics("București"); //returns true
```
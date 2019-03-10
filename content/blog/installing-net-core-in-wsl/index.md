---
title: Installing .NET Core in WSL
date: "2019-03-05T19:00:00.121Z"
description: ""
---

I was trying to install .NET Core in WSL based on [their install steps](https://dotnet.microsoft.com/download/linux-package-manager/ubuntu16-04/sdk-current) and I keep getting these errors:
```
Some packages could not be installed
dotnet-sdk-2.2 : Depends: aspnetcore-runtime-2.2 (>= 2.2.0) but it is not going to be installed
                  Depends: dotnet-runtime-2.2 (>= 2.2.0) but it is not going to be installed
```

Lucky for me I found [the answer on StackOverflow](https://stackoverflow.com/a/54065983/1091894)(so if you also have this issue go there and give the guy an upvote). In order to make the installation work just use the steps below, and you'll be able to install .NET Core 2.2 in the Windows Subsystem for Linux.

```
curl https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > microsoft.gpg
sudo mv microsoft.gpg /etc/apt/trusted.gpg.d/microsoft.gpg
sudo sh -c 'echo "deb [arch=amd64] https://packages.microsoft.com/repos/microsoft-ubuntu-bionic-prod bionic main" > /etc/apt/sources.list.d/dotnetdev.list'

sudo apt-get install apt-transport-https
sudo apt-get update
sudo apt-get install dotnet-sdk-2.2
```
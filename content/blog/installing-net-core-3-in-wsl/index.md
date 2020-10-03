---
title: Installing .NET Core 3.1 in WSL
date: "2020-10-04T12:00:00.121Z"
description: ""
---

I just installed .NET Core 3.1 in WSL(Ubuntu 20.4) and everything went smooth using the steps from the [MS documentation](https://docs.microsoft.com/en-us/dotnet/core/install/linux-ubuntu).
Then I remembered I had [a blog post about this](https://workdiary.dev/installing-net-core-in-wsl/), but it was about .NET Core 2 and WSL, so I decided to summarize the commands here:

```
wget https://packages.microsoft.com/config/ubuntu/20.04/packages-microsoft-prod.deb -O packages-microsoft-prod.deb

sudo dpkg -i packages-microsoft-prod.deb

sudo apt-get update; \
  sudo apt-get install -y apt-transport-https && \
  sudo apt-get update && \
  sudo apt-get install -y dotnet-sdk-3.1

  sudo apt-get update; \
  sudo apt-get install -y apt-transport-https && \
  sudo apt-get update && \
  sudo apt-get install -y aspnetcore-runtime-3.1
```
This is all you need in order to install the SDK and the runtime. Enjoy!
---
title: Mirroring an image in Xamarin.Forms
date: "2019-05-26T23:00:00.000Z"
description: ""
---
![flipped](flipped.png)
I recently had to flip an image horizontally and unfortunately I couldn't find an easy way to do it using only Xamarin.Forms. Instead, I used Xamarin.iOS and Xamarin.Android implementations.
Here's how they look:

###Xamarin.iOS
`gist:thewindev/98dec89fd1e35e96cec0cf4f7b0d5570`

###Xamarin.Android
`gist:thewindev/72d8256ceb07dec11c3d5b1b9ebd245f`

You just need to send the image as an array of bytes and you'll get back a horizontally mirrored image. If you want to use PNG instead of JPG or you want to do some more processing, that's up to you :)
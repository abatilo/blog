---
layout: post
title: How I UI test fragments in an Android application
---

UI testing is too damn difficult to do sometimes. I use the Espresso framework and Mockito (plus Hamcrest) to do the UI testing in my Android apps, and when I was first learning how to write them, I couldn't seem to find any information for writing UI tests when you have a fragment instead of an activity. Earlier today I stumbled upon [this](https://www.reddit.com/r/androiddev/comments/5warht/ui_testing_how_to_test_fragments/) Reddit post asking how other people do their UI tests with fragments. Since it took me forever to figure out how to do it, I figured that I could walk through how I made it work.

By no means do I think this is the idiomatic and correct way to doing it, but it's literally the only way I could get it working. Basically, I have an Activity that I only use for the purpose of running fragment tests. I launch the activity, make a fragment transaction, and then carry on with my testing like normal. The problem I came across with doing this is that if I wanted to have mocks with different values, the ActivityTestRule would have been instantiated with the Activity launched (meaning the Fragment is also launched) *before* I was able to setup the different mock values. This meant that I had to figure out a way to setup my mocks before the activity was launched. What I found online was that I'm supposed to place the different set of mocks into an entirely different class. This made absolutely no sense to me because I wanted to test both success and failure cases and it didn't make sense to me to have a different class for these cases. It would be an absurd amount of repeated code. I'll talk about my solution below:

Here's an excerpt of the Activity I made. 
{% gist abatilo/34a7113d3128cb74390586eacbf165d2 %}

It doesn't do anything other than inflate the following layout:
{% gist abatilo/6c78ed38af1ca9ac460b9ababc374391 %}

The test class itself is where it gets interesting. I discovered that one of the constructors for `ActivityTestRule` allows you to prevent the specific activity from being instantiated. This is useful because it means that we can ultimately prevent the Fragment from getting instantiated until after we setup our mocks to return appropriate values.
{% gist abatilo/4b6111d9e12058b3573f87df8cb44d6d %}

If anything here doesn't make sense or you have a better way to test your fragments that you like, please feel free to shoot me an email at [aaron@aaronbatilo.io](mailto:aaron@aaronbatilo.io)


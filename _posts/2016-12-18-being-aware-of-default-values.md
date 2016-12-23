---
layout: post
title: Being aware of default values
---
Making mistakes is okay and expected, but what matters most is that you take the mistakes and leverage them as a catalyst to your own improvement. I think being able to systematically recognize what caused a mistake is an important skill to develop as a programmer. 

I work for a small startup dealing with smart home devices. Most of my work at the moment is on our Android app, but I'm known to dabble in different parts of our code base.

One of the features that I recently implemented at work was a "visible" flag in our backend. This flag was to let the clients know if we wanted to ignore certain smart home devices and not display any information about them. In order to do this, I had to add a private member variable to the base class of all of our smart home devices, then of course, create a getter and setter to modify it's value. I had to modify some queries to ensure that the visible state was persisted, among some other changes. There's a lot of moving parts in our backend and my implementation modified most of the correct files but there were a few problems. I do want to focus on one that should have been more obvious at the time.

Most programming languages will have some kind of default value for its variables. In this case, I was using C++, and primitive types (provided a certain context) do have default values. Booleans in particular will default to false if they've been accessed without being assigned to beforehand. Default values were, wrongfully, not on my mind when I was designing this implementation.

Since I implemented the "visible" property, it had the behavior of hiding devices when visible was false, and showing devices when visible was true. This means that the property's default state was false, which mean that by default, devices were hidden. I thought I found all of the places I needed to set visible to being true, but it turns out that there was one that I missed. The database column had a default value, the property implementation had a default value, etc. However, there's a database abstraction layer which initializes instances of devices in order to cache them. I forgot to set visible being to true in the code that does this initialization, which had the effect of all newly added devices being hidden.

It wasn't caught at first because most people who has our product already had their configurations done. They weren't adding new devices, only for them to be hidden. One of my co-workers noticed the bug and swiftly pushed a fix before it affected anyone. In the future, it makes more sense for a property like that to be an "isIgnored" flag. By default it is false, and the expected information will be shown. With this bug, I've added "think of default values" to my list of design considerations.

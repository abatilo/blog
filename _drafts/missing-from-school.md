---
layout: post
title: Useful topics that schools don't teach
---
There's a lot of discussion about whether or not you really need to go to college to become a programmer. According to [this](http://www.businessinsider.com/google-hiring-non-graduates-2013-6) Business Insider article, Laszlo Bock, the former SVP of People Operations at Google, is quoted as saying: "...So we have teams where you have 14 percent of the team made up of people who've never gone to college."

It's true. Programming can be largely self-taught. All you need is some motivation, and time. With that being said, here are a few things I've found to be lacking from university new graduates, and what I would do to make up for the deficiencies. Note, I've never worked with a bootcamp graduate, but I'm sure some of these still apply.

# Debugging
Debugging is the process of removing problems from your code. There are plenty of tools for doing it, namely a debugger. In my university courses, we were never taught how to debug. We were never told about what a debugger is or when to use one. Most of my peers only know how to debug through print/log debugging.

Debugging is a solid exercise in testing how much you know and understand about a program's model. If you've been programming for a while, then you've inevitably come across situations where you found a bug, and with absolutely no effort, you knew the exact bit of code that had the problem. You're capable of pinpoint accuracy with finding the problematic code, because you have a solid understanding of the model of your code. Bugs manifest themselves through incorrect output. That means that somewhere along the lines, there was a mistake in the set of steps and transformations that your data was supposed to go through. The more that you know about the code base that you're working in, the more easily you can debug it.

The first thing that you can do in improving your debugging skills is to become comfortable with navigating around your code base. This is far removed from the actual act of debugging, but like I said, if you have a good understanding of your code, then it makes debugging easier. To help get a good understanding of your code, you should be able to navigate around it swiftly and effortlessly. This is a good call out for my [Master your tools](http://aaronbatilo.io/blog/tools) blog post, because you improve your navigation by understanding how to use your tools more effectively. The navigation methods available to you will change with the tool set that you use for writing code, but the methods that provide the highest value are extremely common. In no particular order, these are:

- Jump to definition/declaration
- Moving forward and backwards through cursor position history
- Find usages of X
- A fuzzy file opener/file tree

Being able to jump to the definition or a variable, method, class, etc is paramount. If your editor can provide some hotkey for doing this instantly, then commit that hotkey to memory as soon as possible. Being able to jump directly to the definition or a method will let you see the dependencies of the class that's using it, and of course it'll let you see the implementation of the method itself. The same principles apply to jumping to the definitions of variables and other structures. Relatedly, learn to navigate through the history of your cursor. This is great because as you traverse your way through the dependencies of method calls in a code base, you want to make it as easy as possible to traverse your way back up the tree. Some editors will let you look at every time a piece of code is used. It could be every time a class is instantiated, or every time a method is called. These are incredibly valuable. One of the most difficult types of code to debug is concurrent code. It's common for programmers to forget to lock on some shared state, or maybe you forgot to release a lock. If you can quickly find everwhere that a shared, mutable variable is used, then you can quickly check to see that you've synchronized its usage in all those locations.

Lastly, you should have a quick way to navigate through your code, to specific files and folders. I use [ctrlp.vim](https://github.com/kien/ctrlp.vim) in vim and it's incredibly useful. I don't have to worry about navigating through a folder structure, or knowing the exact name of a file. I can just vaguely search for it, and open it quickly with little hassle.

The more comfortable you are with navigating a code base, the easier it becomes to build your mental model of how it all works together. This is a huge part of effective debugging.

The next principle in debugging is being able to minimize time for your feedback loop. This means that you should be able to test your assertions as quickly as possible, and any delay in being able to test assertions will also be a delay in debugging your code. This is one of the reasons that writing automated unit tests is a great practice. If your code is easily unit testable, it usually means that you can run many parts of it independently, with little to no setup required. I've worked in code bases where the startup process for the program would take several minutes. If you're having to wait that many minutes between testing your understanding about the code, it's difficult to stay in the debugging state of mind. On a parallel note, if it's hard to test very small portions of your code, that probably means that your code is tightly coupled. You should write your code so that you can always run and test small chunks of it. This correlates highly with writing modular, loosely coupled code.

My next point to debugging has to do with finding the code to debug. Hopefully, you've built a good mental model of your code base. If you haven't, now you need to start building your model while trying to find the source of the bug. I always start my search from the furthest point in the pipeline where I've found the bug. This means that I'll start moving backwards, from the point where the output was most recently incorrect. This might seem intuitive, but I've seen it happen a lot where people start their debugging from higher up in the execution stack. The reasoning for that being that they think the problem stems from a bug in the root of the source code. Start as close to the problem as possible.



# Writing good documentation
# Weighing possible approaches
# The difference between an academic and product programmer
# How to take feedback

# Closing
If you're a new developer, be it from a university or from a bootcamp, you should absolutely read _How To Be A Programmer_ which you can buy online or read for free here: [How To Be a Programmer](https://github.com/braydie/HowToBeAProgrammer).

This book goes far deeper into the topics that you should absolutely know, and it's one of the most important books that I think every developer should read

---
layout: post
title: Guidelines to better comments
---
Documentation is often the last thing on our minds when we're writing code. We always tell ourselves that there isn't enough time or we convince ourselves that we're writing code that's self documenting. The truth is, sometimes this is actually true, but most of the time we're just flat out lying.

Have you ever had to go back to some code you wrote 6 months ago? What about 3 months ago? Maybe 1 month ago? Even code written just 2 weeks ago can be a maze of questions. Why is this the case?

When we're writing code, we've formed a set of assumptions and mental models of the flow of the code. We have an inherent understanding of what other processes are currently going on. In other words, we have the graph of dependencies already hot and ready in our mental cache.

Pretend that your code is a directed acyclic graph (DAG). In fact, a lot of times we're told that our code should be structured in this way to prevent cross cutting concerns, but we'll save that discussion for another blog post. At any given point in your source, you've likely created some kind of dependency. This could just be dependencies on code from your standard library, but this still counts. Your code only works because you've pre-loaded knowledge.

This is why it's easy to forget how code works. If your mental model doesn't have the full DAG, either you have to go up in the graph and find those dependencies, or worse, you need to re-write some of them. This is why you never feel like you need to write comments.

How do we fix this? I've been pondering the idea for a little while now and I think I have a pretty terse list of guidelines that will help you write better comments which in turn will help save you time, effort, and pain.

Firstly, when should you comment? Some people will say that you should write comments in such a way that if you lost all the code, it could be re-written with only the comments as a resource. In my opinion this is far too verbose. Your comments shouldn't obliterate readability, your comments should augment the code.

On the other end of the spectrum, some people say that your code should be so clean and everything should be so well named that you don't even need to write any comments. This is just as foolish because the very moment you name something, be it a variable, class, whatever, you're introducing a mental model derived from your DAG. Unless you have a perfect memory, you're just not going to remember your entire DAG. This proves to be even worse for any people that are trying to read your code and work with it as well.

The happy middle is to comment in places where decisions were made. Don't mistake this to mean you write comments for every line you write just because you decided to write that line. That's silly and just as verbose as the first suggestion. No, instead, comment whenever you find yourself referencing your mental model. In your code you're constantly making decisions for how to control the flow of data. These are the decisions you should be commenting.

One example of such a decision is any time you write code that branches. When you write an if statement, you're inherently making a commentary about the assumption of the state of the data you're working with. If you make a check for a list having more than 0 elements in it, you're doing so because you've accounted for the situation where you DON'T have more than 0 elements in it. Why might this happen? How does this affect the flow of your code?

Another example is any time you extract code out into a method. If you've done such a thing, this is because you feel like the code you've extracted can be reusable in some way. What makes this code reusable? What are your expectations for how the code should be used?

A great marker for needing to comment is if you had to rewrite some code because what was originally there did not behave correctly. This is an explicit sign that the original code had some incorrect assumptions, and you should write the comments to explain what the correct assumptions are.

Now we know when to write comments. What do we put in them? Your comments should focus on explaining why code was written a certain way. I always find it silly when I see comments that are just telling me exactly what the code is doing, for example:

```java
// Checks that the list is not empty
if (0 < exampleList.size) {
  // Logic here
}
```

That's great and all, but this comment is just clutter. It's not aiding at all in my ability to understand the code. Like previously mentioned, the comments should augment the code and help you understand the mental model that existed during the creation of the code.

Also, in my opinion, you should never comment anything that is domain specific knowledge. The problem with doing this is that it's impossible to decide which specific instances you should comment. Do you comment all of them? 

For example, in the Java programming language, using the foreach syntax is considered to be better. The code is more terse with less surface area for making a mistake. It can also result in a small performance gain because it only needs to calculate the upper bound of an array limit one time. On the Android mobile platform, it's advised to not use the foreach syntax because doing so will allocate an Iterator. There's overhead in that allocation, but more importantly that's a reference that will need to be cleaned up by the garbage collector. Allocating that memory has the potential to decrease the time before the next garbage collection cycle. This is bad because you really want to avoid the garbage collector since it'll likely affect the rendering performance of your application and you might drop frames while performing an animation.

Should I be writing this explanation every time I choose to use a for loop? I don't think so. Domain specific comments would become too verbose and frequent.

Lastly, don't comment like you're speaking to an idiot. Give the other people (and yourself) the respect. Comments that explain that a selection sort is O(n^2) is useless unless you're writing a school assignment. A mistake I used to make was trying to write comments specifically intended for someone who has never seen the code. I had an ideal that they could get started by just jumping in and the comments would explain everything. This simply doesn't work. You can't write out your entire mental model everywhere. Leave enough comments to help lead someone down the correct path of thought and with enough information to know where to go if they need to go up the mental model dependency graph.

Thanks for reading.
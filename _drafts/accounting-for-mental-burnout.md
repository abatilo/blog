---
layout: post
title: Accounting for mental burnout
tag: programming
---
Programming is a peculiar field. We're neither an extreme for an engineering field, but it's hard to justify that what we do is art. We're problem solvers like many fields in engineering, but it's very difficult to qualitatively measure everything that we do just like in an artistic field.

I want you to think of building a rocket. The many parts to building a rocket are very well defined. We know that a rocket needs a power source and we can calculate exactly how much power the rocket needs. We know that being aerodynamic is important and we can measure the resistance. These days people are just trying to advance the technology being used for these parts, but the selection in which parts need to exist is pretty solid.

Now I want you to think of cooking. The chemistry of cooking is well defined but the process is a very murky and creative endeavor. There are no mathematical truths or equations for "yumminess". Everyone has different preferences in their food and it's very hard for someone to measure how much they liked any particular meal.

Programming is this weird mutated blob of these two types of thinking. As a programmer, it's your duty to automate some problem or process. However, there's never quite an optimal solution. Actually, let me be more accurate. We have no way of knowing what an optimal solution is.

Unfortunately, at the exact same time, there are optimal solutions to many problems. There are ways to measure solutions to algorithms, and we can design and develop algorithms that are optimal in their specific context. Sorting algorithms can be generalized to have best case complexities of O(nlogn). Depending on how the data has presented itself, some algorithms are even faster than that.

So, where does the controversy kick in? Creating entire systems or products are more than just a single sorting algorithm. Aggregating all of the best case runtime algorithms does not equate to having an optimal solution. Programming in itself is about automating steps to transforming data. However, programs are more than just a series of algorithms. Programs can have user interfaces, they might need to communicate over a network, or they might need to persist data in a database of some sort.

Code is designed and architected the same way a rocket might be. We know that there exists a dependency between component A and component B of the program, so we design our code in such a way that component A can access what it needs from component B. Now we have to get a little creative. Do we want component A to request the data from component B? Do we want component B to tell component A what the data is? Do we think that we should start the oven because I put cookies in it? Or should we put cookies in it because we've started the oven? I know, I know, that was a pretty awful example, but the point still stands.

Most programs do not have a single or absolute set of steps to follow. If we want our programs to generalize to different types of data, we might need to branch out with conditional logic. If we want someone to interact with our program, the order of operations can simply be considered unpredictable.

By this point you're probably wondering what all of this has to do with mental burnout. All I've done so far is complain about programming being different. We'll get there, I promise, just be patient.

Over the time that I've been programming, I've seen the same couple of things happen to many programmers. I'll write about more of these problems in due time, but the one I want to talk about right now is over engineering the design of a program. Everyone is guilty of this. As a community we've developed acronyms like "you ain't gonna need it" (YAGNI) or mindsets like object-oriented programming. We had extreme programming, waterfall design, or agile software development. We have behavioral driven design, test driven development, and a near infinite supply of mottos and mindsets.

All of these, regardless of how effective they are, were all designed and created to try and simplify our field. If we have names for such concepts, we can theoretically more easily discuss them. If we have mottos we can remind ourselves how we should be working. If we have principles, then we have these nice little arrows on the walls that point us in the correct direction.

Every single one of these has a big old "but" attached to the end of them. Practically nothing in this entire field is objectively correct. However, there's one motto that's always held true. This of course is the K.I.S.S principle. Keep it simple, stupid. Also, I still haven't forgotten about mental burnout, I'm just taking the scenic route there.

The simplest solution to a problem is often a very damn good solution as well. However, like most things, I need to explain some of the caveats, and then tell you why the caveats are silly. When I say the simplest solution, I'm referring to the solution that most directly solves the problem you're dealing with. There's a lot of far better resources to explaining the simplicity concept. For example, the talk [Simple Made Easy](https://www.infoq.com/presentations/Simple-Made-Easy) by Rich Hickey, or you can read [this email](http://number-none.com/blow/john_carmack_on_inlined_code.html) from John Carmack about inlining code. 

Both resources have a similar theme. Being simple should be your highest priority. Simple solutions are typically smaller and more concise. A simple solution will require less setup and predisposed knowledge. There are less assumptions to be made, and hopefully there are less outputs you have to account for.

So, finally, what does all of this have to do with mental burnout? Let's just very quickly (I promise) discuss what it means to be mentally fatigued. Mental burnout is what I call it when my brain is just incapable of handling anymore information. 

There are a few ways that I've reached this state. It could be from working too long. I'm currently working at a startup, and it's not uncommon for me to be working more than 40 hours a week. Do anything for too long and you'll get tired. I've hit mental burnout due to too many things happening in a short amount of time. Contrary to popular belief, people can't actually multitask. If you try to, each of your tasks suffer an irrefutable dip in quality. Unfortunately, I have a tendency to think "this should only take a second". Even small context switches take a heavy toll on your brain. Just [Google it](https://www.google.com/#q=interrupted%20programmer&rct=j) and you'll find the same opinions everywhere. Unfortunately, these two ways are sometimes hard if not impossible to avoid. Which leaves me with the third way.

The third way to cause mental burnout is almost a combination of the first two ways. Allocating time on irrelevant problems is a guaranteed way to cause mental burnout. Having a code base that is unnecessarily complex or trying to heavily weigh design decisions are going to cause you more grief than you realize. Keep it simple, stupid.


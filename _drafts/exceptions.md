---
layout: post
title: Making exceptions useful
---

Exceptions are weird. It doesn't feel intuitive to use them, and when I do use them I get upset with the boilerplate try-catch blocks that I need to write with them. When do I need to catch specific exceptions? When should you throw an exception and when do you just return some kind of default value?

The more production code I write, the more I realize that boilerplate is just kind of a thing you have to deal with. It makes your code look ugly and repetitive. It's easy to make a mistake and miss something. It makes it hard to keep very small and concise functions because you're writing all these checks. Sometimes the checks will be more abundant than any actual business logic. Unfortunately, this is the world we live in. It's hard to predict all cases and even if you have 100% code coverage with tests, that just means all code paths were executed, it doesn't mean all possible inputs were tested. That would be madness.

So, what do we do then? I think we treat exceptions as a last resort. This helps keep the try-catch to a minimum, but it helps us define a value to exceptions. It's worth pointing out that different languages make this easier or harder. For example, in Java you can tag a method signature with the throws keyword which will enforce a caller of that function to write a try-catch. In C++, no such construct exists, so you might be calling a method or function that will throw an exception, and you have no idea and so you never try to catch anything and if something goes wrong, your program just blows up. Hopefully, your C++ code has something like Doxygen which lets you use the @throws marker in the comment, and maybe you can quickly see that it will throw something. If not, then all I can really recommend is that you investigate any and all methods you use. Anyways.

I like to have exceptions mean that something very bad went wrong. It's like an assertion. Throw an exception when you've hit a situation which should be impossible, or when the situation means that it would be impossible to execute the remaining code.

Say I have a function that searches through a vector of strings and is looking for some specific pattern. If we find that pattern, we return the string. If we don't find that pattern, should we throw an exception? No, that wouldn't really make a bunch of sense because the nature of our search is that we might legitimately not find anything. There's a different discussion to be had about whether or not returning an empty string is correct, but let's leave that for another day. The point is that it's entirely reasonable for the search to yield no results.

Now let's say that same function but the pattern that was passed in is blank. I contend that you should be checking your parameters and then you should throw an exception here. My understanding of the function is that we're trying to find some pattern. Since we're returning the string in the vector that matches the pattern, how would we match an empty string? Would that match everything, like a wildcard? Or would it match nothing? Would it match another empty string, in which case you would just return an empty string, and you've kind of wasted your time trying to match a pattern. I think this situation doesn't make any sense, and it would be critical if someone tried to use our function this way. Writing your code this way can especially help if the parameters that you call this function with, were actually from some external source. Say you make some HTTP request and you pass the results into this function. It would be a problem if you received blanks.

Exceptions should signal that something went very wrong. Knowing when to throw them is only one part of the problem even. You need to decide what exception to throw. Most standard libraries for languages have plenty of exceptions. In fact, some people argue that you should never need to write your own exceptions. I tend to agree with that mind set. I haven't come across a case where I really needed a custom exception, but to each their own.

- Talk about what to do with the catch
- Talk about throwing at the top or bottom of a function

---
title: "We got DevOps wrong: How the industry over corrected and how the pendulum is starting to swing back"
date: 2021-02-07
draft: true
---

There once was a time where almost all software was expected to run directly on
a user's computer. The user's computer needed to have certain characteristics
and properties. Sometimes software expected system libraries to be installed.
Sometimes software would statically link these libraries directly into the
distributed artifact. This is why popularity for things like Java with its
virtual machine based runtime were invented. The idea was that now your
applications would run anywhere without you having to worry about system
libraries in any way, shape, or form. Websites were sets of static pages and
had very little if any interactivity. It wasn't until the [early
2000s](https://en.wikipedia.org/wiki/Ajax_%28programming%29#History) when you
started to see websites really become interactive through the use of AJAX in
the browser. Instead of needing an entire virtual machine runtime just for your
binary, there was already a runtime available directly from where your websites
would run. Alas, if you wanted to have a backend server that would respond to
your AJAX requests, you still had to build some data center or find one that
would let you install your own rack with your own hardware. Most people found
it easier to continue distributing their software to work in an offline manor
with everything running on the user's computer. Your average developer just
didn't have the knowledge on how you'd actually go about securing hardware for
you to run your server software on.

Skip forward a little and now it is the mid 2000s. The cloud as we know it
today is young and practically non-existent. Tools for automating the
management of software delivery and infrastructure are all in their infancy or
have even yet to be imagined. [Puppet had its original release in
2005](https://en.wikipedia.org/wiki/Puppet_%28software%29). In 2006, AWS
[announced the availability of both S3 and
EC2](https://mediatemple.net/blog/cloud-hosting/brief-history-aws). Little did
we know that we were about to see one of the greatest eras of transformation in
the history of the software industry.

What's the significance of the creation of AJAX and EC2 you might ask? AJAX
gave websites a way to have interactive behavior while relying on the browser
to provide a runtime environment. When AJAX was first released, it was really
only the largest or most well funded companies that were able to really
capitalize. These were the only companies that had the operational expertise
that made deploying software to some company owned server easy enough to be
worth it. But that's where EC2 comes in. Amazon changed up the game when they
announced EC2. In the years leading up to EC2's public release, there were
services such as Linode that were available [as far back as
2003](https://en.wikipedia.org/wiki/Linode#History). However, EC2 did something
different. EC2 was entirely API driven right from the start. That's to say that
programmers who knew nothing about infrastructure and operations now had an
easy way of provisioning servers to run their applications on. This is the
start of what we now call "DevOps".

Before DevOps began, software that had a server component often was written and
administered by two different groups of people. You had the software engineers
and what were often referred to as system administrators. Software engineers
would write their application code and find a way to package that software up.
For example, with the Java world, you might create a `.jar` file. Java's
virtual machine promised that if you had the Java runtime environment installed
on a computer, that regardless of the underlying hardware, your jar file would
run consistently. Eventually virtual machines came around. The industry was
trying to figure out how to make it easy to run the server software. Writing
software was hard but running it was its own profession.

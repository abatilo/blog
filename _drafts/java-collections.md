---
layout: post
title: A primer to collections in Java
---

The Java standard library is large and covers a lot of the most common cases in computer science. The collections that are part of the standard library are tried and true, tested to be able to handle at a production scale. In this post I want to go over some of the common collections and to breakdown their characteristics, all so that I can get a really firm understanding of the available collections in the Java standard library.

# ArrayList
ArrayLists are a resizeable array. They take up a contiguous amount of memory which makes them cache coherent and everything in them can be accessed in constant time via an index. According to the Java spec, the details of how an ArrayList grow are not specified but must have an ammortized constant time. Common methods for resizing include just doubling the available capacity of the list everytime an item is added to it and the capacity limit has been hit or increasing the capacity for the collection by some percentage of its current size. When a resize occurs, it's possible that all elements need to be copied to another address in memory because there wasn't enough free memory at the current location. These are especially good if you know the size of a collection you plan to hold ahead of time since you can preallocate which means you wouldn't need to risk resizing the ArrayList over and over again.

# LinkedList
LinkedLists are also a dynamically sized collection. LinkedLists do not use contiguous memory, but instead each item in the list has an address for the next item in the list. This means that LinkedLists are not cache friendly as the different nodes in the list can be spread around in memory. This also means that finding an item in a LinkedList has a linear search time, because you'd have to go through every node in the LinkedList until you found the node that you wanted. LinkedLists are handy for cases where there might be many inserts, for example, while implementing an insertion sort. This is because you wouldn't have to copy and move every element over in order to insert a node, you just adjust the relevant nodes. If you keep a reference to the tail of a LinkedList, appending to the end of the list also happens in constant time with no worry about the overhead of resizing.

# HashSet
HashSets use a hashing algorithm in order to keep a set of items, where a set of items is a collection where every item is guaranteed to be unique. HashSets will not make any guarantee to the order of items. This also means that the order may change while you are adding items. HashSets check for the existence of an element in the set happens in what is typically constant time. However, in the Java implementation the HashSet is a wrapper around a HashMap. I'll talk about collisions in the HashMap description.

# LinkedHashSet
A LinkedHashSet is like a HashSet but the iteration order will remain constant because the HashSet is implemented with a doubly linked list.

# TreeSet
A TreeSet is a Set but keeps the iteration sorted using a Red-black tree and a defined Comparator. Red-black trees are self balancing which help keep the average time for all Set operations logarithmic. Since Red-black trees are binary trees, these trees can fit contiguously in memory which helps in cache coherency.

# PriorityQueue
A PriorityQueue is a collection where all of the items are kept in a specific order based on the defined Comparator. A great use a priority queue is in graph traversal algorithms. For example, when evaluating a sudoku board, using a PriorityQueue may help you navigate down a set of board states to help you find a solution more quickly. PriorityQueues are usually implemented via a min or max heap depending on the implementation.

# HashMap
HashMaps are data structures that allow you to access or store a value using some key or index type value, similar to the index you might pass into an array or an ArrayList. These allow for ammortized constant time retrieval and work on the principle that Hash's are unique to an input. In practice, HashMaps need to balance efficiency and correctness. In a purely conceptual sense of a HashMap, each possible input would always uniquely map to a different hash value. That is, each value you'd like to store will be uniquely representable by a single other value, which is typically easy to derive or can be associative. In practice however, having a hashing function that works that well will cost execution speed and will use more memory, so a compromise must be made. With that being said, HashMaps in Java work by creating some number of bins based on heuristics. The more elements in a HashMap, the more bins will need to be used in order to keep a relatively balanced load. Load balancing in HashMaps refers to when there are collisions in a hash value, items are added to an ArrayList of items with same hash values. If these ArrayLists get to become too large, then everything must be re-bucketed. An alternative is to maintain some tree structure like a TreeSet at each bucket, so that if there are collisions, the items in each bucket are sorted and it'll be less intensive to find an element in that bucket. Of course the overhead to that is that insertion might cause the tree to re-balance itself which in itself can be noticeable overhead.

# LinkedHashMap and TreeMap
LinkedHashMap and TreeMap are the same as their Set counterparts, of course with the difference being that the keys are associated to some value in the data structure.

# Hashtable
Hashtables work very similarly to HashMaps and Hashtables are sometimes the names of what a HashMap is in Java, but in other languages. Hashtable is by default synchronized which means it will on average perform worse than a HashMap, and Hashtables do not allow for any null values. These are not the only differences but are the big ones

# Honorable mentions
Some items are closely related to collections, even if they're not technically part of the collections package.

## Comparable vs Comparator
Comparable and Comparators come up usually in the context of sorting. Implementing the Comparable interface means that the object implementing it will be able to compare itself in relation to another item. A Comparator is the object that can take two items and compare them (usually by calling compareTo on two Comparable items).

## Vector
Vector is an object that feels like it belongs in Collections but is part of an older Java standard. Vector works very similarly to ArrayList, but Vector operations are all syncrhonized which means they're all thread safe but less performant because of the overhead of synchronizing. In some implementations the difference also lies in the way the memory is resized.

## java.util.concurrent
There's a set of concurrent versions of these collections. It's true that you could write synchronized versions of all the collections, but the big difference here is that the concurrent data structures have locks that happen at a much finer level. For example, locking with a Hashtable happens at the object level, which means that while a write is occuring, a read cannot occur as that entire object is locked. Concurrent collections will have a different lock for reads and a different lock for writes which means that even if a different thread is actively updating the internal data, a different thread can still read what data is available. This has the upside of being much more performant and generally more scalable, but it has the downside that the threads that are reading from the concurrent data structure can be out of data even if only by a few microseconds.

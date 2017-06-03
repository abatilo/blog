---
layout: post
title: Comparing SQL databases with NoSQL databases
---

These are otherwise called relational and non-relational databases, non-relational databases are becoming more and more popular in recent days. The typical opinion is that NoSQL databases are more scalable and in general work better for distributed systems, but I want to understand at a finer level what the difference is between them.

SQL stands for structured query language. There are many variations on it, and the term SQL itself describes the way you interact with the database. SQL in the broadest sense is a domain-specific language that's used for working with relational database management systems (RDBMS). SQL is known to be a declarative language, which in part means that even without understanding much about the specifics and implementations of a SQL derivative, it's incredibly easy to understand how to read SQL queries.

Relational databases are designed to work with tables, such that you can define relationships between the tables. Each table will have some schema associated with it that defines what columns are expected, what values might be valid in a given column, etc. You can even define whether or not it's valid for columns to be blank. The usage of SQL databases became popular when data was very meticulously designed before implementation, and can be expected to fit a specific mold. This mold helps you maintain consistency across all rows or elements in the database, and the relationships that you can model in a SQL database can make it easy to combine different types of data. SQL databases are vertically scalable, which means that they do well with sitting on an increasingly powerful server to meet demand. NoSQL databases scale horizontally, which means it is easier to maintain a single database across a cluster of servers, which is also part of why people consider them to be more scalable for distributed systems. Sometimes NoSQL databases are even called distributed databases.

SQL databases are great for working with complex constraints across your data. You can conditionalize and filter data using your query, while NoSQL databases are not built to be so specific and transactional. NoSQL databases are purposefully less featured and sometimes considered less powerful, so that it can operate with much less overhead. When writing a lot to a SQL database, there's a lot of overhead that can occur when the relationships between tables need to be updated. This is nice in that the SQL databases can guarantee atomicity, but NoSQL databases have none of this. Order of insert might not matter as much in a problem where you're using a NoSQL database. For example, if your goal is to maintain an aggregate count of events, the order in which they happen doesn't matter. If you are working on some banking application, the order that transactions happen makes a big difference.

NoSQL databases always seem to abuse one of the core principles of a SQL database in favor of something else. SQL databases tend to follow the ACID princples. Atomicity, Consistency, Isolation, and Durability. For example, MongoDB will drop atomicity of operations in favor of faster writes with shorter locks. Dropping consistency will allow Cassandra databases to scale horizontally more easily, as you are giving up guaranteed replication across all the databases. Depending on which server you get, you might get different results.

- ACID vs CAP

In practice, SQL and NoSQL databases will always solve different problems. Neither one is necessarily any better than the other, it's all about the tradeoffs and the specific problem that you're trying to solve. NoSQL databases have the reputation of being more scalable and more friendly for large datasets, but in reality, SQL databases can handle large datasets and scale well too. It just depends on the types of operations you want and what kind of tradeoffs you're willing tomake.

For more:
https://softwareengineering.stackexchange.com/questions/194340/why-are-nosql-databases-more-scalable-than-sql

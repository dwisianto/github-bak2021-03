# DynamoDb

[Source](https://www.javacodegeeks.com/2017/10/amazon-dynamodb-tutorial.html)

EDITORIAL NOTE: Amazon DynamoDB is a fully managed proprietary NoSQL database services that is offered by Amazon.com as part of the Amazon Web Services portfolio.

DynamoDB exposes a similar data model and derives its name from Dynamo, but has a different underlying implementation. Dynamo had a multi-master design requiring the client to resolve version conflicts and DynamoDB uses synchronous replication across multiple datacenters for high durability and availability.

DynamoDB differs from other Amazon services by allowing developers to purchase a service based on throughput, rather than storage. If Auto Scaling is enabled, then the database will scale automatically. (Source: Wikipedia)

Now, we provide a comprehensive guide so that you can develop your own Amazon DynamoDB based applications. We cover a wide range of topics, from Java Integration and Best Practices, to Backup and Pricing. With this guide, you will be able to get your own projects up and running in minimum time. Enjoy!


# Introduction

Amazon DynamoDB is a NoSQL database service offered by Amazon as part of its Amazon Web Service (AWS) portfolio. It supports storing, querying, and updating documents and offers SDKs for different programming languages.

DynamoDB supports a key-value data model. Each item (row) in a table is a key-value pair. The primary key is the only required attribute for an item and uniquely identifies each item. Beyond that, DynamoDB is schema-less, i.e. each item can have any number of attributes and the types of the attributes can vary from item to item. One cannot only query the primary key but it is possible to setup secondary indexes (global and local) to query other attributes.

These secondary indexes can be created at any time, meaning that you do not have to define them when you create the table.

As DynamoDB uses the AWS infrastructure, it can scale automatically and therewith handle higher throughput rates and increase the available storage at runtime. The AWS infrastructure also enables high availability and data replication
between different regions in order to serve data more locally. 

# Concepts

## Tables, Items, and Attributes

Tables are used to store data and represent a collection of items. The following figure depicts a table with two items. Each item has a primary key (here: GeekId) and an attribute called “Name”.

## Primary Keys

The primary key identifies each item within a table uniquely. DynamoDB supports two different kinds of primary keys:

    Partition key / Hash attribute
    Partition key and sort key / Hash and range attribute

The first type is a scalar value, i.e. an attribute that can hold only a single value of the type’s string, number and binary. DynamoDB computes a hash over the attribute’s value in order to determine the partition in which the corresponding item will be stored. A table is divided into different partitions, each partition stores a subset of all values. This way DynamoDB can work concurrently on different partitions and divide larger tasks into smaller ones.

The second type of primary key consists of two values: a partition key and a sort key. It therefore is a kind of compound key. Like in the first case, the partition key is used to determine the partition the current item is stored in. In contrast to a table with only a partition key, the items in a table with an additional sort key are stored in sorted order by the sort key. This way of storing the data provides more flexibility in querying the data as range queries can be performed more efficiently. If you would store for example the projects of an employee in one table and define the project as sort key, DynamoDB can serve queries that should deliver a subset of projects of an employee more easily. In such kind of tables, two items with the same partition key can exist, but they must have different sort keys. The tuple of (partition key / sort key) must be unique for each item.

As the partition of an item is computed by applying a hash function to the partition key, the partition key is often called “hash attribute”. In addition, because the sort key eases range queries, it often called “range attribute”.

## Secondary Indexes

Often it is required to query data not only by its primary key, but additionally also by other attributes. To speed up such kind of queries, indexes can be created that contain a subset of attributes of the base table. These indexes can then be queried much faster.

DynamoDB distinguishes two different kinds of secondary indexes:
- Global secondary index
- Local secondary index

A global secondary index has a partition key and sort key that can be different from the one of the base table. It is called a “global” index because queries on this index can span all the data in the base table.

In contrast to global secondary indexes, a local secondary index has the same partition key as the base table but a different sort key. As base table and index have the same partition key, all partitions of the base table have a corresponding partition in the index. Hence, the partitions of the index are “local” to the base table’s partitions.

When deciding whether an index should be global or local, one must consider a few aspects. While local indexes can only have compound keys that consist of primary key and sort key, a global index can also have a primary key that consists only of a partition key. The partition key of the global index can be different from the one of the local index. Unfortunately the size of all local indexes is limited (currently 10GB), whereas global indexes do not have any size restriction.

Another shortcoming of local indexes is that you can only create them when its base table is created. Creating a local index when the base table has already been created is not supported. This is different to global indexes, which can be created and deleted at any time. On the other hand, local indexes have the advantage that they provide strong consistency, while global indexes only support eventual consistency. Beyond that, local indexes allow us to fetch data from the base table during queries, which is not supported for global indexes.

The number of indexes per table is limited to five for global and local indexes likewise. When deleting a table, all its indexes are also removed.

## Streams

An interesting feature of DynamoDB are streams. DynamoDB creates a new record and inserts it into the stream in case one of the following events happens:

    A new item is added to the table.
    An item in the table is updated.
    An item is removed from the table.

The record contains next to metadata about the event like its timestamp also a copy of the item at the moment of the event. In case of updates, it even contains an image before and after the update. If the stream is enabled on table, it can be used to implement triggers. This way you can perform an action in case one of the events above happens. One can imagine to send for example an email if a new order is stored in a table or to order new articles in case it gets out of stock. This feature can also be used to implement data replication or what is known in other database system as materialized views.

Records in a stream are removed automatically after 24 hours.




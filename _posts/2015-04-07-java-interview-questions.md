---
layout: post
title: "Java Interview Questions"
date: 2015-04-07
comments: false
---

# Guides for mastering Java to the edge

It includes more important stuffs like SQL and other frameworks

In any technology say Java or some other language, it is more important and valuable to know the language fundamentals thoroughly (OOP concepts, interfaces, class, objects, threading, etc.) rather than specific frameworks or syntax. It's always easy to quickly learn new technologies when you master the fundamentals.

Knowledge expectation changes based on the profile. This document is divided into 3 profiles: 
- College Graduate,
- Experienced Java Developer,
- Experienced Java Web Developer.

## 7 Things a College graduate must know to get a Java developer job

If you are a college graduate with no job experience then as a Java developer you need to understand the following basic things.

- How Java Virtual Machine works? e.g. (Platform Independence, Garbage Collection, class files etc).
- What are the Object Oriented Programming Concepts implemented in Java?
- Multi-threading.
- Java Collection framework.
- Understanding of data types and few java.lang classes like String, Math, System, java.io stream concepts.
- Understand concept of Swing/AWT event based programming.
- Servlets & JSP concepts.

## 9 Things an experienced Java Developer must know to thrive

If you are a experienced professional then as a Java developer you may also need to understand the following basic things in addition to the ones listed above.

- Understand design patterns and its usage in Java.
- Improvements on language from major version changes (Generics, Annotations, Enums, ...).
- Coding Conventions.
- Build tool (Ant) or Project Management Tool (Maven).
- Version control System like CVS/SVN/Perforce/Clearcase.
- Apache Commons Libraries & few other common open source libraries.
- Continuous Integration Tools and Unit testing.
- Fundamental understanding of XML.
- Understand Business layer frameworks - like Spring.

## 4 Things a Java Web Developer (JEE) Developer must know

If you are a experienced professional working on Web based development then as a JEE developer you also need to understand the following basic things in addition to the ones (7+9) listed above.

- Understanding of MVC Frameworks - Open source J2EE frameworks like - Struts, Spring MVC, Tapestry.
- Fundamental understanding of Web Services.
- Good understanding of Web/Application server like Tomcat, Glassfish, WebLogic, WebSphere, Jetty, etc.
- Unix environment - A working knowledge of Unix environment can be beneficial as most of the Java servers are hosted on Unix based environment in production.

Looking at the list of things it really feels difficult for a person to know each and everything in depth. As I already said it is more important and valuable to know the language fundamentals thoroughly and rest can be learned quickly when required. 

# First Part - Java related questions

##Core JAVA

What is the use of the final keyword?
What is a transient variable?
What is synchronized used for?
What is a volatile variable?
What is a static variable?
What is difference between an abstract class and interface?
What is the difference between equals() and ==?
What is an anonymous class?
What is the difference between a static and a non-static inner class?
If you want a property to be externally readable and settable, why might you make it private and supply public set and get methods, instead of simply making the property itself public?
Describe the meaning of the private, public, and protected keywords
What is immutable object in Java? Can you change values of a immutable object?
How to create an immutable object in Java? Does all property of immutable object needs to be final?
What is difference between String, StringBuffer and StringBuilder? When to use them?
Why String class is final or immutable?
Is Java Pass by Reference or Pass by Value?
What is OutOfMemoryError in java? How to deal with java.lang.OutOfMemoryError error?
What is the use of the finally block? Is finally block in Java guaranteed to be called? When finally block is NOT called?
Why there are two Date classes; one in java.util package and another in java.sql?
What is Marker interface? How is it used in Java?
Why main() in java is declared as public static void main? What if the main method is declared as private?

## Modeling

What is encapsulation, and why is it important?
Could you give an example of polymorphism?
What problems can arise from using inheritance where you should use composition or association?
What are the tradeoffs between normalized and denormalized structures? How do you decide what level of normalization to use?

## JDBC

What are available drivers in JDBC?
What are the types of statements in JDBC?
What is a stored procedure? How to call stored procedure using JDBC API?
What is Connection pooling? What are the advantages of using a connection pool?
How to do database connection using JDBC thin driver ?
What does Class.forName() method do?
Which one will you use Statement or PreparedStatement? Or Which one to use when (Statement/PreparedStatement)? Compare PreparedStatement vs Statement.
What does setAutoCommit(false) do?
What are database warnings and How can I handle database warnings in JDBC?
What is Metadata and why should I use it?
What is RowSet? or What is the difference between RowSet and ResultSet? or Why do we need RowSet? or What are the advantages of using RowSet over ResultSet?
What is a connected RowSet? or What is the difference between connected RowSet and disconnected RowSet? or Connected vs Disconnected RowSet, which one should I use and when?
What is the benefit of having JdbcRowSet implementation? Why do we need a JdbcRowSet like wrapper around ResultSet?

## Collections

What is Java Collections API?
What is the difference between a List and a Set?
What is the difference between a Comparable and a Comparator interface?
Are there any restrictions on what types of objects you can use as a key in a HashMap?
What is an Iterator?
What is the difference between java.util.Iterator and java.util.ListIterator?
What is HashMap and Map?
Difference between HashMap and HashTable? Compare Hashtable vs HashMap?
What does synchronized means in Hashtable context?
What is fail-fast property?
Why doesn't Collection extend Cloneable and Serializable?
How can we make Hashmap synchronized?
Where will you use Hashtable and where will you use HashMap?
Difference between Vector and ArrayList? What is the Vector class?
What is the Difference between Enumeration and Iterator interface?
Why Java Vector class is considered obsolete or unofficially deprecated? or Why should I always use ArrayList instead of Vector?
What is an enumeration?
What is the difference between Enumeration and Iterator?
Where will you use Vector and where will you use ArrayList?
What is the importance of hashCode() and equals() methods? How they are used in Java?
What is the difference between Sorting performance of Arrays.sort() vs Collections.sort() ? Which one is faster? Which one to use and when?
What is java.util.concurrent BlockingQueue? How it can be used?
Set & List interface extend Collection, so Why doesn't Map interface extend Collection?
Which implementation of the List interface provides for the fastest insertion of a new element into the middle of the list?
What is the difference between ArrayList and LinkedList? (ArrayList vs LinkedList.)
Where will you use ArrayList and Where will you use LinkedList? Or Which one to use when (ArrayList / LinkedList).
What is performance of various Java collection implementations/algorithms? What is Big 'O' notation for each of them ?
Performance of Map interface implementations: Hashtable, HashMap, TreeMap, LinkedHashMap
Performance of Set interface implementations: HashSet, TreeSet, LinkedHashSet
Performance of List interface implementations: LinkedList, ArrayList

## Exceptions

Must all exceptions and errors be declared? Why?
Does the order of the catch blocks matter? Why?
When is the finally statement of the try block executed?

## Threading

What is synchronization in respect to multithreading in Java?
Explain different way of using thread?
What is the difference between Thread.start() & Thread.run() method?
Why do we need run() & start() method both. Can we achieve it with only run method?
What is ThreadLocal class? How can it be used?
When InvalidMonitorStateException is thrown? Why?
What is the difference between sleep(), suspend() and wait() ?
What happens when I make a static method as synchronized?
Can a thread call a non-synchronized instance method of an Object when a synchronized method is being executed ?
Can two threads call two different synchronized instance methods of an Object?
What is a deadlock?
What is Starvation? and What is a Livelock?
How to find a deadlock has occurred in Java? How to detect a Deadlock in Java?
What is immutable object? How does it help in writing concurrent application?
How will you take thread dump in Java? How will you analyze Thread dump?
What is a thread leak? What does it mean in Java?
How can I trace whether the application has a thread leak?
What is thread pool? Why should we use thread pools?
Can we synchronize the run method? If yes then what will be the behavior?
Can we synchronize the constructor of a Java Class?
What is difference between multithreading and multiprocessing?
How would you create a thread?
What is the difference between when the synchronized keyword is applied to a static method or to a non-static method?
What is the difference between wait() and sleep()?
Could you describe race conditions, deadlocks, and lock starvation, and describe strategies for preventing them?

## Serialization

Define Serialization? What do you mean by Serialization in Java?
Why is Serialization required? What is the need to Serialize?
What is the Difference between Externalizable and Serializable Interfaces?
When will you use Serializable or Externalizable interface? and why?
What are the ways to speed up Object Serialization? How to improve Serialization performance?
What is a Serial Version UID (serialVersionUID) and why should I use it? How to generate one?
What would happen if the SerialVersionUID of an object is not defined?
Does setting the serialVersionUID class field improve Java serialization performance?
What are the alternatives to Serialization? If Serialization is not used, is it possible to persist or transfer an object using any other approach?
What are transient variables? What role do they play in Serialization process?
Why does serialization NOT save the value of static class attributes? Why static variables are not serialized?
How to Serialize a collection in java? How to serialize a ArrayList, Hashmap or Hashset object in Java?
Is it possible to customize the serialization process? How can we customize the Serialization process?
How can a subclass of Serializable superclass avoid serialization? If serializable interface is implemented by the superclass of a class, how can the serialization of the class be avoided?
What changes are compatible and incompatible to the mechanism of java Serialization?
How do you make something serializable?
Are static variables saved as part of serialization?
What will be the value of transient variables after deserialization?
What happens when a serializable object containing a reference to a non-serializable object is serialized?

## Generics

What are generics and when would you use them?
What are the alternatives? What are the advantages / disadvantages?
What does this declaration mean? ``` Collection<?> generic = ... ``` ?
Regarding declaration in previous question. Is this statement valid generic.add(new String("")); ?
What is an upper bound parameter? Give an example, and explain why this feature exists.

## Annotations

What are annotations? What are they used for?
Where can you use annotations?
Name a couple of annotations you have used and explain how.
How do you create an annotation?

## Reflection

What is Reflection, and when would you use it?
Name some of the classes in Reflection API.
Can Reflection be used to know the type of a generified object?
Can Reflection be used to know the annotation applied to a Class, Method or Property?

## J2EE

What is the purpose of the web.xml file?
What is the structure of a WAR file?
Name the services provided by a container?
What is the difference between Session Bean and Entity Bean?
What is a servlet?

## JSP

Explain the life cycle methods of a JSP?
What is the relationship between JSPs and Servlets?
What are the elements <%, <%= and <%@ used for?
What is the difference between a forward and a redirect?
What are implicit objects? Can you list them?
Can static objects be declared in a scriptlet? Why or why not?

## Web Services

What is a WSDL?
Describe some of the differences between SOAP web service and RESTfull web service.
What is JAXB and JAXP? Where are they used?

## Security

What are the differences between http and https?
Describe some common ways of attacking websites, and how to defend against them.

## Garbage Collector

When does an object become eligible for garbage collection?
Can memory leaks occur in Java?
What is the meaning of “GC Overhead Limit Exceeded”?
What is the purpose of overriding the finalize() method?

## Classpath

Why Java uses Classpath parameter or environment variables?
When does Java read values of Classpath environment variable?
How to set Java Classpath on Windows, Unix, Linux and Mac?
How do I check the CLASSPATH variable is set in my machine?
How to set Multiple Jar Files in Java Classpath?
What is the difference between NoClassDefFoundError and ClassNotFoundException? When NoClassDefFoundError and ClassNotFoundException are thrown?
How can we include Jar within a Jar in java classpath?
How to read a file from CLASSPATH in java?
How to find which jar file is being used by Java run-time?
How to find the load location of a Java class file at run-time?
How Java handles Two classes with same name in classpath
How to Add A Jar File To Java Load Path At Run Time
Why calling System.setProperty() does not affect the classpath at run-time?
How to Add A Jar File To Java System Classpath At Run-time?
How to get a list of resources from a directory in Java classpath?

## Java Architecture Scalability

What Do You Mean By High Availability?
What Is Scalability?
What Is A Cluster?
Why Do You Need Clustering?
What Is Middle Tier Clustering?
What Is Load Balancing?
What Is Sticky Session (session Affinity) Load Balancing? What Do You Mean By 'session Affinity'?
Why Sticky Session?
How It Is Done?
What Are The Issues With Sticky Session?
What Is IP Address Affinity Technique For Load Balancing?
What Is Failover?
What Is Session Replication?
What Does Distributable Tag Means In Web.xml ?
What Are The Requirements For Making A Java EE Application Session Replication Enabled?
What Are Different Mechanism Of Session Replication?
What Is CAP Theorem?
What Is Sharding?
What Is ACID Property Of A System?
What Is BASE Property Of A System?
What Do You Mean By Eventual Consistency? What Does Eventually Consistent Mean?
What Is Shared Nothing Architecture? How Does It Scale?
How Do You Update A Live Heavy Traffic Site With Minimum Or Zero Down Time?

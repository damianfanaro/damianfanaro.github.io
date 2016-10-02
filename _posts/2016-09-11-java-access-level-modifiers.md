---
layout: post
title: "Java Access Level Modifiers"
date: 2016-09-11
comments: true
category: programming
tags: [java]
description: A review of Java visibility modifiers - public, protected, private and package-private.
---

In the Java programming language we can assign different levels of accessibility to every member of a class (top-level class, variables, methods). This is an important part of the language because it allows us to declare access to objects and classes in a concise and restrictive way.

Java provides 4 accessibility levels:

1. `private`: the more restrictive. A member declared as private can only be accessed within its own class.
2. `package-private` (no explicit modifier): only the classes within the same package have access to members declared as package-private.
3. `protected`: as with package-private and, in addition, subclasses of the class containing protected members are able to access this members.
4. `public`: the less restrictive. A member declared as public is visible to all classes everywhere.

Let's see the following example to better understand accessibility levels:

``` java
package com.accessibility.levels.employee;

public class Employee {
	
	private String name;
	public String surname;
	int age;
	protected String department;

	public Employee(String name, String surname, int age, String department) {
		this.name = name;
		this.surname = surname;
		this.age = age;
		this.department = department;
	}

	// public getters and setters

}
```

``` java
package com.accessibility.levels;

public class Demo extends Employee {

	public Demo(String name, String surname, int age, String department) {
		super(name, surname, age, department);
	}
	
	public static void main(String[] args) {
		Demo employee = new Demo("John", "Doe", 30, "Marketing");
		
		System.out.println(employee.name); // COMPILATION ERROR. Member 'name' is private (we use its getter method to access it).
		System.out.println(employee.surname); // It's correct but not recommended since we are binded to a specific implementation.
		System.out.println(employee.age); // COMPILATION ERROR. Member 'age' is package-private and cannot be accessed from another package.
		System.out.println(employee.department); // As with 'surname'. One should use its getter method to access it.
	}

}
```

We can combine and create more scenarios to explain accessibility levels, but rather it's worth to highlight why this is important when we are developing software in Java. The idea of this is to follow the principles of _information hiding_ and _encapsulation_ in such a way that only the communication between modules occurs through their APIs. Those principles can help us to make good software design.

For more information about this I recommend the book **Effective Java (2nd Edition)** of Joshua Bloch, item 13.  
---
layout: post
title: "Spring - Questions and Anwsers"
date: 2015-04-08
comments: true
category: programming
tags: [spring, mvc, web-frameworks]
---

El presente artículo es una compaginación de preguntas y respuestas que generalmente se toman en las entrevistas de trabajo y que cubre varios aspectos fundamentales del framework. Para más detalle siempre es recomendable consultar la [documentación oficial](http://docs.spring.io/spring/docs/current/spring-framework-reference/html/).

El post original se puede ver [aquí](http://www.javacodegeeks.com/2014/05/spring-interview-questions-and-answers.html).

## Spring: Nociones generales

> Qué es Spring?

Spring es un framework de desarrollo de código abierto para aplicaciones Java Enterprise. Las características del core de Spring pueden usarse para desarrollar cualquier aplicación Java, pero hay extensiones para crear aplicaciones sobre el tope de la plataforma Java EE. El objetivo del framework es hacer el desarrollo en Java EE más fácil y promover buenas practicas de coding mediante un modelo de programación basado en POJO's (del inglés, Plain Old Java Object).

> Cuáles son sus beneficios?

- **Lightweight:** Spring es liviano en términos de tamaño y transparencia. La versión básica pesa alrededor de 2MB.
- **Inversion of control (IOC):** El bajo acoplamiento es alcanzado en Spring mediante la técnica de inversión de control. Los objetos exponen sus dependencias en vez de crearlas o buscar los objetos dependientes.
- **Aspect oriented (AOP):** Spring soporta la programación orientada a aspectos y separa la lógica de negocios de los servicios del sistema.
- **Container:** Spring contiene y administra el ciclo de vida y configuración de los objetos de la aplicación.
- **MVC Framework:** El modulo web de Spring es una herramienta bien diseñada y adoptada que sigue el modelo MVC (Model View Controller), el cual provee una gran alternativa para el desarrollo de aplicaciones web.
- **Transaction Management:** Spring provee una consistente interfaz para la administración de transacciones que puede escalar para transacciones locales o transacciones globales (JTA).
- **Exception Handling:** Spring provee una conveniente API para traducir excepciones específicas de una tecnología (arrojadas por JDBC, Hibernate, JDO, etc.) en consistentes excepciones sin chequear.

> **Which are the Spring framework modules?**

	The basic modules of the Spring framework are:
	- Core module
	- Bean module
	- Context module
	- Expression Language module
	- JDBC module
	- ORM module
	- OXM module
	- Java Messaging Service(JMS) module
	- Transaction module
	- Web module
	- Web-Servlet module
	- Web-Struts module
	- Web-Portlet module

> **Explain the Core Container (Application context) module:** This is the basic Spring module, which provides the fundamental functionality of the Spring framework. BeanFactory is the heart of any spring-based application. Spring framework was built on the top of this module, which makes the Spring container.

> **BeanFactory – BeanFactory implementation example:** A BeanFactory is an implementation of the factory pattern that applies Inversion of Control to separate the application’s configuration and dependencies from the actual application code.
The most commonly used BeanFactory implementation is the XmlBeanFactory class.

> **XMLBeanFactory:** The most useful one is org.springframework.beans.factory.xml.XmlBeanFactory, which loads its beans based on the definitions contained in an XML file. This container reads the configuration metadata from an XML file and uses it to create a fully configured system or application.

> **Explain the AOP module:** The AOP module is used for developing aspects for our Spring-enabled application. Much of the support has been provided by the AOP Alliance in order to ensure the interoperability between Spring and other AOP frameworks. This module also introduces metadata programming to Spring.

> **Explain the JDBC abstraction and DAO module:** With the JDBC abstraction and DAO module we can be sure that we keep up the database code clean and simple, and prevent problems that result from a failure to close database resources. It provides a layer of meaningful exceptions on top of the error messages given by several database servers. It also makes use of Spring’s AOP module to provide transaction management services for objects in a Spring application.

> **Explain the object/relational mapping integration module:** Spring also supports for using of an object/relational mapping (ORM) tool over straight JDBC by providing the ORM module. Spring provides support to tie into several popular ORM frameworks, including Hibernate, JDO, and iBATIS SQL Maps. Spring’s transaction management supports each of these ORM frameworks as well as JDBC.

> **Explain the web module:** The Spring web module is built on the application context module, providing a context that is appropriate for web-based applications. This module also contains support for several web-oriented tasks such as transparently handling multipart requests for file uploads and programmatic binding of request parameters to your business objects. It also contains integration support with Jakarta Struts.

> **Explain the Spring MVC module:** MVC framework is provided by Spring for building web applications. Spring can easily be integrated with other MVC frameworks, but Spring’s MVC framework is a better choice, since it uses IoC to provide for a clean separation of controller logic from business objects. With Spring MVC you can declaratively bind request parameters to your business objects.

> **Spring configuration file:** Spring configuration file is an XML file. This file contains the classes information and describes how these classes are configured and introduced to each other.

> **What is Spring IoC container?** The Spring IoC is responsible for creating the objects,managing them (with dependency injection (DI)), wiring them together, configuring them, as also managing their complete lifecycle.

> **What are the benefits of IOC?** IOC or dependency injection minimizes the amount of code in an application. It makes easy to test applications, since no singletons or JNDI lookup mechanisms are required in unit tests. Loose coupling is promoted with minimal effort and least intrusive mechanism. IOC containers support eager instantiation and lazy loading of services.

> **What are the common implementations of the ApplicationContext?** 
	- The FileSystemXmlApplicationContext container loads the definitions of the beans from an XML file. The full path of the XML bean configuration file must be provided to the constructor.
	- The ClassPathXmlApplicationContext container also loads the definitions of the beans from an XML file. Here, you need to set CLASSPATH properly because this container will look bean configuration XML file in CLASSPATH.
	- The WebXmlApplicationContext: container loads the XML file with definitions of all beans from within a web application.

> **What is the difference between Bean Factory and ApplicationContext?** Application contexts provide a means for resolving text messages, a generic way to load file resources (such as images), they can publish events to beans that are registered as listeners. In addition, operations on the container or beans in the container, which have to be handled in a programmatic fashion with a bean factory, can be handled declaratively in an application context. The application context implements MessageSource, an interface used to obtain localized messages, with the actual implementation being pluggable.

> **What does a Spring application look like?** 
	- An interface that defines the functions.
	- The implementation that contains properties, its setter and getter methods, functions etc.,
	- Spring AOP
	- The Spring configuration XML file.
	- Client program that uses the function
 
## Dependency Injection

1. **What is Dependency Injection in Spring?** Dependency Injection, an aspect of Inversion of Control (IoC), is a general concept, and it can be expressed in many different ways.This concept says that you do not create your objects but describe how they should be created. You don’t directly connect your components and services together in code but describe which services are needed by which components in a configuration file. A container (the IOC container) is then responsible for hooking it all up.
2. **What are the different types of IoC (dependency injection)?**
	- **Constructor-based dependency injection:** Constructor-based DI is accomplished when the container invokes a class constructor with a number of arguments, each representing a dependency on other class.
	- **Setter-based dependency injection:** Setter-based DI is accomplished by the container calling setter methods on your beans after invoking a no-argument constructor or no-argument static factory method to instantiate your bean.
3. **Which DI would you suggest Constructor-based or setter-based DI?** You can use both Constructor-based and Setter-based Dependency Injection. The best solution is using constructor arguments for mandatory dependencies and setters for optional dependencies.
 
## Spring Beans

1. **What are Spring beans?** The Spring Beans are Java Objects that form the backbone of a Spring application. They are instantiated, assembled, and managed by the Spring IoC container. These beans are created with the configuration metadata that is supplied to the container, for example, in the form of XML <bean/> definitions.
Beans defined in spring framework are singleton beans. There is an attribute in bean tag named "singleton" if specified true then bean becomes singleton and if set to false then the bean becomes a prototype bean. By default it is set to true. So, all the beans in spring framework are by default singleton beans.
2. **What does a Spring Bean definition contain?** A Spring Bean definition contains all configuration metadata which is needed for the container to know how to create a bean, its lifecycle details and its dependencies.
3. **How do you provide configuration metadata to the Spring Container?** 
	There are three important methods to provide configuration metadata to the Spring Container:
	- XML based configuration file.
	- Annotation-based configuration
	- Java-based configuration
4. **How do you define the scope of a bean?** When defining a <bean> in Spring, we can also declare a scope for the bean. It can be defined through the scope attribute in the bean definition. For example, when Spring has to produce a new bean instance each time one is needed, the bean’s scope attribute to be prototype. On the other hand, when the same instance of a bean must be returned by Spring every time it is needed, the the bean scope attribute must be set to singleton.
5. **Explain the bean scopes supported by Spring:**
	There are five scoped provided by the Spring Framework that supports the following:
	- In singleton scope, Spring scopes the bean definition to a single instance per Spring IoC container.
	- In prototype scope, a single bean definition has any number of object instances.
	- In request scope, a bean is defined to an HTTP request. This scope is valid only in a web-aware Spring ApplicationContext.
	- In session scope, a bean definition is scoped to an HTTP session. This scope is also valid only in a web-aware Spring ApplicationContext.
	- In global-session scope, a bean definition is scoped to a global HTTP session. This is also a case used in a web-aware Spring ApplicationContext.
	- _The default scope of a Spring Bean is Singleton._
6. **Are Singleton beans thread safe in Spring Framework?** No, singleton beans are not thread-safe in Spring framework.
7. **Explain Bean lifecycle in Spring framework:**
	- The spring container finds the bean’s definition from the XML file and instantiates the bean.
	- Spring populates all of the properties as specified in the bean definition (DI).
	- If the bean implements BeanNameAware interface, spring passes the bean’s id to setBeanName() method.
	- If Bean implements BeanFactoryAware interface, spring passes the beanfactory to setBeanFactory() method.
	- If there are any bean BeanPostProcessors associated with the bean, Spring calls postProcesserBeforeInitialization() method.
	- If the bean implements IntializingBean, its afterPropertySet() method is called. If the bean has init method declaration, the specified initialization method is called.
	- If there are any BeanPostProcessors associated with the bean, their postProcessAfterInitialization() methods will be called.
	- If the bean implements DisposableBean, it will call the destroy() method.
8. **Which are the important beans lifecycle methods? Can you override them?** There are two important bean lifecycle methods. The first one is setup which is called when the bean is loaded in to the container. The second method is the teardown method which is called when the bean is unloaded from the container.
The bean tag has two important attributes (init-method and destroy-method) with which you can define your own custom initialization and destroy methods. There are also the correspondive annotations(@PostConstruct and @PreDestroy).
9. **What are inner beans in Spring?** When a bean is only used as a property of another bean it can be declared as an inner bean. Spring’s XML-based configuration metadata provides the use of <bean/> element inside the <property/> or <constructor-arg/> elements of a bean definition, in order to define the so-called inner bean. Inner beans are always anonymous and they are always scoped as prototypes.
10. **How can you inject a Java Collection in Spring?**
	Spring offers the following types of collection configuration elements:
	- The <list> type is used for injecting a list of values, in the case that duplicates are allowed.
	- The <set> type is used for wiring a set of values but without any duplicates.
	- The <map> type is used to inject a collection of name-value pairs where name and value can be of any type.
	- The <props> type can be used to inject a collection of name-value pairs where the name and value are both Strings.
11. **What is bean wiring?** Wiring, or else bean wiring is the case when beans are combined together within the Spring container. When wiring beans, the Spring container needs to know what beans are needed and how the container should use dependency injection to tie them together.
12. **What is bean auto wiring?** The Spring container is able to autowire relationships between collaborating beans. This means that it is possible to automatically let Spring resolve collaborators (other beans) for a bean by inspecting the contents of the BeanFactory without using <constructor-arg> and <property> elements.
13. **Explain different modes of auto wiring?**
	The autowiring functionality has five modes which can be used to instruct Spring container to use autowiring for dependency injection:
	- no: This is default setting. Explicit bean reference should be used for wiring.
	- byName: When autowiring byName, the Spring container looks at the properties of the beans on which autowire attribute is set to byName in the XML configuration file. It then tries to match and wire its properties with the beans defined by the same names in the configuration file.
	- byType: When autowiring by datatype, the Spring container looks at the properties of the beans on which autowire attribute is set to byType in the XML configuration file. It then tries to match and wire a property if its type matches with exactly one of the beans name in configuration file. If more than one such beans exist, a fatal exception is thrown.
	- constructor: This mode is similar to byType, but type applies to constructor arguments. If there is not exactly one bean of the constructor argument type in the container, a fatal error is raised.
	- autodetect: Spring first tries to wire using autowire by constructor, if it does not work, Spring tries to autowire by byType.
14. **Are there limitations with autowiring?**
	Limitations of autowiring are:
	- **Overriding:** You can still specify dependencies using <constructor-arg> and <property> settings which will always override autowiring.
	- **Primitive data types:** You cannot autowire simple properties such as primitives, Strings, and Classes.
	- **Confusing nature:** Autowiring is less exact than explicit wiring, so if possible prefer using explicit wiring.
15. **Can you inject null and empty string values in Spring?** Yes, you can.
 
## Spring Annotations

1. **What is Spring Java-Based Configuration? Give some annotation example.** Java based configuration option enables you to write most of your Spring configuration without XML but with the help of few Java-based annotations.
An example is the @Configuration annotation, that indicates that the class can be used by the Spring IoC container as a source of bean definitions. Another example is the@Bean annotated method that will return an object that should be registered as a bean in the Spring application context.
2. **What is Annotation-based container configuration?** An alternative to XML setups is provided by annotation-based configuration which relies on the bytecode metadata for wiring up components instead of angle-bracket declarations. Instead of using XML to describe a bean wiring, the developer moves the configuration into the component class itself by using annotations on the relevant class, method, or field declaration.
3. **How do you turn on annotation wiring?** Annotation wiring is not turned on in the Spring container by default. In order to use annotation based wiring we must enable it in our Spring configuration file by configuring <context:annotation-config/> element.
4. **@Required annotation:** This annotation simply indicates that the affected bean property must be populated at configuration time, through an explicit property value in a bean definition or through autowiring. The container throws BeanInitializationException if the affected bean property has not been populated.
5. **@Autowired annotation:** The @Autowired annotation provides more fine-grained control over where and how autowiring should be accomplished. It can be used to autowire bean on the setter method just like @Required annotation, on the constructor, on a property or pn methods with arbitrary names and/or multiple arguments.
6. **@Qualifier annotation:** When there are more than one beans of the same type and only one is needed to be wired with a property, the @Qualifier annotation is used along with @Autowired annotation to remove the confusion by specifying which exact bean will be wired.
 
## Spring Data Access

1. **How can JDBC be used more efficiently in the Spring framework?**
When using the Spring JDBC framework the burden of resource management and error handling is reduced. So developers only need to write the statements and queries to get the data to and from the database. JDBC can be used more efficiently with the help of a template class provided by Spring framework, which is the JdbcTemplate (example here).
2. **JdbcTemplate:** JdbcTemplate class provides many convenience methods for doing things such as converting database data into primitives or objects, executing prepared and callable statements, and providing custom database error handling.
3. **Spring DAO support:** The Data Access Object (DAO) support in Spring is aimed at making it easy to work with data access technologies like JDBC, Hibernate or JDO in a consistent way. This allows us to switch between the persistence technologies fairly easily and to code without worrying about catching exceptions that are specific to each technology.
4. **What are the ways to access Hibernate by using Spring?**
	There are two ways to access Hibernate with Spring:
	- Inversion of Control with a Hibernate Template and Callback.
	- Extending HibernateDAOSupport and Applying an AOP Interceptor node.
5. **ORM’s Spring support**
	Spring supports the following ORM’s:
	- Hibernate
	- iBatis
	- JPA (Java Persistence API)
	- TopLink
	- JDO (Java Data Objects)
	- OJB
6. **How can we integrate Spring and Hibernate using HibernateDaoSupport?**
	Use Spring’s SessionFactory called LocalSessionFactory. The integration process is of 3 steps:
	- Configure the Hibernate SessionFactory
	- Extend a DAO Implementation from HibernateDaoSupport
	- Wire in Transaction Support with AOP
7. **Types of the transaction management Spring support:**
	Spring supports two types of transaction management:
	- **Programmatic transaction management:** This means that you have managed the transaction with the help of programming. That gives you extreme flexibility, but it is difficult to maintain.
	- **Declarative transaction management:** This means you separate transaction management from the business code. You only use annotations or XML based configuration to manage the transactions.
8. **What are the benefits of the Spring Framework’s transaction management?**
	- It provides a consistent programming model across different transaction APIs such as JTA, JDBC, Hibernate, JPA, and JDO.
	- It provides a simpler API for programmatic transaction management than a number of complex transaction APIs such as JTA.
	- It supports declarative transaction management.
	- It integrates very well with Spring’s various data access abstractions.
9. **Which Transaction management type is more preferable?** Most users of the Spring Framework choose declarative transaction management because it is the option with the least impact on application code, and hence is most consistent with the ideals of a non-invasive lightweight container. Declarative transaction management is preferable over programmatic transaction management though it is less flexible than programmatic transaction management, which allows you to control transactions through your code.
 
## Spring Aspect Oriented Programming (AOP)

1. **Explain AOP:** Aspect-oriented programming, or AOP, is a programming technique that allows programmers to modularize crosscutting concerns, or behavior that cuts across the typical divisions of responsibility, such as logging and transaction management.
2. **Aspect:** The core construct of AOP is the aspect, which encapsulates behaviors affecting multiple classes into reusable modules. It ia a module which has a set of APIs providing cross-cutting requirements. For example, a logging module would be called AOP aspect for logging. An application can have any number of aspects depending on the requirement. In Spring AOP, aspects are implemented using regular classes annotated with the @Aspect annotation (@AspectJ style).
3. **What is the difference between concern and cross-cutting concern in Spring AOP:** The Concern is behavior we want to have in a module of an application. A Concern may be defined as a functionality we want to implement.
The cross-cutting concern is a concern which is applicable throughout the application and it affects the entire application. For example, logging, security and data transfer are the concerns which are needed in almost every module of an application, hence they are cross-cutting concerns.
4. **Join point:** The join point represents a point in an application where we can plug-in an AOP aspect. It is the actual place in the application where an action will be taken using Spring AOP framework.
5. **Advice:** The advice is the actual action that will be taken either before or after the method execution. This is actual piece of code that is invoked during the program execution by the Spring AOP framework.
	Spring aspects can work with five kinds of advice:
	- **before:** Run advice before the a method execution.
	- **after:** Run advice after the a method execution regardless of its outcome.
	- **after-returning:** Run advice after the a method execution only if method completes successfully.
	- **after-throwing:** Run advice after the a method execution only if method exits by throwing an exception.
	- **around:** Run advice before and after the advised method is invoked.
6. **Pointcut:** The pointcut is a set of one or more joinpoints where an advice should be executed. You can specify pointcuts using expressions or patterns.
7. **What is Introduction?** An Introduction allows us to add new methods or attributes to existing classes.
8. **What is Target object?** The target object is an object being advised by one or more aspects. It will always be a proxy object. It is also referred to as the advised object.
9. **What is a Proxy?** A proxy is an object that is created after applying advice to a target object. When you think of client objects the target object and the proxy object are the same.
10. **What are the different types of AutoProxying?**
	- BeanNameAutoProxyCreator
	- DefaultAdvisorAutoProxyCreator
	- Metadata autoproxying
11. **What is Weaving? What are the different points where weaving can be applied?**
	- Weaving is the process of linking aspects with other application types or objects to create an advised object.
	- Weaving can be done at compile time, at load time, or at runtime.
12. **Explain XML Schema-based aspect implementation?** In this implementation case, aspects are implemented using regular classes along with XML based configuration.
13. **Explain annotation-based (@AspectJ based) aspect implementation:** This implementation case (@AspectJ based implementation) refers to a style of declaring aspects as regular Java classes annotated with Java 5 annotations.
 
## Spring Model View Controller (MVC)

1. **What is Spring MVC framework?** Spring comes with a full-featured MVC framework for building web applications. Although Spring can easily be integrated with other MVC frameworks, such as Struts, Spring’s MVC framework uses IoC to provide a clean separation of controller logic from business objects. It also allows to declaratively bind request parameters to business objects.
2. **DispatcherServlet:** The Spring Web MVC framework is designed around a DispatcherServlet that handles all the HTTP requests and responses.
3. **WebApplicationContext:** The WebApplicationContext is an extension of the plain ApplicationContext that has some extra features necessary for web applications. It differs from a normal ApplicationContext in that it is capable of resolving themes, and that it knows which servlet it is associated with.
4. **What is Controller in Spring MVC framework?** Controllers provide access to the application behavior that you typically define through a service interface. Controllers interpret user input and transform it into a model that is represented to the user by the view. Spring implements a controller in a very abstract way, which enables you to create a wide variety of controllers.
5. **@Controller annotation:** The @Controller annotation indicates that a particular class serves the role of a controller. Spring does not require you to extend any controller base class or reference the Servlet API.
6. **@RequestMapping annotation:** @RequestMapping annotation is used to map a URL to either an entire class or a particular handler method.
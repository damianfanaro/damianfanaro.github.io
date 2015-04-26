---
layout: post
title: "Java Lambda Expressions"
date: 2015-04-13
comments: true
category: programming
tags: [java, jdk-se-8]
authors: [damianfanaro]
---

![Java - Lambda Expressions]({{ site.baseurl }}/images/java-lambda.png)

## Guía rápida de las expresiones Lambda en Java SE 8

> El presente post es una traducción del [tutorial de Oracle](http://www.oracle.com/webfolder/technetwork/tutorials/obe/java/Lambda-QuickStart/index.html).

Las expresiones lambda son una nueva e importante herramienta incluida en la edición JDK 8 Standard Edition. Proveen de forma clara y concisa una manera de representar un método de una interfaz usando una expresión. Las expresiones lambda también mejoran las librerías dentro del framework Collection haciendolas más fácil de iterar, filtrar y extraer datos desde una colección. Además, nuevas optimizaciones de concurrencia mejoran la performance en ambientes de múltiples núcleos o cores.

En este artículo se presentarán casos de uso comunes en donde la inclusión de expresiones lambda muestran como el código puede ser mejorado. También se verán algunas <abbr title="Son las interfaces que tienen sólo un método abstracto">interfaces funcionales</abbr> como **Predicate** y **Function** provistas en el paquete ``java.util.function``.

## Repaso de conceptos

### Clases internas anónimas (Anonymous Inner Class)

En Java, las clases internas anónimas proveen una forma de implementar clases que pueden ocurrir solo una vez en una aplicación. Por ejemplo, en una aplicación Swing o JavaFX estándar, un número de _event handlers_ son requeridos para los eventos de teclado y mouse. En vez de escribir una clase _event-handling_ para cada evento, se puede definir algo así:

``` java
JButton testButton = new JButton("Test Button");

testButton.addActionListener(new ActionListener() {
	@Override public void actionPerformed(ActionEvent ae) {
 		System.out.println("Click Detected by Anon Class");
	}
});
```

De la otra forma, habría que definir por cada evento una clase que implemente **ActionListener**. 

Creando la clase exactamente en el lugar donde se necesita, el código es más fácil de leer aunque como contraparte no quede tan elegante ya que se necesitan varias líneas solo para definir un método.

### Interfaces funcionales (Functional Interfaces)

El código que define la interfaz **ActionListener** se ve a continuación:

``` java
package java.awt.event;

import java.util.EventListener;
 
public interface ActionListener extends EventListener {
     
	public void actionPerformed(ActionEvent e);
    
}
```

Como se observa, esta interfaz contiene sólo un método. Ahora, en Java SE 8, las interfaces que siguen este patrón se las conoce como **Interfaces Funcionales**. Anteriormente, a este tipo de interfaces se las conocía como <abbr title="Single Abstract Method Type">SAM</abbr>.

Usar interfaces funcionales con clases internas anónimas es muy común en Java. En adición a las clases **EventListener**, interfaces como **Runnable** y **Comparator** se usan de manera similar. Por lo tanto, las interfaces funcionales son ideales para usar con expresiones lambda.

### Sintáxis de una expresión lambda

Las expresiones lambda manejan el volumen de las clases internas anónimas convirtiendo 5 líneas de código en solo una declaración. Esta solución horizontal resuelve el problema vertical presentado por las clases internas.

Una expresión lambda se compone de 3 partes:

| Argument list  | Arrow token | Body  |
| -------------- | ----------- | ----- |
| (int x, int y) | ->          | x + y |

El cuerpo puede ser una expresión simple o un bloque de sentencias. En la forma de expresión, el cuerpo es simplemente evaluado y retornado. En la forma de bloque, el cuerpo es evaluado como el cuerpo de un método y luego una sentencia retorna el control al llamador del método anónimo. Las palabras reservadas ``break`` y ``continue`` son ilegales en el top level del bloque, pero están permitidas dentro los loops. Si el cuerpo produce un resultado, cada ruta de control debe retornar algo o arrojar una excepción.

Algunos ejemplos:

``` java
(int x, int y) -> x + y

() -> 42

(String s) -> { System.out.println(s); }
```

La primera expresión toma dos argumentos enteros, llamados ``x`` e ``y``, y usa la forma de expresión para retornar ``x + y``. La segunda expresión toma **cero** argumentos y usa la forma de expresión para retornar el entero 42. Po último, la tercera expresión toma un ``String`` y usa la forma de bloque de sentencias para imprimirlo en la consola sin retornar ningún valor.

## Ejemplos lambda

### Runnable

Para usar en la definición del método ``run()`` de la interfaz [Runnable](http://docs.oracle.com/javase/8/docs/api/java/lang/Runnable.html):

``` java
public class RunnableTest {
  
  public static void main(String[] args) {
    
    System.out.println("=== RunnableTest ===");
    
    // Anonymous Runnable
    Runnable r1 = new Runnable() {
      @Override
      public void run(){
         System.out.println("Hello world one!");
      }
    };
     
    // Lambda Runnable
    Runnable r2 = () -> System.out.println("Hello world two!");
     
    // Run em!
    r1.run();
    r2.run();
     
  }
}
```

En ambos casos es importante destacar que no se pasa ningún parámetro y que tampoco se retorna ningún valor.

### Comparator

En Java, la clase [Comparator](https://docs.oracle.com/javase/8/docs/api/java/util/Comparator.html) es usada para ordenar colleciones de datos. En el siguiente ejemplo, un ``ArrayList`` que consiste de objetos de tipo ``Person`` es ordenado basado en el campo ``surName``.

``` java
public class Person {
  
  private String givenName;
  private String surName;
  private int age;
  private Gender gender;
  private String eMail;
  private String phone;
  private String address;

  // Constructor, getters and setters omitted...
}
```

El siguiente código aplica un ``Comparator`` usando una clase interna anónima y un par de expresiones lambda:

``` java
public class ComparatorTest {
 
   public static void main(String[] args) {
    
     List<Person> personList = Person.createShortList();
   
     // Sort with Inner Class
     Collections.sort(personList, new Comparator<Person>(){
       public int compare(Person p1, Person p2){
         return p1.getSurName().compareTo(p2.getSurName());
       }
     });
     
     System.out.println("=== Sorted Asc SurName ===");
     for(Person p:personList){
       p.printName();
     }
     
     // Use Lambda instead
     
     // Print Asc
     System.out.println("=== Sorted Asc SurName ===");
     Collections.sort(personList, (Person p1, Person p2) -> p1.getSurName().compareTo(p2.getSurName()));
 
     for(Person p:personList){
       p.printName();
     }
     
     // Print Desc
     System.out.println("=== Sorted Desc SurName ===");
     Collections.sort(personList, (p1,  p2) -> p2.getSurName().compareTo(p1.getSurName()));
 
     for(Person p:personList){
       p.printName();
     }
     
   }
}
```

Notar que la primera expresión lambda declara el tipo de parámatro pasado, pero como se ve en la segunda expresión esto es opcional. Lambda soporta _target typing_ el cual infiere el tipo del objeto desde el contexto en el que es usado. Dado que se esta asignando el resultado a un ``Comparator`` definido con un **generic**, el compilador infiere que los dos parámetros son de tipo ``Person``.

### Listener

``` java
public class ListenerTest {

   public static void main(String[] args) {
         
     JButton testButton = new JButton("Test Button");
     testButton.addActionListener(new ActionListener() {
          @Override 
          public void actionPerformed(ActionEvent ae) {
            System.out.println("Click Detected by Anon Class");
       }
     });
     
     testButton.addActionListener(e -> System.out.println("Click Detected by Lambda Listner"));
     
     // Swing stuff
     JFrame frame = new JFrame("Listener Test");
     frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
     frame.add(testButton, BorderLayout.CENTER);
     frame.pack();
     frame.setVisible(true);
     
   }
 }
```

Notar que la expresión lambda se pasa como parámetro. **Target typing** es usada en un número de contextos incluyendo los siguientes:

- Declaración de variables
- Asignaciones
- Retornos de bloques
- Argumentos de método o constructor
- Inicializadores de arreglos
- Cuerpos de expresión lambda
- Expresiones condicionales '?'
- Cast expressions

## Mejorando el código con expresiones lambda

Esta sección se basa en los ejemplos anteriores para mostrar como las expresiones lambda pueden mejorar el código. Las lambdas deberían proveer un buen medio para respetar el principio **DRY** (del inglés, Don't Repeat Yourself) y hacer el código más simple y legible.

### Haciendo consultas

Es muy común ver programas que buscan a través de una colección de datos para encontrar items que "matcheen" un criterio específico.

Por ejemplo, dada una lista de personas, varios criterios son usados para hacer _robo calls_ (llamadas por teléfono automatizadas) a las personas apropiadas. Este tutorial sigue la premisa básica con pequeñas variaciones.

Aquí hay una explicación en inglés del evento JavaOne 2012:

<iframe width="640" height="390" src="https://www.youtube.com/embed/bzO5GSujdqI" frameborder="0" allowfullscreen></iframe>

En este ejemplo, nuestro mensaje necesita ser enviado a 3 grupos diferentes en Argentina:

- Conductores (Drivers): Personas mayores a 16 años de edad.
- Recluta (Draftees): Personas masculinas entre los 18 y 25 años de edad.
- Pilotos (Pilots): Específicamente de aviones comerciales. Personas entre 23 y 65 años de edad.

Actualmente el robot actual imprime un mensaje en la consola en vez de llamar, enviar un correo o enviar un correo electrónico. El mensaje contiene el nombre, la edad e información específica de la persona dependiendo el objetivo (por ejemplo, el mensaje contendrá la dirección de email o el teléfono dependiendo el caso).

La clase ``Person`` (detallada anteriormente) usa un ``Builder`` para crear nuevos objetos. Una lista de personas de ejemplo es creada con el método ``createShortList``. A continuación se muestra un pequeño fragmento de código de este método.

``` java
public static List<Person> createShortList(){
     List<Person> people = new ArrayList<>();
     
     people.add(
       new Person.Builder()
             .givenName("Bob")
             .surName("Baker")
             .age(21)
             .gender(Gender.MALE)
             .email("bob.baker@example.com")
             .phoneNumber("201-121-4678")
             .address("44 4th St, Smallville, KS 12333")
             .build() 
       );
     
     people.add(
       new Person.Builder()
             .givenName("Jane")
             .surName("Doe")
             .age(25)
             .gender(Gender.FEMALE)
             .email("jane.doe@example.com")
             .phoneNumber("202-123-4678")
             .address("33 3rd St, Smallville, KS 12333")
             .build() 
       );
     
     people.add(
       new Person.Builder()
             .givenName("John")
             .surName("Doe")
             .age(25)
             .gender(Gender.MALE)
             .email("john.doe@example.com")
             .phoneNumber("202-123-4678")
             .address("33 3rd St, Smallville, KS 12333")
             .build()
     );
```

### Primer intento

Con la clase `Person` y un criterio de búsqueda definido, podemos escribir la clase `RoboContact`. Una posible solución es la que define un método por cada caso de uso:

````java
package com.example.lambda;

import java.util.List;

public class RoboContactMethods {
   
  public void callDrivers(List<Person> pl) {
    for(Person p:pl) {
      if (p.getAge() >= 16){
        roboCall(p);
      }
    }
  }

  public void emailDraftees(List<Person> pl) {
    for(Person p:pl) {
      if (p.getAge() >= 18 && p.getAge() <= 25 && p.getGender() == Gender.MALE) {
        roboEmail(p);
      }
    }
  }
     
  public void mailPilots(List<Person> pl) {
    for(Person p:pl) {
      if (p.getAge() >= 23 && p.getAge() <= 65) {
        roboMail(p);
      }
    }
  }
      
  public void roboCall(Person p) {
    System.out.println("Calling " + p.getGivenName() + " " + p.getSurName() + " age " + p.getAge() + " at " + p.getPhone());
  }
     
  public void roboEmail(Person p) {
    System.out.println("EMailing " + p.getGivenName() + " " + p.getSurName() + " age " + p.getAge() + " at " + p.getEmail());
  }
     
  public void roboMail(Person p) {
    System.out.println("Mailing " + p.getGivenName() + " " + p.getSurName() + " age " + p.getAge() + " at " + p.getAddress());
  }
   
}
```

Como se puede observar desde los métodos: _callDrivers_, _emailDraftees_ y _mailPilots_; los nombres describen la clase de comportamiento que se lleva a cabo. El criterio de búsqueda está explícitamente indicado y una llamada es hecha a cada "robo action". Sin embargo, este diseño tiene algunos aspectos negativos:

- No se sigue el principio DRY:
    * Cada método repite el mecanismo de iteración.
    * El criterio de selección debe escribirse por cada método.
- Un gran número de métodos son requeridos para implementar cada caso de uso.
- El código es inflexible. Si el criterio de búsqueda cambia, requeriría también realizar una serie de actualizaciones en el código. En consecuencia, el código no es lo suficientemente mantenible.

### Refactorizando los métodos

Comenzar revisando el criterio de búsqueda sería un buen comienzo. Si las condiciones de test se aislaran en métodos separados, eso sería una mejora:

``` java
package com.example.lambda;

import java.util.List;
 
public class RoboContactMethods2 {
  
  public void callDrivers(List<Person> pl) {
     for(Person p:pl) {
       if (isDriver(p)) {
         roboCall(p);
       }
     }
  }
   
  public void emailDraftees(List<Person> pl) {
     for(Person p:pl) {
       if (isDraftee(p)) {
         roboEmail(p);
       }
     }
  }
   
  public void mailPilots(List<Person> pl) {
     for(Person p:pl) {
       if (isPilot(p)) {
         roboMail(p);
       }
     }
  }
  
  public boolean isDriver(Person p) {
     return p.getAge() >= 16;
  }
  
  public boolean isDraftee(Person p) {
     return p.getAge() >= 18 && p.getAge() <= 25 && p.getGender() == Gender.MALE;
  }
   
  public boolean isPilot(Person p) {
     return p.getAge() >= 23 && p.getAge() <= 65;
  }
   
  public void roboCall(Person p) {
     System.out.println("Calling " + p.getGivenName() + " " + p.getSurName() + " age " + p.getAge() + " at " + p.getPhone());
  }
   
  public void roboEmail(Person p) {
     System.out.println("EMailing " + p.getGivenName() + " " + p.getSurName() + " age " + p.getAge() + " at " + p.getEmail());
  }
   
  public void roboMail(Person p) {
     System.out.println("Mailing " + p.getGivenName() + " " + p.getSurName() + " age " + p.getAge() + " at " + p.getAddress());
  }
 
}
```

Ahora, el criterio de búsqueda está encapsulado en un método, una mejora sobre el ejemplo previo. Las condiciones de test pueden ser reusadas y los cambios que se hagan se propagarán en todos los lugares en donde estas condiciones son utilizadas. Pero una vez más, todavía hay un montón de código repetido y aún se requiere un método por cada caso de uso.

### Clases anónimas

Antes de las expresiones lambda, las clases internas anónimas eran una opción. Por ejemplo, una interfaz (`MyTest.java`) escrita con sólo un método `test` que retorna un **boolean** (una interfaz funcional) es una posible solución. El criterio de búsqueda podría ser pasado como parámetro a los métodos que lo requieran.

La interfaz sería así:

``` java
public interface MyTest<T> {
  
  boolean test(T t);

}
```

La clase robot actualizada quedaría:

``` java
public class RoboContactAnon {
 
   public void phoneContacts(List<Person> pl, MyTest<Person> aTest) {
     for(Person p:pl) {
       if (aTest.test(p)) {
         roboCall(p);
       }
     }
   }
 
   public void emailContacts(List<Person> pl, MyTest<Person> aTest) {
     for(Person p:pl) {
       if (aTest.test(p)) {
         roboEmail(p);
       }
     }
   }
 
   public void mailContacts(List<Person> pl, MyTest<Person> aTest) {
     for(Person p:pl) {
       if (aTest.test(p)) {
         roboMail(p);
       }
     }
   }  
   
   public void roboCall(Person p) {
     System.out.println("Calling " + p.getGivenName() + " " + p.getSurName() + " age " + p.getAge() + " at " + p.getPhone());
   }
   
   public void roboEmail(Person p) {
     System.out.println("EMailing " + p.getGivenName() + " " + p.getSurName() + " age " + p.getAge() + " at " + p.getEmail());
   }
   
   public void roboMail(Person p) {
     System.out.println("Mailing " + p.getGivenName() + " " + p.getSurName() + " age " + p.getAge() + " at " + p.getAddress());
   }
   
}
```

Definitivamente acá tenemos otra mejora, porque ahora solo 3 métodos se necesitan para ejecutar las operaciones automáticas. Sin embargo, existe un pequeño problema con la legibilidad del código cuando se llaman a los métodos.

A continuación, la clase de ejemplo:

``` java
package com.example.lambda;
 
import java.util.List;
 
public class RoboCallTest03 {
 
   public static void main(String[] args) {
     
     List<Person> pl = Person.createShortList();
     RoboContactAnon robo = new RoboContactAnon();
     
     System.out.println("\n==== Test 03 ====");
     System.out.println("\n=== Calling all Drivers ===");
     robo.phoneContacts(pl, 
         new MyTest<Person>() {
           @Override
           public boolean test(Person p) {
             return p.getAge() >=16;
           }
         }
     );
     
     System.out.println("\n=== Emailing all Draftees ===");
     robo.emailContacts(pl, 
         new MyTest<Person>() {
           @Override
           public boolean test(Person p) {
             return p.getAge() >= 18 && p.getAge() <= 25 && p.getGender() == Gender.MALE;
           }
         }
     );
     
     System.out.println("\n=== Mail all Pilots ===");
     robo.mailContacts(pl, 
         new MyTest<Person>() {
           @Override
           public boolean test(Person p) {
             return p.getAge() >= 23 && p.getAge() <= 65;
           }
         }
     );

   }
}
```

Este es un gran ejemplo del problema vertical en práctica. Este código es un poco difícil de leer. Además, tenemos que escribir criterios de búsqueda personalizados para cada caso de uso.

### Expresiones lambda

Las expresiones lambda resuelven todos los problemas mencionados hasta aquí.

En el ejemplo previo, la interfaz funcional `MyTest.java` se pasa como una clase anónima a los métodos, aunque no era necesario. [Java SE 8]({{ site.baseurl }}/jblog/tag/jdk-se-8/) provee el paquete `java.util.function` con una serie de interfaces funcionales estándar. En este caso, la interfaz `Predicate` resuelve nuestros problemas:

``` java
public interface Predicate<T> {
  
  boolean test(T t);

}
```

El método `test` toma una clase genérica y retorna un resultado **boolean**. Es justo lo necesario para hacer selecciones. A continuación la versión final de la clase _robo_:

``` java
package com.example.lambda;
 
import java.util.List;
import java.util.function.Predicate;
 
public class RoboContactLambda {

   public void phoneContacts(List<Person> pl, Predicate<Person> pred) {
     for(Person p:pl) {
       if (pred.test(p)) {
         roboCall(p);
       }
     }
   }
 
   public void emailContacts(List<Person> pl, Predicate<Person> pred) {
     for(Person p:pl) {
       if (pred.test(p)) {
         roboEmail(p);
       }
     }
   }
 
   public void mailContacts(List<Person> pl, Predicate<Person> pred) {
     for(Person p:pl) {
       if (pred.test(p)) {
         roboMail(p);
       }
     }
   }  
   
   public void roboCall(Person p) {
     System.out.println("Calling " + p.getGivenName() + " " + p.getSurName() + " age " + p.getAge() + " at " + p.getPhone());
   }
   
   public void roboEmail(Person p) {
     System.out.println("EMailing " + p.getGivenName() + " " + p.getSurName() + " age " + p.getAge() + " at " + p.getEmail());
   }
   
   public void roboMail(Person p) {
     System.out.println("Mailing " + p.getGivenName() + " " + p.getSurName() + " age " + p.getAge() + " at " + p.getAddress());
   }
 
}
```

Con este enfoque solo se necesitan 3 métodos, uno por cada forma de contacto. La expresión lambda pasada al método selecciona las instancias de `Person` que cumple las condiciones de test.

## Problema vertical resuelto

Las expresiones lambda resuelven el problema vertical y permiten el reúso de cualquier expresión. A continuación se presenta la clase de test actualizada con expresiones lambda:

``` java
package com.example.lambda;
 
import java.util.List;
import java.util.function.Predicate;

public class RoboCallTest04 {
   
   public static void main(String[] args) { 
 
     List<Person> pl = Person.createShortList();
     RoboContactLambda robo = new RoboContactLambda();
     
     // Predicates
     Predicate<Person> allDrivers = p -> p.getAge() >= 16;
     Predicate<Person> allDraftees = p -> p.getAge() >= 18 && p.getAge() <= 25 && p.getGender() == Gender.MALE;
     Predicate<Person> allPilots = p -> p.getAge() >= 23 && p.getAge() <= 65;
     
     System.out.println("\n==== Test 04 ====");
     
     System.out.println("\n=== Calling all Drivers ===");
     robo.phoneContacts(pl, allDrivers);
     
     System.out.println("\n=== Emailing all Draftees ===");
     robo.emailContacts(pl, allDraftees);
     
     System.out.println("\n=== Mail all Pilots ===");
     robo.mailContacts(pl, allPilots);
     
     // Mix and match becomes easy
     System.out.println("\n=== Mail all Draftees ===");
     robo.mailContacts(pl, allDraftees);  
     
     System.out.println("\n=== Call all Pilots ===");
     robo.phoneContacts(pl, allPilots);    
     
   }
}
```

Notar que un `Predicate` es configurado para cada grupo: _allDrivers_, _allDraftees_ y _allPilots_. Se puede pasar cualquiera de estas interfaces a nuestros métodos de contacto. El código es compacto y fácil de leer, además de no ser repetitivo.

## El paquete `java.util.function`

Una variedad de interfaces estándar están diseñadas como punto de partida para los developers:

- **Predicate**: una propiedad del objeto pasada como parámetro.
- **Consumer**: una acción a ser ejecutada con el objeto pasado como parámetro.
- **Function**: transformación de un objeto de tipo **T** a un objeto de tipo **U**.
- **Supplier**: proveer una instancia de un objeto de tipo **T** (como si fuera un _factory_).
- **UnaryOperator**: operador unario de **T** -> **T**.
- **BinaryOperator**: operador binario de **(T,T)** -> **T**.

Además, muchas de estas interfaces tienen también sus versiones con primitivos.

## Estilo de nombres y referencias a métodos

Siguiendo con el ejemplo anterior, supongamos que ahora queremos tener un sistema flexible que imprima los datos de la clase `Person`. Se requiere mostrar los nombres en dos estilos: **oriental** y **occidental**. En el occidente, los nombres se muestran con el nombre de pila primero y luego el apellido, mientras que en el oriente primero el apellido y luego el nombre de pila.

### Implementación sin lambda

Exite un método que imprime los datos de la persona por cada estilo:

``` java
public void printWesternName() {
  
  System.out.println("\nName: " + this.getGivenName() + " " + this.getSurName() + "\n" +
           "Age: " + this.getAge() + "  " + "Gender: " + this.getGender() + "\n" +
           "EMail: " + this.getEmail() + "\n" + 
           "Phone: " + this.getPhone() + "\n" +
           "Address: " + this.getAddress());
  }
  
public void printEasternName() {
    
  System.out.println("\nName: " + this.getSurName() + " " + this.getGivenName() + "\n" +
           "Age: " + this.getAge() + "  " + "Gender: " + this.getGender() + "\n" +
           "EMail: " + this.getEmail() + "\n" + 
           "Phone: " + this.getPhone() + "\n" +
           "Address: " + this.getAddress());
}
```

### La interfaz `Function`

Esta interfaz nos resulta útil para resolver este problema. Sólo tiene el método `apply` con la siguiente firma:

``` java
public R apply(T t) { }
```

Toma una clase genérica **T** como parámetro y retorna otra clase genérica **R**. Para este ejemplo, se le pasa como parámetro a `Person` y retorna el tipo `String`.

Entonces, una forma más versátil del método que muestra los nombres prodría definirse así:

``` java
public String printCustom(Function<Person, String> f) {
  return f.apply(this);
}
```

Es bastante más simple, una función se pasa como parámetro y un string es retornado. El método `apply` procesa una expresión lambda la cual determina que información de `Person` se retorna.

A continuación la clase de test:

``` java
public class NameTestNew {
  
  public static void main(String[] args) {
    
    System.out.println("\n==== NameTestNew02 ===");
    
    List<Person> list1 = Person.createShortList();
    
    // Print Custom First Name and e-mail
    System.out.println("===Custom List===");
    for (Person person:list1) {
        System.out.println(
            person.printCustom(p -> "Name: " + p.getGivenName() + " EMail: " + p.getEmail())
        );
    }
    
    // Define Western and Eastern Lambdas
    
    Function<Person, String> westernStyle = p -> {
      return "\nName: " + p.getGivenName() + " " + p.getSurName() + "\n" +
             "Age: " + p.getAge() + "  " + "Gender: " + p.getGender() + "\n" +
             "EMail: " + p.getEmail() + "\n" + 
             "Phone: " + p.getPhone() + "\n" +
             "Address: " + p.getAddress();
    };
    
    Function<Person, String> easternStyle =  p -> "\nName: " + p.getSurName() + " " 
            + p.getGivenName() + "\n" + "Age: " + p.getAge() + "  " + 
            "Gender: " + p.getGender() + "\n" +
            "EMail: " + p.getEmail() + "\n" + 
            "Phone: " + p.getPhone() + "\n" +
            "Address: " + p.getAddress();   
    
    // Print Western List
    System.out.println("\n===Western List===");
    for (Person person:list1) {
        System.out.println(
            person.printCustom(westernStyle)
        );
    }
  
    // Print Eastern List
    System.out.println("\n===Eastern List===");
    for (Person person:list1) {
        System.out.println(
            person.printCustom(easternStyle)
        );
    }
    
  }
}
```

La primera iteración imprime el nombre de pila y la dirección de email y la expresión lambda se pasa directamente como parámetro. Los estilos orientales y occidentales también están definidos con expresiones lambda que se almacenan en una variable. Luego estas variables son pasadas como parámetro en las dos iteraciones siguientes. 

Las expresiones lambda podrían ser incorporadas en un `Map` para hacer su reúso mucho más fácil. Esto muestra la gran flexibilidad que estas expresiones proveen.

### Muestra de salida

A continuación, un ejemplo de salida por consola del código:

```
==== NameTestNew02 ===

===Custom List===

Name: Bob EMail: bob.baker@example.com
Name: Jane EMail: jane.doe@example.com
Name: John EMail: john.doe@example.com
Name: James EMail: james.johnson@example.com
Name: Joe EMail: joebob.bailey@example.com
Name: Phil EMail: phil.smith@examp;e.com
Name: Betty EMail: betty.jones@example.com

===Western List===

Name: Bob Baker
Age: 21  Gender: MALE
EMail: bob.baker@example.com
Phone: 201-121-4678
Address: 44 4th St, Smallville, KS 12333

Name: Jane Doe
Age: 25  Gender: FEMALE
EMail: jane.doe@example.com
Phone: 202-123-4678
Address: 33 3rd St, Smallville, KS 12333

Name: John Doe
Age: 25  Gender: MALE
EMail: john.doe@example.com
Phone: 202-123-4678
Address: 33 3rd St, Smallville, KS 12333

Name: James Johnson
Age: 45  Gender: MALE
EMail: james.johnson@example.com
Phone: 333-456-1233
Address: 201 2nd St, New York, NY 12111

Name: Joe Bailey
Age: 67  Gender: MALE
EMail: joebob.bailey@example.com
Phone: 112-111-1111
Address: 111 1st St, Town, CA 11111

Name: Phil Smith
Age: 55  Gender: MALE
EMail: phil.smith@examp;e.com
Phone: 222-33-1234
Address: 22 2nd St, New Park, CO 222333

Name: Betty Jones
Age: 85  Gender: FEMALE
EMail: betty.jones@example.com
Phone: 211-33-1234
Address: 22 4th St, New Park, CO 222333

===Eastern List===

Name: Baker Bob
Age: 21  Gender: MALE
EMail: bob.baker@example.com
Phone: 201-121-4678
Address: 44 4th St, Smallville, KS 12333

Name: Doe Jane
Age: 25  Gender: FEMALE
EMail: jane.doe@example.com
Phone: 202-123-4678
Address: 33 3rd St, Smallville, KS 12333

Name: Doe John
Age: 25  Gender: MALE
EMail: john.doe@example.com
Phone: 202-123-4678
Address: 33 3rd St, Smallville, KS 12333

Name: Johnson James
Age: 45  Gender: MALE
EMail: james.johnson@example.com
Phone: 333-456-1233
Address: 201 2nd St, New York, NY 12111

Name: Bailey Joe
Age: 67  Gender: MALE
EMail: joebob.bailey@example.com
Phone: 112-111-1111
Address: 111 1st St, Town, CA 11111

Name: Smith Phil
Age: 55  Gender: MALE
EMail: phil.smith@examp;e.com
Phone: 222-33-1234
Address: 22 2nd St, New Park, CO 222333

Name: Jones Betty
Age: 85  Gender: FEMALE
EMail: betty.jones@example.com
Phone: 211-33-1234
Address: 22 4th St, New Park, CO 222333
```

## Expresiones lambda y colecciones

En el ejemplo previo se introdujo la interfaz `Function` y se terminó con ejemplos básicos de la sintáxis de lambda. Esta sección revisa como las expresiones lambda mejoran las clases dentro del framework `Collections`.

### Adiciones de clase

Los criterios de búsqueda de los pilotos, los reclutas y los choferes han sido encapsulados en la clase `SearchCriteria`.

``` java
package com.example.lambda;

import java.util.HashMap;
import java.util.Map;
import java.util.function.Predicate;

public class SearchCriteria {

  private final Map<String, Predicate<Person>> searchMap = new HashMap<>();

  private SearchCriteria() {
    super();
    initSearchMap();
  }

  private void initSearchMap() {
    Predicate<Person> allDrivers = p -> p.getAge() >= 16;
    Predicate<Person> allDraftees = p -> p.getAge() >= 18 && p.getAge() <= 25 && p.getGender() == Gender.MALE;
    Predicate<Person> allPilots = p -> p.getAge() >= 23 && p.getAge() <= 65;

    searchMap.put("allDrivers", allDrivers);
    searchMap.put("allDraftees", allDraftees);
    searchMap.put("allPilots", allPilots);
  }

  public Predicate<Person> getCriteria(String PredicateName) {
    Predicate<Person> target;

    target = searchMap.get(PredicateName);

    if (target == null) {
      System.out.println("Search Criteria not found... ");
      System.exit(1); 
    }
      
    return target;
  }

  public static SearchCriteria getInstance() {
    return new SearchCriteria();
  }
}
```

Los criterios de búsqueda basados en el `Predicate` están almacenados en esta clase y disponibles para nuestros métodos de test.

### Iteraciones

La primer característica para mirar es el nuevo método `forEach` que se encuentra en cualquier clase de `Collections`. A continuación, un par de ejemplos que imprimen la lista de personas.

``` java
public class Test01ForEach {
  
  public static void main(String[] args) {
    
    List<Person> pl = Person.createShortList();
    
    System.out.println("\n=== Western Phone List ===");
    pl.forEach( p -> p.printWesternName() );
    
    System.out.println("\n=== Eastern Phone List ===");
    pl.forEach(Person::printEasternName);
    
    System.out.println("\n=== Custom Phone List ===");
    pl.forEach(p -> { System.out.println(p.printCustom(r -> "Name: " + r.getGivenName() + " EMail: " + r.getEmail())); });
    
  }

}
```

El primer ejemplo muestra una expresión lambda estándar que llama al método `printWesternName` para imprimir cada persona de la lista. El segundo, muestra una **referencia a método** que llama a `printEasternName`. En el caso donde un método exista para ejecutar una operación en la clase, esta sintaxis puede ser usada en vez de la expresión lambda que hemos visto antes. Finalmente, el último ejemplo muestra como el método `printCustom` es implementado dentro del bloque de la expresión lambda. Notar de este último la variación en el nombre de las variables usadas cuando una expresión se incluye dentro de otra.

Se puede iterar a través de cualquier colección de esta manera. La estructura básica es similar a la mejorada en el loop `for`. Sin embargo, incluir un mecanismo de iteración dentro de la clase provee ciertos beneficios.

### Encadenando y filtrando

En adición a iterar sobre los contenidos de una colección, también se pueden encadenar métodos juntos. El primer método para observar es el `filter` el cual toma la interfaz `Predicate` como parámetro.

El siguiente ejemplo itera a través de una `List` luego de filtrar primero los resultados.

``` java
public class Test02Filter {
  
  public static void main(String[] args) {

    List<Person> pl = Person.createShortList();
    
    SearchCriteria search = SearchCriteria.getInstance();
    
    System.out.println("\n=== Western Pilot Phone List ===");

    pl.stream().filter(search.getCriteria("allPilots"))
      .forEach(Person::printWesternName);
    
    System.out.println("\n=== Eastern Draftee Phone List ===");

    pl.stream().filter(search.getCriteria("allDraftees"))
      .forEach(Person::printEasternName);
    
  }
}
```

El primer y último loop demuestra como la `List` es filtrada en base al criterio de búsqueda. La salida sería la siguiente:

```
=== Eastern Draftee Phone List ===

Name: Baker Bob
Age: 21  Gender: MALE
EMail: bob.baker@example.com
Phone: 201-121-4678
Address: 44 4th St, Smallville, KS 12333

Name: Doe John
Age: 25  Gender: MALE
EMail: john.doe@example.com
Phone: 202-123-4678
Address: 33 3rd St, Smallville, KS 12333
```

Estas características son útiles, pero: ¿Por qué agregar el mecanismo de iteración a las clases de `Collection` cuando ya hay un buen loop `for`?

La razón es porque esto le permite a los desarrolladores de Java hacer más optimizaciones de código. Hay dos términos que valen la pena destacar:

- **Laziness**: En programación, laziness se refiere al procesamiento de solo los objetos que se quieren procesar cuando se necesita procesarlos. En el ejemplo previo, el último loop es "lazy" porque itera solo sobre las dos instancias de `Person` que quedaron luego de que la lista sea filtrada. El código debería ser más eficiente porque el paso del procesamiento final ocurre solo en los objetos seleccionados.
- **Eagerness**: Código que ejecuta operaciones en cada objeto de una lista es considerado "eager". Por ejemplo, el iterador `for` mejorado que itera a través de la lista entera para procesar dos objetos es considerado un enfoque más **eager**.

#### El método `stream`

En el código de ejemplo anterior, el método stream es llamado antes que el filtrado y la iteración comiencen. Este método toma una `Collection` como input y retorna una interfaz de tipo `java.util.stream.Stream` como output. Un stream representa una secuencia de elementos en la cual varios métodos pueden ser encadenados. Por defecto, una vez que los elementos son consumidos ya no están disponibles desde el stream. En consecuencia, una cadena de operaciones pueden ocurrir solo una vez en un stream particular. Además, un stream puede ser _serial_ (por defecto) o _parallel_ dependiendo en el método llamado.

### Mutación y resultados

Como se acaba de mencionar, un stream se borra luego de su uso. Por lo tanto, los elementos en una colección no pueden ser cambiados o mutados con streams. Sin embargo, ¿Qué pasa si queremos mantener los elementos retornados por nuestra cadena de operaciones? 

La solución es que se pueden salvar en una nueva colección. A continuación se muestra como hacerlo:

``` java
public class Test03toList {
  
  public static void main(String[] args) {
    
    List<Person> pl = Person.createShortList();
    
    SearchCriteria search = SearchCriteria.getInstance();
    
    // Make a new list after filtering.
    List<Person> pilotList = pl
            .stream()
            .filter(search.getCriteria("allPilots"))
            .collect(Collectors.toList());
    
    System.out.println("\n=== Western Pilot Phone List ===");
    pilotList.forEach(Person::printWesternName);

  }

}
```

El método `collect` es comúnmente usado con un `filter`. El método toma una propiedad de una clase y ejecuta alguna operación. El siguiente ejemplo demuestra esto mediante la ejecución de cálculos basados en la edad.

``` java
public class Test04Map {

  public static void main(String[] args) {
    List<Person> pl = Person.createShortList();
    
    SearchCriteria search = SearchCriteria.getInstance();
    
    // Calc average age of pilots old style
    System.out.println("== Calc Old Style ==");
    int sum = 0;
    int count = 0;
    
    for (Person p:pl){
      if (p.getAge() >= 23 && p.getAge() <= 65 ){
        sum = sum + p.getAge();
        count++;
      }
    }
    
    long average = sum / count;
    System.out.println("Total Ages: " + sum);
    System.out.println("Average Age: " + average);
    
    
    // Get sum of ages
    System.out.println("\n== Calc New Style ==");
    long totalAge = pl
            .stream()
            .filter(search.getCriteria("allPilots"))
            .mapToInt(p -> p.getAge())
            .sum();

    // Get average of ages
    OptionalDouble averageAge = pl
            .parallelStream()
            .filter(search.getCriteria("allPilots"))
            .mapToDouble(p -> p.getAge())
            .average();

    System.out.println("Total Ages: " + totalAge);
    System.out.println("Average Age: " + averageAge.getAsDouble());    
    
  }
  
}
```

Dando como salida:

```
== Calc Old Style ==

Total Ages: 150
Average Age: 37

== Calc New Style ==

Total Ages: 150
Average Age: 37.5
```

El programa calcula la edad promedio de los pilotos de nuestra lista. La primera iteración muestra la vieja forma de calcular este número usando el loop `for`. La segunda iteración usa el método `map` para obtener la edad de cada persona en un stream. Notar que _totalAge_ es un `long` y que el método _map_ retorna un objeto de tipo `IntStream`, el cual contiene el método `sum` que retorna un _long_.

Para computar el promedio la segunda vez, calcular la suma de las edades es innecesario. Sin embargo, es instructivo mostrar un ejemplo con el método `sum`.

El último loop computa la edad promedio desde un stream. Cabe destacar que el método `parallelStream` es usado para obtener streams en paralelo de modo que los valores puedan ser computados concurrentemente. El tipo de retorno también es un poco diferente.

## Conclusiones

En este post se mostró como usar:

- Clases internas anónimas en java.
- Expresiones lambda que reemplazan las clases internas anónimas en Java SE 8.
- La sintáxis correcta para las expresiones lambda.
- La interfaz `Predicate` para ejecutar búsquedas en una lista.
- La interfaz `Function` para procesar un objeto y producir otro con un tipo diferente.
- Nuevas características agregadas a `Collections` en Java SE 8 que soportan expresiones lambda.

## Recursos 

Para más información sobre Java SE 8 y las expresiones lambda visitar los siguientes links (en inglés):

- [Java 8](http://openjdk.java.net/projects/jdk8/)
- [Project Lambda](http://openjdk.java.net/projects/lambda/)
- [State of the Lambda](http://cr.openjdk.java.net/~briangoetz/lambda/lambda-state-4.html)
- [State ef the Lambda Collections](http://cr.openjdk.java.net/~briangoetz/lambda/sotc3.html)
- [Jump-Starting Lambda JavaOne 2012 (You Tube)](http://www.youtube.com/watch?v=bzO5GSujdqI)
- Para aprender más sobre Java y tópicos relacionados: [Oracle Learning Library](http://www.oracle.com/goto/oll)

## Créditos

- Lead Curriculum Developer: Michael Williams
- QA: Juan Quesada Nunez
- Translator: Damian Fanaro
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

El presente post es una traducción del [tutorial de Oracle](http://www.oracle.com/webfolder/technetwork/tutorials/obe/java/Lambda-QuickStart/index.html).

Las expresiones lambda son una nueva e importante herramienta incluida en la edición JDK 8 Standard Edition. Proveen una clara y concisa forma para representar un método de una interfaz usando una expresión. Las expresiones lambda también mejoran las librerías dentro del framework Collection haciendolas más fácil de iterar, filtrar y extraer datos desde una colección. Además, nuevas mejoras de concurrencia mejoran la performance en ambientes de múltipĺes núcleos o cores.

A continuación se presenta un caso de uso común en donde la inclusión de expresiones lambda muestra como el código puede ser mejorado. También se verán algunas <abbr title="Son las interfaces que tienen sólo un método abstracto">interfaces funcionales</abbr> como **Predicate** y **Function** provistas en el paquete ``java.util.function``.

## Repaso de conceptos

### Clases internas anónimas (Anonymous Inner Class)

En Java, las clases internas anónimas proveen una forma de implementar clases que pueden ocurrir solo una vez en una aplicación. Por ejemplo, en una aplicación Swing o JavaFX estándar, un número de _event handlers_ son requeridos para los eventos de teclado y mouse. En vez de escribir una clase _event-handling_ para cada evento, se puede definir algo como esto:

``` java
JButton testButton = new JButton("Test Button");
testButton.addActionListener(new ActionListener(){
	@Override public void actionPerformed(ActionEvent ae){
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

Como se ve, esta interfaz contiene sólo un método. Ahora, en Java SE 8, las interfaces que siguen este patrón se las conoce como **Interfaces Funcionales**.

> Este tipo de interfaces se las conocía como <abbr title="Single Abstract Method Type">SAM</abbr>.

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

La primera expresión toma dos argumentos enteros, llamados ``x`` e ``y``, y usa la forma de expresión para retornar ``x + y``. La segunda expresión toma **cero** argumentos usa la forma de expresión para retornar el entero 42. Po último, la tercera expresión toma un ``string`` y usa la forma de bloque de sentencias para imprimirlo en la consola sin retornar ningún valor.

## Ejemplos lambda

A continuación se presentan algunos casos de uso comunes que fueron cubiertos en los ejemplos anteriores.

### Runnable Lambda

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

### Comparator Lambda

En Java, la clase [Comparator](https://docs.oracle.com/javase/8/docs/api/java/util/Comparator.html) es usada para ordenar colleciones de datos. En el siguiente ejemplo, un ``ArrayList`` que consiste de objetos de tipo ``Person`` es ordenado basado en el campo ``surName``.

Clase ``Person``:

``` java
public class Person {
  
  private String givenName;
  private String surName;
  private int age;
  private Gender gender;
  private String eMail;
  private String phone;
  private String address;

  // Getters and Setters omitted...
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

Notar que la primera expresión lambda declara el tipo de parámatro pasado. Sin embargo, como se puede ver en la segunda expresión, esto es opcional. Lambda soporta ``target typing`` el cual infiere el tipo del objeto desde el contexto en el que es usado. Dado que se esta asignando el resultado a un ``Comparator`` definido con un **generic**, el compilador infiere que los dos parámetros son de tipo ``Person``.

### Listener Lambda

``` java
public class ListenerTest {

   public static void main(String[] args) {
         
     JButton testButton = new JButton("Test Button");
     testButton.addActionListener(new ActionListener(){
     @Override public void actionPerformed(ActionEvent ae){
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

Esta sección se basa en los ejemplos anteriores para mostrar como las expresiones lambda pueden mejorar el código. Las lambdas deberían proveer un buen medio para respetar el principio DRY (del inglés, Don't Repeat Yourself) y hacer el código más simple y legible.

### Un caso de uso común de consulta

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

/**
 * @author MikeW
 */
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

Como se puede observar desde los nombres: _callDrivers_, _emailDraftees_ y _mailPilots_; los métodos describen la clase de comportamiento que se lleva a cabo. El criterio de búsqueda está explícitamente indicado y una llamada es hecha a cada "robo action". Sin embargo, este diseño tiene algunos aspectos negativos:

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
 
/**
 * @author MikeW
 */
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
  
  public boolean test(T t);

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
 
/**
 * @author MikeW
 */
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
  
  public boolean test(T t);

}
```

El método `test` toma una clase genérica y retorna un resultado **boolean**. Es justo lo necesario para hacer selecciones. A continuación la versión final de la clase _robot_:

``` java
package com.example.lambda;
 
import java.util.List;
import java.util.function.Predicate;
 
/**
 * @author MikeW
 */
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
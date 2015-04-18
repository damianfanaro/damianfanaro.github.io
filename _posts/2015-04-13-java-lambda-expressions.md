---
layout: post
title: "Java Lambda Expressions"
date: 2015-04-13
comments: true
category: programming
tags: [java, jdk-se-8]
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


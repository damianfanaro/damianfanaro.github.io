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

Runnable Lambda

Here is how you write a Runnable using lambdas.

``` java
public class RunnableTest {
  
  public static void main(String[] args) {
    
    System.out.println("=== RunnableTest ===");
    
    // Anonymous Runnable
    Runnable r1 = new Runnable(){
      
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


In both cases, notice that no parameter is passed and is returned. The Runnable lambda expression, which uses the block format, converts five lines of code into one statement.


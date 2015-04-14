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
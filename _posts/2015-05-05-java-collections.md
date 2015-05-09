---
layout: post
title: "Java Collections"
date: 2015-05-05
comments: true
category: programming
tags: [java]
---

## Colecciones en Java

Este artículo esta dedicado a cubrir los aspectos fundamentales del **framework Collections** que nos provee la plataforma Java. Tener un buen entendimiento sobre esta herramienta nos permite mejorar nuestras capacidades como desarrollador, evitar reinventar la rueda y escribir aplicaciones eficientes, entre otras grandes ventajas.

Un framework de colecciones es una arquitectura unificada que contiene lo siguiente:
 
 - **Interfaces**: Son tipos de datos abstractos que representan colecciones. Las interfaces permiten que las colecciones de datos puedan ser manipuladas independientemente de los detalles de su representación. En lenguajes orientados a objetos, las interfaces generalmente forman una jerarquía.
 - **Implementaciones**: Son implementaciones concretas de las interfaces del framework. En esencia, son estructuras de datos reusables.
 - **Algoritmos**: Son métodos que ejecutan cálculos computacionales, como por ejemplo buscar y ordenar, sobre objetos que implementan las interfaces del framework. Los algoritmos se dicen que son `polimórficos`: el mismo método puede ser usado en diferentes implementaciones de la interfaz apropiada dentro del framework. En esencia, los algoritmos presentan funcionalidades reusables.

### Interfaces del framework Collections

En este contexto, las interfaces son la base del framework. A continuación se muestra como las mismas forman una estructura jerárquica:

![Core Collection Interfaces]({{ site.baseurl }}/images/colls-coreInterfaces.gif)

Un `Set` es un tipo especial de `Collection`; un `SortedSet` es un tipo especial de `Set`; y así sucesivamente. La jerarquía consiste de dos árboles ya que `Map` no es una verdadera `Collection`.

Todas las interfaces del framework son genéricas. Es decir, se pueden definir colecciones de cualquier tipo de dato. Por ejemplo, esta es la declaración de la interfaz **Collection**:

``` java
public interface Collection<E> ... { }
```

Cuando se usan las interfaces del framework es conveniente siempre definir el tipo de dato que la colección contendrá. Esto le permite al compilador encontrar errores en tiempo de compilación, por ejemplo al intentar insertar un objeto de tipo **A** a una lista que contiene objetos de tipo **B**.

Entender las principales interfaces del framework y saber cuando aplicarlas, nos cubre gran parte de lo que tenemos que saber. La siguiente lista describe las interfaces fundamentales:

- **Collection**: La raíz de la jerarquía de colecciones. Una colección representa un grupo de objetos conocido como sus _elementos_. Esta interfaz es el mínimo común denominador que todas las colecciones implementan y es usada para pasar colecciones y manipularlas cuando se desea mayor generalidad. Algunos tipos de colecciones permiten elementos duplicados y otros no. Algunos son ordenados y otros desordenados. La plataforma Java no provee ninguna implementación directa de esta interfaz pero si provee implementaciones de subinterfaces más específicas, como **Set** y **List**. 
- **Set**: Una colección que no puede contener elementos duplicados. Esta interfaz modela el conjunto matemático abstracto y es usada para representar conjuntos.
- **List**: Una colección ordenada (también llamada una _secuencia_). Las listas pueden contener elementos duplicados. El usuario de una **List** generalmente tiene un control preciso sobre donde se insertan y recuperan los elementos mediante el uso del índice de tipo entero, que indica la posición de cada elemento en la lista.
- **Queue** (cola): Una colección usada para mantener múltiples elementos antes de que sean procesados. Además de las operaciones básicas, esta interfaz provee operaciones adicionales para la inserción, la extracción y la inspección de elementos. Una **queue** tipicamente, pero no necesariamente, ordena los elementos al estilo FIFO (first-in, first-out). Entre las excepciones están las _priority queues_, la cual ordenan los elementos de acuerdo a un comparador dado o usando el simple orden natural (por ejemplo para números). Cualquiera sea el ordenamiento usado, la cabeza de la cola es el elemento que sería eliminado cuando se invocan los métodos `remove` o `poll`.
- **Deque**: Una colección usada para mantener múltiples elementos antes de que sean procesados. Además de las operaciones básicas, esta interfaz provee operaciones adicionales para la inserción, la extracción y la inspección de elementos. Las _deques_ pueden ser usadas como colas FIFO o LIFO (last-in, first-out). En una _deque_ los elementos nuevos pueden ser insertados, recuperados y removidos desde ambos extremos.
- **Map**: Un objeto que mapea claves a valores. Un mapa no puede contener claves duplicadas. Cada clave puede mapear como mucho a un valor.

Las últimas dos interfaces del framework son versiones ordenadas de _Set_ y _Map_:

- **SortedSet**: Un conjunto que mantiene sus elementos en orden ascendente. Varias operaciones adicionales son provistas para tomar ventaja del ordenamiento. Los conjuntos ordenados son usados para conjuntos que se ordenan naturalmente, como por ejemplo listas de palabras.
- **SortedMap**: Un mapa que contiene sus mapeos en orden ascendente con respecto a las claves. Los mapas ordenados son usados para colecciones de pares clave/valor que se ordenan de forma natural, como por ejemplo los diccionarios o los directorios telefónicos.

### Implementaciones del framework Collections

### Algoritmos del framework Collections

## Recurso

- [Oracle Java Tutorials - Collections](http://docs.oracle.com/javase/tutorial/collections/TOC.html)
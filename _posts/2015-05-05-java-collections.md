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

### Operaciones de agregado (Aggregate Operations)

Para un mejor entendimiento de esta sección ver el [post de expresiones lambda]({{ site.baseurl }}/post/java-lambda-expressions/).

Supongamos que estamos creando una aplicación de red social. Una opción que queremos tener es habilitar al administrador para que pueda ejecutar cualquier tipo de acción, como por ejemplo mandar un mensaje a miembros que satisfacen cierto criterio.

Teniendo la clase `Person` que representa la información de un miembro:

``` java
public class Person {

    public enum Sex {
        MALE, FEMALE
    }

    String 		name;
    LocalDate 	birthday;
    Sex 		gender;
    String 		emailAddress;
    
    // ...

    public int getAge() {
        // ...
    }

    public String getName() {
        // ...
    }
}
```

El siguiente ejemplo imprime el nombre de todos los miembros contenidos en la colección _roster_ con un **for-each**:

``` java
for (Person p : roster) {
	System.out.println(p.getName());
}
```

Ahora lo mismo, pero con la _opearación de agregación_ **forEach**:

``` java
roster
	.stream()
	.forEach(e -> System.out.println(e.getName()));
```

Aunque en este ejemplo, la versión que usa la operación de agregación es más larga que la del for-each, se verá que las versiones que usan mayores cantidades de datos serán más concisas para tareas más complejas.

Ver la siguiente [clase concreta](http://docs.oracle.com/javase/tutorial/collections/streams/examples/BulkDataOperationsExamples.java) para más detalle.

#### Pipelines y Streams

Un _pipeline_ es una secuencia de operaciones agregadas. El siguiente ejemplo imprime los miembros masculinos que se encuentran en la colección _roster_ usando un pipeline que consiste de las operaciones agregadas _filter_ y _forEach_:

``` java
roster
    .stream()
    .filter(e -> e.getGender() == Person.Sex.MALE)
    .forEach(e -> System.out.println(e.getName()));
```

Lo mismo, pero ahora con un iterador for-each:

``` java
for (Person p : roster) {
    if (p.getGender() == Person.Sex.MALE) {
        System.out.println(p.getName());
    }
}
```

Un pipeline contiene los siguientes componentes:

- Una _fuente o source_: Esto podrías ser una colección, un arreglo, una función generadora o un canal I/O. En el ejemplo anterior, la fuente era la colección _roster_.
- Cero o más _operaciones intermedias_: Una operación intermedia, como _filter_, produce un nuevo _stream_.
- Una _operación terminal_: Estas operaciones, como el _forEach_, no producen un stream, sino que dan como resultado un valor primitivo (como un simple valor _double_), una colección, o en el caso del _forEach_, ningún valor. En el ejemplo, el parámetro del forEach es la expresión lambda `e -> System.out.println(e.getName())`, el cual invoca el método `getName()` del objeto _e_.

> Un _stream_ es una secuencia de elementos. A diferencia de una colección, no es una estructura de datos que almacena elementos. Un stream acarrea los valores desde una fuente a través de un pipeline. El ejemplo crea un stream desde la colección roster mediante la invocación del método stream.

> La operación _filter_ retorna un nuevo stream que contiene los elementos que verifican su predicado (el parámetro de la operación). En el ejemplo, el predicado es la expresión lambda `e -> e.getGender() == Person.Sex.MALE`, que retorna _true_ si _gender_ del objeto _e_ tiene el valor _Person.Sex.MALE_.

El siguiente ejemplo calcula la edad promedio de los miembros masculinos que se encuentran en la colección roster con un pipeline que consiste de las operaciones agregadas _filter_, _mapToInt_ y _average_:

``` java
double average = roster
    .stream()
    .filter(p -> p.getGender() == Person.Sex.MALE)
    .mapToInt(Person::getAge)
    .average()
    .getAsDouble();
```

La operación _mapToInt_ retorna un nuevo stream de tipo _IntStream_ (que es un stream que contiene solo valores enteros). La operación aplica la función especificada en su parámetro a cada elemento del stream. En este caso, la función es `Person::getAge`, el cual es un método de referencia que retorna la edad de cada miembro (alternativamente se podría usar la expresión lambda `e -> e.getAge()`). Consecuentemente, la operación _mapToInt_ del ejemplo retorna un stream que contiene las edades de todos los miembros masculinos.

La operación _average_ calcula el valor promedio de los elementos contenidos en un stream de tipo _IntStream_. Retorna un objeto de tipo _OptionalDouble_. Si el stream no tiene elementos, entonces la operación _average_ retorna una instancia vacía de _OptionalDouble_, y cuando invoca el método _getAsDouble_ arroja la excepción _NoSuchElementException_. La JDK contiene muchas operaciones terminales como _average_ que retornan un valor mediante la combinación del contenido de un stream. Estas operaciones son llamadas **operaciones de reducción**.

#### Direfencias entre operaciones agregadas e iteradores

Las operaciones agregadas, como el forEach, parecen ser como los iteradores. Sin embargo, presentan varias diferencias fundamentales:

- **Usan una iteración interna**: Las operaciones de agregación no contienen un método tal como _next_ para indicarles que tienen que procesar el siguiente elemento dentro de la colección. Con una _delegación interna_, la aplicación del usuario determina **qué** colección iterar, pero es la JDK quien determina **cómo** iterarla. Con una _delegación externa_, la aplicación determina ambas cosas. Sin embargo, la iteración externa puede solo iterar sobre los elementos de una colección secuencialmente. La iteración interna no tiene esta limitación. La ventaja es que se puede realizar computación paralela, el cual involucra dividir el problema en subproblemas, resolver esos subproblemas simultáneamente y luego combinar los resultados. 
- **Procesan elementos desde un stream**: No lo hacen directamente desde una colección. Por eso estas operaciones también son llamadas _stream operations_.
- **Soportan comportamiento como parámetro**: Se pueden especificar expresiones lambda como parámetros para la mayoría de las operaciones. Esto posibilita que se puedan personalizar los comportamientos de las operaciones.

### Implementaciones del framework Collections

Las implementaciones son los objetos de datos usados para almacenar colecciones. Implementan las interfaces que se describieron antes.

Existen los siguientes tipos de implementaciones:

- **De propósito general**: Son las implementaciones más comúnmente usadas, diseñadas para el uso diario.
- **De propósito especial**: Diseñadas para el uso en situaciones especiales. Muestran características de performance, restricciones de uso y comportamiento que escapan del estándar.
- **Implementaciones concurrentes**: Diseñadas para soportar alta concurrencia. Estas implementaciones son parte del paquete `java.util.concurrent`.
- **Implementaciones de envoltura o _wrapper_**: Usadas en combinación con otros tipos de implementaciones, a menudo las de propósito general, para proveer funcionalidad adicional o restringida.
- **Implementaciones de conveniencia**: Son mini-implementaciones, típicamente hechas disponibles vía fábricas con métodos estáticos, que proveen conveniencia y alternativas eficientes a las implementaciones de propósito general para colecciones especiales (por ejemplo, conjuntos _singletons_).
- **Implementaciones abstractas**: Son implementaciones de esqueleto que facilitan la construcción de implementaciones personalizadas.

Las implementaciones de propósito general están resumidas en la siguiente tabla:

| Interfaces | Hash Table | Resizable Array | Tree    | Linked List | Hash Table + Linked List |
| ---------- | ---------- | --------------- | ------- | ----------- | ------------------------ |
| Set 		 | HashSet    |                 | TreeSet |             | LinkedHashSet            |
| List       |            | ArrayList       |         | LinkedList  |                          |
| Queue      |            |                 |         |             |                          |
| Deque      |            | ArrayDeque      |         | LinkedList  |                          |
| Map        | HashMap    |                 | TreeMap |             | LinkedHashMap            |

La clase `Collections` (a diferencia de la interfaz _Collection_), provee métodos estáticos que operan sobre o retornan colecciones, que son conocidas como implementaciones _wrapper_.

### Algoritmos del framework Collections

Los _algoritmos polimórficos_ son piezas reusables de funcionalidad provista por la plataforma Java. Todos ellos están en la clase `Collections` y toman la forma de métodos estáticos cuyo primer argumento es la colección a ser tratada. La gran mayoría de los algoritmos provistos por la plataforma Java operan en instancias de `List`, y unas pocas sobre colecciones arbitrarias (instancias de `Collection`).

Se describen los siguientes algoritmos:

- Sorting
- Shuffling
- Routine Data Manipulation
- Searching
- Composition
- Finding Extreme Values

#### Sorting

El algoritmo _sort_ reordena una _List_ de modo que sus elementos quedan en orden ascendente/descendente acorde a un criterio de ordenamiento. Dos formas de esta operación están provistas: la forma simple toma una _List_ y la ordena acorde al <abbr title="Son los tipos de datos que implementan la interfaz Comparable">ordenamiento natural de sus elementos</abbr>; la otra forma toma un _Comparator_.

La operación _sort_ usa una ligera optimización del algoritmo _merge sort_ que es rápida y estable:

- **Velocidad**: Es garantizada para correr con una complejidad temporal de _n log (n)_ y ejecutar sustancialmente más rápida en listas que ya están casi ordenadas.
- **Estabilidad**: No reordena elementos iguales. Esto es importante si se ordena la misma lista repetidamente sobre diferentes atributos. Por ejemplo, si el usuario de un programa de emails ordena su inbox por fecha y luego lo ordena por remitente, el usuario naturalmente espera que los mails de un mismo remitente sigan estando ordenados por fecha. Esto está garantizado solo si el segundo ordenamiento fue estable.

El siguiente programa trivial imprime sus argumentos en orden alfabético:

``` java
import java.util.*;

public class Sort {

    public static void main(String[] args) {
        List<String> list = Arrays.asList(args);
        Collections.sort(list);
        System.out.println(list);
    }

}
```
Ejecutando: `javac Sort.java && java Sort i walk the line` se produce como salida: _[i, line, the, walk]_.

La otra forma de ordenar toma un _Comparator_ como parámetro en adición a la lista que se ordena. Supongamos que queremos imprimir los grupos de anagramas del ejemplo anterior en orden reverso de su tamaño (los grupos de anagramas más largos van primero).

Vale recordar que los grupos de anagramas son almacenados como valores en un _Map_, en la forma de instancias de _List_.

sadsadsa

``` java
// Make a List of all anagram groups above size threshold.
List<List<String>> winners = new ArrayList<List<String>>();
for (List<String> l : m.values())
    if (l.size() >= minGroupSize)
        winners.add(l);

// Sort anagram groups according to size
Collections.sort(winners, new Comparator<List<String>>() {
    public int compare(List<String> o1, List<String> o2) {
        return o2.size() - o1.size();
    }});

// Print anagram groups.
for (List<String> l : winners)
    System.out.println(l.size() + ": " + l);
```

#### Shuffling

#### Routine Data Manipulation

La clase `Collections` provee 5 algoritmos para hacer manipulación de datos sobre una _List_, los cuales son bastante sencillos:

- **reverse**: Invierte el orden de los elementos de la lista.
- **fill**: Sobreescribe cada elemento de una lista con un valor especificado. Esta operación es útil para la reinicialización de una lista.
- **copy**: Toma dos argumentos, una lista _destino_ y una lista _fuente_ y copia los elementos de la fuente en la lista destino, sobreescribiendo su contenido. La lista destino debe ser al menos tan larga como la fuente. Si es más larga, los elementos restantes en la lista destino quedan sin afectar.
- **swap**: Intercambia los elementos de una lista en una posición específica.
- **addAll**: Agrega todos los elementos especificados a una colección. Los elementos a ser agregados pueden estar especificados individualmente o como un arreglo.

#### Searching

#### Composition

Los algoritmos de frecuencia y disjunción testean algunos aspectos de la composición de una o más colecciones:

- **Frecuencia**: Cuenta la cantidad de veces que un elemento específico aparece en una colección.
- **Disjunción**: Determina si dos colecciones son disjuntas; esto es, si no contienen elementos en común.

#### Finding Extreme Values

Los algoritmos _min_ y _max_ retornan, respectivamente, el mínimo y el máximo elemento contenido en una colección. Ambas operaciones vienen en dos formas. La forma simple solo toma una colección y retorna el mínimo (o máximo) elemento acorde al ordenamiento natural de sus elementos. La segunda forma toma un _Comparator_ en adición a la colección y returna el mínimo (o máximo) elemento acorde al criterio de comparación específico.

## Recursos

- [Oracle Java Tutorials - Collections](http://docs.oracle.com/javase/tutorial/collections/TOC.html)
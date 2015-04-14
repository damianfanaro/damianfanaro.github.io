---
layout: post
title: "Java Lambda Expressions"
date: 2015-04-13
comments: true
category: programming
tags: [java, jdk-se-8]
---

![Java - Lambda Expressions]({{ site.baseurl }}/images/java-lambda.png)

## Guía rápida para entender las expresiones Lambda en Java SE 8

El presente post es una traducción del [tutorial de Oracle](http://www.oracle.com/webfolder/technetwork/tutorials/obe/java/Lambda-QuickStart/index.html).

Las expresiones lambda son una nueva e importante herramienta incluida en la edición JDK 8 Standard Edition. Proveen una clara y concisa forma para representar un método de una interfaz usando una expresión. Las expresiones lambda también mejoran las librerías dentro del framework Collection haciendolas más fácil para iterar, filtrar y extraer datos desde una colección. Además, nuevas mejoras de concurrencia mejoran la performance en ambientes de múltipĺes núcleos o cores.

A continuación se presenta un caso de uso común en donde la inclusión de expresiones lambda muestra como el código puede ser mejorado. También se verán algunas <abbr title="Son las interfaces que tienen sólo un método abstracto">interfaces funcionales</abbr> como **Predicate** y **Function** provistas en el paquete ``java.util.function``.

## Repaso de conceptos

### Clases internas anónimas (Anonymous Inner Class)

En Java, las clases internas anónimas proveen una forma de implementar clases que pueden ocurrir solo una vez en una aplicación.

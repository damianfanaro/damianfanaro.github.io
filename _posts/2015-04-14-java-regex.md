---
layout: post
title: "Java and Regex"
date: 2015-04-14
comments: true
category: programming
tags: [java, regex]
---

## Expresiones regulares

Desde la [wiki](http://es.wikipedia.org/wiki/Expresi%C3%B3n_regular):

> Una expresión regular, a menudo llamada también regex, es una secuencia de caracteres que forma un patrón de búsqueda, principalmente utilizada para la búsqueda de patrones de cadenas de caracteres u operaciones de sustituciones. Por ejemplo, el grupo formado por las cadenas Handel, **Händel** y **Haendel** se describe con el patrón `"H(a|ä|ae)ndel"`. La mayoría de las formalizaciones proporcionan los siguientes constructores: una expresión regular es una forma de representar a los lenguajes regulares (finitos o infinitos) y se construye utilizando caracteres del alfabeto sobre el cual se define el lenguaje. En informática, las expresiones regulares proveen una manera muy flexible de buscar o reconocer cadenas de texto.

Un buen recurso para aprender **Regex** [aquí](http://www.regexr.com/).

Particularmente en programación, las expresiones regulares son útiles en numerosas situaciones. Por ejemplo:

- Validar una URL que invoca un servicio REST.
- Comprobar que un número tiene exactamente 2 decimales.
- Validar la correcta formación de una dirección de email.

Siempre que tengamos que analizar una cadena de carácteres de forma simple y sistemática, la utilización de expresiones regulares será una buena opción.

## Construcción de las expresiones regulares


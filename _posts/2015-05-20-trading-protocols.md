---
layout: post
title: "Trading Protocols"
date: 2015-05-20
comments: true
category: general
tags: [trading, financial-markets, java]
description: Brief description about existing trading protocols in the financial market.
---

## Trading Protocols

Las comunicaciones en los sistemas de trading se basan en una lista bien definida de protocolos. El objetivo es minimizar la latencia en la comunicación, proveer un modelo estándar y automatizar las operaciones entre las distintas entidades del mercado.

Las bolsas más importantes del mundo usan los siguientes protocolos en al área de Market Data (donde se diseminan los datos del mercado): FIX/FAST, ITCH, UMDF, HSVF, QUANTUMFEED, NITCH, etc.

En este artículo se detallarán 2 protocolos: FIX/FAST e ITCH.

### Protocolo FIX / FAST

> FIX = `F`inancial `I`nformation e`X`change

> FAST = `F`IX `A`dapted for `ST`reaming

#### FIX

Este protocolo de comunicaciones electrónicas fue iniciado en 1992 para el intercambio internacional en tiempo real de información relacionada con las transacciones de valores. Actualmente las empresas invierten grandes cantidades de dinero en la optimización de los sistemas de trading y en el empleo de DMA (del inglés, Direct Market Access) para incrementar su velocidad en los mercados financieros.

El protocolo está definido en 2 niveles: **sesión** y **aplicación**. El nivel de sesión se encarga de la entrega de datos mientras que el de aplicación define el contenido de datos relacionados al negocio.

En FIX existe en 2 sintaxis: **Tag=Value (tradicional)** y **XML (FIXML)**.

El mismo flujo de mensajes de negocio aplica a ambas sintaxis. Una sintaxis específica es una forma ligeramente diferente de representar la misma cosa. Cualquiera sea la sintaxis usada, los valores de los datos de FIX tienen todos un tipo.

#### Mensajes FIX

Cada mensaje dentro del protocolo se comprende de campos _required_, _optional_ y _conditionally required_ (campos que son requeridos dependiendo de la presencia o valor de otros campos). Los sistemas deberían estar diseñados para operar sólo cuando los campos _required_ y _conditionally required_ están presentes.

Los campos relacionados están agrupados por conveniencia en **componentes**.

Los mensajes (y componentes) pueden estar categorizados en:

- Pre-trade messages
- Trade messages (órdenes y ejecuciones)
- Post-trade

Hay algunos mensajes y componentes que pueden ocurrir en cualquier contexto. Estos son llamados **common**.

## Recursos

- [FIX Wiki](http://fixwiki.org/fixwiki/FIXwiki)
- [FIX Community](http://www.fixtradingcommunity.org/)
- [FIXimate](http://www.fixtradingcommunity.org/FIXimate/FIXimate3.0/)
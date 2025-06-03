---
sidebar_position: 4
authors:
  - name: Daniel Bazo Correa
description: Inteligencia Artificial Generativa
title: Inteligencia Artificial Generativa
toc_max_heading_level: 3
---

# 1. Modelos de Lenguaje de Gran Escala (LLMs)

## 1.1 Introducción

Los modelos de lenguaje forman parte del campo del aprendizaje profundo. Aunque los
modelos de lenguaje ya existían antes de la era de los LLMs, estos empleaban
arquitecturas diferentes, como las redes neuronales recurrentes (RNN) y las redes con
memoria a largo y corto plazo (LSTM, por sus siglas en inglés). Estas arquitecturas
presentaban limitaciones importantes, especialmente en lo que respecta a la
paralelización, debido a su naturaleza secuencial. En estas estructuras, la salida en un
instante de tiempo $$t$$ depende de la entrada y salida en $$t-1$$, lo que dificulta el
procesamiento paralelo de las secuencias.

Además, dichas arquitecturas no escalaban de manera eficiente. Aunque el aumento de
neuronas podía mejorar el rendimiento, la capacidad de cómputo de la época limitaba su
aplicabilidad. A esto se sumaba la falta de herramientas adecuadas para la recopilación,
limpieza y estandarización de los datos necesarios para el entrenamiento de modelos de
lenguaje efectivos.

La introducción de la arquitectura Transformer supuso una solución a muchas de estas
limitaciones. Los Transformers permiten la paralelización efectiva de las tareas,
mejorando la escalabilidad y el rendimiento general. La mayoría de los avances recientes
en modelos como GPT se basan en variantes del Transformer, incrementando el número de
capas, neuronas, cabezas de atención y empleando mecanismos avanzados de atención (como
la auto-atención y la atención cruzada), así como técnicas adicionales como la
incorporación de componentes frecuenciales.

Estos avances han sido fundamentales en el desarrollo de la inteligencia artificial
generativa, que es capaz de producir texto, imágenes, vídeos y otros tipos de contenido.
Para tareas relacionadas con imágenes y vídeos, se exploran también otras arquitecturas
como los mecanismos de difusión, que a veces se combinan con Transformers. Además, se han
desarrollado modelos fundacionales, capaces de tokenizar distintos tipos de contenido
(imágenes, sonido, texto, etc.) y representarlos en forma de tensores, permitiendo
establecer relaciones entre diferentes modalidades de datos, como el sonido de un perro y
su imagen.

## 1.2 Proceso de Entrenamiento

El entrenamiento de los modelos de lenguaje a gran escala suele dividirse en dos fases
principales:

### 1.2.1 Preentrenamiento

Durante esta etapa, el modelo es entrenado utilizando grandes corpus de datos no
etiquetados. Estos conjuntos de datos pueden estar compuestos por textos de Wikipedia,
libros, artículos y otros contenidos disponibles en la web. Antes del entrenamiento, se
realiza un proceso de limpieza y estandarización del texto (por ejemplo, eliminación de
acentos o símbolos innecesarios).

El objetivo del preentrenamiento es que el modelo aprenda a predecir el siguiente token,
que puede corresponder a una palabra o un fragmento de ella, dependiendo del sistema de
tokenización. Este enfoque se conoce como aprendizaje autosupervisado (_self-supervised
learning_), ya que no requiere anotaciones humanas.

Esta fase permite que el modelo adquiera una comprensión general del lenguaje, incluyendo
su sintaxis, semántica y contexto. No obstante, su entrenamiento requiere una enorme
cantidad de recursos computacionales y datos. Por ejemplo, se estima que el
preentrenamiento de GPT-3 costó aproximadamente 4600 millones de dólares en créditos de
computación, procesando miles de millones de tokens.

### 1.2.2 Ajuste Fino (_Fine-Tuning_)

Tras el preentrenamiento, el modelo puede ser ajustado mediante conjuntos de datos más
pequeños pero etiquetados, con el fin de especializarlo en tareas concretas. Este proceso
recibe el nombre de _fine-tuning_ y permite adaptar modelos fundacionales a dominios
específicos.

Existen dos formas comunes de ajuste fino:

- **Instruction Fine-Tuning**: Consiste en presentar al modelo pares de preguntas y
  respuestas. Un ejemplo típico es proporcionar un problema matemático y su resolución
  paso a paso. Esta técnica es especialmente útil en modelos orientados al razonamiento,
  ya que permite emular capacidades cognitivas complejas.

- **Classification Fine-Tuning**: En este caso, se le presenta al modelo un texto
  acompañado de una etiqueta, con el objetivo de realizar tareas de clasificación.
  Ejemplos comunes incluyen la clasificación de correos electrónicos como spam o no spam,
  o la detección de problemas en redes de telecomunicaciones.

Gracias al _fine-tuning_, los modelos pueden realizar tareas de _zero-shot_ o _few-shot
learning_, es decir, resolver problemas sin haber sido entrenados específicamente en
ellos, o con muy pocos ejemplos.

## 1.3 Comportamientos Emergentes

Cuando un modelo de lenguaje exhibe capacidades no previstas durante su entrenamiento
explícito, se habla de _comportamientos emergentes_ (_emergent behaviors_). Estos surgen
debido a la combinación de datos masivos y arquitecturas profundas, lo que permite que el
modelo establezca relaciones complejas entre conceptos de manera autosupervisada. Estos
comportamientos son indicativos del potencial de generalización de los LLMs.

# 2. Arquitectura Transformer

## 2.1 Fundamentos

La arquitectura Transformer, desarrollada por Google, constituye la base de los actuales
modelos de lenguaje de gran escala. Esta arquitectura se compone de dos bloques
principales: **encoder** y **decoder**.

- **Encoder**: Se encarga de transformar la entrada (por ejemplo, un texto) en una
  representación vectorial interna, comprimiendo o expandiendo su dimensionalidad para
  que el modelo pueda procesarla adecuadamente. Este bloque aplica mecanismos de atención
  como la _self-attention_ y la _cross-attention_ para identificar las partes más
  relevantes del texto.

- **Decoder**: Utiliza la representación generada por el encoder, junto con información
  adicional (por ejemplo, parte de una traducción), para generar un nuevo contenido. Esta
  estructura fue inicialmente concebida para tareas de traducción automática, donde el
  encoder recibe un texto en un idioma y el decoder produce la traducción en otro idioma.

Un componente clave del Transformer es el mecanismo de **autoatención (self-attention)**,
que permite evaluar la relevancia relativa de cada token dentro de la secuencia,
facilitando la comprensión contextual y permitiendo al modelo concentrarse en los
elementos más significativos.

## 2.2 Tipos de Arquitecturas

Existen múltiples variantes de la arquitectura Transformer, entre las cuales destacan:

- **BERT (Bidirectional Encoder Representations from Transformers)**: Utiliza únicamente
  la parte del encoder. Su entrenamiento se basa en la enmascaración de palabras en un
  texto y la predicción de las mismas. Es especialmente eficaz en tareas de clasificación
  y análisis de sentimientos.

- **GPT (Generative Pre-trained Transformer)**: Utiliza solamente el decoder y está
  orientado a la generación de texto. Se entrena proporcionando secuencias incompletas,
  que el modelo debe completar. Este enfoque es útil en tareas como la traducción, el
  resumen de textos, la generación de código, y es eficaz en contextos de _few-shot_ y
  _zero-shot learning_.

- **Autoencoders enmascarados**: Se aplican principalmente en modelos visuales. Dividen
  una imagen en múltiples parches, ocultan algunos de ellos, y el objetivo es reconstruir
  los parches faltantes minimizando el error entre la imagen reconstruida y la original.
  Este mecanismo es similar al entrenamiento de BERT, pero aplicado al dominio visual.

### Modelos Autoregresivos

Los modelos basados únicamente en la arquitectura del decoder, como GPT, son considerados
**modelos autoregresivos**. Esto significa que la salida generada en el tiempo $$t$$ se
utiliza como entrada en el tiempo $$t+1$$. Esta característica permite mantener una mayor
coherencia en la generación de texto, ya que cada paso de predicción toma en cuenta lo
generado previamente.

---

En resumen, los modelos de lenguaje de gran escala, fundamentados en la arquitectura
Transformer, han revolucionado el procesamiento del lenguaje natural y la inteligencia
artificial generativa. Su capacidad para aprender de grandes cantidades de datos y
adaptarse a tareas específicas mediante técnicas de ajuste fino ha abierto un amplio
abanico de aplicaciones, desde la generación automática de contenido hasta la comprensión
semántica y contextual del lenguaje.

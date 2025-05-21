---
sidebar_position: 1
authors:
  - name: Daniel Bazo Correa
description: Computación Visual.
title: Computación Visual
toc_max_heading_level: 3
---

# 1. Procesamiento Visual Humano y su Relación con las Redes Neuronales Convolucionales

## 1.1 Procesamiento Visual en el Cerebro Humano

El procesamiento visual en el ser humano es un proceso jerárquico que transforma la
información lumínica captada por los ojos en representaciones visuales complejas y
significativas. Este proceso puede dividirse en varias etapas funcionales que van desde
la captación inicial de la luz hasta el análisis de formas y objetos en áreas corticales
especializadas.

### 1.1.1 Captación de Luz en la Retina

La luz entra al ojo a través de la córnea y atraviesa el cristalino, que actúa como una
lente convexa. Esta lente invierte la imagen y la proyecta sobre la retina, ubicada en la
parte posterior del globo ocular. En la retina se encuentran los fotorreceptores,
divididos en conos y bastones, que transforman la energía lumínica en señales eléctricas.

### 1.1.2 Transmisión de la Señal Visual

Las señales eléctricas generadas en la retina se transmiten a través del nervio óptico,
uno por cada ojo. Estas fibras convergen en el quiasma óptico, donde ocurre un cruce
parcial de la información visual: los campos visuales izquierdos de ambos ojos se dirigen
al hemisferio derecho, y los campos visuales derechos, al hemisferio izquierdo. Esta
organización permite la percepción binocular y contribuye a la percepción de profundidad.

Tras el cruce en el quiasma, las señales visuales continúan su trayecto a través del
tracto óptico hasta alcanzar el núcleo geniculado lateral (LGN, por sus siglas en
inglés), situado en el tálamo.

### 1.1.3 Procesamiento Talámico

El LGN actúa como una estación de relevo que organiza la información visual entrante.
Está compuesto por capas diferenciadas que procesan señales provenientes de distintos
tipos de células ganglionares (magnocelulares y parvocelulares). Esta segmentación
permite un preprocesamiento especializado que facilita el análisis visual posterior.

### 1.1.4 Proyección a la Corteza Visual Primaria

Desde el LGN, las señales visuales se transmiten a través de las radiaciones ópticas
hacia la corteza visual primaria (V1), localizada en el lóbulo occipital. Esta región
está organizada retinotópicamente, es decir, cada parte del campo visual se proyecta a
una región específica de la corteza.

En la V1, las neuronas están organizadas en columnas funcionales y responden a patrones
visuales básicos. Cada neurona posee un campo receptivo, que representa una pequeña
región del espacio visual a la que responde selectivamente.

Se distinguen tres tipos principales de células en la corteza visual primaria:

- **Células simples**: responden a bordes con una orientación específica.
- **Células complejas**: responden a movimientos u orientaciones de bordes en rangos más
  amplios.
- **Células hipercomplejas**: reaccionan ante combinaciones más sofisticadas, como
  esquinas y terminaciones de líneas.

El procesamiento visual continúa en regiones posteriores de la corteza (V2, V4, IT),
donde se analizan características más complejas como texturas, formas tridimensionales,
rostros y objetos completos.

## 1.2 Campo Receptivo

El campo receptivo se define como la región del campo visual que influye directamente en
la actividad de una neurona específica. En etapas iniciales del procesamiento, como en
V1, estos campos receptivos son pequeños y están especializados en detectar patrones
simples, como líneas u orientaciones.

A medida que se avanza jerárquicamente en la corteza visual, los campos receptivos se
expanden y se vuelven más complejos, integrando información de múltiples regiones
pequeñas para formar representaciones más abstractas y globales.

Por ejemplo, si una imagen de 10×10 píxeles se introduce en un sistema, una neurona en
una capa inicial puede tener un campo receptivo de 3×3. En capas sucesivas, la
combinación de varios campos receptivos previos permite formar unidades con campos más
amplios, como 5×5 o 7×7. Esta organización permite una progresiva abstracción y
especialización en el análisis visual.

## 1.3 Aprendizaje Visual con Pocos Ejemplos

El cerebro humano posee una notable capacidad para el reconocimiento de objetos a partir
de muy pocos ejemplos, fenómeno conocido como _few-shot_ o _one-shot learning_. Esta
habilidad se sustenta en dos mecanismos clave:

1. **Representaciones Jerárquicas Generalizables**: La percepción visual no se basa en la
   memorización exacta de píxeles, sino en la extracción de características abstractas,
   como formas, colores, movimientos y estructuras espaciales. Estas representaciones se
   generan de forma progresiva a lo largo de la jerarquía cortical (de V1 a IT), donde
   las regiones superiores integran y codifican objetos completos y conceptos visuales.

2. **Asociación con Memoria y Significado**: Áreas cerebrales como la corteza prefrontal,
   el hipocampo y otras estructuras del sistema límbico asocian las representaciones
   visuales con recuerdos previos, contextos y emociones. Esto permite identificar un
   objeto previamente visto, aunque se presente en condiciones diferentes (orientación,
   tamaño, estilo visual).

## 1.4 Analogía entre el Sistema Visual Humano y las Redes Neuronales Convolucionales (CNNs)

Las redes neuronales convolucionales (CNNs) son modelos computacionales diseñados para el
procesamiento eficiente de datos visuales. Estas redes se inspiran directamente en la
arquitectura del sistema visual humano, en particular en la corteza visual primaria.

### 1.4.1 Principales Analogías

| Sistema Visual Humano                      | Redes Convolucionales (CNNs)                             |
| ------------------------------------------ | -------------------------------------------------------- |
| Retina                                     | Imagen de entrada                                        |
| Nervio óptico / Quiasma óptico             | Preprocesamiento y alineación de la información visual   |
| LGN (núcleo geniculado lateral)            | División en canales o filtros por tipo de característica |
| Corteza visual (V1, V2, V4, IT)            | Capas convolucionales jerárquicas                        |
| Células simples, complejas, hipercomplejas | Filtros convolucionales de bajo, medio y alto nivel      |
| Campos receptivos                          | Regiones locales (receptive fields) de los kernels       |
| Percepción jerárquica                      | Aprendizaje progresivo de características visuales       |

### 1.4.2 Características Comunes

- **Campos Receptivos**: Al igual que las neuronas en V1, cada unidad en una capa
  convolucional procesa únicamente una región limitada de la imagen de entrada.

- **Filtros Convolucionales**: Las CNNs aprenden automáticamente filtros que permiten
  detectar bordes, texturas, formas y patrones complejos, análogos a las funciones de las
  células visuales especializadas.

- **Estructura Jerárquica**: Las primeras capas de una CNN capturan patrones simples
  (líneas, bordes), las intermedias detectan estructuras más complejas (texturas,
  formas), y las últimas integran estos elementos para identificar objetos completos.

- **Técnicas de Abstracción**: Métodos como el _max pooling_ permiten reducir la
  dimensionalidad conservando información relevante, de forma análoga al resumen
  jerárquico que realiza el cerebro al procesar escenas visuales complejas.

### 1.4.3 Aprendizaje y Contextualización

Aunque las CNNs aprenden de grandes cantidades de datos etiquetados, existen variantes
como las redes de meta-aprendizaje o los modelos de _few-shot learning_ que imitan la
capacidad humana de generalizar a partir de pocos ejemplos, incorporando mecanismos como
la atención, la memoria externa o embeddings semánticos, comparables a la interacción
entre percepción y memoria en el cerebro.

## 1.5 Conclusión

El sistema visual humano y las redes neuronales convolucionales comparten principios
arquitectónicos fundamentales. Ambos operan de forma jerárquica, utilizan campos
receptivos, y son capaces de construir representaciones cada vez más abstractas y
complejas. Esta analogía no solo ha inspirado avances en inteligencia artificial, sino
que también ha permitido una mejor comprensión de los mecanismos de percepción visual
biológica.

El cerebro humano posee una capacidad notable para aprender a partir de pocos ejemplos
gracias a la combinación de procesamiento visual jerárquico y asociaciones con
estructuras de memoria. Este principio está siendo replicado progresivamente en modelos
computacionales avanzados, lo que acerca cada vez más la inteligencia artificial al
rendimiento perceptivo del sistema nervioso humano.

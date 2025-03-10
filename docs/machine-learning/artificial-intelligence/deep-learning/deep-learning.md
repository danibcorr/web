---
sidebar_position: 2
authors:
  - name: Daniel Bazo Correa
description: Fundamentos del Deep Learning.
title: Deep Learning
toc_max_heading_level: 3
---

## 1. Introducción

### 1.1. Inteligencia Artificial

En la última década, el campo de la inteligencia artificial ha experimentado un
crecimiento significativo, impulsado por la acumulación masiva de datos y los avances en
_hardware_. Factores clave en este desarrollo incluyen la paralelización de procesos, la
mejora en la eficiencia y potencia de las unidades de procesamiento gráfico (GPU) y la
implementación de algoritmos más sofisticados.

La inteligencia artificial se define como la capacidad de diseñar sistemas y algoritmos
que emulan la inteligencia humana, con el objetivo de identificar patrones y tomar
decisiones mediante la computación.

### 1.2. Aprendizaje Profundo

Dentro de la inteligencia artificial, el aprendizaje profundo es una subcategoría del
aprendizaje automático que se caracteriza por el uso de redes neuronales avanzadas para
modelar datos complejos. Al igual que el aprendizaje automático en general, desempeña un
papel fundamental en el desarrollo de sistemas inteligentes y se clasifica en tres tipos
principales: el aprendizaje supervisado, el aprendizaje no supervisado y el aprendizaje
por refuerzo.

En los últimos años, han surgido nuevas metodologías que amplían las capacidades del
aprendizaje automático, como el _self-supervised learning_ y el _self-unsupervised
learning_ Estas técnicas permiten que los modelos aprendan representaciones útiles de los
datos sin depender de grandes volúmenes de información etiquetada. Un ejemplo destacado
es el _self-supervised learning_, que ha sido fundamental en el desarrollo de modelos de
procesamiento de lenguaje natural, como los modelos de predicción de palabras en textos,
utilizados en sistemas de generación automática de texto. De manera similar, el
_self-unsupervised learning_ ha sido clave en el avance de la visión por computadora,
permitiendo a los modelos aprender a reconocer objetos sin supervisión humana.

Estos enfoques han impulsado avances significativos en múltiples áreas, como la
generación de contenido mediante inteligencia artificial, la síntesis de imágenes
realistas, la predicción de estructuras de proteínas para el desarrollo de fármacos y la
optimización de procesos industriales. Gracias a estas innovaciones, el aprendizaje
profundo continúa expandiendo sus aplicaciones y redefiniendo los límites de lo que las
máquinas pueden lograr, consolidándose como una de las áreas más influyentes de la
inteligencia artificial moderna.

El rendimiento de los modelos de aprendizaje profundo suele mejorar con el aumento de la
cantidad de datos, la capacidad de cómputo (por lo general, mediante el uso de más GPUs)
y el tamaño del modelo, medido en términos del número de parámetros. En la actualidad,
los recursos computacionales son lo suficientemente accesibles y la cantidad de datos es
tan extensa que es posible incluso memorizar toda la información disponible. Se ha
alcanzado un punto en el que es viable entrenar modelos de propósito general con grandes
volúmenes de datos diversos para luego refinarlos en tareas específicas. Estos modelos,
conocidos como modelos fundacionales, constituyen la base de los modelos de lenguaje de
gran tamaño (_Large Language Models_, LLMs). Posteriormente, estos modelos pueden ser
sometidos a técnicas de ajuste fino (_fine-tuning_), cuantización y otras optimizaciones
para reducir su consumo de recursos, mejorar el rendimiento y adaptarse a dispositivos
con menores prestaciones.

El proceso de aprendizaje de un modelo puede entenderse como un problema de optimización,
en el que se buscan los mejores valores para los parámetros del modelo dentro de un
espacio de soluciones definido. Este tipo de modelos, conocidos como modelos
diferenciables, emplean técnicas matemáticas basadas en derivadas para ajustar
iterativamente sus parámetros hasta alcanzar un objetivo determinado. Este ajuste se
realiza mediante un proceso denominado descenso del gradiente, el cual permite optimizar
la función objetivo del modelo minimizando su error de predicción.

## 2. Fundamentos Matemáticos del Aprendizaje Automático

### 2.1. Álgebra lineal

Un **tensor** es una estructura multidimensional de datos con elementos del mismo tipo.
Se caracteriza por su **forma (shape)**, que define sus dimensiones. Un tensor de
dimensión cero es un **escalar**, un tensor de dimensión uno es un **vector**, y un
tensor de dimensión dos es una **matriz**. Los tensores permiten cálculos altamente
paralelizables, lo que los hace adecuados para su implementación en hardware
especializado como **GPUs** o **TPUs**.

Los tensores pueden ser indexados para obtener subconjuntos llamados **slices**, lo que
facilita la manipulación de datos. En el caso de vectores, estos pueden representarse
como **vectores fila** o **vectores columna**. En muchas implementaciones, un vector de
una dimensión se representa con un shape de $(n,)$, mientras que un vector columna suele
representarse como una matriz de shape $(n, 1)$, lo que puede requerir operaciones como
`expand_dims` para ajustarlos en ciertos cálculos.

### 2.2. Operaciones con Vectores

Un vector en un espacio euclidiano puede representarse como un punto en dicho espacio. Su
distancia al origen se obtiene mediante la **norma euclidiana** o **norma $L_2$**,
definida como:

$$
\|\mathbf{x}\|_2 = \sqrt{\sum_{i=1}^{n} x_i^2}.
$$

Con ello podemos realizar el **producto punto** entre vectores, definido como:

$$
\left\langle \mathbf{x}, \mathbf{y} \right\rangle = \mathbf{x}^T \mathbf{y} = \sum_{i=1}^{n} x_i y_i.
$$

:::note

La **transpuesta** de un vector $\mathbf{v}$, denotada como $\mathbf{v}^T$, consiste en
cambiar su orientación. Si $\mathbf{v}$ es un vector columna, su transpuesta
$\mathbf{v}^T$ será un vector fila, y viceversa.

:::

Desde un punto de vista geométrico, el producto punto está relacionado con el ángulo
entre los vectores:

$$
\left\langle \mathbf{x}, \mathbf{y} \right\rangle = \mathbf{\|x\|}\mathbf{\|y\|} \cos(\alpha),
$$

donde $\alpha$ es el ángulo entre ambos vectores. Si los vectores están normalizados (es
decir, tienen norma 1), el producto punto es equivalente al coseno del ángulo entre
ellos. Esta medida, conocida como **similitud del coseno**, se encuentra en el rango
$[-1, 1]$, donde:

- $1$ indica que los vectores apuntan en la misma dirección.
- $-1$ indica que los vectores son opuestos.
- $0$ indica que los vectores son ortogonales (ángulo de 90°).

La similitud del coseno se utiliza ampliamente en sistemas basados en aprendizaje
profundo, mediante la obtención de los **_embeddings_**, para medir similitudes entre
representaciones vectoriales de imágenes o textos, entre otros.

Otra métrica relevante es la distancia euclidiana, que mide la separación entre dos
vectores:

$$
d(\mathbf{x}, \mathbf{y}) = \sqrt{\sum_{i=1}^{n} (x_i - y_i)^2}
$$

### 2.3. Operaciones Matriciales

Una matriz es una estructura bidimensional compuesta por vectores dispuestos en filas o
columnas. En muchas aplicaciones, las matrices se utilizan para representar **lotes
(_batches_)** de datos, permitiendo el procesamiento simultáneo de múltiples entradas en
hardware optimizado.

Una de las operaciones más comunes es la multiplicación matricial. Dada una matriz $A$,
de dimensión $(m, n)$, y una matriz $B$, de dimensión $(n, p)$, su producto $ C $ es una
matriz de dimensión $(m, p)$, calculada como:

$$
C_{ij} =  \left\langle \mathrm{\textbf{A}}_i,\mathrm{\textbf{B}}_j^{T} \right\rangle = \sum_{k=1}^{n} A_{ik} B_{kj}.
$$

Cuando se multiplica una matriz por un vector, la operación puede representarse como el
producto de la matriz por la transpuesta del vector. Esta operación permite una
computación más eficiente y vectorizada, ya que se pueden aplicar técnicas de
optimización.

Formalmente, si $\mathbf{A}$ es una matriz de dimensión $(m, n)$ y $\mathbf{v}$ es un
vector columna de dimensión $(n, 1)$, entonces el producto de $\mathbf{A}$ por
$\mathbf{v}$ se puede representar como:

$$
\mathbf{z} = \mathbf{A} \mathbf{v},
$$

donde $\mathbf{z}$ es un vector columna de dimensión $(m, 1)$.

Sin embargo, si representamos el vector $\mathbf{v}$ como su transpuesta $\mathbf{v}^T$,
un vector fila de dimensión $(1, n)$, la operación puede realizarse de manera más
eficiente. Es decir, si tenemos una matriz $\mathbf{A}$ de dimensión $(m, n)$ y un vector
fila $\mathbf{v}^T$, la multiplicación se representa como:

$$
\mathbf{z} = \mathbf{v}^T \mathbf{A},
$$

donde $\mathbf{z}$ será un vector fila de dimensión $(1, m)$, lo que permite realizar la
operación de manera vectorizada y optimizada para hardware especializado como **GPUs** o
**TPUs**. Esto se debe a que la transposición del vector facilita la paralelización de la
multiplicación y reduce el costo computacional en ciertas implementaciones.

Otra operación común es la multiplicación elemento a elemento (_Hadamard product_), que
se define como:

$$
(A \odot B)_{ij} = A_{ij} B_{ij}.
$$

Esta operación se emplea en modelos de aprendizaje profundo para técnicas como el
enmascaramiento de ciertos valores en capas neuronales, la normalización de datos y
escalado de características.

### 2.4. Notación de Einstein

La notación de Einstein es una forma concisa de representar operaciones entre tensores
mediante una sintaxis basada en índices sumados implícitamente. Esta notación elimina la
necesidad de escribir explícitamente los bucles de suma, lo que la convierte en una
herramienta poderosa para expresar operaciones complejas de manera compacta y eficiente.
Su principal ventaja es que es independiente del framework utilizado (como
**TensorFlow**, **PyTorch** o **JAX**), ya que se basa únicamente en reglas algebraicas.
Esta notación es ampliamente utilizada en publicaciones académicas para representar
operaciones tensoriales de manera clara y eficiente.

La función **`einsum`** permite realizar operaciones con la notación de Einstein de
manera explícita. La multiplicación matricial representada en notación de Einstein como:

$$
C_{ij} = A_{ik} B_{kj},
$$

se puede implementar eficientemente utilizando `einsum` en diferentes frameworks.

En **TensorFlow**, podemos utilizar `tf.einsum` para realizar la multiplicación de
matrices $A$ y $B$ siguiendo la notación de Einstein:

```python
import tensorflow as tf

A = tf.random.normal([3, 4])  # Matriz 3x4
B = tf.random.normal([4, 5])  # Matriz 4x5

# Producto matricial usando einsum (notación de Einstein: C_{ij} = A_{ik} B_{kj})
C = tf.einsum('ik,kj->ij', A, B)
```

En este caso, `tf.einsum('ik,kj->ij', A, B)` realiza la multiplicación de las matrices
$A$ (dimensión $3 \times 4$) y $B$ (dimensión $4 \times 5$), resultando en una matriz $C$
de dimensión $3 \times 5$.

En **PyTorch**, la operación equivalente se puede realizar utilizando `torch.einsum`:

```python
import torch

A = torch.randn(3, 4)  # Matriz 3x4
B = torch.randn(4, 5)  # Matriz 4x5

# Producto matricial usando einsum (notación de Einstein: C_{ij} = A_{ik} B_{kj})
C = torch.einsum('ik,kj->ij', A, B)
```

Del mismo modo, en **JAX**, utilizamos `jax.numpy.einsum` para realizar la multiplicación
matricial de manera eficiente y con la notación de Einstein:

```python
import jax.numpy as jnp

A = jnp.random.normal(size=(3, 4))  # Matriz 3x4
B = jnp.random.normal(size=(4, 5))  # Matriz 4x5

# Producto matricial usando einsum (notación de Einstein: C_{ij} = A_{ik} B_{kj})
C = jnp.einsum('ik,kj->ij', A, B)
```

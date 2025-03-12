---
sidebar_position: 2
authors:
  - name: Daniel Bazo Correa
description: Fundamentos del Deep Learning.
title: Deep Learning
toc_max_heading_level: 3
---

## 1. Introducción

### 1.1. Inteligencia artificial y aprendizaje profundo

En la última década, el campo de la **inteligencia artificial** ha experimentado un
crecimiento significativo, impulsado por la acumulación masiva de datos y los avances en
**_hardware_**. Factores clave en este desarrollo incluyen la paralelización de procesos,
la mejora en la eficiencia y potencia de las unidades de procesamiento gráfico (GPUs),
así como la implementación de algoritmos más sofisticados.

:::note

La **inteligencia artificial** se define como la capacidad de diseñar sistemas y
algoritmos que emulan la inteligencia humana. Su objetivo principal es identificar
patrones y tomar decisiones basadas en los datos recopilados.

:::

Dentro de la inteligencia artificial, el **aprendizaje profundo** es una subcategoría del
aprendizaje automático que se caracteriza por el uso de **redes neuronales** para modelar
el comportamiento de los datos. Como parte del aprendizaje automático, desempeña un papel
fundamental en el desarrollo de sistemas inteligentes y se clasifica en tres tipos
principales:

- **Aprendizaje supervisado**, donde los datos de entrada están asociados a etiquetas.
- **Aprendizaje no supervisado**, que extrae patrones de datos sin etiquetas.
- **Aprendizaje por refuerzo**, basado en la interacción con un entorno para optimizar
  una estrategia de decisión.

### 1.2. Evolución y casos de uso

En los últimos años, han surgido metodologías avanzadas que amplían las capacidades del
aprendizaje automático permitiendo a los modelos aprender representaciones útiles de los
datos sin necesidad de grandes volúmenes de información etiquetada. Entre estas
metodologías destacan el **aprendizaje autosupervisado**, la **adaptación de dominio**,
el **aprendizaje continuo** y el **aprendizaje mediante métricas**, cada una con
aplicaciones específicas que han revolucionado distintos campos.

El **aprendizaje autosupervisado (_Self-Supervised Learning_)** permite generar
automáticamente etiquetas a partir de los datos sin intervención humana, facilitando la
extracción de patrones. Se ha aplicado con gran éxito en **procesamiento de lenguaje
natural**, donde modelos como BERT y GPT aprenden a predecir palabras o frases faltantes
en un texto, mejorando la comprensión del lenguaje. En visión por computadora esta
técnica permite que los modelos aprendan la estructura de una imagen sin etiquetas
explícitas, ayudando en tareas como la detección de objetos y la segmentación de
imágenes.

La **adaptación de dominio (_Domain Adaptation_)** aborda el problema de la
generalización de modelos cuando los datos de entrenamiento y los datos de prueba
pertenecen a dominios distintos. Esta técnica es crucial en aplicaciones como el
reconocimiento de imágenes donde un modelo entrenado en imágenes de alta calidad debe
adaptarse a condiciones más adversas, como imágenes borrosas o tomadas en entornos poco
iluminados. También se emplea en el procesamiento de datos biomédicos, permitiendo
transferir conocimientos de un conjunto de datos clínicos a otro con características
distintas.

El **aprendizaje continuo (_Continual Learning_)** permite a los modelos mejorar y
adaptarse con el tiempo sin olvidar conocimientos previos, lo que resulta fundamental en
sistemas de inteligencia artificial que operan en entornos dinámicos. Por ejemplo, en
robótica, esta técnica permite que los robots aprendan nuevas tareas sin perder
habilidades adquiridas previamente, facilitando su uso en entornos industriales o
domésticos en constante cambio.

Por otro lado, el **aprendizaje métrico (_Metric Learning_)** optimiza la forma en que se
mide la similitud entre datos, lo que resulta clave en problemas de clasificación con
datos limitados. Se aplica en sistemas de reconocimiento facial y verificación
biométrica, donde se aprende a distinguir identidades basándose en la distancia entre
representaciones de datos. También es útil en búsqueda de imágenes y recomendación de
contenido, donde permite encontrar elementos similares dentro de bases de datos de manera
eficiente.

Estos avances han permitido el desarrollo de aplicaciones innovadoras en múltiples áreas.
En la generación de contenido mediante inteligencia artificial, modelos como GPT pueden
crear textos, generar código y redactar resúmenes automáticamente, optimizando tareas en
redacción, atención al cliente y desarrollo de software. En la síntesis de imágenes
realistas, técnicas como los modelos de difusión o las redes generativas adversarias
permiten crear imágenes artificiales de alta fidelidad, utilizadas en la industria del
cine, videojuegos y diseño gráfico.

En el ámbito científico, el aprendizaje automático ha revolucionado la biología,
especialmente en la predicción de estructuras de proteínas para el desarrollo de
fármacos. Modelos como AlphaFold han demostrado la capacidad de predecir la estructura
tridimensional de proteínas con alta precisión, acelerando significativamente la
investigación en biomedicina y permitiendo el descubrimiento de nuevos tratamientos.

Asimismo, en la industria, el aprendizaje profundo optimiza procesos industriales
mediante el análisis de datos en fábricas y sistemas de producción. Se utiliza para
detectar fallos en equipos, predecir necesidades de mantenimiento y mejorar la eficiencia
energética, lo que se traduce en una reducción de costos y un aumento de la
productividad.

### 1.3. Escalabilidad y optimización

El rendimiento de los modelos de aprendizaje profundo mejora con el aumento de la
cantidad de datos, la capacidad de cómputo (usualmente mediante el uso de GPUs) y el
tamaño del modelo, medido en número de parámetros. Actualmente, los recursos
computacionales son lo suficientemente accesibles y los volúmenes de datos tan extensos
que es posible entrenar **modelos de propósito general** con datos diversos y luego
refinarlos para tareas específicas. Estos modelos, conocidos como modelos fundacionales,
constituyen la base de los **modelos de lenguaje de gran tamaño (_Large Language Models_,
LLMs)**.

El aprendizaje de un modelo puede interpretarse como un problema de **optimización**, en
el que se buscan los mejores valores para sus parámetros dentro de un espacio de
soluciones definido. Estos modelos, denominados **modelos diferenciables**, emplean
técnicas matemáticas basadas en derivadas para ajustar iterativamente sus parámetros
hasta alcanzar un objetivo determinado.

El proceso de ajuste se realiza mediante el **descenso del gradiente**, un método que
optimiza la función objetivo del modelo minimizando el error de predicción.

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

### 2.5. Gradientes y Jacobiano

El descenso del gradiente es un método fundamental en la optimización de modelos,
permitiendo su ajuste de manera eficiente. Para comprenderlo, es necesario analizar
conceptos como la derivada, el gradiente y el jacobiano.

#### 2.5.1. Derivadas y Gradiente

La derivada de una función escalar se define mediante el concepto de límite. En términos
geométricos, representa la pendiente de la tangente a la función en un punto dado, lo que
indica cómo evoluciona en su vecindario inmediato. Si la pendiente es positiva, la
función es creciente, mientras que una pendiente negativa indica que la función decrece.
Para minimizar una función, el objetivo es encontrar una dirección con pendiente
negativa.

Las derivadas cumplen ciertas propiedades clave, como la linealidad, lo que permite que
la derivada de la suma de dos funciones sea igual a la suma de sus derivadas. Además, se
pueden aplicar reglas como la del producto y la de la cadena.

Cuando se trabaja con funciones de múltiples variables, la derivada parcial se emplea
para evaluar la tasa de cambio con respecto a cada variable de entrada. El conjunto de
todas estas derivadas parciales conforma el **gradiente** de la función, que proporciona
la dirección de máximo crecimiento. Su relación con la **derivada direccional** se
expresa mediante el producto punto entre el gradiente y un vector de desplazamiento.

#### 2.5.2. Jacobiano y Aproximación Lineal

El **jacobiano** es una matriz que contiene todas las derivadas parciales de una función
vectorial con respecto a sus variables de entrada. Se considera una extensión del
gradiente cuando la función tiene múltiples salidas. En este contexto, la mejor
aproximación lineal de una función en un entorno infinitesimal de un punto se obtiene
mediante el **Teorema de Taylor**.

#### 2.5.3. Descenso del Gradiente

El descenso del gradiente es una técnica iterativa utilizada para minimizar una función
$f(x)$, donde $x$ es un vector de múltiples dimensiones. Minimizar $f(x)$ es equivalente
a maximizar $-f(x)$, lo que es relevante en algunos enfoques que utilizan logaritmos,
donde la función se expresa con signos negativos.

El proceso iterativo del descenso del gradiente implica realizar múltiples pasos hasta
alcanzar un mínimo. En cada iteración, se realiza una actualización de los parámetros en
la dirección opuesta al gradiente con una magnitud determinada por el **tamaño del paso
(step size)** o **tasa de aprendizaje (learning rate)**.

Sin embargo, se pueden encontrar **mínimos locales**, definidos como puntos estacionarios
en los que el gradiente es cero. Un punto estacionario puede ser un mínimo, un máximo o
un **punto de silla (saddle point)**, donde la curvatura de la función cambia de
ascendente a descendente. El **mínimo global** es el punto donde la función alcanza su
menor valor absoluto.

El comportamiento del descenso del gradiente depende de la convexidad de la función. Si
la función es **convexa**, el algoritmo siempre converge a un mínimo global,
independientemente de la inicialización. En cambio, para funciones **no convexas**, solo
se garantiza la convergencia a un punto estacionario, sin asegurar que sea un mínimo
global.

#### 2.5.4. Variantes del Descenso del Gradiente

El descenso del gradiente puede optimizarse mediante distintas estrategias:

- **Mini-lotes (batch sizes):** En lugar de calcular el gradiente en todo el conjunto de
  datos, se divide en pequeños subconjuntos, reduciendo el costo computacional y
  proporcionando una estimación más eficiente del gradiente.
- **Momentum:** Técnica que suaviza el camino de optimización acumulando información de
  iteraciones previas, acelerando la convergencia y reduciendo oscilaciones.
- **Adam:** Algoritmo que combina momentum con una adaptación de la tasa de aprendizaje
  para cada parámetro, proporcionando una optimización más robusta y menos dependiente de
  la elección de hiperparámetros.

El número de lotes y la tasa de aprendizaje también afectan la estimación de la función
de pérdida, junto con el número de **épocas**, que define cuántas veces se recorren todos
los datos de entrenamiento durante el proceso de optimización.

## 3. Datasets y Funciones de Pérdida

Codificar manualmente una función puede resultar poco viable. Sin embargo, obtener
ejemplos del comportamiento deseado es más accesible y permite modelar la distribución de
los datos. Esto es esencial para tareas como clasificación, regresión o generación de
contenido.

Un **conjunto de datos** es una colección de datos que, idealmente, debe estar
**independientemente distribuida** para evitar sesgos en la recolección y garantizar una
representación precisa de la distribución completa. La presencia de sesgos en los datos
puede derivar en un fenómeno conocido como **data drift**, el cual debe ser monitoreado
durante todo el ciclo de vida del modelo. Esto es especialmente crítico en entornos de
producción, donde es necesario identificar, medir y corregir estas desviaciones para
garantizar un rendimiento óptimo del sistema.

### Tipos de Conjuntos de Datos

Los conjuntos de datos pueden estar **etiquetados** o **no etiquetados**:

- **Conjuntos de datos etiquetados**: Cada dato de entrada está asociado a una etiqueta o
  resultado esperado. Por ejemplo, un dataset de imágenes de perros y gatos incluiría
  etiquetas indicando si la imagen corresponde a un perro o un gato. Estas etiquetas
  pueden almacenarse en el nombre del archivo o en un fichero aparte.
- **Conjuntos de datos no etiquetados**: No presentan una asociación directa entre los
  datos y una salida esperada, por lo que no pueden utilizarse en algoritmos de
  **aprendizaje supervisado**.

Para trabajar con datos no etiquetados, se emplean enfoques como:

- **Aprendizaje no supervisado**, donde se utilizan técnicas como **clustering** para
  agrupar datos similares sin necesidad de etiquetas.
- **Modelos preentrenados**, que han sido entrenados con grandes conjuntos de datos en
  tareas similares. Por ejemplo, modelos preentrenados en **ImageNet**, una base de datos
  con millones de imágenes y más de 1000 clases, pueden extraer características de
  imágenes nuevas y facilitar el análisis sin necesidad de etiquetas.

Estos modelos generan representaciones conocidas como **embeddings**, que transforman los
datos de un espacio no métrico (por ejemplo, una imagen) a un espacio métrico. Los
embeddings presentan propiedades geométricas útiles para medir la similitud entre datos.
Este espacio se conoce como **representación latente**, y facilita la aplicación de
técnicas de agrupamiento como **Gaussian Mixture Models (GMM)**, que modelan la
distribución de datos mediante combinaciones de distribuciones gaussianas.

### Aprendizaje Autosupervisado

Además del aprendizaje supervisado y no supervisado, surge el **aprendizaje
autosupervisado**, que combina características de ambos. Puede aplicarse de forma
supervisada o no supervisada y busca minimizar una función de pérdida específica. Algunos
ejemplos incluyen:

- **Predicción de la siguiente palabra**, utilizada en modelos de lenguaje.
- **Estimación de rotaciones o colores en imágenes**, para extraer información
  estructural.

Estos enfoques suelen requerir múltiples etapas de entrenamiento y un alto costo
computacional. Frecuentemente, emplean **métricas basadas en distancia**, como la
**distancia euclidiana** o la **similitud del coseno**, para definir funciones de pérdida
adecuadas.

Los modelos de lenguaje modernos se basan en esta técnica y son conocidos como **modelos
fundacionales**. Se entrenan con grandes corpus de datos mediante aprendizaje
autosupervisado, con el objetivo de predecir el siguiente token más probable. Una vez
entrenados, pueden utilizarse directamente en nuevas tareas mediante **few-shot
learning**, donde un modelo puede generalizar a partir de pocos ejemplos no vistos en el
entrenamiento.

Cuando se requieren ajustes específicos, se emplea **fine-tuning**, que permite refinar
el modelo para una tarea concreta. Existen diferentes enfoques para el ajuste fino:

- **Fine-tuning completo**, que ajusta todos los parámetros del modelo.
- **Parameter Efficient Fine-Tuning (PEFT)**, donde solo se ajustan ciertas partes del
  modelo, como capas convolucionales específicas o la capa final del clasificador basada
  en redes MLP.

Estos métodos permiten adaptar modelos preentrenados a nuevos contextos con menor costo
computacional y mejores resultados en tareas especializadas.

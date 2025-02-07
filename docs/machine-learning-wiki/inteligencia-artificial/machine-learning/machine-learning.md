---
sidebar_position: 1
authors:
  - name: Daniel Bazo Correa
description: Fundamentos del Machine Learning.
title: Machine Learning
toc_max_heading_level: 4
---

## 1. Introducción

### 1.1. Definición

El **aprendizaje automático** es una rama de la inteligencia artificial que se centra en
el desarrollo y uso de algoritmos, también denominados modelos, capaces de identificar y
comprender patrones en los datos de entrada con el objetivo de optimizar una métrica
establecida. A diferencia de los enfoques tradicionales de programación, donde las reglas
se definen explícitamente, en el aprendizaje automático los algoritmos ajustan sus
parámetros automáticamente para mejorar su desempeño en función de los datos.

### 1.2. Técnicas más comunes

Entre las técnicas más utilizadas se encuentran la **clasificación** y la **regresión**.
La clasificación permite asignar etiquetas o categorías a los datos en función de sus
características comunes. Un ejemplo de clasificación es la identificación del tipo de
planta a partir de atributos como el ancho y la altura de sus hojas. Por otro lado, la
regresión se emplea para realizar predicciones numéricas, como la estimación del precio
de una vivienda en función de sus características.

La elección de la técnica adecuada depende de la naturaleza del problema. Un enfoque
común consiste en evaluar múltiples algoritmos viables y compararlos para determinar cuál
ofrece el mejor rendimiento. Esta comparación se basa en métricas de desempeño obtenidas
a partir de los datos.

El proceso de entrenamiento de los modelos requiere dividir el conjunto de datos en
distintas partes: una para el entrenamiento del modelo, otra para la evaluación de su
desempeño y, en algunos casos, una tercera partición para validar su capacidad de
generalización antes de su implementación en entornos reales. Durante este proceso, el
algoritmo analiza las relaciones entre las características de los datos, identifica
patrones y genera predicciones que se comparan con los valores reales. La diferencia
entre las predicciones y las observaciones se mide mediante una métrica de error, lo que
permite ajustar el modelo en cada iteración o **época**, es decir, cada vez que el
algoritmo analiza completamente el conjunto de datos.

Un modelo puede presentar **sobreajuste** (_overfitting_) cuando se ajusta demasiado a
los datos de entrenamiento, logrando un alto rendimiento en estos pero fallando en datos
nuevos. Este problema se conoce como el **compromiso entre sesgo y varianza**
(_bias-variance tradeoff_), y su mitigación es esencial para obtener modelos que
generalicen correctamente.

### 1.3. Tipos de datos

#### 1.3.1. Variables dependientes e independientes

En un conjunto de datos, cada atributo que varía entre muestras se denomina **variable**.
Si una variable depende de otra, se considera **dependiente**; en caso contrario, se
clasifica como **independiente**. Las variables independientes, también llamadas
**características** (_features_), son las utilizadas en el entrenamiento del modelo para
predecir la variable dependiente.

#### 1.3.2. Datos continuos y discretos

Los datos pueden clasificarse en **continuos** o **discretos**. Los valores continuos
pueden tomar cualquier número dentro de un rango, como la altura de una persona, ya que
pueden existir valores intermedios con una precisión arbitraria. En contraste, los
valores discretos solo pueden asumir ciertos valores específicos, como la cantidad de
páginas de un libro, donde no existen valores intermedios entre un número entero y otro.

## 2. Estrategias para la selección y validación de datos en el aprendizaje automático

### 2.1. Validación cruzada

La selección de muestras para el entrenamiento y validación de un modelo puede resultar
compleja, ya que una elección inadecuada puede generar sesgos en el modelo. Por ejemplo,
en conjuntos de datos con dependencia temporal, como el tráfico de una red a lo largo del
día, la distribución de las muestras en el conjunto de datos puede influir en el
desempeño del modelo. Si los datos se registran en orden cronológico y las primeras
muestras corresponden a la mañana, mientras que las últimas a la noche, seleccionar las
primeras muestras para entrenamiento y las últimas para prueba podría generar un modelo
que no capture correctamente patrones generales. Para evitar este problema, se recomienda
introducir aleatoriedad en la selección de las muestras y definir un porcentaje para cada
partición del conjunto de datos.

:::note

Es fundamental establecer una **semilla aleatoria** antes de cualquier proceso que
requiera aleatorización, garantizando así la reproducibilidad de los resultados.

:::

Otra estrategia para la selección de datos es la **validación cruzada**, la cual consiste
en dividir el conjunto de datos en múltiples partes y realizar iteraciones en las que se
alternan los subconjuntos destinados a entrenamiento y prueba. Si se opta por una
validación cruzada de 5 particiones (_5-fold cross-validation_), el modelo se entrena y
evalúa cinco veces, cada vez utilizando un subconjunto distinto para prueba y los demás
para entrenamiento. Posteriormente, los resultados obtenidos en cada iteración se
promedian para obtener una evaluación más robusta del modelo.

El proceso de validación cruzada se basa en la partición de los datos en subconjuntos
denominados **_folds_**. En cada iteración, se entrena el modelo con algunos _folds_ y se
evalúa con el _fold_ restante. Este procedimiento se repite hasta que cada _fold_ haya
sido utilizado tanto para entrenamiento como para prueba. Finalmente, los resultados se
promedian utilizando métricas como la precisión o el error del modelo.

Una ventaja de la validación cruzada es la reducción del problema conocido como **_data
leakage_**, que ocurre cuando características utilizadas en el entrenamiento también
están presentes en la fase de prueba, generando una evaluación artificialmente optimista
del modelo.

## 3. Estadística

### 3.1. Distribuciones

Antes de realizar predicciones, es fundamental recopilar datos. En muchas ocasiones, esta
recopilación genera histogramas, que permiten visualizar la distribución de los datos. Un
histograma se compone de dos ejes principales: el eje x, donde se representan los datos
agrupados en categorías, y el eje y, que indica la frecuencia de cada categoría, es
decir, el número de muestras que pertenecen a cada grupo. Las divisiones en el eje x para
agrupar los datos en rangos similares se conocen como **_bins_** o contenedores.

El uso de histogramas facilita la identificación de tendencias en los datos. En casos
donde los valores pueden solaparse, los _bins_ ayudan a agrupar puntos de datos dentro de
un intervalo definido. De este modo, se generan distribuciones que permiten analizar el
comportamiento de los datos.

:::note

La elección del número de _bins_ es crucial, ya que debe reflejar correctamente la
distribución de los datos. Este tipo de histogramas resulta especialmente útil en
algoritmos como **Naïve Bayes**, donde se generan distribuciones de probabilidad en cada
iteración, permitiendo obtener valores como medias e intervalos de confianza, entre otros
aspectos, que se analizarán más adelante.

:::

El conjunto completo de datos recopilados se denomina **población** y se representa con
la letra $N$. Un subconjunto de la población se denomina **muestra** y se representa con
la letra $n$. La probabilidad de que un dato pertenezca a una determinada parte del
histograma se calcula dividiendo el número de muestras en esa sección entre el número
total de muestras en la población.

:::note

La confianza en los resultados depende del tamaño de la muestra: cuanto mayor sea el
número de muestras, mayor será la confianza en la estimación. Donde la confianza
representa el grado de incertidumbre asociado a una probabilidad.

:::

### 3.2. Características de la probabilidad

La probabilidad está normalizada en un rango de 0 a 1, donde 0 indica imposibilidad y 1
certeza absoluta. Cuando todos los resultados posibles tienen la misma probabilidad, se
habla de equiprobabilidad. Además, la suma de todas las probabilidades de un sistema debe
ser 1.

Si el número de datos disponibles es insuficiente, las estimaciones de probabilidad
pueden no ser precisas. Sin embargo, recopilar más datos puede ser costoso en términos de
tiempo, esfuerzo y dinero. Para abordar esta limitación, se modelan los datos utilizando
**distribuciones de probabilidad**, que pueden ser **discretas** (cuando los datos toman
valores específicos y finitos) o **continuas** (cuando los datos pueden tomar cualquier
valor dentro de un rango determinado).

#### 3.2.1. Distribución binomial discreta

Cuando se trabaja con datos discretos y se requiere calcular probabilidades en eventos
independientes con solo dos posibles resultados, **éxito** o **fracaso** (representados
por 1 y 0, respectivamente), se trata de un **problema binario**. Para modelar este tipo
de situaciones, se utiliza la **distribución binomial**, que permite calcular la
probabilidad de obtener una determinada cantidad de éxitos en una secuencia de ensayos
independientes.

La distribución binomial se expresa mediante la siguiente fórmula:

$$
P(X = k | n, p) = \binom{n}{k} \cdot p^k \cdot (1 - p)^{n - k}
$$

Donde:

- $X$ representa el número de éxitos en los ensayos.
- $n$ es el número total de ensayos.
- $p$ es la probabilidad de éxito en un único ensayo.
- $k$ es el número de éxitos deseados.
- $\binom{n}{k}$ es el coeficiente binomial, que calcula de cuántas formas se pueden
  obtener $k$ éxitos en $n$ ensayos, sin importar el orden:

$$
\binom{n}{k} = \frac{n!}{k! \cdot (n-k)!}
$$

Esta distribución es útil en situaciones donde se realizan múltiples intentos
independientes de un mismo experimento y se desea conocer la probabilidad de obtener un
número específico de éxitos.

:::tip Ejemplo

Supongamos que se lanza una moneda equilibrada (equiprobable, la probabilidad de tener
cara es la misa que de tener cruz) 5 veces y se quiere calcular la probabilidad de
obtener exactamente 3 caras.

Se definen los parámetros:

- $n = 5$ (número total de lanzamientos).
- $p = 0.5$ (probabilidad de obtener cara en un solo lanzamiento).
- $k = 3$ (número de caras que se desean obtener).

Aplicando la fórmula de la distribución binomial:

$$
P(X = 3 | n=5, p=0.5) = \binom{5}{3} \cdot (0.5)^3 \cdot (1 - 0.5)^{5 - 3}
$$

Calculamos el coeficiente binomial:

$$
\binom{5}{3} = \frac{5!}{3! \cdot (5-3)!} = \frac{5!}{3! \cdot 2!} = 10
$$

Sustituyendo en la ecuación:

$$
P(X = 3) = 10 \cdot (0.5)^3 \cdot (0.5)^2 = 0.3125
$$

Por lo tanto, la probabilidad de obtener exactamente 3 caras en 5 lanzamientos de una
moneda equilibrada es del 31.25%.

:::

#### 3.2.2. Distribución de Poisson discreta

La **distribución de Poisson** se utiliza para modelar la probabilidad de que ocurra un
número determinado de eventos en un intervalo de tiempo o espacio, siempre que los
eventos ocurran de manera independiente y a una tasa promedio constante. Algunos ejemplos
de aplicación incluyen:

- El número de llamadas recibidas en una central telefónica durante una hora.
- El número de accidentes en una intersección en un día.
- La cantidad de errores tipográficos en una página de texto.

La distribución de Poisson se expresa mediante la siguiente fórmula:

$$
P(X = k) = \frac{\lambda^k e^{-\lambda}}{k!}
$$

Donde:

- $X$ es el número de eventos que ocurren en un intervalo específico.
- $\lambda$ es el número promedio de eventos en dicho intervalo.
- $k$ es el número de eventos cuya probabilidad se desea calcular.
- $e$ es la base del logaritmo natural.

Esta distribución es especialmente útil cuando se estudian eventos raros o poco
frecuentes en un período de tiempo determinado.

:::tip Ejemplo

Supongamos que una central telefónica recibe en promedio 10 llamadas por hora y se desea
calcular la probabilidad de que en una hora lleguen exactamente 7 llamadas.

Se definen los parámetros:

- $\lambda = 10$ (promedio de llamadas por hora).
- $k = 7$ (número específico de llamadas que se desea calcular).

Aplicamos la fórmula de la distribución de Poisson:

$$
P(X = 7) = \frac{10^7 e^{-10}}{7!} \approx 0.0902
$$

Por lo tanto, la probabilidad de recibir exactamente 7 llamadas en una hora es del 9.02%.

:::

#### 3.2.3. Distribución Normal o Gaussiana Continua

La distribución normal, también denominada distribución gaussiana, se representa mediante
una curva en forma de campana. En esta distribución, el eje $$y$$ indica la
**verosimilitud** (**_likelihood_**) de observar un determinado valor en el eje $$x$$.

:::note Verosimilitud vs. Probabilidad

Aunque son conceptos relacionados, la verosimilitud y la probabilidad tienen diferencias
clave:

- **Probabilidad**: Representa la posibilidad de que ocurra un evento dado un modelo y
  sus parámetros. Se expresa como $$P(D|\theta)$$, donde $$D$$ son los datos y $$\theta$$
  los parámetros del modelo. Responde a la pregunta: _Dado que los parámetros del modelo
  son conocidos, ¿qué tan probable es observar ciertos datos?_
- **Verosimilitud**: Mide qué tan bien un conjunto de parámetros explica un conjunto de
  datos observados. Se denota como $$L(\theta | D)$$ y representa la plausibilidad de los
  parámetros $$\theta$$ dados los datos $$D$$. Responde a la pregunta: _Dado que los
  datos han sido observados, ¿qué tan plausible es que provengan de un modelo con ciertos
  parámetros?_

Mientras que la probabilidad se emplea para predecir eventos futuros basándose en un
modelo conocido, la verosimilitud se usa para evaluar qué tan bien un modelo con ciertos
parámetros explica los datos observados. Para obtener probabilidades a partir de la
verosimilitud, se puede utilizar el Teorema de Bayes.

:::

La distribución normal es **simétrica** respecto a su **media** ($$\mu$$), lo que implica
que el valor más verosímil es precisamente la media. La forma de la curva normal está
determinada por dos parámetros: la media ($$\mu$$) y la desviación típica ($$\sigma$$).

- **Una curva alta y estrecha** indica que los datos están más concentrados alrededor de
  la media, lo que corresponde a una **baja varianza**.
- **Una curva baja y ancha** sugiere una mayor dispersión de los datos, es decir, **mayor
  varianza**.

La **desviación típica** ($$\sigma$$) mide la dispersión de los datos respecto a la
media, mientras que la **varianza** ($$\sigma^2$$) es el cuadrado de la desviación
típica.

La varianza se calcula de la siguiente manera:

- **Varianza muestral**:

  $$
  s^2 = \frac{\sum_{i=1}^{n} (x_i - \bar{x})^2}{n-1}
  $$

- **Varianza poblacional**:

  $$
  \sigma^2 = \frac{\sum_{i=1}^{N} (x_i - \mu)^2}{N}
  $$

Donde:

- $$x_i$$ son los valores de la muestra o población.
- $$\bar{x}$$ es la media muestral.
- $$\mu$$ es la media poblacional.
- $$n$$ es el tamaño de la muestra.
- $$N$$ es el tamaño de la población.

La distribución normal es fundamental en estadística y aprendizaje automático debido a su
presencia en numerosos fenómenos naturales y conjuntos de datos del mundo real.

##### 3.2.3.1. Función de Densidad de Probabilidad

La **función de densidad de probabilidad** (_Probability Distribution Function_, PDF) de
la distribución normal se define como:

$$
f(X|\mu, \sigma) = \frac{1}{\sqrt{2\pi\sigma^2}} e^{-\frac{(x_i - \mu)^2}{2\sigma^2}}
$$

Para calcular probabilidades en distribuciones continuas, es necesario integrar la
función de densidad de probabilidad, lo que permite obtener el área bajo la curva.

La **función de distribución acumulada** (_Cumulative Distribution Function_, CDF)
representa la probabilidad acumulada hasta un punto específico, es decir, el área bajo la
curva desde $$-\infty$$ hasta dicho punto. Dado que el área total bajo la curva es igual
a 1, el área acumulada hasta la media de la distribución normal es 0.5.

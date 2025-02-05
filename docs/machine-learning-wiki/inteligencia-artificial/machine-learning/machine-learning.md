---
sidebar_position: 1
authors:
  - name: Daniel Bazo Correa
description: Fundamentos del Machine Learning.
title: Machine Learning
toc_max_heading_level: 4
---

# 1. Introducción

## 1.1. Definición

El **aprendizaje automático** es una rama de la inteligencia artificial que se centra en
el desarrollo y uso de algoritmos, también denominados modelos, capaces de identificar y
comprender patrones en los datos de entrada con el objetivo de optimizar una métrica
establecida. A diferencia de los enfoques tradicionales de programación, donde las reglas
se definen explícitamente, en el aprendizaje automático los algoritmos ajustan sus
parámetros automáticamente para mejorar su desempeño en función de los datos.

## 1.2. Técnicas más comunes

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

## 1.3. Tipos de datos

### 1.3.1. Variables dependientes e independientes

En un conjunto de datos, cada atributo que varía entre muestras se denomina **variable**.
Si una variable depende de otra, se considera **dependiente**; en caso contrario, se
clasifica como **independiente**. Las variables independientes, también llamadas
**características** (_features_), son las utilizadas en el entrenamiento del modelo para
predecir la variable dependiente.

### 1.3.2. Datos continuos y discretos

Los datos pueden clasificarse en **continuos** o **discretos**. Los valores continuos
pueden tomar cualquier número dentro de un rango, como la altura de una persona, ya que
pueden existir valores intermedios con una precisión arbitraria. En contraste, los
valores discretos solo pueden asumir ciertos valores específicos, como la cantidad de
páginas de un libro, donde no existen valores intermedios entre un número entero y otro.

# 2. Estrategias para la selección y validación de datos en el aprendizaje automático

## 2.1. Validación cruzada

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

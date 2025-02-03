---
sidebar_position: 10
authors:
  - name: Daniel Bazo Correa
description: Exportación de modelos para inferencia con ONNX.
title: Exportación de modelos con ONNX
toc_max_heading_level: 4
---

## Bibliografía

- [Everything You Want to Know About ONNX](https://www.youtube.com/watch?v=cK5AyawZSUI&list=WL&index=38)
- [ONNX](https://onnx.ai/)
- [ONNX Runtime](https://onnxruntime.ai/)

## 1.1. Motivación

<p align="center">
  <img src={require("../../../img/onnx-logo.png").default} width="500"/>
  <br />
  <em>Logo de OONX.</em>
</p>

El ecosistema del aprendizaje profundo se caracteriza por una gran fragmentación en los
frameworks utilizados para el desarrollo de modelos, como TensorFlow, Keras, PyTorch,
Caffe y MXNet, además de versiones privadas de distintas empresas. La migración entre
estos frameworks no siempre es sencilla, especialmente considerando la evolución de las
tendencias tecnológicas, lo que puede llevar a la obsolescencia o la falta de soporte de
determinadas herramientas.

Además, el despliegue de modelos de aprendizaje profundo está condicionado por la
compatibilidad con el hardware disponible. Por ejemplo, las tarjetas gráficas de NVIDIA
utilizan CUDA, mientras que Intel ofrece oneAPI. Algunos proveedores de nube, como GCP,
permiten el uso de hardware especializado, como las TPUs.

Existen diversas herramientas para la optimización de modelos en fase de inferencia.
Entre ellas, [TensorRT](https://developer.nvidia.com/tensorrt) optimiza modelos para su
ejecución en GPU, [OpenVINO](https://docs.openvino.ai/2024/index.html) mejora la
inferencia en procesadores, GPUs y NPUs de Intel, y
[JetPack SDK](https://developer.nvidia.com/embedded/jetpack) está diseñado para
dispositivos edge de NVIDIA, como las Jetson. Para entornos embebidos, TensorFlow
proporciona [LiteRT](https://ai.google.dev/edge/litert), lo que antes era Tensorflow
Lite. Sin embargo, la interoperabilidad sigue siendo un desafío, ya que comprender y
utilizar cada una de estas herramientas puede ser costoso y demandar una considerable
inversión de tiempo.

**ONNX (Open Neural Network Exchange)** busca resolver estos problemas facilitando la
interoperabilidad entre modelos de aprendizaje automático, independientemente del
framework en el que hayan sido desarrollados. ONNX proporciona una representación
intermedia de los modelos, reduciendo la cantidad de dependencias necesarias para su
ejecución. Al exportar un modelo a ONNX, no es necesario importar bibliotecas específicas
como PyTorch o TensorFlow, lo que simplifica el despliegue y optimización en distintos
entornos de hardware.

ONNX cuenta con el respaldo de la Fundación Linux y un sólido ecosistema de soporte por
parte de grandes proveedores de la nube como AWS, Azure y GCP. No solo es compatible con
frameworks de aprendizaje profundo, sino también con herramientas de aprendizaje
automático clásico, a través de ONNX-ML, que facilita la integración con bibliotecas como
Scikit-Learn.

Además, ONNX se integra con **Azure**, permitiendo la creación de pipelines para la
gestión de datasets, entrenamiento de modelos y descarga de modelos entrenados.
Posteriormente, estos modelos pueden ser desplegados en dispositivos edge o en la nube
mediante técnicas como la contenerización con Docker.

## 1.2. Funcionamiento

ONNX representa los modelos como un grafo de computación, donde cada nodo representa una
operación matemática y cada arista indica la relación entre las operaciones. Es
compatible con distintos tipos de datos, como enteros, flotantes y booleanos, entre
otros.

El estándar ONNX define un conjunto de operadores que permiten mapear las funcionalidades
de los frameworks de alto nivel con su propia representación. Existe una tabla de
operadores compatibles con cada librería, como la que relaciona TensorFlow y Keras con
ONNX, disponible en
[GitHub](https://github.com/onnx/tensorflow-onnx/blob/main/support_status.md). Además,
ONNX permite la creación de operadores personalizados para extender su funcionalidad.

Para facilitar la visualización de los grafos de computación generados, se dispone de la
herramienta [**Netron**](https://netron.app/), que forma parte del ecosistema de ONNX.

## 1.3. ONNX Runtime

ONNX Runtime es un motor de inferencia optimizado que permite ejecutar modelos en formato
ONNX de manera eficiente en distintos entornos de hardware, tanto en la nube como en
dispositivos edge. Este motor proporciona una capa de abstracción sobre el hardware
utilizado y permite la integración con bibliotecas de aceleración específicas mediante
los **Execution Providers (EP)**.

### 1.3.1. Funcionamiento

1. **Execution Providers (EP):** ONNX Runtime permite integrar bibliotecas específicas de
   aceleración de hardware, lo que facilita la optimización de la inferencia en
   diferentes plataformas.
   [Documentación](https://onnxruntime.ai/docs/execution-providers/).
2. **Interfaz `GetCapability()`:** Asigna nodos o subgrafos del modelo ONNX a la
   biblioteca del EP compatible, permitiendo una ejecución optimizada en CPU, GPU, FPGA y
   NPUs.

### 1.3.2. Ventajas

- **Flexibilidad:** Permite ejecutar modelos ONNX en múltiples entornos sin depender del
  hardware específico. ONNX Runtime es compatible con múltiples proveedores de ejecución,
  agrupados en distintas categorías, como CPUs, GPUs, Edge, u otros.
- **Optimización:** Aprovecha las capacidades computacionales del hardware para mejorar
  el rendimiento de la inferencia.
- **Compatibilidad ampliada:** Soporta una amplia variedad de proveedores de ejecución.

### 1.3.3. Integración y configuración

Los desarrolladores pueden crear e integrar sus propios EPs para ejecutar modelos en
soluciones de aceleración personalizadas. Además, ONNX Runtime permite construir paquetes
con cualquier combinación de EPs, siempre que las bibliotecas necesarias estén
disponibles. Métodos como `get_providers`, `get_provider_options` y `set_providers`
permiten configurar y cambiar los EPs de manera eficiente.

A continuación, se muestra un fragmento de código que inicializa una sesión de inferencia
con un modelo ONNX, estableciendo un orden de prioridad en los EPs (preferencia por CUDA
sobre CPU):

```python
import onnxruntime as ort

session = ort.InferenceSession("modelo.onnx", providers=["CUDAExecutionProvider", "CPUExecutionProvider"])
inputs = {session.get_inputs()[0].name: datos_entrada}
resultados = session.run(None, inputs)
```

También es posible modificar la prioridad de los EPs para utilizar solo el proveedor de
CPU:

```python
session.set_providers(["CPUExecutionProvider"])
```

## 1.4. Modelos preentrenados

ONNX proporciona un repositorio de modelos preentrenados denominado
[**ONNX Model Zoo**](https://onnx.ai/models/), que incluye modelos de visión
computacional, procesamiento de lenguaje natural (NLP) y audio, entre otros.

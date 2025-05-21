---
sidebar_position: 3
authors:
  - name: Daniel Bazo Correa
description: Aprende lo necesario sobre las tecnologías de acceso radio.
title: Tecnologiás de Acceso Radio
toc_max_heading_level: 3
---

## 1. Sistemas de Acceso Celular

### 1.1. Canal Radio

#### 1.1.1. Sistemas de Transmisión Radioeléctrica

En un sistema de transmisión radioeléctrica, la señal pasa por varios procesos antes de
su recepción. Inicialmente, se convierte de digital a analógica y se modula
multiplicándola por una sinusoide, lo que traslada su banda de frecuencia. Luego, la
señal es captada por la antena receptora, amplificada para aumentar su potencia y
finalmente convertida nuevamente a digital para su procesamiento.

La modulación es fundamental, especialmente en frecuencias altas, ya que permite reducir
la longitud de onda y, en consecuencia, utilizar antenas de menor tamaño.

#### 1.1.2. Atenuación de la Señal

La atenuación es la pérdida de amplitud de la señal y su principal causa es la distancia
entre el emisor y el receptor. También influye la dispersión de la energía radiada, la
cual aumenta a medida que el receptor se aleja del transmisor.

La propagación de la señal ocurre en múltiples direcciones, lo que implica que su captura
depende de la altura de la antena. En el espacio libre, la atenuación se calcula según la
pérdida de propagación del medio.

#### 1.1.3. Fenómenos de Propagación

Las ondas electromagnéticas pueden seguir múltiples trayectorias debido a reflexiones en
objetos del entorno. Dependiendo de sus propiedades, estas reflexiones pueden generar
difracción y dispersión de la señal.

#### 1.1.4. Desvanecimientos

El desvanecimiento es el resultado de múltiples trayectorias de propagación causadas por
reflexiones. Si las señales llegan simultáneamente, se combinan constructivamente
manteniendo la amplitud original. Sin embargo, cuando existen retrasos en los trayectos,
las señales pueden sumarse de manera destructiva, generando atenuaciones.

#### 1.1.5. Respuesta del Canal en Frecuencia y Tiempo

Al transmitir impulsos en lugar de una señal sinusoidal, se observan variaciones en la
amplitud de los pulsos recibidos debido a la atenuación en los distintos trayectos de
propagación. La respuesta del canal en frecuencia se obtiene mediante la Transformada de
Fourier de la respuesta al impulso.

Las diferencias en tiempo de llegada de las señales pueden producir refuerzos o
cancelaciones en ciertas frecuencias. En entornos urbanos con múltiples obstáculos, la
respuesta impulsiva del canal es más prolongada que en espacios abiertos. Un ancho de
banda mayor puede provocar distorsiones en los pulsos y generar interferencias
intersímbolo, lo que afecta la transmisión de datos digitales.

#### 1.1.6. Variación Temporal de la Respuesta del Canal

Si el receptor se mueve, los retardos en los caminos de propagación cambian, alterando la
ganancia del canal. Factores como la frecuencia de la señal y la velocidad del receptor
influyen en la rapidez de estos cambios.

En canales con múltiples trayectorias, la ganancia de la señal sigue una distribución
gaussiana compleja. Cuando hay línea de visión, la distribución de la ganancia sigue un
modelo de Rayleigh; si existen obstáculos, sigue un modelo de Rice. Además, cuando la
longitud de onda es pequeña, incluso pequeños movimientos del terminal pueden generar
variaciones bruscas en la señal.

Existe un concepto denominado distancia de coherencia, que define la distancia en la que
la respuesta del canal permanece estable. Si esta distancia es menor que la longitud de
onda, las variaciones de la señal serán significativas.

### 1.2. Sistemas Celulares

Los sistemas celulares permiten el acceso inalámbrico en áreas extensas con múltiples
usuarios, organizando la cobertura en celdas. Cada celda posee una estación base (BS) que
proporciona acceso a los dispositivos de usuario (UE). Se establecen dos tipos de
enlaces: el enlace descendente (DL), que conecta la BS con el UE, y el enlace ascendente
(UL), que permite la comunicación del UE hacia la BS.

Para evitar interferencias entre celdas adyacentes, se emplean diferentes bandas de
frecuencia y patrones de reutilización de frecuencia. Cuando un UE cambia de celda, se
lleva a cabo un procedimiento de transferencia (handover), que permite mantener la
calidad del servicio sin interrupciones.

Además de los canales dedicados a la transmisión de datos, existen canales de
señalización que facilitan la gestión del acceso, la asignación de recursos
radioeléctricos y la coordinación de eventos como transferencias y notificaciones de
llamadas.

### 1.3. Introducción a LTE

#### 1.3.1. Evolución de las Redes Móviles

1. **1G:** Introducción de comunicaciones móviles analógicas, sin interoperabilidad.
2. **2G:** Digitalización de las comunicaciones móviles, habilitando servicios como
   mensajes de texto.
3. **3G:** Mejora en la velocidad de datos y acceso a Internet en dispositivos móviles.
4. **4G:** Aumento significativo de la velocidad, facilitando el streaming y la
   conectividad avanzada.
5. **5G:** Reducción de latencia y soporte para tecnologías como IoT y conducción
   autónoma.

#### 1.3.2. Tecnologías Radio

- **OFDMA y SC-FDMA:** Técnicas de acceso múltiple eficientes en el uso del espectro.
  OFDMA se emplea en redes 4G y 5G, mientras que SC-FDMA se usa en el enlace ascendente
  de LTE para mejorar la eficiencia energética.
- **MIMO (Multiple Input, Multiple Output):** Uso de múltiples antenas para mejorar la
  diversidad, la multiplexación y la ganancia de la señal.
- **Adaptación de Modulación y Codificación:** Ajuste dinámico de la calidad de la señal
  y la tasa de bits para optimizar la comunicación en diferentes condiciones.

#### 1.3.3. Arquitectura de la Red

La red central de LTE tiene las siguientes funciones:

- Localización y autenticación de usuarios.
- Gestión de precios y acceso a servicios.
- Interoperabilidad entre redes.
- Señalización para supervisión del estado de la red.

Además, los equipos de usuario (UE) se clasifican en categorías según sus prestaciones,
determinando su velocidad de transmisión y capacidad de procesamiento.

#### 1.3.4. Arquitectura del Protocolo

Los protocolos que gestionan la comunicación en LTE incluyen:

- **PDCP:** Encriptación, ordenamiento y compresión de cabeceras.
- **RLC:** Segmentación de paquetes y retransmisión de datos mediante ARQ.
- **MAC:** Multiplexación de recursos de radio y determinación de la velocidad de
  transmisión.
- **PHY:** Codificación, modulación y técnicas MIMO para optimizar la transmisión de
  datos.

En la capa física se emplean técnicas como:

- **Codificación de error:** CRC, convolutiva y entrelazado.
- **Scrambling:** Aleatorización de bits para evitar patrones predecibles.
- **Mapeo de capas y precodificación MIMO:** Uso de beamforming para mejorar la
  directividad de la señal.
- **OFDM:** División del espectro en subportadoras para mayor eficiencia espectral.

### 1.4. 5G-NR

#### 1.4.1. Objetivos

5G-NR introduce tres principales categorías de servicio:

1. **eMBB (Banda Ancha Móvil Mejorada):** Optimizada para streaming y aplicaciones de
   alta demanda de datos.
2. **mMTC (Comunicaciones Masivas de Tipo Máquina):** Soporte para dispositivos IoT de
   bajo consumo y baja velocidad.
3. **URLLC (Comunicaciones Ultrarreliables de Baja Latencia):** Diseñada para
   aplicaciones críticas como conducción autónoma y cirugía remota.

#### 1.4.2. Mejoras Tecnológicas en 5G-NR

Las principales innovaciones incluyen:

- Uso de bandas de frecuencia en mmWave para mayor capacidad.
- Reducción del consumo de energía e interferencias.
- Alta configurabilidad para adaptarse a diversos escenarios.
- Baja latencia en la transmisión de datos.
- Implementación avanzada de beamforming para mejorar la eficiencia de transmisión. Aquí
  tienes el texto mejorado y estructurado de forma académica en formato Markdown:

## 2. Multiplexación

### 2.1. Concepto y Clasificación

La multiplexación permite la transmisión continua en los enlaces ascendentes (_uplink_,
UL) y descendentes (_downlink_, DL), asegurando la separación eficiente de los flujos de
información y la gestión de datos, señalización, celdas y usuarios. Existen diferentes
métodos de multiplexación:

- **Multiplexación por División de Tiempo (TDM)**: Asigna intervalos de tiempo
  específicos a los diferentes flujos de información. Es ampliamente utilizada tanto en
  UL como en DL, pero requiere sincronización precisa entre transmisores e intervalos de
  guarda para evitar interferencias.
- **Multiplexación por División de Frecuencia (FDM)**: Cada flujo de información ocupa
  una banda de frecuencia distinta. Para evitar interferencias, es necesaria la
  sincronización en frecuencia y el uso de bandas de guarda.
- **Multiplexación por División de Tiempo Estadística**: No todos los canales transmiten
  simultáneamente, permitiendo el uso de cualquier intervalo de tiempo disponible. Sin
  embargo, esto puede provocar colisiones.
- **Multiplexación por División Espacial (SDM)**: Utiliza configuraciones de antenas para
  dirigir haces de radiación en distintas direcciones del espacio, permitiendo la
  transmisión y recepción de múltiples flujos simultáneamente. Requiere un gran número de
  antenas para lograr una mayor directividad de la señal. Todas las antenas se asignan a
  todos los usuarios, ajustando el desfase de la onda para gestionar los flujos.
- **Multiplexación por Pulso**: Emplea pulsos ortogonales o cuasi-ortogonales para
  separar la información en el receptor. Los pulsos cuasi-ortogonales presentan baja
  interferencia, mientras que los ortogonales requieren sincronización precisa. Este
  método es más adecuado para la multiplexación de usuarios en el acceso al medio. La
  alineación de señales es crucial, especialmente en UL, donde la diferencia de distancia
  entre los terminales introduce retardos que dificultan la sincronización.

### 2.2. Multiplexación por Pulso

#### 2.2.1. Detección de Pulsos

Para cuantificar la similitud entre los pulsos, se calcula la integral del error
cuadrático medio entre la señal de entrada y la de salida. La correlación entre las
señales se mide mediante un parámetro denominado "ε", cuya magnitud depende de la
semejanza entre los pulsos.

- Si la correlación es 1, ambas señales son idénticas.
- Si la correlación es 0, los pulsos son ortogonales.

Dos pulsos son ortogonales si la suma de los productos de sus componentes es nula. Por
ejemplo, el producto escalar de una señal consigo misma es máximo y vale 1.

#### 2.2.2. Modulación por Amplitud de Pulsos (PAM)

En un sistema PAM, la cantidad de niveles de amplitud determina la cantidad de
información transmitida. A medida que aumenta el número de amplitudes, se pueden
transmitir más bits por símbolo. La tasa de datos en PAM se expresa como:

$$
R_b = \frac{M}{T_s}
$$

Donde:

- $R_b$ es la tasa binaria,
- $M$ es el número de niveles de amplitud,
- $T_s$ es el tiempo de símbolo.

Si la velocidad de transmisión aumenta, la separación entre símbolos disminuye, lo que
incrementa la susceptibilidad al ruido.

#### 2.2.3. Constelaciones de Símbolos

La potencia media de los símbolos aumenta conforme se incrementa la distancia entre
ellos. Reducir la potencia disminuye esta separación, lo que puede generar
interferencias.

El objetivo es maximizar la separación entre los símbolos para minimizar errores. En
**4-PAM**, el número "4" indica la cantidad de niveles en la constelación, al igual que
en **16-QAM**, donde "16" representa los niveles en la cuadratura.

En **16-QAM**, se transmiten 4 bits por símbolo:

- Los dos primeros bits corresponden a la parte real,
- Los dos últimos a la parte imaginaria.

El diseño de la constelación influye directamente en el proceso de decodificación.

#### 2.2.4. Densidad Espectral de Potencia de la Señal PAM

La probabilidad de detección de errores depende de la relación entre la potencia de la
señal y la potencia del ruido, expresada como:

$$
SNR = \frac{E_s}{N_0}
$$

Donde:

- $E_s$ es la energía del símbolo,
- $P_s$ es la potencia del símbolo,
- $T_s$ es el tiempo de símbolo,
- $N_0$ es la densidad espectral de potencia del ruido.

La relación señal-ruido (_Signal-to-Noise Ratio_, SNR) no se ve afectada por la forma del
pulso, sino por su energía. Transmitir pulsos estrechos permite alcanzar mayores
velocidades de transmisión. Sin embargo, en la transformada de Fourier, un pulso más
ancho en el dominio temporal se traduce en un espectro más estrecho en el dominio de
frecuencia. Pulsos más largos pueden mejorar la SNR, pero a costa de reducir la velocidad
de transmisión.

#### 2.2.5. Transmisión Multipulso

La transmisión multipulso permite dividir el canal en subcanales mediante la emisión de
múltiples pulsos ortogonales que coinciden en el tiempo. Esto posibilita la transmisión
de varios flujos de información a través del mismo canal.

En el receptor, los pulsos son tratados como señales complejas, lo que permite su
separación multiplicándolos por su conjugado:

$$
s'(t) = s(t) \cdot s^\*(t)
$$

Donde $s^\*(t)$ es el conjugado del pulso recibido. La ortogonalidad de los pulsos
permite distinguir cada flujo de información sin interferencias.

#### 2.2.6. Problema de la Asincronía de los Transmisores

La falta de sincronización entre transmisores compromete la ortogonalidad de los pulsos,
generando interferencia intercanal (_Inter-Carrier Interference_, ICI).

Las causas principales de la asincronía incluyen:

- Diferencias en la distancia entre el transmisor y el receptor, lo que introduce
  retardos.
- Ecos en el canal de transmisión que alteran la llegada de los pulsos.

La pérdida de ortogonalidad entre pulsos debido a la asincronía afecta la calidad de la
transmisión, requiriendo mecanismos de corrección y compensación.

### 2.3. Multiplexación por división de código (CDM)

A continuación, exploraremos el uso de la multiplexación por secuencia directa de
espectro ensanchado (_Direct Sequence Spread Spectrum_, DS-SS).

#### 2.3.1. Esquema del sistema DS-SS

El sistema DS-SS implica el uso de una señal de pulso rectangular con un período
determinado, la cual se multiplica por una secuencia pseudoaleatoria. Esta secuencia
contiene valores comprendidos entre {-1, 1} y se combina con un pulso rectangular de
período $T_c$ (periodo del chip). La multiplicación de la señal por la secuencia
pseudoaleatoria provoca un ensanchamiento espectral, ya que la secuencia varía más
rápidamente.

El factor de ensanchamiento se define como la relación entre la tasa de chips y la tasa
de símbolos. A pesar de este ensanchamiento, la potencia total de la señal permanece
constante, lo que reduce la densidad espectral de potencia. En el receptor, la
multiplicación por la misma secuencia pseudoaleatoria permite desensanchar la señal,
restaurándola y minimizando la introducción de ruido.

#### 2.3.2. Multiplexación del espectro ensanchado

La multiplexación del espectro ensanchado permite que diferentes transmisores compartan
simultáneamente tiempo y frecuencia, utilizando secuencias pseudoaleatorias distintas. Si
las secuencias son pseudoaleatorias, las señales resultantes serán cuasiortogonales, lo
que implica una interferencia mínima entre usuarios. Sin embargo, la interferencia
intercanal ocurre cuando una señal interferente, al multiplicarse por una secuencia
pseudoaleatoria diferente a la utilizada en la transmisión original, no se desensancha
completamente.

En la multiplexación con secuencias ortogonales, se requiere que las secuencias sean
completamente ortogonales para evitar interferencias. En este caso, la sincronización de
los transmisores es fundamental para preservar la ortogonalidad.

#### 2.3.3. Multiplexación por división de código (CDMA) para DL y UL

El uso de códigos en CDMA reduce las interferencias, pero requiere sincronización. En el
enlace descendente (DL), cada usuario emplea una secuencia ortogonal, y la estación base
garantiza la sincronización entre transmisores. No obstante, pueden producirse
interferencias intercanal debido a los ecos de la señal transmitida, ya que los múltiples
caminos pueden afectar la ortogonalidad.

En el enlace ascendente (UL), la asincronía entre transmisores no genera un aumento
significativo de la interferencia, lo que es ventajoso dado el elevado número de
usuarios. El rendimiento suele estar limitado por la interferencia entre usuarios en
lugar del ruido. Además, aparece el "efecto cerca-lejos" (_near-far effect_), lo que
implica que los transmisores deben ajustar su potencia de transmisión según la atenuación
de la señal, evitando que las señales de usuarios distantes se vean fuertemente afectadas
por interferencias de usuarios cercanos.

### 2.4. Multiplexación por división de frecuencia ortogonal (OFDM)

En este apartado, exploraremos la técnica de Multiplexación por División Ortogonal de
Frecuencia (_Orthogonal Frequency Division Multiplexing_, OFDM).

#### 2.4.1. Fundamentos de OFDM

OFDM es una técnica de transmisión que utiliza portadoras complejas ortogonales. Se
transmiten dos componentes de la señal, una en fase y otra en cuadratura, utilizando
modulación QAM. Los datos se transmiten mediante una combinación de señales de banda
estrecha ortogonales, conocidas como subportadoras. Cada subportadora se modula con un
esquema convencional, como QAM.

Las portadoras en OFDM son ortogonales entre sí, lo que significa que su producto interno
se anula. Esto evita interferencias entre ellas, permitiendo una alta eficiencia
espectral. La separación entre portadoras se define en función del ancho de banda
disponible, asegurando que no haya interferencias intercanal (ICI).

#### 2.4.2. Implementación digital de OFDM

La implementación digital de OFDM se basa en la conversión entre el dominio de frecuencia
y el dominio del tiempo mediante la Transformada de Fourier Discreta (DFT) y su inversa
(IDFT). Estos cálculos se realizan de manera eficiente mediante algoritmos FFT/IFFT
cuando el número de subportadoras es una potencia de 2.

#### 2.4.3. Transmisión multicanal en presencia de ecos

En canales con ecos, pueden generarse interferencias intersímbolo (ISI). Para mitigarlas,
se utilizan intervalos de guarda entre símbolos, aumentando el periodo de símbolo para
evitar solapamientos. Sin embargo, un periodo de símbolo demasiado largo reduce la
eficiencia espectral.

Para mejorar el rendimiento, se emplea una extensión cíclica del símbolo OFDM. Esta
técnica elimina la interferencia entre subportadoras, manteniendo la ortogonalidad de los
pulsos y mejorando la robustez de la transmisión en entornos dispersivos.

#### 2.4.4. Acceso múltiple por división ortogonal de frecuencia (OFDMA)

OFDMA es una extensión de OFDM utilizada para la multiplexación de usuarios. En el enlace
descendente, cada usuario recibe un subconjunto de subportadoras, asegurando la
ortogonalidad mediante la extensión cíclica y la sincronización en la estación base.

En el enlace ascendente, se requiere sincronización precisa entre los usuarios para
evitar la pérdida de ortogonalidad y la generación de interferencias interusuario.

#### 2.4.5. Problema de la Relación de Potencia Pico a Promedio (PAPR)

El problema de PAPR surge cuando un gran número de portadoras genera picos de potencia
elevados en la señal transmitida, lo que puede provocar saturación en los amplificadores
de transmisión. Para mitigar este problema, es necesario reducir la ganancia del
amplificador, lo que limita el área de cobertura.

Este problema es más crítico en los transmisores de usuario en el enlace ascendente, ya
que afectan la eficiencia energética y la calidad de la transmisión. Para
contrarrestarlo, se pueden utilizar esquemas de modulación adaptativa, ajustando la
modulación QAM según la relación señal-ruido (SNR) de cada subportadora.

### 2.5. Multiplexación por División de Frecuencia en una Sola Portadora (SC-FDM)

Ahora exploraremos la Multiplexación por División de Frecuencia en una Sola Portadora
(SC-FDM), una alternativa a OFDM que aborda el desafío de la relación de potencia pico
promedio (PAPR) con mejoras notables.

#### 2.5.1. Multiplexación de Frecuencia de un Solo Portador (SC-FDM)

SC-FDM representa una alternativa a OFDM, enfocándose en mitigar el problema de la PAPR.
En SC-FDM, se implementa una precodificación mediante una Transformada Rápida de Fourier
de tamaño M (FFT-M) en los M símbolos asignados a los M portadores del transmisor.

En el transmisor, los símbolos de salida de FFT-M se asignan a los portadores designados
al usuario, mientras que el resto se establecen en cero. Esta precodificación genera una
interpolación en el dominio tiempo-frecuencia-tiempo (con diferentes tamaños de FFT/IFFT)
y una modulación si hay desplazamiento de frecuencia.

Dado que los símbolos presentan una baja PAPR para constelaciones de símbolos dispersos,
la señal SC-FDM mantiene una baja PAPR. La relación cuadrática de la señal respecto a la
potencia promedio es significativamente mejor en SC-FDM en comparación con OFDM,
reduciendo la probabilidad de una PAPR elevada y permitiendo transmisiones a mayores
distancias. Para reducir aún más la PAPR, se pueden emplear constelaciones de menor
orden.

En el receptor, una vez ecualizada la señal mediante un ecualizador de frecuencia (FEQ),
la precodificación se revierte mediante una Transformada Rápida de Fourier Inversa de
tamaño M (IFFT-M).

### 2.6. Multiplexación en LTE

Este capítulo se centra en el uso de la multiplexación en LTE, abordando aspectos como la
multiplexación en el enlace ascendente y descendente, la multiplexación de usuarios y la
multiplexación de celdas.

#### 2.6.1. Tipos de Multiplexación en LTE

LTE emplea diversos esquemas de multiplexación según la necesidad:

- **Enlace ascendente/descendente:** LTE admite Duplexación por División de Frecuencia
  (FDD) y Duplexación por División de Tiempo (TDD) para gestionar la multiplexación en
  ambos enlaces.
- **Multiplexación de usuarios:** Se utiliza OFDMA (Acceso Múltiple por División de
  Frecuencia Ortogonal) en el enlace descendente y SC-FDMA (Acceso Múltiple de División
  de Frecuencia de un Solo Portador) en el enlace ascendente.
- **Multiplexación de celdas:** Implementa reutilización fraccional de frecuencia para
  una multiplexación eficiente en la celda mediante OFDM o SC-FDM.
- **Multiplexación de datos y señalización:** Utiliza multiplexación en los dominios
  temporal y de frecuencia, junto con enfoques estadísticos para transmitir datos y
  señalización.

#### 2.6.2. Reutilización Fraccional de Frecuencia

La reutilización fraccional de frecuencia en LTE permite que, en la zona central de la
celda, todas las frecuencias estén disponibles sin riesgo de interferencia entre celdas.
Sin embargo, en los bordes de la celda, las frecuencias se distribuyen entre celdas
adyacentes para minimizar interferencias.

#### 2.6.3. OFDMA y SC-FDMA en LTE

- **OFDMA en el enlace descendente:** LTE usa OFDMA para multiplexar datos de varios
  usuarios, con una estructura de tiempo que incluye marcos, subtramas y ranuras para
  optimizar la transmisión.
- **SC-FDMA en el enlace ascendente:** SC-FDMA se emplea para mantener una PAPR baja,
  mejorando la eficiencia del enlace ascendente.

Las tramas LTE tienen una duración de 10 milisegundos, con subtramas de 1 ms divididas en
dos slots. Dependiendo de la configuración del prefijo cíclico, los slots pueden contener
entre 6 y 7 símbolos OFDM.

#### 2.6.4. Sincronización en LTE

La sincronización en LTE es crucial para la transmisión y recepción precisa de datos.
Abarca la sincronización de la frecuencia portadora, los símbolos OFDM y las señales de
referencia. Las señales de sincronización primaria y secundaria permiten la
identificación de la celda y la sincronización de los dispositivos.

#### 2.6.5. Secuencias de Zadoff-Chu

Las secuencias Zadoff-Chu en SC-FDM ofrecen alta autocorrelación y baja correlación entre
secuencias distintas, reduciendo la PAPR. Estas secuencias se transmiten separadas de los
datos para evitar sobrepicos.

#### 2.6.6. Señales de Referencia

Para la demodulación coherente y la estimación de canal, LTE emplea señales de referencia
o símbolos piloto, esenciales para la adaptación de modulación y técnicas MIMO.

#### 2.6.7. Generación de Señales de Referencia

Las señales de referencia se generan mediante secuencias pseudoaleatorias para prevenir
aumentos en la PAPR. Los pilotos pueden transmitir con hasta 6 dB más de potencia que los
datos para reducir interferencias en celdas adyacentes.

### 2.7. Multiplexación en 5G-NR

#### 2.7.1. Nuevos Objetivos en 5G-NR

5G-NR introduce objetivos de multiplexación para distintas aplicaciones:

- **eMBB (Banda Ancha Móvil Mejorada):** Soporta videoconferencias y realidad virtual con
  altas tasas de transmisión.
- **mMTC (Comunicaciones Masivas de Tipo Máquina):** Permite la conexión de dispositivos
  IoT con bajo consumo energético.
- **URLLC (Comunicaciones Ultrarresilientes de Baja Latencia):** Garantiza baja latencia
  y alta confiabilidad para aplicaciones críticas.

#### 2.7.2. Numerología Variable en 5G-NR

5G-NR emplea numerología variable, es decir, diferentes espaciados de subportadoras con
anchos de banda ajustables para optimizar la eficiencia espectral y reducir la latencia.

#### 2.7.3. Interferencia Inter-Numerología en 5G-NR

Diferentes numerologías pueden coexistir en la misma banda, lo que puede generar
interferencia inter-numerología (ICI o INI). Para mitigar este problema, 5G-NR introduce
ranuras de duración variable.

#### 2.7.4. Multiplexación en 5G-NR - Señales de Referencia

5G-NR emplea diversas señales de referencia:

- **Señales de Sincronización (SS):** Utilizan secuencias m y tienen periodicidad
  variable en el ancho de banda.
- **Señales de Estimación de Canal (CSI-RS):** Permiten a los usuarios estimar el canal y
  ajustar la modulación.
- **Señales de Seguimiento de Fase (T-RS):** Rastrea variaciones de fase en frecuencias
  superiores a 25 GHz.

La implementación de estas técnicas en 5G-NR optimiza la eficiencia espectral, mejora la
robustez de la señal y permite soportar una variedad de aplicaciones con diferentes
requisitos de latencia y ancho de banda.

## 3. Técnicas MIMO

### 3.1. Introducción a las técnicas MIMO

En los canales de radio de banda estrecha, la respuesta del canal durante cada periodo de
símbolo se presenta como una ganancia compleja que varía temporalmente, debido a las
atenuaciones y los retrasos de los trayectos por los cuales se propaga la señal hasta el
receptor. En un sistema MIMO, la matriz del canal está formada por las ganancias
complejas que caracterizan los subcanales entre cada transmisor y receptor. Estas
ganancias dependen tanto de las amplitudes de los trayectos como de los retrasos, los
cuales son influenciados por el movimiento. La ganancia a una frecuencia específica
corresponde a la respuesta del canal en esa frecuencia.

### 3.2. Ventajas de los sistemas MIMO

Los sistemas MIMO ofrecen diversas mejoras en comparación con los sistemas tradicionales.
Entre ellas se destacan:

- **Ganancia de matriz**: Incremento de la potencia total recibida, que se logra
  principalmente en la etapa de recepción, donde se maximiza la potencia total recibida.
- **Ganancia de diversidad**: Reducción de la varianza de la distribución de ganancia
  equivalente. Se consigue mediante la combinación de ganancias estadísticamente no
  correlacionadas, favoreciendo la separación espacial entre las antenas. Esta ganancia
  no aumenta directamente la potencia, sino que se basa en la diversidad estadística,
  ayudando a mitigar los desvanecimientos.
- **Ganancia de multiplexación**: Aumento de los flujos independientes de información
  transmitida. Aunque existe interferencia entre los flujos en la recepción, esta puede
  cancelarse mediante el conocimiento de la respuesta del canal MIMO. El número máximo de
  flujos está determinado por el valor mínimo entre el número de transmisores y
  receptores.

Es importante señalar que la ganancia de diversidad y la ganancia de multiplexación no
pueden optimizarse simultáneamente, ya que existe un compromiso entre ambas. Mientras que
la ganancia de matriz se maximiza durante la recepción, la potencia durante la
transmisión se distribuye entre las antenas para limitar la potencia radiada.

### 3.3. Diversidad en los sistemas MIMO

La diversidad en los sistemas MIMO puede clasificarse en diferentes tipos, cada uno con
sus características específicas. Los principales tipos de diversidad son:

#### 3.3.1. Diversidad de receptor

La diversidad de receptor se refiere a la combinación de señales recibidas por diferentes
antenas del receptor. Se pueden emplear diversas técnicas para lograr esta diversidad:

- **Combinación de Cambio y Permanencia (SSC)**: Se elige una salida hasta que la
  ganancia desciende por debajo de un umbral. Solo se demodula la señal seleccionada, sin
  obtener ganancia de matriz.
- **Combinación de Selección (SC)**: Se selecciona la señal de mayor potencia para
  demodulación, estimando simultáneamente la potencia de todas las señales disponibles.
  Al igual que en SSC, no se obtiene ganancia de matriz.
- **Combinación de Razón Máxima (MRC)**: Las señales se combinan para maximizar la
  relación señal a ruido (SNR). Se demodulan todas las señales recibidas y se crea una
  "antena virtual" alineada con la dirección de la señal transmitida, logrando ganancia
  de matriz al agregar más antenas. Esta técnica requiere un conocimiento detallado del
  canal y busca maximizar la SNR para optimizar la ganancia.

#### 3.3.2. Diversidad de transmisor: Esquema de Alamouti

El esquema de Alamouti, basado en la técnica de **Transmisión de Código Espacialmente
Ortogonal (OSTBC)**, maximiza la ganancia de diversidad utilizando precodificación
espacial en la transmisión y combinación temporal en la recepción. Este enfoque no
requiere el conocimiento de la ganancia del canal en el transmisor, sino que se basa
únicamente en la estimación del canal en el receptor. La principal ventaja de este
esquema es su capacidad para aprovechar la precodificación espacio-temporal sin la
necesidad de información del canal en el transmisor. La ganancia de diversidad se obtiene
mediante la creación de una matriz ortogonal transmitida, lo que simplifica la
implementación del sistema y mejora su eficiencia.

#### 3.3.3. Diversidad de transmisor/receptor: Beamforming y MRC

La combinación de **precodificación espacial** en el transmisor, conocida como
**beamforming**, junto con la **combinación espacial** en el receptor mediante **MRC**,
permite obtener la máxima ganancia en un sistema MIMO. Ambos, transmisor y receptor,
deben contar con el conocimiento del canal. El objetivo del beamforming es maximizar la
ganancia total del patrón de radiación. Para implementar esta técnica, el transmisor
necesita información del canal, así como un canal de retorno para transmitir el vector de
beamforming al transmisor.

### 3.3. Multiplexación en sistemas MIMO

#### 3.3.1. Multiplexación con precodificación fija

En los sistemas MIMO, es posible transmitir subcanales independientes simultáneamente, lo
que permite utilizar múltiples antenas para transmitir diferentes flujos de información a
través de los mismos recursos radioeléctricos. La matriz de precodificación distribuye la
señal de cada flujo entre las antenas transmisoras, y la señal recibida se iguala
espacialmente para suprimir la interferencia entre los subcanales. La precodificación se
realiza inicialmente, ya que el número de flujos no siempre coincide con el número de
antenas transmisoras. Comúnmente, la matriz de precodificación es una matriz de vectores
unitarios escalada por un factor que considera la potencia disponible.

Cuando el número de antenas transmisoras (NT) es mayor o igual al número de antenas
receptoras (NR), la pseudoinversa de la matriz de canal puede convertirse en la inversa.
Sin embargo, el uso de la inversa o pseudoinversa puede amplificar el ruido, lo que
genera una baja relación señal-ruido (SNR). En estos casos, la potencia se distribuye
entre múltiples flujos, pero esta distribución puede no ser eficiente debido a la
interferencia significativa. Se exploran métodos de diseño de matrices de ecualización
que minimizan la amplificación del ruido, así como técnicas como la demodulación
iterativa y la cancelación de interferencias (VBLAST), que mejoran la eficiencia y la
robustez del sistema en presencia de ruido y distorsiones del canal.

#### 3.3.2. Multiplexación con precodificación adaptativa

Cuando el transmisor tiene conocimiento del canal, la precodificación puede ajustarse
mediante la descomposición en valores singulares (SVD) de la matriz de canal (H). Esta
técnica optimiza la ganancia de potencia de cada subcanal, asegurando la transferencia de
información máxima o la capacidad óptima del sistema. La precodificación adaptativa se
basa en la descomposición en valores propios para ajustar la asignación de potencia y
mejorar la eficiencia del sistema.

En la práctica, la posibilidad de transmitir varios flujos de información depende de la
existencia de caminos lo suficientemente diferenciados para separar los flujos. Factores
como la presencia de reflectores y el número de antenas son determinantes en este
proceso. Además, la precodificación requiere que el transmisor conozca la respuesta del
canal MIMO. En sistemas con Duplex por tiempo (TDD) o con canales recíprocos, la
información del canal puede estimarse en el transmisor. Sin embargo, si el canal cambia
rápidamente, esta información puede volverse obsoleta. A veces, es beneficioso transmitir
menos flujos que el número de flujos disponibles, lo que permite evitar subcanales con
bajas ganancias y mejorar la potencia de los flujos restantes, optimizando la eficiencia
y la calidad del sistema en entornos con variabilidad rápida del canal.

### 3.4. MIMO Multiusuario

#### 3.4.1. Introducción

La **Multiplexación Espacial de Usuarios** se implementa tanto en el enlace ascendente
como en el enlace descendente, permitiendo una gestión eficiente de la capacidad del
sistema. En la estación base, se emplea la cancelación de interferencias mediante el
conocimiento de las respuestas del canal (H). En el enlace ascendente, el número de
usuarios (NU) se limita a ser menor o igual al número de antenas receptoras (NR),
mientras que en el enlace descendente, NU no supera el número de antenas transmisoras
(NT). La proximidad de los usuarios presenta desafíos para su diferenciación, lo que
exige una mayor cantidad de antenas para una discriminación más precisa. La estación base
asume la responsabilidad de la estimación del canal en el enlace ascendente (UL).

#### 3.4.2. MU-MIMO: Enlace ascendente

En un canal multiusuario, este se representa mediante vectores que reflejan la ganancia
del canal de cada usuario. Cada fila de la matriz de canal corresponde a la respuesta del
canal de un usuario específico. Para mejorar la señal recibida de cada usuario, se
requiere un precodificador espacial que optimice la distribución de potencia entre los
usuarios. La ganancia de potencia de cada usuario se calcula en función de esta
asignación de recursos.

#### 3.4.3. MU-MIMO: Enlace descendente

Las técnicas de **Multiplexación Espacial de Usuarios** permiten la multiplexación en el
enlace descendente, mejorando la capacidad del sistema MIMO en entornos multiusuario. Al
igual que en el enlace ascendente, se utilizan métodos de precodificación espacial para
gestionar la interferencia entre los usuarios y maximizar la eficiencia en la
transmisión.

### 3.5. Estimación del canal MIMO

La estimación del canal en sistemas MIMO enfrenta el desafío de distinguir entre las
respuestas del canal cuando los símbolos piloto son transmitidos desde diversas antenas,
lo que puede causar entrelazamiento en su recepción.

#### 3.5.1. Estimación en fases de NT

Durante esta fase, se transmiten símbolos piloto en diferentes fases, que corresponden al
número de antenas de transmisión (NT), independientemente del número de antenas
receptoras (NR). Esta técnica facilita la estimación del canal mediante el uso de
símbolos piloto distribuidos a lo largo de las antenas transmisoras.

#### 3.5.2. Estimación utilizando códigos ortogonales

La estimación del canal también puede realizarse mediante el uso de **códigos
ortogonales**. En este enfoque, se transmiten símbolos piloto utilizando un código
ortogonal de longitud NT, que es independiente del número de antenas receptoras. Aunque
esta estrategia reduce el error por ruido, su efectividad puede verse afectada por las
variaciones rápidas en la respuesta del canal. Para mitigar este problema, se calcula el
promedio de la estimación, lo que contribuye a reducir el impacto de la variabilidad del
canal. La estimación precisa del canal es crucial para ajustar las técnicas de
procesamiento de señales y optimizar la transmisión de datos en entornos inalámbricos.

### 3.6. Técnicas MIMO para Canales Selectivos en Frecuencia

#### 3.6.1. Canal MIMO de Banda Ancha

Cuando se trabaja con canales MIMO en entornos con selecciones de frecuencia, la
respuesta en frecuencia del canal ya no es plana. En lugar de un único valor constante,
la respuesta de impulso en el dominio de la frecuencia varía dependiendo de la frecuencia
de la señal. En estos casos, la matriz de canal refleja esta variabilidad en el tiempo y
la frecuencia. Cuando la banda se estrecha, los pulsos transmitidos por las antenas
pueden aumentar de tamaño, lo que afecta la calidad y la eficiencia de la transmisión, ya
que la interferencia entre los distintos canales es más probable.

#### 3.6.2. MIMO-OFDM

Una de las técnicas clave para gestionar canales MIMO selectivos en frecuencia es la
combinación de **OFDM (Orthogonal Frequency Division Multiplexing)** con técnicas MIMO.
OFDM se utiliza para dividir el canal de comunicación en varios subcanales de frecuencia
más estrechos, lo que convierte un canal de banda ancha en múltiples subcanales de banda
estrecha. Cada subcanal es plano, lo que facilita la aplicación de técnicas MIMO, tales
como la multiplexación espacial y la precodificación, portadora a portadora. Al aplicar
técnicas MIMO en el mismo portador OFDM para las señales de todas las antenas, los
efectos de variabilidad del canal, como el desvanecimiento selectivo en frecuencia, se
mitigan eficazmente, asegurando una transmisión más robusta y eficiente.

### 3.7. MIMO en LTE

#### 3.7.1. Clasificación de Técnicas MIMO en LTE

La norma LTE especifica el uso de técnicas MIMO solo para la transmisión, no para la
recepción, dejando a los fabricantes de equipos la libertad de decidir cómo
implementarlas en el lado del receptor. Esto implica que, aunque las técnicas MIMO de
transmisión son estándares en LTE, las técnicas MIMO para recepción son más flexibles y
dependen del equipo de usuario final. Las técnicas MIMO para usuarios únicos se utilizan
principalmente en el **enlace descendente (DL)**, donde hay un mayor número de antenas
transmisoras. Las técnicas MIMO multiusuario, aunque no están explícitamente definidas en
el estándar LTE, están soportadas por mecanismos de soporte en la infraestructura de la
estación base.

#### 3.7.2. Diversidad de Transmisión

Una de las principales técnicas de diversidad es **SFBC (Space Frequency Block Coding)**,
que utiliza dos antenas y dos portadoras adyacentes para la transmisión. Esto permite una
ganancia de diversidad significativa al transmitir la misma información de manera
espacialmente y frecuencialmente redundante. Una variante más compleja, **SFBC & FSTD
(Space Frequency Block Coding & Frequency Switch Transmit Diversity)**, emplea 4 antenas
y 4 portadoras adyacentes, lo que maximiza la eficiencia espectral mientras se mantiene
una ganancia de diversidad alta. El esquema sigue la técnica de **Alamouti** y permite
una utilización más eficiente del espectro.

#### 3.7.3. Beamforming / Multiplexación

Tanto la **multiplexación con precodificación** como el **beamforming** utilizan técnicas
de matriz de precodificación o vectores de beamforming para transmitir la información de
manera optimizada. Estas técnicas requieren que el usuario estimé la respuesta del canal
y la envíe a la estación base, lo que puede generar un gran volumen de datos. Además, el
número de flujos o capas ($N_T, N_R$) que el usuario desea transmitir también debe ser
estimado, ya que un mayor número de capas implica una distribución más baja de potencia,
lo cual puede afectar la calidad de la señal.

#### 3.7.4. Codebooks

En LTE, se utilizan **codebooks** para gestionar la retroalimentación asociada a la
técnica MIMO. Estos codebooks contienen vectores o matrices de precodificación
predefinidos. Los usuarios no transmiten directamente estos vectores, sino que
seleccionan índices de matrices o vectores (PMI – Precoding Matrix Indicator) y
especifican el número de flujos que desean usar (RI – Rank Indicator). Los vectores en
estos codebooks son unitarios, lo que garantiza que la potencia total de cada flujo se
conserve, y los coeficientes asociados tienen un módulo de 0 o 1.

#### 3.7.5. Multiplexación con CDD

En el caso de **CDD (Cyclic Delay Diversity)**, se emplea una matriz de precodificación
cuando no se recibe retroalimentación de PMI. Esta técnica emplea un **retardo cíclico**
en la señal transmitida para generar diferentes matrices de precodificación, lo que
mejora las condiciones de propagación en algunos portadores de frecuencia. Aunque esta
técnica no está diseñada para multiplexar señales, en LTE se utiliza para generar
múltiples matrices de precodificación que mejoran la señal en algunos portadores a costa
de una pérdida en otros.

#### 3.7.6. Beamforming con señales de referencia específicas

En LTE, el **beamforming con señales de referencia específicas** se lleva a cabo mediante
un precodificador y un combinador espacial. Si la estación base conoce la respuesta del
canal, no es necesario que el usuario especifica un vector de beamforming, ya que la
estación base puede usar el vector óptimo. Sin embargo, si el usuario no tiene acceso a
esta información, se utilizan **señales de referencia específicas** para que el usuario
pueda estimar directamente el vector de beamforming. Esta técnica permite una estimación
precisa del canal y un mejor control de la dirección de la señal transmitida.

#### 3.7.7. Señales de referencia para estimación de canal

En LTE MIMO, se emplean varias señales de referencia para la estimación del canal. Las
más importantes son las **Cell-Specific Reference Signals (CRS)**, utilizadas para la
estimación del canal y para la demodulación de la señal, y las **User-Specific
Demodulation Reference Signals (DM-RS)**, que se usan específicamente para la estimación
del canal en la demodulación cuando se aplica precodificación sin codebook.

#### 3.7.8. MU-MIMO

La tecnología **MU-MIMO** (Multi-User MIMO) permite que una estación base se comunique
simultáneamente con múltiples dispositivos mediante la formación de haces (beamforming).
Esto mejora tanto la calidad de la señal como el rendimiento general del sistema. En los
casos de **TDD (Time Division Duplexing)**, la estación base puede estimar el canal y
aplicar la precodificación adecuada para cada usuario de manera transparente. En **FDD
(Frequency Division Duplexing)**, la transmisión y recepción de señales se realiza en
diferentes frecuencias, por lo que el proceso requiere que las direcciones de formación
de haces de los usuarios sean ortogonales entre sí, lo que reduce las interferencias.

### 3.8 MIMO en 5G-NR

#### 3.8.1. MIMO de ondas milimétricas

En **5G NR** (New Radio), las técnicas MIMO se aplican a frecuencias **mmWave** (ondas
milimétricas) que van por encima de los 6 GHz. En estas frecuencias, las pérdidas de
propagación son significativas y los objetos más pequeños pueden bloquear la señal. Para
contrarrestar estas pérdidas sin aumentar la potencia de transmisión, se utiliza un mayor
número de antenas para realizar **beamforming**. Las dimensiones más pequeñas de las
antenas permiten que se utilicen muchas antenas en estas frecuencias, lo que mejora el
enfoque y la cobertura de la señal.

#### 3.8.2. Complicaciones en Hardware de Estación Base

El uso de un gran número de antenas en la estación base complica la implementación del
hardware debido a los desafíos en la canalización de las señales digitales para el
beamforming digital. Esto requiere una infraestructura avanzada y técnicas de
procesamiento de señales para manejar eficazmente las múltiples señales y antenas.

#### 3.8.3. Beam Sweeping

El **beam sweeping** es una técnica en la que la estación base cambia periódicamente las
direcciones de los haces de manera analógica. El usuario puede entonces estimar cuál es
la dirección en la que recibe la mayor potencia y notificar a la estación base para que
se asignen recursos a esa dirección. Esta técnica ayuda a optimizar el rendimiento en
canales mmWave al permitir una mejor selección de la dirección de transmisión.

#### 3.8.4. Estructuras Híbridas de Antena

En **5G NR**, se emplean **estructuras híbridas de antenas**, que combinan un
**beamforming analógico** (para el control de la dirección) con un **beamforming
digital** (para optimizar la asignación de recursos a bloques de frecuencia específicos).
Estas estructuras permiten que cada usuario reciba la señal más fuerte, mejorando así la
eficiencia general del sistema en bandas mmWave.

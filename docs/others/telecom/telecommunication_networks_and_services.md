---
sidebar_position: 1
authors:
  - name: Daniel Bazo Correa
description: Aprende lo necesario sobre los servicios y redes de telecomunicaciones.
title: Redes y Servicios de Telecomunicaciones
toc_max_heading_level: 3
---

## 1. Introducción a las redes de telecomunicaciones

### 1.1. Introducción

En la comunicación queremos intercambiar información (imagen, sonido, vídeo, etc.) ya sea
de manera analógica o digital. Para ello, se transforma la información en señales con el
fin de manipularla. En este tipo de señales el tiempo es fundamental y puede ser:

- **Continuo**, toma cualquier valor.
- **Discreto**, toma un conjunto finito.

Otro factor importante es la amplitud, que puede ser:

- **No cuantificada**, si toma cualquier valor.
- **Cuantificada**, si toma valores enteros.

A du vez, las señales según su naturaleza pueden ser:

- **Eléctrica**, si circula por un cable.
- **Radio**, si es transmitida por el aire.
- **Óptica**, si se propaga a través de un cable de fibra óptica.

### 1.2. Características de las señales

Las señales analógicas se caracterizan por su amplitud, frecuencia, fase y periodo.
Mientras que las señales digitales se caracterizan por los bits (unidad mínima de
información, 0 o 1), el tiempo de bit (tiempo que tarda en propagarse un bit), el signo
(conjunto de n bits) y el tiempo de signo (número de bits por el tiempo de bit).

A la hora de transmitir una señal es importante tener en cuenta el régimen binario. Este
se define como el número de bits que se transmiten por segundo.

### 1.3. Conversión señal analógico a digital

Las señales digitales tienen como ventaja: su capacidad de compresión, implementación de
sistemas para el control de errores, menor consumo y eficiencia en el almacenamiento,
menor degradación y transmisión a mayores distancias.

Por ello, resulta conveniente realizar conversiones de señales analógicas a digitales.
Para ello, el primer paso es recopilar la señal para posteriormente muestrearse.
Muestreada, se cuantifica y se codifica, obteniendo como resultado una secuencia de bits.

Cuando una señal analógica no sufre de modulación se le conoce como señal de banda base.
En el caso de una señal digital se conoce como código de línea. Si dicha señal se
transmite en el mismo rango de frecuencias con el que fue originado, a la transmisión se
le conoce como transmisión de banda base.

<aside>
💡 La **modulación** consiste en multiplicar la señal original por una sinusoide para realizar un desplazamiento en frecuencia llevando la señal a una frecuencia portadora.

</aside>

### 1.4. Sistema de telecomunicación

Un sistema de telecomunicación es el conjunto mínimo de elementos requeridos para
establecer un intercambio de información entre un emisor y un receptor. Se compone de un
elemento emisor que genera la información, un procesado de la transmisión para transmitir
la señal por el canal a utilizar, el canal que añade retraso, distorsión y ruido a la
señal, un procesado en la recepción para recuperar la señal original reduciendo los
errores agregados durante la transmisión y el receptor que consume la información.

#### 1.4.1. Sentido del flujo

Según el sentido del flujo en un sistema de comunicación este puede ser:

- **Simplex**, solo se transmite información en un sentido.
- **Half-duplex**, se transmite en ambos sentido pero no simultáneamente.
- **Duplex**, se transmite en ambos sentidos simultáneamente.

#### 1.4.2. Características del canal de comunicación

Algunos de los parámetros a tener en cuenta en el canal de comunicación son:

- El **ancho de banda de la señal**.
- El **ancho de banda del canal**: Este corresponde con el rango de frecuencias en el que
  al transmitir la señal no se producen errores. Corresponde con la caída del 70% o -3dB
  de la amplitud máxima de la señal. Por tanto, para poder transmitir de manera correcta
  el ancho de banda de la señal debe ser menor que el ancho de banda del canal.
- **Capacidad**: Cantidad de bits que se puede transmitir como máximo por el canal. Por
  tanto, para evitar errores el régimen binario debe ser menor o igual a la capacidad del
  canal. Esta capacidad es el resultado del producto de la eficiencia y el ancho de banda
  del canal, donde la eficiencia es máxima si se transmite por cable (eficiencia = 10) y
  mínima si se transmite vía radio (eficiencia = 1).
- **Velocidad de propagación**: Velocidad a la que se propaga la señal por el medio.
- **Tiempo de propagación**: Tiempo que tarda la señal en llegar al destino.
- **Error**: Errores del canal que se acoplan a la señal emitida debido a ruidos,
  distorsiones, etc. que se producen en el canal durante la transmisión. En el caso de
  señales digitales se utiliza la BER para obtener la probabilidad de que se produzca un
  error en 1 bit.

#### 1.4.3. Medios de transmisión

Los medios de transmisión pueden ser guiados (físicos, por ejemplo: cables de cobre,
coaxiales, etc.) o no guiados (inalámbricos, por ejemplo: señales de radio, microondas,
infrarrojas y luz).

En la transmisión de las ondas, los parámetros más destacados son la frecuencia y la
longitud de onda. Donde a mayor frecuencia la longitud de onda será menor, conteniendo
mayor información pero tendrá mayor dificultad a la hora de atravesar objetos. A menor
frecuencia, la longitud de onda será mayor por lo que contendrá menor información pero
será más fácil atravesar objetos.

Existen diferentes rangos de frecuencias que se pueden utilizar cuando se transmite una
señal:

- **Medium Frequency (MF)**: viajan por la superficie y soportan distancias de cientos de
  kilómetros.
- **High Frequency (HF):** viajan por la ionosfera (inestable) y soportan distancias de
  miles de kilómetros.
- **Very High Frequency (VHF) y Ultra High Frequency (UHF):** viajan por la troposfera,
  son ondas directas y reflejadas, con distancias de hasta 40 kilómetros.
- **Super High Frequency (SHF):** viajan vía satélite o por la superficie terrestre hasta
  los 40 km.

A su vez, la transmisión puede ser:

- **Direccional**: cuando la transmisión se centra en una única dirección.
- **Omnidireccional**: cuando la transmisión se realiza en múltiples direcciones.

### 1.5. Red de telecomunicación

Una red de telecomunicación es una infraestructura que permite conectar usuarios
(terminales/hosts) a una red con el fin de ofrecer un servicio. Identifica 3 grandes
grupos:

- Los terminales, que generan y consumen información.
- Los sistemas de acceso, que permiten conectar a los usuarios a la red.
- La infraestructura, compuesta por todos los elementos de la red que permiten la
  conexión por parte de los usuarios y el transporte de información dentro de la red.

#### 1.5.1. Topologías

Las conexiones de la red pueden seguir una topología:

La más robusta de las anteriores es la red mallada, sin embargo, el número de enlaces
crece con el número de usuarios, los enlaces pueden tener distancias prohibitivas, estos
enlaces pueden requerir recursos que no se estén utilizando de manera eficiente y cada
vez que se añade un nuevo usuario hay que reestructurar la red.

#### 1.5.2. Organización de la información a transmitir

Los mensajes (conjunto de bits) a transmitir dentro de la red se agrupan en paquetes con
información de cabecera (header) y cola. En la cabecera se suele encontrar información
para identificar el origen y destino del paquete, mientras que en la cola se cuenta con
información de control para el manejo de errores. En el caso de que un mensaje sea muy
grande se puede segregar en múltiples paquetes.

#### 1.5.3. Difusión del mensaje

El mensaje se puede difundir dentro de la red de diferentes maneras:

- En **broadcast**, si la información se transmite a todos los usuarios de la red.
- En **multicast**, si la información se transmite a múltiples usuarios de la red.
- En **unicast**, si la información se transmite a un solo usuario de la red.
- En **anycast**, si la información se transmite al usuario más cercado de la red.

#### 1.5.4. Clasificación según el área de cobertura

Según el área de cobertura las redes se pueden clasificar en:

- **Personal Area Network (PAN)**, ej.: NFC, Bluetooth.
- **Local Area Network (LAN)**, ej.: una red local de casa.
- **Metropolitan Area Network (MAN)**, ej.: la red de conexiones de la UMA.
- **Wide Area Network (WAN)**, ej.: internet.

#### 1.5.5. Clasificación según localización del terminal

Las redes pueden ser fijas o móviles dependiendo de la localización del terminal. Además,
también se pueden diferenciar en terrestres si los nodos y terminales están en tierra, en
satélites si los terminales están en tierra y algunos nodos están en satélites y en
espaciales si hay pocos terminales y los nodos están fuera.

#### 1.5.6. Clasificación según el modelo de comunicación (cómo se manda información a través de la red)

Los sistemas pueden ser:

- **De difusión**: los terminales comparten el medio de transmisión y son ellos los
  encargados de ver si el mensaje que reciben es para ellos o no. Ej.: LAN inalámbrica,
  sistemas en anillo o en bus.
- **De conmutación**: se establece una conexión entre el emisor y receptor antes de
  empezar a transmitir, liberando los recursos finalizada la transmisión. Ej.: sistemas
  con topología jerárquica o en árbol, en estrella o mallada.

Por ejemplo, las redes grandes (como Internet) se caracterizan por seguir una topología
en árbol o jerárquica, diferenciando dos niveles: nivel de acceso y transporte. Los
usuarios se conectan a la red a través de enlaces y conmutadores de acceso. Dentro de
este tipo de redes existen interfaces que permiten comunicar equipos de distintos
fabricantes.

#### 1.5.7. Técnicas de conmutación

Los sistemas de conmutación se pueden diferenciar en 2 tipos:

- **Conmutación de circuitos**: se establece una conexión física entre el origen y
  destino, luego realiza la transmisión y finalmente libera los recursos. Es utilizado en
  redes telefónicas privadas y públicas.
  - Ventaja: una vez establecida la conexión la transmisión es rápida.
  - Desventajas: hay que esperar un tiempo a que se establezca la conexión, realiza un
    uso ineficiente de los recursos, si llegan nuevas peticiones y el canal está ocupado
    descarta las peticiones.
- **Conmutación de paquetes**: establecida la conexión, manda paquetes que se van
  introduciendo en una cola para ir siendo procesados. Estos paquetes se almacenan y se
  retransmiten en caso de error. El tiempo que tarda en propagarse el paquete depende del
  número de paquetes, régimen binario, tamaño de paquete y número de nodos. La
  conmutación de paquetes a su vez puede ser de 2 tipos:
  - **Conmutación de paquetes mediante datagramas**: se caracterizan por no estar
    ordenados, los paquetes cuentan con una secuencia para luego en el receptor
    ordenarse, cada paquete tiene la dirección del destino y siguen caminos distintos
    cada paquete (lo que puede afectar en los retardos).
  - **Conmutación de paquetes mediante circuito virtual**: se crea un circuito virtual
    donde el primer paquete que se manda tiene la dirección del destino, se caracteriza
    por llegar en orden y el primer paquete establece el camino para el resto de
    paquetes.

#### 1.5.8. Orientado a conexión

Que un sistema de comunicaciones sea orientado a conexión significa que se establece una
conexión previa a intercambiar información, lo que permite crear sistemas más fiables
(menor pérdida de paquetes), permite establecer control de flujo y errores, pero no es
óptimo para redes donde la latencia sea un requisito importante.

#### 1.5.9. Indicadores

Algunos de los indicadores a tener en cuenta en las redes de telecomunicaciones son:

- **Latencia**: tiempo que tarda un paquete en ser procesado desde que se mandó la
  petición.
- **Throughput**: número de bits que se transmite en un instante de tiempo.
- **Jitter**: la varianza del retardo entre paquetes de un mismo mensaje, siendo crítico
  en sistema de tiempo real.

#### 1.5.10. Problemas de las comunicaciones

Todos los sistemas de comunicaciones presentan los siguientes problemas:

- Identificar a los usuarios → **Direccionamiento**.
- En el uso eficiente de los recursos → **Multiplexación**.
- Conocer el número de enlaces requeridos → **Dimensionado**.
- Mensajes del conocimiento del estado de la red → **Señalización**.

Además de estos problemas, las comunicaciones móviles presentan otros problemas:

- Movimiento de los terminales → **Roaming**.
- Movimiento de los terminales durante la comunicación → **Handover**.
- Señalización de llamadas (**Paging**) y **actualización de localizaciones**.
- Establecer mecanismos para interpolar elementos → **Normalización**.
- Eficiencia del espectro radioeléctrico → **Sistemas celulares**.

Para el caso de Internet, este permite conectar redes diferentes utilizando redes de
transporte y acceso. Presentan los mismos problemas anteriores además de:

- Los usuarios crean y consumen contenido con requisitos diferentes, lo que requiere
  establecer métricas para medir el rendimiento de la red (Quality of Experience (QoE) y
  Quality of User (QoU)).
- Determinar el camino que deben seguir los paquetes dentro de la red. Lo que se conoce
  como **encaminamiento**.
- Necesita de sistemas para controlar el flujo de información, así como de sistemas capaz
  de detectar y gestionar errores de manera automática.

## 2. Principios sobre dimensionado de redes, sistemas de colas

### 2.1. Definiciones

Una cola se refiere a una región designada para almacenar solicitudes cuando un servidor
se encuentra en un momento de alta demanda y no puede procesar más peticiones. En esta
situación, la solución implica encontrar un equilibrio entre el costo y la calidad de la
experiencia del usuario.

Por lo tanto, es esencial dimensionar el sistema considerando el nivel de uso previsto,
con el propósito de mejorar la satisfacción del usuario y optimizar el rendimiento de la
red. En este sentido, el objetivo principal consiste en minimizar la latencia y maximizar
el throughput.

<p align="center">  
  <img src={require("../../../static/img/docs/others/telecom/Untitled.png").default}/>  
  <br />
</p>

Con la imagen anterior, cuando un usuario envía solicitudes a un servidor, estas
solicitudes son encoladas, y el servidor las procesa siguiendo un conjunto predefinido de
reglas.

### 2.2. Componentes

En lo que concierne a la parte del cliente, consideramos:

- El **número de clientes**, que puede ser finito o infinito.
- Las **peticiones**, que pueden ser de naturaleza determinista (siguen un patrón
  predecible) o aleatoria (siguen una función de distribución conocida como esperanza).
- El **tiempo entre las llegadas de las solicitudes**, que representa el tiempo
  transcurrido entre dos peticiones consecutivas.
- La **tasa media de llegada**, que indica la cantidad de solicitudes que llegan por
  unidad de tiempo.

En lo que se refiere a la parte de la cola, se contemplan los siguientes aspectos:

- La **cola** puede ser finita o infinita. Cuando la cola es finita y se llena, las
  nuevas solicitudes se descartan.
- El **tiempo de espera en la cola**, que representa el tiempo promedio que una solicitud
  aguarda en la cola antes de ser atendida.
- El **número de solicitudes en cola**, que indica cuántas solicitudes están pendientes
  de ser procesadas en un momento dado.

En relación con la parte del servicio, se incluyen los siguientes elementos:

- El **número de servidores** disponibles.
- La **tasa de servicio**, que indica cuántas solicitudes puede procesar el servidor en
  una unidad de tiempo.
- El **tiempo de servicio**, que es el tiempo necesario para que el servidor complete el
  procesamiento de una solicitud.

En lo que respecta al sistema en su conjunto, se consideran:

- El **número total de solicitudes presentes**, tanto en cola como las que están siendo
  procesadas por el servidor en un momento dado.
- El **tiempo total transcurrido** desde que se envía una solicitud hasta que se recibe
  una respuesta.

Cuando se modela un sistema teniendo en cuenta el tiempo de espera en la cola, el sistema
sigue una distribución exponencial. Por otro lado, si se modela teniendo en cuenta la
tasa media de llegada, el sistema sigue una distribución de Poisson.

Además de estos elementos, otro aspecto crucial en los sistemas de colas es la
intensidad, que se define como el número de solicitudes esperadas mientras se procesa una
solicitud. Si la intensidad es mayor o igual que la capacidad del sistema, el sistema
estará mal dimensionado.

## 3. Multiplexación

### 3.1. Introducción

La multiplexación es una técnica que posibilita la compartición de recursos, lo que, a su
vez, conlleva un ahorro en costes. Esta técnica permite la transmisión simultánea de
múltiples flujos de información a través de un mismo medio físico.

La multiplexación puede manifestarse en dos formas principales:

1. En situaciones donde los usuarios generan señales que no son directamente compatibles
   para su combinación, se emplea un dispositivo denominado multiplexor para llevar a
   cabo esta operación. Ejemplo de ello es la tecnología ADSL.
2. Por otro lado, en algunos casos, los usuarios generan información en un formato que
   permite su posterior separación sin requerir un dispositivo multiplexor. Un ejemplo de
   esto es la transmisión de radio FM.

La duplexación, por su parte, es una variante de la multiplexación que se refiere a la
combinación de flujos de transmisión y recepción de un mismo usuario en un mismo canal o
medio de comunicación.

<p align="center">  
  <img src={require("../../../static/img/docs/others/telecom/Untitled 1.png").default}/>  
  <br />
</p>

La canalización o acceso múltiple es una forma de multiplexación en la cual la relación
entre los flujos de información y los canales asignados varía con el tiempo, siendo
especialmente común en sistemas de comunicación móvil.

En cuanto a la nomenclatura, se distinguen tres enfoques principales:

1. **Multiplexación**: a. **FDM** (Frequency Division Multiplexing): Multiplexación por
   División de Frecuencia. b. **TDM** (Time Division Multiplexing): Multiplexación por
   División de Tiempo. c. **CDM** (Code Division Multiplexing): Multiplexación por
   División de Código.
2. **Canalización**: a. **FDMA** (Frequency Division Multiple Access): Acceso Múltiple
   por División de Frecuencia. b. **TDMA** (Time Division Multiple Access): Acceso
   Múltiple por División de Tiempo. c. **CDMA** (Code Division Multiple Access): Acceso
   Múltiple por División de Código.
3. **Duplexación**: a. **FDD** (Frequency Division Duplexing): Duplexación por División
   de Frecuencia. b. **TDD** (Time Division Duplexing): Duplexación por División de
   Tiempo. c. **CDD** (Code Division Duplexing): Duplexación por División de Código (No
   se utiliza debido a problemas de saturación).

### 3.2. Multiplexación por división en frecuencia

La multiplexación por división de frecuencia (FDM) consiste en asignar a cada flujo de
información una banda de frecuencias distinta dentro del medio de transmisión,
permitiendo que estos flujos se transmitan de forma simultánea durante todo el tiempo.

<p align="center">  
  <img src={require("../../../static/img/docs/others/telecom/Untitled 2.png").default}/>  
  <br />
</p>

Generalmente, todas las señales que se desean multiplexar ocupan la misma banda de
frecuencias. Por esta razón, se realiza una traslación de banda mediante la modulación
para llevar cada señal a una frecuencia portadora diferente.

Sin embargo, la multiplexación en frecuencia presenta algunas desventajas:

- **Elevada PAPR (Peak To Average Power Ratio)**: Esto afecta la distancia máxima de
  transmisión, ya que señales con alta PAPR pueden experimentar problemas de distorsión
  en la señal.
- **Intermodulación entre canales**: Cuando múltiples señales se superponen en la misma
  banda de frecuencia, pueden generar interferencias y distorsiones que afectan la
  calidad de la transmisión.
- **Ineficiencia en el uso del espectro debido al uso de bandas de guarda**: Para evitar
  la interferencia entre señales, es necesario asignar bandas de guarda entre las bandas
  de frecuencias de las señales individuales, lo que puede resultar en un uso subóptimo
  del espectro.

Cuando se aplica la multiplexación por división de frecuencia en transmisiones a través
de fibra óptica, recibe el nombre de "multiplexación por división en longitud de onda"
(WDM), y se utiliza para aprovechar al máximo la capacidad de transmisión de las fibras
ópticas al transmitir múltiples señales en diferentes longitudes de onda.

### 3.3. Multiplexación por división en tiempo

La técnica conocida como Multiplexación por División de Tiempo (TDM) implica asignar a
cada flujo de información el ancho de banda total del medio de transmisión durante una
fracción del tiempo que se repite periódicamente. Esta estrategia es especialmente
adecuada para señales digitales. La información se organiza en tramas con intervalos de
tiempo, cada uno asociado a un canal físico, lo que permite utilizar eficientemente todo
el ancho de banda de transmisión. Cada canal físico puede transportar información de uno
o más flujos de datos.

Es posible organizar las tramas utilizando TDM síncrona, donde la capacidad asignada a
cada flujo es constante, o emplear TDM asíncrona, donde la capacidad varía con el tiempo
según la demanda.

<p align="center">  
  <img src={require("../../../static/img/docs/others/telecom/Untitled 3.png").default}/>  
  <br />
</p>

El entrelazado de los flujos de información puede llevarse a cabo de dos maneras:

1. **Entrelazado de palabra**: En este método, se organiza la información en palabras,
   donde una palabra es un conjunto de bits.

   <p align="center">  
      <img src={require("../../../static/img/docs/others/telecom/Untitled 4.png").default}/>  
      <br />
   </p>

2. **Entrelazado de bit**: En este caso, la información se entrelaza a nivel de bits.

   <p align="center">  
      <img src={require("../../../static/img/docs/others/telecom/Untitled 5.png").default}/>  
      <br />
   </p>

El proceso de demultiplexión implica identificar los bits correspondientes a cada
intervalo mediante una marca que se inserta de forma periódica, conocida como FAS (Frame
Alignment Signal). Esta marca se puede realizar de varias maneras, ya sea a través de un
código de línea utilizando un solo bit o mediante la adición de una secuencia de bits.

### 3.4. Multiplexación por división en código

La técnica de multiplexación por códigos consiste en asignar a cada flujo de información
la totalidad del ancho de banda disponible en el medio de transmisión durante todo el
período de transmisión. En este método, se utilizan señales especiales conocidas como
códigos para lograr este compartimiento efectivo del ancho de banda.

<p align="center">  
  <img src={require("../../../static/img/docs/others/telecom/Untitled 6.png").default}/>  
  <br />
</p>

Es importante destacar que la multiplexación y demultiplexación en tiempo y frecuencia
son casos particulares de lo que se conoce como ortogonalización de señales. Dos señales
se consideran ortogonales cuando sus valores no coinciden en tiempo o frecuencia, lo que
significa que su producto escalar (donde se multiplica cada componente de uno de los
códigos por la componente correspondiente en el otro código y luego se suman) es igual a
cero. Esta propiedad fundamental permite la compartición efectiva de un medio de
transmisión, ya que las señales no interfieren entre sí y se pueden recuperar de manera
independiente.

## 4. Técnicas de acceso al medio

### 4.1. ¿Qué es una colisión?

Se presenta una situación común en algunas redes en las que el medio de transmisión es
compartido entre múltiples terminales, lo que puede llevar a que las señales de
diferentes usuarios tengan características similares. Si estas señales coinciden en el
tiempo, pueden causar problemas en la transmisión.

Una colisión se produce cuando las señales de dos o más terminales se superponen en el
medio de transmisión al mismo tiempo, lo que impide su correcta interpretación.

Cuando ocurre una colisión, el terminal receptor recibe dos señales simultáneamente, lo
que resulta en un nivel de señal más alto de lo normal, lo que a menudo se interpreta
como una colisión. Si la red utiliza un cable como medio de transmisión, la señal
resultante tiene casi el doble de energía de lo esperado, mientras que en redes
inalámbricas, la señal recibida suele ser de muy baja energía. El transmisor detecta la
colisión gracias a la recepción de señales ACK (confirmación de recepción) enviadas por
el receptor.

### 4.2. Técnicas de acceso aleatorio

A continuación se muestra un resumen de cómo funcionan las técnicas de acceso aleatorio
Aloha, CSMA, CSMA/CD y CSMA/CA:

1. **Aloha**:
   - **Funcionamiento**: En Aloha, los dispositivos transmiten datos en cualquier momento
     sin coordinación central. Cada dispositivo escucha el canal para detectar
     colisiones.
   - **Ventajas**: Simple y fácil de implementar.
   - **Desventajas**: propenso a colisiones, lo que puede generar retransmisiones y un
     uso ineficiente del canal.
2. **CSMA (Acceso Múltiple por Detección de Portadora)**:
   - **Funcionamiento**: Los dispositivos verifican la presencia de una señal antes de
     transmitir. Si el canal está ocupado, esperan un tiempo aleatorio antes de intentar
     nuevamente.
   - **Ventajas**: Reduce colisiones en comparación con Aloha.
   - **Desventajas**: Aún puede haber colisiones debido a retrasos en la detección.
3. **CSMA/CD (Acceso Múltiple por Detección de Colisiones)**:
   - **Funcionamiento**: Utilizado principalmente en redes Ethernet cableadas. Los
     dispositivos escuchan el canal mientras transmiten y detectan colisiones en tiempo
     real. Si detectan una colisión, detienen la transmisión y esperan antes de
     reintentar.
   - **Ventajas**: Eficiente en la detección y manejo de colisiones en redes cableadas.
   - **Desventajas**: Menos relevante en redes modernas, como Ethernet Gigabit, que
     utilizan CSMA/CA o conmutación.
4. **CSMA/CA (Acceso Múltiple por Detección de Colisiones y Evitación)**:
   - **Funcionamiento**: Utilizado en redes inalámbricas Wi-Fi. Antes de transmitir, los
     dispositivos solicitan permiso y escuchan el canal para verificar si está libre.
     Utiliza un mecanismo de "espera antes de transmitir" para evitar colisiones.
   - **Ventajas**: Eficiente para evitar colisiones en redes inalámbricas donde la
     detección de colisiones es más difícil.
   - **Desventajas**: Agrega una sobrecarga de control y puede reducir la eficiencia en
     redes congestionadas.

En resumen, Aloha es simple pero propenso a colisiones, CSMA reduce colisiones al
verificar la disponibilidad del canal, CSMA/CD es adecuado para redes cableadas y maneja
colisiones en tiempo real, y CSMA/CA es eficaz en redes inalámbricas al evitar colisiones
mediante el uso de protocolos de solicitud y espera.

## 5. Control de errores

### 5.1. Objetivos

El objetivo principal de cualquier sistema de comunicación es garantizar la fiabilidad y
eficiencia en la transmisión de datos. Sin embargo, el canal de comunicación introduce
errores debido a interferencias y ruido. Para medir la calidad de la transmisión,
utilizamos la tasa de error de bits (BER), donde un valor menor indica una mejor calidad
de la comunicación.

Para mitigar los errores introducidos por el canal, empleamos estrategias como la
redundancia de información y sistemas de control que permiten la recuperación de la
información original. Estos sistemas de control de errores se dividen en dos categorías
principales:

1. **ARQ (Solicitud de Repetición Automática):** Detecta los errores y solicita una
   retransmisión cuando se encuentra un paquete dañado. Adecuado para redes con retardo
   de propagación moderado, donde la retransmisión no introduce un excesivo retraso.
2. **FEC (Código de Corrección de Errores):** Detecta y corrige los errores directamente
   en el receptor, lo que es especialmente útil en situaciones en las que no se dispone
   de un canal de retorno o la retransmisión no es factible.

Es importante destacar que los errores pueden dividirse en dos categorías: **errores
simples**, que afectan a un solo bit en la transmisión, y **errores a ráfagas**, que
pueden afectar a múltiples bits consecutivos.

## 6. Encaminamiento

El encaminamiento dirige un paquete de datos desde su origen hasta su destino. Para
lograrlo, se emplean comúnmente tablas de encaminamiento, que son registros que contienen
información sobre las rutas disponibles hacia los distintos nodos de una red. Cada nodo
dentro de la red mantiene su propia tabla de encaminamiento, y estas tablas pueden
clasificarse en dos:

1. **Tablas Estáticas:** En estas tablas, la información se introduce manualmente por el
   administrador de la red. Adecuado para redes de menor tamaño que experimentan menores
   cambios.
2. **Tablas Dinámicas:** Estas tablas se actualizan automáticamente mediante protocolos
   de encaminamiento. Son especialmente útiles en redes más extensas y complejas, donde
   las rutas pueden cambiar con mayor frecuencia debido a la dinámica de la red. Los
   protocolos de encaminamiento permiten a los nodos intercambiar información y ajustar
   sus tablas de encaminamiento en tiempo real.

### 6.1. Forwarding y routing

El **encaminamiento**, también conocido como **routing**, es un proceso que implica la
actualización de las tablas de encaminamiento, donde los nodos de la red intercambian
información a través de un protocolo de encaminamiento. Este protocolo consiste en un
algoritmo que calcula la ruta óptima para transmitir los datos hacia su destino.

El **envío**, o **forwarding**, es la acción de encaminar el paquete en la dirección
adecuada hacia su destino. Requiere la presencia de routers que utilizan sus tablas de
encaminamiento para determinar la mejor ruta hacia el destino deseado.

#### 6.1.1. Métodos de forwarding

Existen varios métodos de forwarding utilizados en las redes:

1. **Ruta:** En este método, las tablas de encaminamiento contienen información detallada
   sobre la ruta completa hasta el destino.
2. **Next-hop:** En lugar de especificar la ruta completa, las tablas de encaminamiento
   solo indican el próximo salto necesario para alcanzar el destino.
3. **Host-specific:** Estas tablas contienen una entrada por cada terminal conectada a la
   red, lo que permite una segmentación muy detallada.
4. **Network specific:** Las tablas contienen únicamente una entrada por cada red,
   simplificando el encaminamiento para grupos de terminales similares.
5. **Default:** En este enfoque, se definen rutas específicas, y si ninguna coincide con
   el destino, se utiliza una entrada predeterminada (default).

#### 6.1.2. Características del routing

Cuando se trata de encaminamiento, se busca la mejor ruta entre la fuente y el destino,
que puede ser la más corta, la más rápida o la que minimice el consumo de energía, entre
otros factores. Para lograrlo, el protocolo de encaminamiento debe ser:

- **Correcto:** Debe encontrar la ruta adecuada.
- **Simple:** Debe minimizar la carga computacional y el tráfico de control.
- **Robusto ante fallos de red:** Debe ser capaz de adaptarse a situaciones de fallo sin
  perder la conectividad.
- **Estable:** Debe mantener la consistencia de las rutas en condiciones cambiantes de la
  red.
- **Óptimo:** Debe buscar la ruta que optimice los criterios definidos, como la velocidad
  o el consumo de recursos.

Además, el encaminamiento puede aplicarse tanto a redes orientadas a la conexión como a
redes no orientadas a la conexión:

- **Redes orientadas a la conexión:** En estas redes, se establece una ruta (llamada
  circuito virtual) durante la fase de establecimiento de la conexión entre la fuente y
  el destino. Todos los paquetes de una misma conexión siguen la misma ruta, ya que
  comparten identificadores comunes.
- **Redes no orientadas a la conexión (datagramas):** Cada paquete contiene la dirección
  de destino, como es el caso de Internet, donde los paquetes son independientes y se
  enrutan individualmente hacia su destino en función de su dirección.

#### 6.1.3. Clasificación de los protocolos de routing

La elección del método de encaminamiento puede variar según diferentes criterios:

- **Enrutamiento Salto a Salto (Hop-by-Hop):** La fuente especifica únicamente el
  destino, y los nodos intermedios observan esta dirección y determinan el siguiente
  salto en función de esta información.
- **Enrutamiento con Definición de Ruta en la Fuente (Source Routing):** La fuente es
  quien decide la ruta completa que deben seguir los datos, y los nodos intermedios
  simplemente envían el mensaje al siguiente nodo en la ruta predefinida.

En cuanto a la adaptabilidad de estos métodos a cambios en la topología de la red,
podemos clasificarlos en dos categorías:

- **Enrutamiento Estático:** En este tipo, las rutas se configuran manualmente y no se
  adaptan automáticamente a cambios en la topología de la red.
- **Enrutamiento Dinámico:** En el caso de los protocolos de enrutamiento dinámico, se
  pueden distinguir dos subtipos:
  - **Centralizado:** En este enfoque, existe un nodo central que desempeña un papel
    fundamental y controla todas las tablas de enrutamiento. Este nodo central recopila
    información de control de todos los demás nodos, ejecuta algoritmos de enrutamiento y
    distribuye la información actualizada a las tablas de enrutamiento de los nodos. Sin
    embargo, este sistema es vulnerable, ya que un fallo en el nodo central puede afectar
    gravemente a toda la red.
  - **Distribuido:** En este caso, todos los nodos en la red tienen roles similares. Cada
    nodo envía y recibe información de control, calcula sus propias tablas de
    enrutamiento y se adapta a los cambios en la topología de la red de manera autónoma.
    Este enfoque es más robusto, ya que no depende de un nodo central y puede adaptarse a
    los cambios en la red de manera más efectiva.

## 7. Modelos de referencia

### 7.1. Introducción

Para abordar un problema de tanta complejidad, se adopta la estrategia de agrupar
funcionalidades relacionadas para crear un modelo de referencia.

En el ámbito de las redes, se desarrollan arquitecturas que organizan estas funciones.
Estas arquitecturas comparten la característica de agrupar funciones relacionadas en
unidades conocidas como capas. Esta práctica ha dado lugar a la creación de una
arquitectura común que facilita la comunicación entre dispositivos de diversos
fabricantes.

### 7.2. Arquitectura en capas

#### 7.2.1. ¿En qué consisten?

Este enfoque consiste en organizar las funciones de una red en grupos relacionados, a su
vez, estas funciones se descomponen en subconjuntos conocidos como capas. Por ejemplo, la
capa 3 se comunica tanto con la capa 4 como con la capa 2. La capa 2 proporciona sus
servicios a la capa 3, la cual ejecuta sus funciones y transmite los resultados a la capa
4, y así sucesivamente.

Además, es importante destacar que una capa N de un equipo puede comunicarse con otra
capa N de un equipo distinto mediante protocolos específicos.

Este enfoque presenta varias ventajas, que incluyen la simplificación del diseño, la
facilidad para realizar modificaciones, la capacidad de dividir equipos para realizar
diversas tareas en paralelo y la interoperabilidad. Esta última permite que diferentes
fabricantes sigan un modelo común, lo que facilita la comunicación y la colaboración en
entornos de red heterogéneos.

#### 7.2.2. Protocolos

Los protocolos son un conjunto de reglas que regulan el intercambio de datos entre
diferentes entidades. Estos protocolos se distinguen por varios aspectos clave:

- **Semántica**: Define el significado de cada sección de bits en la comunicación.
- **Sintaxis**: Establece el formato de los datos, incluyendo el número y la disposición
  de los campos en la cabecera.
- **Temporización**: Determina la secuencia en la que se envían y reciben los mensajes.

Dentro de una misma capa, las entidades se comunican entre sí mediante el intercambio de
datos de protocolo, conocidos como Unidades de Datos de Protocolo (PDUs). Cada PDU consta
de una cabecera que contiene información de control y, por lo general, datos de usuario
que se presentan en forma de Unidades de Datos de Servicio (SDU).

Es importante destacar que la comunicación entre procesos en el mismo nivel es virtual,
lo que significa que no existe un enlace de comunicación directa utilizando servicios de
capas inferiores. En cambio, cada nivel recibe solicitudes de su nivel superior en forma
de Peticiones de Servicios de Aplicación (ASPs), las encapsula en PDUs y las envía a la
entidad correspondiente en el sistema receptor. Esto asegura que la comunicación entre
niveles sea eficiente y organizada.

### 7.3. Modelo OSI

Se trata de un sistema abierto que posibilita la comunicación entre sistemas diversos,
independientemente de su arquitectura. Está compuesto por siete capas organizadas
jerárquicamente, dispuestas de manera ascendente a descendente:

1. **Capa de Aplicación (Application Layer)**: La capa superior, que se encarga de
   proporcionar servicios de red a las aplicaciones del usuario final. Aquí, se
   encuentran protocolos y servicios que permiten la interacción con aplicaciones, como
   HTTP para la web.
2. **Capa de Presentación (Presentation Layer)**: Responsable de la traducción, cifrado y
   compresión de datos para garantizar la interoperabilidad entre sistemas con diferentes
   formatos de datos.
3. **Capa de Sesión (Session Layer)**: Esta capa se ocupa de establecer, mantener y
   finalizar las sesiones de comunicación entre dispositivos. Proporciona mecanismos para
   la gestión de diálogos y control de sincronización.
4. **Capa de Transporte (Transport Layer)**: Encargada de asegurar la entrega de datos de
   manera fiable y ordenada. Controla la segmentación y reensamblaje de datos, y utiliza
   protocolos como TCP y UDP.
5. **Capa de Red (Network Layer)**: Responsable de la gestión del encaminamiento y
   direccionamiento de datos en la red. Aquí, los routers toman decisiones sobre cómo
   transmitir paquetes a través de la red.
6. **Capa de Enlace de Datos (Data Link Layer)**: Se encarga de la transmisión de datos a
   nivel de enlace físico, garantizando la integridad de los paquetes y resolviendo
   colisiones en la capa de acceso al medio. Incluye subcapas, como la de control de
   acceso al medio (MAC).
7. **Capa Física (Physical Layer)**: La capa más baja, que se encarga de la transmisión
   de bits a través del medio físico, definiendo aspectos como el tipo de cable, voltajes
   y frecuencias.

Cada capa del modelo OSI tiene funciones específicas y trabaja en conjunto con las demás
para permitir la comunicación eficiente entre sistemas heterogéneos. La modularización en
capas facilita la interoperabilidad y el desarrollo de nuevas tecnologías de red.

#### 7.3.1. Organización de los niveles

Podemos identificar tres niveles fundamentales en la organización de sistemas de
comunicación:

1. **Niveles de Soporte de Red:** Coinciden con las capas 1, 2 y 3 (físicos, de enlace y
   de red) del modelo OSI. Se ocupan de la infraestructura y la logística necesaria para
   que la información viaje de un punto a otro.
2. **Niveles de Servicios de Soporte de Usuario:** Corresponden a las capas 5, 6 y 7
   (sesiones, presentación y aplicaciones) del modelo OSI. Permiten la interoperabilidad
   entre sistemas de software que, a priori, no están relacionados. Facilitan la
   comunicación y el intercambio de información entre diferentes aplicaciones y
   servicios.
3. **Nivel de Transporte:** Este nivel, identificado como el nivel 4 (transporte), se
   enfoca en la transmisión de datos de extremo a extremo. Se ocupa de garantizar que los
   datos lleguen de manera confiable y eficiente desde el origen hasta el destino,
   superando posibles obstáculos en el camino.

#### 7.3.2. Direcciones MAC

Cada equipo conectado a la red tiene su propia tarjeta de interfaz de red. La tarjeta de
red se distingue por una dirección física de 6 bytes (Por ejemplo, 05:02:01:06:2B:4C). En
dicha dirección, el bit menos significativo del primer byte define si la dirección es
unicast o multicast.

<p align="center">  
  <img src={require("../../../static/img/docs/others/telecom/Untitled 7.png").default}/>  
  <br />
</p>

La dirección de broadcast es FF:FF:FF:FF:FF:FF.

#### 7.3.4. Equipos de interconexión

Disponemos de varios elementos clave en una red:

1. **Repetidor:** Regenera la señal para extender la cobertura de una red local, ayuda a
   compensar el ruido, y se sitúa en el nivel físico. Es importante notar que existen
   repetidores pasivos que no regeneran la señal, simplemente la amplifican.
2. **Puente (Bridge):** Opera en la capa de enlace, filtra el tráfico entre puertos,
   dividiendo la red en segmentos. Cada segmento de red tiene un puerto correspondiente
   en el bridge. Asocia direcciones MAC a puertos, lo que le permite reenviar mensajes a
   puertos específicos según la dirección MAC de destino. Si no conoce la dirección MAC
   de destino, o si es una dirección de broadcast, actúa como un repetidor,
   retransmitiendo el mensaje por todos los puertos excepto el de origen.
3. **Router:** Opera en el nivel de red, toma decisiones sobre el puerto de salida y los
   nodos subsiguientes en la ruta. Debe tener conocimiento de la topología completa de la
   red para tomar decisiones informadas sobre cómo dirigir el tráfico.
4. **Conmutador (Switch):** Funciona en los niveles de enlace de datos y red. Realiza un
   mapeo entre direcciones IP y puertos de salida, lo que le permite determinar el puerto
   por el cual debe reenviarse un mensaje. Esto aumenta la eficiencia de la red al evitar
   la transmisión innecesaria de datos.
5. **Pasarela (Gateway):** Opera en niveles superiores a la capa de red y se encarga de
   la traducción entre dos dominios de red diferentes. Facilita la comunicación entre
   redes que pueden utilizar protocolos o arquitecturas distintas.

### 7.4. TCP/IP

El modelo TCP/IP se compone de cuatro capas:

1. **Capa de Aplicación:** Esta capa facilita la comunicación entre procesos o
   aplicaciones que se ejecutan en terminales separados. Es la capa más cercana al
   usuario y proporciona servicios directamente utilizados por las aplicaciones, como el
   intercambio de datos.
2. **Capa de Transporte o Extremo a Extremo:** Aquí, se ofrece un servicio de
   transferencia de datos de extremo a extremo. Su función principal es garantizar que
   los datos se entreguen de manera confiable y en el orden correcto entre el origen y el
   destino.
3. **Capa de Internet:** Esta capa se ocupa del enrutamiento de los datos desde su origen
   hasta su destino a través de redes interconectadas por dispositivos de enrutamiento.
   Asegura que los datos sigan el camino adecuado a lo largo de la red.
4. **Capa de Acceso a la Red:** Relacionada con la interfaz lógica entre un sistema final
   y una subred. Esta capa se encarga de la comunicación entre el sistema final y la red,
   asegurando que los datos sean transmitidos correctamente en el nivel más básico de la
   red.

#### 7.4.1. Encapsulamiento

<p align="center">  
  <img src={require("../../../static/img/docs/others/telecom/Untitled 8.png").default}/>  
  <br />
</p>

#### 7.4.2. TCP/IP vs OSI

- OSI especifica qué funciones pertenecen a cada uno de sus niveles. Los niveles de
  TCP/IP contienen protocolos independientes que pueden estar mezclados o coincidir con
  las necesidades del sistema.
- TCP/IP se estableció antes que OSI, por lo que el coste de cambio sería alto.
- Internet esta construido sobre el conjunto de protocolos TCP/IP.

#### 7.4.3. Modelo de capas, cross-layer y layer-less

En el enfoque de "**Cross-layer**," no se cumple la regla de que los protocolos de capas
superiores solo utilicen los servicios de las capas inferiores. En este enfoque, se
permite una comunicación directa entre protocolos de capas que no son contiguas, incluso
permitiendo el intercambio de variables entre estas capas.

Por otro lado, en el concepto de "**Layer-less**", se busca consolidar el diseño de
manera que cada vez más funciones sean realizadas por una misma capa. Esto conduce a una
reducción en el número de niveles en el modelo de comunicación.

## 8. Redes de telecomunicación

### 8.1. Internet: La Arquitectura de la Red

Internet es una red descentralizada que se compone de una interconexión de diversas redes
utilizando routers y diversos elementos clave:

#### 8.1.1. Componentes de la Arquitectura de la Red

1. **Hosts**: Estos pueden ser computadoras personales (PCs), dispositivos móviles,
   servidores y otros dispositivos finales que necesitan conectarse a través de la red.
   Están vinculados a redes locales (LAN) y redes de área amplia (WAN).
2. **Routers**: Son dispositivos fundamentales que permiten la interconexión de redes
   entre sí y se encargan de encaminar los paquetes de datos de manera eficiente.
3. **Proveedor de Servicio de Internet (ISP)**: Las ISPs son empresas que brindan acceso
   a Internet. Operan grupos de servidores conectados a Internet mediante conexiones de
   alta velocidad. Además, asignan direcciones IP a los clientes individuales. Para
   mantener la conectividad, disponen de equipos y enlaces de telecomunicación, formando
   Puntos de Presencia (POPs).
4. **Puntos de Presencia (POPs)**: Estos puntos marcan la frontera de la red del ISP y
   son donde se establecen las conexiones con los clientes. Los ISPs distribuyen varios
   POPs para facilitar el acceso a Internet.
5. **Puntos de Acceso a la Red (NAP, IXP)**: Estos servicios públicos ofrecen conmutación
   a gran escala, facilitando la interconexión entre diversas redes.
6. **Proveedor de Servicio de Red (NSP)**: Las NSPs son empresas que brindan a los ISPs
   una infraestructura de telecomunicaciones. En algunos casos, la misma empresa puede
   operar como ISP y NSP.

#### 8.1.2. Capa IP y su funcionamiento

La capa IP (Protocolo de Internet) es fundamental en Internet. Se caracteriza por ser no
orientada a la conexión y se encarga de fragmentar y ensamblar los datos en datagramas.
Estos datagramas contienen información de control y el payload, que es la información que
se está transmitiendo.

Mejorando la estructura y la claridad del texto, se facilita la comprensión de los
conceptos clave relacionados con la arquitectura de Internet y la capa IP.

### 8.2. GSM

#### 8.2.1. Problemática de las redes móviles

Las redes móviles presentan una serie de desafíos que deben abordarse de manera
eficiente. Entre los principales problemas se encuentran:

1. **Limitaciones de Espectro Radioeléctrico**: La movilidad de los dispositivos móviles
   exige la transmisión a través de enlaces de radio, y el espectro radioeléctrico
   disponible es limitado. Esta limitación puede dar lugar a interferencias en los
   canales de radio, lo que afecta la calidad de la comunicación.
2. **Potencia de Transmisión en Dispositivos Terminales**: La potencia de transmisión de
   los dispositivos terminales es un factor crítico. Si no es adecuada, puede resultar en
   una cobertura insuficiente o conexiones de baja calidad.
3. **Cobertura de Estaciones Base**: Para brindar cobertura en un área extensa, se divide
   el territorio en celdas y se instala una estación base en cada una de ellas. La
   eficiente gestión de estas estaciones es esencial para garantizar una conectividad
   adecuada.
4. **Sistema Celular**: La organización de las redes móviles en sistemas celulares
   implica la división del área total de cobertura en celdas. Cada celda requiere la
   instalación de una estación base. La reutilización de canales se realiza considerando
   las interferencias cocanal, lo que implica un desafío adicional en la asignación de
   recursos de manera eficiente.

#### 8.2.2. Geometría de las celdas

El diseño de las celdas en las redes móviles es un aspecto crucial para garantizar un
servicio confiable y eficiente. Algunos objetivos clave de este diseño incluyen:

- **Eliminación de Solapamientos**: Es fundamental evitar que las celdas se superpongan,
  ya que esto podría dar lugar a interferencias y problemas de calidad de señal. Cada
  celda debe tener límites bien definidos.
- **Ausencia de Zonas de Sombra**: Se busca asegurar que no existan áreas sin cobertura,
  conocidas como "zonas de sombra". Esto significa que cada celda debe proporcionar una
  cobertura efectiva en su área asignada.
- **Maximización del Área de la Celda**: El objetivo principal es maximizar el área de
  cobertura de cada celda sin comprometer la calidad de la señal. Esto implica una
  distribución estratégica de estaciones base y antenas.

#### 8.2.3. Reutilización de los canales

La reutilización de canales es una práctica esencial en las redes móviles para gestionar
eficazmente el espectro de frecuencia disponible. Este proceso implica:

- **Asignación Eficiente de Canales**: La asignación cuidadosa de canales de frecuencia
  garantiza que las celdas cercanas no utilicen los mismos canales, reduciendo así las
  interferencias y mejorando la capacidad de la red.
- **Optimización de la Reutilización**: Para minimizar las interferencias cocanal, se
  deben emplear estrategias inteligentes al reutilizar los canales en diferentes celdas.
  Esto permite una utilización más efectiva del espectro de frecuencia disponible.

#### 8.2.4. Handover (HO)

El Handover (HO), es un proceso esencial en las redes móviles que implica varias
características clave:

- **Cambio de Canal Durante una Conexión**: Se produce un cambio de canal en medio de una
  conexión existente debido a diversas razones, como el cambio de celda por parte del
  dispositivo móvil, una disminución en la potencia de la señal recibida o una
  redistribución del tráfico en la red.
- **Continuidad Opcional**: La transferencia puede llevarse a cabo con o sin
  interrupciones en la comunicación, lo que se conoce como Handover suave (soft HO) o
  Handover brusco (hard HO), respectivamente.

El proceso de transferencia comprende las siguientes etapas:

1. **Detección de la Condición de Transferencia**: Se detecta una situación que requiere
   la transferencia, como la entrada del dispositivo móvil a una nueva celda o una señal
   debilitada.
2. **Búsqueda del Canal de Destino Óptimo**: Se realiza una búsqueda para encontrar el
   canal de destino más adecuado para mantener la calidad de la comunicación.
3. **Ejecución de la Transferencia entre Canales**: La transición entre los canales de
   comunicación se lleva a cabo de manera eficiente para garantizar una transmisión
   continua de datos.

#### 8.2.5. Roaming

El roaming se refiere a un conjunto de procedimientos que permiten que un terminal móvil
establezca una conexión en cualquier ubicación dentro del área de cobertura del sistema,
independientemente de su situación geográfica.

Esto se logra mediante la definición de un "Área de Localización Conjunta", que comprende
un conjunto de celdas controladas por una central de conmutación móvil. Durante el
proceso de roaming, se lleva a cabo el "Registro de Localización", que consiste en un
mensaje enviado por cada dispositivo móvil para que la red lo ubique en un área de
localización específica.

Además, se implementa el proceso de "Radobúsqueda" o "Paging", el cual implica el envío
de mensajes a todas las celdas dentro de un área de localización con el objetivo de
establecer una conexión con un dispositivo móvil específico. Este proceso garantiza que
los dispositivos móviles puedan mantener una comunicación ininterrumpida mientras se
desplazan dentro del área de cobertura del sistema. El roaming es fundamental para la
movilidad de los usuarios en las redes de telecomunicaciones.

#### 8.2.6. Seguridad y Privacidad en Redes Móviles

En el contexto de las redes móviles, la seguridad y la privacidad son elementos críticos
que se abordan mediante los siguientes procedimientos:

- **Autenticación**: Estos procedimientos permiten que la red verifique la identidad del
  usuario móvil, lo que ayuda a prevenir cualquier intento de suplantación o acceso no
  autorizado.
- **Cifrado**: Se implementan algoritmos de cifrado que protegen la información
  transmitida, evitando que sea accesible para terceros no autorizados. Esto asegura la
  confidencialidad de los datos y la privacidad del usuario.

#### 8.2.7. Arquitectura del Sistema Global para Comunicaciones Móviles (GSM)

El sistema GSM (Sistema Global para Comunicaciones Móviles) se compone de una serie de
elementos que desempeñan funciones esenciales en su operación:

- **Estación Móvil (MS)**: Este elemento es el terminal utilizado por el usuario y
  contiene la tarjeta SIM, que almacena el número de teléfono, la agenda, los mensajes
  SMS, etc. Además, incluye el Equipo Móvil (ME) con el número IMEI único asociado a cada
  terminal.
- **Subsistema de Estación Base (BSS)**: El BSS consta de dos componentes clave:
  - **Estación Base (BTS)**: La estación base incluye antenas, líneas de transmisión,
    amplificadores, filtros y otros equipos que permiten la comunicación inalámbrica con
    los dispositivos móviles.
  - **Controlador de Estación Base (BSC)**: El BSC supervisa y gestiona las estaciones
    base (BTS), ejecuta órdenes de la central de conmutación móvil (MSC) a la que está
    conectado.
- **Subsistema de Conmutación de Red (NSS)**: El NSS está compuesto por varios elementos:
  - **Centro de Conmutación Móvil (MSC)**: Encargado del enrutamiento de llamadas,
    transferencias de llamadas, itinerancia (roaming) e interconexión con otras redes.
  - **Registro de Localización de Hogar (HLR)**: Base de datos que almacena la
    información de los usuarios de la red.
  - **Registro de Localización Visitante (VLR)**: Contiene una copia de la información
    del HLR y se accede desde la MSC.
  - **Centro de Autenticación (AuC)**: Almacena algoritmos y claves de cifrado utilizados
    para la autenticación de dispositivos móviles y la seguridad de la red.
  - **Registro de Identidad de Equipos (EIR)**: Lista que contiene los IMEIs de todos los
    dispositivos móviles en la red.
- **Centro de Operaciones y Mantenimiento (OMC)**: Este centro desempeña un papel vital
  al obtener informes de funcionamiento, gestionar alarmas y generar estadísticas para el
  monitoreo y mantenimiento de la red.

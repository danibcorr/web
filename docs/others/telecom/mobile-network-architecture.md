---
sidebar_position: 2
authors:
  - name: Daniel Bazo Correa
description: Aprende lo necesario sobre las arquitecturas de redes móviles.
title: Arquitectura de Redes móviles
toc_max_heading_level: 3
---

## 1. Contexto de la Evolución y Convergencia de las Redes

### 1.1. Antecedentes Históricos

Las redes constituyen un conjunto de infraestructuras necesarias para proporcionar
servicios de telecomunicaciones. Para ello, se requiere la implementación de hardware y
software que permitan la creación de una infraestructura capaz de ofrecer servicios a los
usuarios. Estas redes están en constante evolución, lo que les permite mejorar su
competitividad en el mercado y favorecer la convergencia tecnológica, posibilitando la
prestación de múltiples servicios en una sola red o la oferta de un mismo servicio a
través de diferentes medios.

#### 1.1.1. Modelo Silo

El "Modelo Silo" describe un enfoque tradicional en el que los servicios de
telecomunicaciones, Internet y radiodifusión operaban de manera vertical e independiente,
sin integración ni comunicación efectiva entre ellos. Este modelo se caracteriza por la
fragmentación de las infraestructuras y la falta de interoperabilidad entre tecnologías.

A lo largo de la historia, diversas tecnologías han operado bajo este modelo:

- **Red Fija y Redes Móviles 2G**: Aunque comparten similitudes en las capas de
  transmisión, conmutación y servicio, utilizan tecnologías distintas en las capas de
  terminales y acceso. Además, las redes GSM presentan desafíos en términos de movilidad.
- **Internet**: Es la red de datos más utilizada, unificada por el protocolo IP. Su
  acceso es proporcionado por los Proveedores de Servicios de Internet (ISP), mientras
  que la infraestructura subyacente es gestionada por los Proveedores de Servicios de Red
  (NSP).
- **Redes de Conmutación de Paquetes Móviles**: Utilizan tecnologías de acceso como GPRS,
  UMTS, LTE y 5G, lo que las convierte en las redes más extendidas en la actualidad.
- **Red Celular LTE**: Facilita la interoperabilidad con redes 2G y 3G, centrándose en la
  provisión de servicios de datos. Los servicios de voz son gestionados a través de redes
  2G. Además, se han optimizado las redes de acceso y el núcleo de la red ha sido
  rediseñado con protocolos basados en IP.
- **Red Celular 5G**: Compatible con redes 2G, 3G, 4G y otras tecnologías no basadas en
  3GPP. Ofrece servicios con baja latencia y altas velocidades, mejorando la
  infraestructura de acceso e incorporando virtualización en el núcleo de la red.
- **Datos de Telecomunicaciones**: Se emplean para respaldar servicios empresariales y se
  ofrecen a otros operadores y usuarios finales mediante líneas alquiladas. Esto incluye
  redes privadas, redes virtuales y la provisión de servicios de Internet.
- **Radiodifusión (Broadcasting)**: Comprende la generación de contenido, la emisión de
  señales en sistemas de distribución y la cobertura radiofónica en áreas de recepción.

### 1.2. Evolución y Convergencia

#### 1.2.1. Redes de Telecomunicaciones y Redes de Computadoras

Las redes de telecomunicaciones y las redes de computadoras forman parte de las redes de
comunicación, aunque presentan diferencias significativas en su diseño y funcionalidad:

- **Redes de Telecomunicaciones**: Basadas en la conmutación de circuitos de la telefonía
  tradicional, están diseñadas para ofrecer servicios a dispositivos móviles y han sido
  desarrolladas principalmente por ingenieros de telecomunicaciones.
- **Redes de Computadoras**: Comprenden redes domésticas, corporativas e Internet. Se
  accede a ellas a través de dispositivos inalámbricos y han sido diseñadas por expertos
  en informática, utilizando protocolos _ad hoc_ cuando es necesario.

:::note

Un protocolo _ad hoc_ es un conjunto de reglas diseñadas específicamente para una
aplicación concreta, en lugar de seguir un estándar predefinido.

:::

## 2. Redes Fijas de Datos

### 2.1. Servicios IP

El tráfico en redes IP ha crecido significativamente en los últimos años, con una
tendencia global al alza. Este crecimiento se debe, en gran parte, a la expansión de las
redes metropolitanas y al papel fundamental de las redes de entrega de contenido
(_Content Delivery Networks_, CDNs), que gestionan una gran proporción del tráfico de
Internet, especialmente debido al aumento del uso de dispositivos móviles e inalámbricos.

Entre las principales tendencias en los servicios IP, destaca el crecimiento del tráfico
de video en línea bajo demanda, así como los desafíos asociados a la calidad de los
servicios de voz. Además, la comunicación máquina a máquina (_Machine-to-Machine_, M2M)
está adquiriendo una importancia creciente en la interacción con dispositivos conectados,
como medidores inteligentes, sistemas de domótica, videovigilancia y electrodomésticos.

A continuación, se describen algunos de los principales servicios que operan sobre el
protocolo IP:

- **Navegación web**: Utiliza los protocolos HTTP (no seguro) y HTTPS (seguro). Se
  caracteriza por tráfico variable y una arquitectura asimétrica, donde los paquetes de
  mayor tamaño se transmiten en el enlace descendente (_Downlink_, DL), mientras que en
  el enlace ascendente (_Uplink_, UL) se envían principalmente confirmaciones de llegada.

- **Servicios de asistencia**: Integran indicadores de estado que informan sobre la
  disponibilidad de los usuarios. A través del protocolo SIP (_Session Initiation
  Protocol_), se reciben notificaciones sobre eventos relacionados con la presencia de
  otros usuarios.

- **Mensajería instantánea**: Facilita la comunicación en tiempo real, principalmente
  mediante texto, aunque puede integrarse con otros servicios. Se basa en el protocolo
  SIMPLE (_Session Initiation Protocol for Instant Messaging and Presence Leveraging
  Extensions_).

- **Voz sobre IP (_VoIP_)**: Permite la transmisión de voz mediante conmutación de
  paquetes en redes IP. Utiliza SIP para señalización y RTP/RTCP para gestionar la
  calidad del servicio. Incluye funciones avanzadas de telefonía y servicios
  suplementarios.

- **Push-to-Talk (_PTT_)**: Proporciona comunicación de voz IP en modo _half-duplex_
  (unidireccional y alternada). Los usuarios pueden establecer sesiones con otros
  participantes a través de agentes SIP.

- **Video bajo demanda y streaming**: Permite la reproducción de contenido a medida que
  se reciben los datos, con un posible retraso inicial. Su tráfico es asimétrico, con
  paquetes de gran tamaño en el enlace descendente.

- **IPTV (_Televisión sobre IP_)**: Ofrece transmisión de contenido televisivo mediante
  redes IP, garantizando calidad de servicio (_Quality of Service_, QoS) y permitiendo a
  los usuarios seleccionar canales a demanda.

- **Video progresivo**: Funciona a través de reproductores de video sobre HTTPS, con
  almacenamiento en _buffer_ para gestionar retrasos. Su tráfico es variable, con un alto
  consumo de ancho de banda al inicio de la reproducción y en eventos de _rebuffering_.

- **Juegos en línea**: Son aplicaciones interactivas con paquetes de datos cortos y alta
  señalización. Requieren baja latencia y alta confiabilidad, operando bajo arquitecturas
  cliente-servidor con protocolos específicos.

- **Juegos en la nube**: Involucran la transmisión de audio, video y comandos con
  requisitos estrictos de latencia y una alta tasa de descarga para garantizar una
  experiencia de usuario óptima (_Quality of Experience_, QoE).

- **Comunicación Máquina a Máquina (_M2M_)**: Se basa en el intercambio de paquetes
  cortos con alta señalización y fiabilidad, con requerimientos variables según la
  aplicación. En el contexto del _Internet de las Cosas_ (_IoT_), permite la conexión e
  interacción de dispositivos físicos, como sistemas industriales y redes _ad hoc_.

### 2.2. Protocolos de Internet

El modelo de protocolos de Internet (IP) presenta una estructura más simplificada en
comparación con el modelo OSI, lo que facilita su implementación y escalabilidad en redes
modernas.

#### 2.2.1. Protocolo de Internet (IP)

El Protocolo de Internet (IP) es fundamental para la comunicación entre dispositivos en
redes como Internet, redes de área local (LAN) y redes empresariales. Su función
principal es la transmisión de paquetes de datos denominados **datagramas**, asegurando
el direccionamiento y la fragmentación de los mismos. Cada equipo conectado a una red IP
posee una **dirección IP única**, utilizada para identificar el origen y el destino de
los paquetes.

IP opera como un **servicio sin conexión y no confiable**, lo que significa que los
paquetes pueden perderse, duplicarse o llegar en desorden. No garantiza la entrega, ya
que no proporciona mecanismos de confirmación ni corrección de errores; estas funciones
recaen en protocolos de niveles superiores, como **TCP (Transmission Control Protocol)**.

El tamaño máximo de un datagrama está determinado por la **Unidad Máxima de Transmisión**
(_Maximum Transmission Unit_, MTU), cuyo valor depende de la tecnología de la capa de
enlace de datos. Si un datagrama supera el MTU permitido, se divide en fragmentos, los
cuales se reensamblan en el destino.

El **enrutamiento** es el proceso mediante el cual un paquete viaja desde su origen hasta
su destino a través de múltiples redes y enrutadores (_routers_). Cada _router_ utiliza
**tablas de encaminamiento**, en las que se almacena información sobre las rutas
disponibles. Como resultado, los paquetes de una misma comunicación pueden seguir rutas
diferentes y llegar en un orden distinto al de su emisión.

#### 2.2.2. Seguridad en el Protocolo de Internet (IPSec)

_IPSec_ (_Internet Protocol Security_) es un conjunto de protocolos diseñados para
garantizar la seguridad en las comunicaciones IP. Sus funciones incluyen **autenticación
de origen de datos, integridad y cifrado** de la información transmitida. Además, permite
la autenticación de los dispositivos al inicio de la sesión y la negociación de claves
durante la transmisión de datos.

Existen dos modos de operación de IPSec:

- **Modo de transporte**: Protege solo el contenido del paquete IP, dejando intacto el
  encabezado original. Se utiliza en comunicaciones directas entre dispositivos.
- **Modo túnel**: Cifra y autentica todo el paquete IP, encapsulándolo dentro de un nuevo
  paquete con un encabezado diferente. Se emplea en la creación de **redes privadas
  virtuales (_Virtual Private Networks_, VPNs)**, permitiendo el acceso seguro a redes
  privadas a través de Internet.

#### 2.2.3. IP Multicast

La transmisión de datos en tiempo real en configuraciones **uno-a-muchos**
(_one-to-many_) y **muchos-a-muchos** (_many-to-many_) se logra mediante **IP
Multicast**. Este método permite la distribución eficiente de información a múltiples
receptores sin la necesidad de enviar una copia individual del paquete a cada
destinatario. En su lugar, los paquetes se **replican en los enrutadores** y se envían
solo a aquellos nodos que forman parte del grupo de multidifusión.

El protocolo de transporte más común en **IP Multicast** es **UDP** (_User Datagram
Protocol_), ya que permite una transmisión eficiente sin necesidad de establecer
conexiones individuales con cada receptor.

Para la administración de grupos de multidifusión, se emplean los protocolos **IGMP**
(_Internet Group Management Protocol_) para IPv4 y **MLD** (_Multicast Listener
Discovery_) para IPv6. Estos protocolos permiten que los dispositivos y enrutadores
administren la suscripción y el abandono de grupos multicast, optimizando el tráfico de
red.

El **enrutamiento multicast** tiene como objetivo optimizar la entrega de paquetes,
evitando la transmisión redundante de datos. Para ello, se utiliza el **Protocolo
Independiente de Multidifusión (_Protocol Independent Multicast_, PIM)**, que construye
jerarquías de rutas basadas en la dirección IP de origen y la estructura de la red.

A diferencia del **unicast**, donde las rutas se establecen según la topología de la red
y posibles fallos, en **multicast** las rutas pueden cambiar dinámicamente en función de
la suscripción y abandono de dispositivos en un canal de transmisión.

Existen dos modos de funcionamiento en el enrutamiento multicast:

- **Modo disperso (_Sparse Mode_)**: Se utiliza cuando hay un número reducido de nodos
  suscritos al grupo de multidifusión. Se requiere la activación explícita de la
  comunicación.
- **Modo denso (_Dense Mode_)**: Se emplea cuando la mayoría de los enrutadores están
  interesados en recibir tráfico multicast. En este modo, los mensajes se envían a todos
  los enrutadores y aquellos que no desean recibirlos envían mensajes de **poda (_prune
  messages_)** para dejar de recibir el tráfico.

:::note

Un **mensaje de poda (_prune message_)** es una señal enviada por un enrutador en una red
multicast para indicar que no desea recibir más tráfico para un grupo específico.

:::

### 2.3. Protocolos de Transporte

Los protocolos de transporte gestionan la transmisión de datos entre aplicaciones a
través de redes IP. Entre los más utilizados se encuentran **UDP (_User Datagram
Protocol_)**, **TCP (_Transmission Control Protocol_)** y **SCTP (_Stream Control
Transmission Protocol_)**. Además, el **Protocolo de Mensajes de Control de Internet
(ICMP)** se emplea para el diagnóstico y control del tráfico de red.

#### 2.3.1. UDP (User Datagram Protocol)

UDP es un protocolo **no orientado a conexión**, diseñado para aplicaciones en las que la
velocidad es prioritaria sobre la fiabilidad. Se caracteriza por:

- **No garantizar la entrega, el orden ni la detección de duplicados**.
- **Utilizar sumas de verificación (_checksum_)** para verificar la integridad de los
  datos.
- **Emplear números de puerto** para identificar servicios en origen y destino.

Este protocolo es ideal para aplicaciones en **tiempo real**, donde es preferible la
pérdida de paquetes a los retrasos generados por la retransmisión. Se utiliza en
servicios como transmisión de audio y video en vivo, telefonía IP (VoIP) y videojuegos en
línea.

#### 2.3.2. TCP (Transmission Control Protocol)

TCP es un protocolo **orientado a conexión** que garantiza la **entrega fiable y
ordenada** de los datos. Sus principales características incluyen:

- **Establecimiento de conexión** mediante un proceso de _handshake_ de tres vías antes
  de la transmisión.
- **Segmentación de datos**, dividiendo grandes volúmenes de información en segmentos
  ajustados a la **MTU**.
- **Retransmisión de datos en caso de pérdida**, basada en temporizadores y cálculos del
  **Tiempo de Ida y Vuelta (_Round-trip Time_, RTT)**.
- **Control de flujo**, asegurando que el emisor no envíe más datos de los que el
  receptor puede manejar.
- **Control de congestión**, adaptando la tasa de transmisión en función de los **ACKs**
  recibidos.

Este protocolo es ampliamente utilizado en servicios como navegación web (_HTTP/HTTPS_),
correo electrónico (_SMTP, IMAP, POP3_) y transferencia de archivos (_FTP_).

#### 2.3.3. SCTP (Stream Control Transmission Protocol)

SCTP combina características de **TCP y UDP**, ofreciendo mejoras en la transmisión de
datos:

- **Multiplexación de servicios** dentro de una única conexión IP.
- **Entrega confiable y ordenada**, similar a TCP, pero con mayor flexibilidad.
- **Soporte para múltiples direcciones IP**, permitiendo redundancia y mayor tolerancia a
  fallos.
- **Manejo del bloqueo de cabecera (_head-of-line blocking_)**, priorizando paquetes
  pequeños si los grandes quedan retenidos.
- **Mantenimiento de la conexión mediante mensajes de estado (_heartbeat_)**,
  garantizando que el canal de comunicación sigue activo.
- **Entrega parcial de datos**, permitiendo asignar distintas prioridades a los paquetes
  según la necesidad de la aplicación.

SCTP se utiliza en aplicaciones críticas, como señalización en redes de telefonía móvil y
transmisión de datos en sistemas financieros y de control industrial.

#### 2.3.4. ICMP (Internet Control Message Protocol)

El **Protocolo de Mensajes de Control de Internet (ICMP)** se emplea en redes IP para
enviar mensajes de error y diagnóstico. Sus principales funciones incluyen:

- **Detección de problemas en la red**, notificando errores como host inaccesible o TTL
  expirado.
- **No ser utilizado para la transferencia de datos entre sistemas o aplicaciones de
  usuario final**.
- **Herramientas de diagnóstico**, como:
  - **Ping**: Evalúa la conectividad entre dos dispositivos mediante la medición del
    tiempo de respuesta.
  - **Traceroute**: Identifica la ruta que siguen los paquetes entre origen y destino,
    detectando posibles problemas de latencia o enrutamiento.

#### 2.3.5. Puertos y sockets

Los **puertos** son valores de **16 bits** que permiten diferenciar múltiples servicios
dentro de una misma dirección IP. Se utilizan para:

- **Identificar servicios específicos**, como:
  - **HTTP (puerto 80)** y **HTTPS (puerto 443)** para navegación web.
  - **DHCP** (_Dynamic Host Configuration Protocol_), que emplea **UDP 67** para el
    servidor y **UDP 68** para el cliente.
- **Facilitar la multiplexación de conexiones**, permitiendo que varios servicios se
  ejecuten simultáneamente en un mismo dispositivo.
- **Asociarse a procesos mediante _sockets_ de Internet**, que combinan dirección IP y
  puerto para la comunicación entre aplicaciones.

### 2.4. Protocolos de Aplicación

Los protocolos de aplicación permiten la comunicación entre programas y servicios en
redes IP, facilitando la transmisión de datos y la gestión de sesiones multimedia. Entre
los más relevantes se encuentran el **Protocolo de Inicio de Sesión (SIP)**, el
**Protocolo de Transporte en Tiempo Real (RTP)** y el **Protocolo de Control en Tiempo
Real (RTCP)**.

#### 2.4.1. SIP (Session Initiation Protocol)

El **Protocolo de Inicio de Sesión (SIP)** es un protocolo de señalización empleado en la
configuración, gestión y finalización de sesiones de comunicación multimedia en redes IP.
Sus principales características incluyen:

- **Independencia de la capa de transporte**, funcionando sobre **TCP, UDP o SCTP**.
- **Soporte para sesiones unicast y multicast**.
- **Interoperabilidad con otros protocolos**, como:
  - **RTP (Real-time Transport Protocol)** para la transmisión de medios.
  - **SDP (Session Description Protocol)** para la definición de parámetros multimedia.
  - **TLS (Transport Layer Security)** para la seguridad en la capa de transporte.

SIP utiliza un modelo de transacción similar a **HTTP**, donde el cliente envía
solicitudes al servidor y recibe respuestas. Las **URI (Uniform Resource Identifiers)**
se emplean para identificar recursos en una red SIP. Sin embargo, SIP se centra en la
**señalización y configuración de llamadas**, delegando funciones específicas a otros
elementos de la red, como:

- **Agentes de usuario (User Agents)**: Participan en la creación o recepción de mensajes
  SIP.
- **Registradores (Registrars)**: Gestionan información de ubicación y asignan
  direcciones IP a URI.
- **Servidores proxy**: Enrutan solicitudes y aplican políticas de comunicación.
- **Servidores de redirección**: Responden con información para reenviar solicitudes a
  nuevos destinos.
- **Controladores de borde de sesión (SBC, Session Border Controllers)**: Realizan tareas
  de intermediación y seguridad.
- **Pasarelas SIP-PSTN**: Conectan redes SIP con redes telefónicas tradicionales (PSTN)
  mediante diferentes protocolos.

Este protocolo es ampliamente utilizado en **telefonía IP (VoIP), videoconferencias y
mensajería instantánea**.

#### 2.4.2. RTP y RTCP

El **Protocolo de Transporte en Tiempo Real (RTP)** y el **Protocolo de Control en Tiempo
Real (RTCP)** son fundamentales para la transmisión de medios en tiempo real.

RTP se encarga de la transmisión de datos multimedia, como audio y video, priorizando la
**entrega puntual** sobre la **fiabilidad absoluta**. Sus principales características
incluyen:

- **Uso común sobre UDP**, aunque en algunos casos se puede emplear TCP.
- **Tolerancia a la pérdida de paquetes**, esencial para aplicaciones en tiempo real.
- **Soporte para multicast**, permitiendo la transmisión a múltiples destinos.
- **Información de payload**, incluyendo:
  - **Formato del contenido multimedia**.
  - **Marcas de tiempo**, para la sincronización de audio y video.
  - **Números de secuencia**, para la detección y reordenación de paquetes perdidos.

RTCP complementa a RTP proporcionando **control y retroalimentación sobre la calidad de
la transmisión**. Sus principales funciones incluyen:

- **Monitoreo de la calidad del servicio (QoS)** mediante informes de emisor y receptor.
- **Ajuste dinámico de parámetros**, como la limitación del flujo de datos o la selección
  de códecs alternativos.
- **Identificación de participantes** en la sesión mediante descripciones de fuente.
- **Mensajes de desconexión**, permitiendo a los usuarios salir de la sesión de manera
  ordenada.
- **Extensiones personalizadas** mediante mensajes de aplicación específica (_APP_).

Ambos protocolos son esenciales en aplicaciones de **telefonía VoIP, videoconferencias y
streaming de medios en tiempo real**.

### 2.5. Calidad de la Experiencia (QoE)

La **Calidad de la Experiencia (QoE)** mide la percepción del usuario sobre la calidad de
un servicio, influenciada por la **Calidad del Servicio (QoS)** de la red y otros
factores subjetivos.

#### 2.5.1. Calidad del Servicio (QoS)

El **QoS** en redes se evalúa mediante **Indicadores Clave de Rendimiento (KPI, Key
Performance Indicators)**, entre los que destacan:

- **Throughput**: Velocidad de transmisión de datos (_bits/s_).
- **Pérdida de paquetes**: Porcentaje de paquetes descartados durante la transmisión.
- **Latencia**: Retardo promedio en la entrega de paquetes.
- **Jitter**: Variabilidad en el retardo de los paquetes.

Los **Acuerdos de Nivel de Servicio (SLA, Service Level Agreements)** establecen
garantías de QoS entre los proveedores y los clientes. Dependiendo de sus necesidades,
los servicios pueden ser:

- **Elásticos**: Se adaptan a la velocidad de la red (ej. tráfico web, descargas).
- **Inelásticos**: Requieren una calidad mínima constante (ej. VoIP, streaming en vivo).

Para optimizar el rendimiento de la red, se emplean diferentes técnicas:

- **Reserva de ancho de banda** para flujos críticos.
- **Etiquetado de paquetes** para priorizar el tráfico según su importancia.
- **Uso de arquitecturas de QoS**, como:
  - **IntServ (Integrated Services)**: Reserva recursos para cada flujo de datos,
    asegurando QoS garantizada.
  - **DiffServ (Differentiated Services)**: Clasifica y agrupa flujos similares para
    optimizar la escalabilidad.

Se organiza en tres planos principales:

1. **Plano de Control**: Gestión de admisión, enrutamiento QoS y asignación de recursos.
2. **Plano de Datos**: Gestión de buffers, evitación de congestión y planificación de
   tráfico.
3. **Plano de Gestión**: Medición del rendimiento, aplicación de políticas y cumplimiento
   de SLA.

#### 2.5.2. Mean Opinion Score (MOS)

La **QoE es subjetiva** y se mide mediante el **Mean Opinion Score (MOS)**, una escala
del **1 al 5** basada en la percepción de múltiples usuarios sobre la calidad de una
llamada o servicio multimedia.

Existen dos tipos de métodos para evaluar la QoE:

- **Métodos con referencia (intrusivos)**: Comparan la señal original con la degradada.
- **Métodos sin referencia (no intrusivos)**: Evalúan la calidad sin necesidad de una
  señal de referencia.

Algunos modelos utilizados incluyen:

- **PESQ (Perceptual Evaluation of Speech Quality)**: Evalúa la calidad del audio en
  VoIP.
- **E-Model**: Considera pérdida de paquetes, ruido, eco y otros factores.
- **POLQA (Perceptual Objective Listening Quality Analysis)**: Mide calidad de voz basada
  en percepción humana.

#### 2.5.3. MOS vs QoS

La **QoE y QoS están relacionadas**, pero la primera depende de la percepción del usuario
y la segunda de métricas técnicas. Por ejemplo:

- En **video streaming**, la QoE se mide con parámetros como:
  - **Tiempo de buffering inicial**.
  - **Frecuencia y duración de interrupciones (rebuffering)**.
- En **redes móviles (2G/3G/4G/5G)**, se pueden ajustar dinámicamente la calidad del
  video y el tamaño del buffer según el estado de la red.

### 2.6. Redes de Próxima Generación (NGN)

Las Redes de Nueva Generación (NGN) son infraestructuras de telecomunicaciones basadas en
el protocolo IP que permiten la prestación de múltiples servicios. Su diseño facilita la
convergencia de voz, video y datos, mejorando las redes tradicionales como la telefonía
conmutada (PSTN), las redes móviles e Internet. Además, abordan aspectos críticos como la
privacidad, la interceptación legal de comunicaciones y las llamadas de emergencia.

Las principales características de las NGN incluyen:

- **Tecnologías de transporte de banda ancha y calidad de servicio (QoS)**: Emplean
  múltiples tecnologías que garantizan la calidad de servicio en la transmisión de datos.
- **Funciones de servicio independientes**: Separan la gestión de los servicios de las
  tecnologías de transporte, lo que proporciona mayor flexibilidad.
- **Acceso abierto**: Permiten la libre conexión de usuarios y proveedores de servicios,
  fomentando la competencia y la diversidad de opciones.
- **Movilidad**: Los servicios pueden ser accedidos desde cualquier ubicación y en
  cualquier momento.

#### 2.6.1. Arquitectura de una NGN

La arquitectura de las NGN está diseñada para ser accesible desde cualquier dispositivo
con conexión y se estructura en los siguientes componentes:

- **Gestión de servicios y aplicaciones**: Abarca la configuración, activación y
  desactivación de servicios, asignación de recursos, calidad de servicio, facturación y
  gestión de relaciones con clientes.
- **Control de red**: Se encarga de la gestión de señalización y llamadas. Incluye
  elementos como el _softswitch_ y el Registro de Ubicación de Hogar (_Home Location
  Register_, HLR). También genera registros de detalles de llamadas (_Call Detail
  Records_, CDR) para su facturación.
- **Núcleo de transporte**: Red de conmutación de paquetes basada en IP y MPLS
  (_Multiprotocol Label Switching_), lo que garantiza eficiencia y calidad en la
  transmisión de datos.
- **Acceso en el borde**: Facilita la interconexión entre el núcleo de transporte y
  diversas redes de acceso, permitiendo la conexión de terminales analógicos,
  dispositivos SIP y otros mediante _gateways_.

#### 2.6.2. Integración de NGN y PSTN

La transición desde la Red Telefónica Conmutada Pública (PSTN) hacia las NGN se realiza
mediante diversas pasarelas y protocolos que garantizan la interoperabilidad:

- **Pasarelas de Señalización (_Signaling Gateway_, SG)**: Facilitan la comunicación
  entre redes basadas en E-1 e IP mediante el protocolo SS7, asegurando compatibilidad
  entre sistemas.
- **Pasarelas de Medios (_Media Gateway_, MG)**: Separan el control de llamadas de la
  conversión de medios, permitiendo la interoperabilidad entre redes E-1 e IP a través de
  los protocolos TDM e IP, utilizando RTP/RTCP para la transmisión de datos.
- **Controlador de Pasarela de Medios (_Media Gateway Controller_, MGC)**: Gestiona las
  _Media Gateway_ a través del protocolo MeGaCo y facilita la comunicación con otros
  controladores mediante SIP.

### 2.7. Interconexión de Redes de Datos

Las redes de datos se interconectan a nivel global mediante sistemas autónomos y
protocolos de enrutamiento que garantizan la eficiencia y fiabilidad en la transmisión de
información.

#### 2.7.1. Sistemas Autónomos (AS)

Un _Sistema Autónomo_ (AS) es un conjunto de redes IP administrado por un único operador
con políticas de enrutamiento definidas. Estos sistemas facilitan el intercambio de
información en Internet y se clasifican en:

- **AS _Stub_**: Conectado a un único AS, generalmente en entornos de redes pequeñas,
  como universidades o empresas.
- **AS Multihomed**: Posee múltiples conexiones con diferentes AS, lo que mejora la
  redundancia y la disponibilidad del servicio.
- **AS de Tránsito**: Ofrece servicios de interconexión a otros sistemas autónomos,
  facilitando la transmisión de datos entre diferentes redes.

Cada AS cuenta con un número de sistema autónomo (_Autonomous System Number_, ASN)
asignado por la ICANN o entidades regionales, lo que permite su identificación y gestión
en la red.

#### 2.7.2. Protocolos de Enrutamiento

Los protocolos de enrutamiento permiten la selección de rutas óptimas para la transmisión
de datos en Internet. Se dividen en:

- **Protocolos de Puerta de Enlace Interior (_Interior Gateway Protocol_, IGP)**:
  Gestionan el enrutamiento dentro de un único AS, asegurando la comunicación entre sus
  nodos. Ejemplo: OSPF (_Open Shortest Path First_), que optimiza rutas sin generar
  bucles y balancea la carga de tráfico.
- **Protocolos de Puerta de Enlace Exterior (_Exterior Gateway Protocol_, EGP)**: Regulan
  el intercambio de información entre diferentes AS, como el BGP (_Border Gateway
  Protocol_), que toma decisiones basadas en atributos como:
  - _NEXT_HOP_: Dirección IP del enrutador siguiente en la ruta.
  - _LOCAL_PREF_: Preferencia local para determinar la mejor ruta dentro de un AS.
  - _AS-PATH_: Lista de AS que deben atravesarse para alcanzar un destino.
  - _Multi-exit discriminator (MED)_: Factor de preferencia para múltiples enlaces entre
    AS.

Para mejorar la gestión de enrutamiento, se emplean los Registros de Enrutamiento en
Internet (_Internet Routing Registry_, IRR), que permiten a los operadores publicar sus
políticas y anuncios de enrutamiento.

#### 2.7.3. Peering y Tránsito en Internet

La estructura de Internet se organiza en niveles de proveedores de servicios:

- **Nivel 1 (_Tier 1_)**: Redes troncales que manejan grandes volúmenes de tráfico y
  proporcionan conectividad a proveedores regionales.
- **Nivel 2 (_Tier 2_)**: Proveedores regionales que conectan a ISPs locales.
- **Nivel 3 (_Tier 3_)**: ISPs locales que ofrecen acceso a usuarios finales y empresas.

Existen dos principales modelos de interconexión entre ISPs:

- **Tránsito**: Permite que el tráfico de un ISP atraviese la infraestructura de otro a
  cambio de un pago. Es común entre _Tier 3_ y _Tier 1_.
- **Peering**: Acuerdo entre ISPs para intercambiar tráfico de forma directa, reduciendo
  costos y mejorando la latencia. Se clasifica en:
  - _Peering privado_: Conexión directa entre dos ISPs sin necesidad de infraestructura
    adicional.
  - _Punto de Intercambio de Internet_ (_Internet Exchange Point_, IXP): Ubicación donde
    múltiples ISPs se interconectan utilizando switches Ethernet y el protocolo BGP.

Los proveedores de tránsito ofrecen distintos niveles de servicio con garantías de
rendimiento, aunque la entrega final de paquetes en Internet no está completamente
asegurada. Las tarifas y acuerdos de nivel de servicio varían según la región y el
volumen de tráfico manejado.

## 3: Visión general de las redes celulares

### 3.1. Introducción a las redes celulares

#### 3.1.1. Desarrollo histórico

En la evolución de las redes celulares se presentan varias generaciones:

- **1G**: Introduce comunicaciones móviles analógicas, sin interoperabilidad.
- **2G**: Digitaliza las comunicaciones móviles y permite mensajes de texto.
- **3G**: Mejora la velocidad de datos y habilita la navegación web en dispositivos
  móviles.
- **4G**: Proporciona velocidades de datos más rápidas, facilitando la transmisión de
  video y conectividad avanzada.
- **5G**: Ofrece velocidades de datos ultra rápidas, menor latencia y capacidades para
  IoT y conducción autónoma.

A medida que estas generaciones evolucionan, la velocidad de datos aumenta
constantemente, principalmente en Downlink (DL), presentando desafíos en Uplink (UL)
debido a la aparición de interferencias. Las nuevas generaciones, como 5G, superan estas
limitaciones, ofreciendo un servicio más flexible y eficiente.

#### 3.1.2. Estructura de redes celulares

Las redes celulares se componen de celdas distribuidas en áreas geográficas. Cada celda
es atendida por al menos un transceptor fijo, generalmente tres estaciones base que
utilizan triangulación. Estas estaciones base ofrecen cobertura de red a las celdas y
utilizan diferentes conjuntos de frecuencias para evitar interferencias entre celdas
vecinas, aunque esto puede variar como ocurre en LTE. La selección de frecuencias se
realiza entre un conjunto predefinido difundido a través de las estaciones base. La
interconexión de estas celdas permite la cobertura de áreas más grandes, lo que
posibilita que los dispositivos móviles se comuniquen en cualquier punto de la red,
utilizando las estaciones base como puntos de acceso.

#### 3.1.3. Características fundamentales de las redes celulares

**Reutilización de celdas**: Se basa en el radio de la celda, el factor de reutilización
(número de celdas en un patrón repetitivo) y la distancia cocanal. Estas celdas presentan
formato hexagonal, con estaciones base que emplean frecuencias diferentes a las
estaciones vecinas para evitar interferencias. También se utiliza sectorización para
reducir las interferencias, haciendo que las antenas sean más directivas.

**Handover**: Se utiliza para administrar la movilidad de los dispositivos una vez
establecida una conexión, cuando el dispositivo está en funcionamiento. Este proceso se
activa cuando un dispositivo cambia de celda, experimenta una señal débil o se produce
una redistribución de la red.

**Gestión de movilidad**: Los dispositivos móviles operan en dos modos distintos:

- **Modo activo**: El dispositivo está encendido y la gestión de movilidad se realiza
  mediante handover.
- **Modo inactivo o Idle**: No se realiza seguimiento constante de la celda donde se
  encuentra el dispositivo. El receptor permanece encendido únicamente para recibir
  mensajes de paging.

Para localizar al dispositivo en modo Idle, se actualiza el área de localización cada vez
que el dispositivo cambia de celda. El paging se utiliza para llamadas entrantes, donde
el MSC (Mobile Switching Center) envía paquetes de búsqueda en la zona donde se encuentra
el dispositivo. Esto se logra mediante un mensaje de tipo broadcast transmitido desde
todas las celdas, utilizando el canal de acceso aleatorio (RACH), que permite a los
dispositivos móviles informar a la red sobre su presencia y necesidad de servicios,
facilitando la inicialización de llamadas. En GSM y otras generaciones se crean áreas de
localización para el paging con el fin de reducir el radio de búsqueda, cuyo tamaño está
determinado por el operador de la red.

**Roaming**: Capacidad de un terminal móvil para enviar y recibir datos cuando se
encuentra fuera del área de cobertura de su propia red. Se logra mediante la conexión a
una red extranjera que trabaja en cooperación con la red de origen para brindar servicios
al dispositivo móvil. El roaming depende tanto del espectro radioeléctrico disponible
como del tipo de terminal utilizado, que debe contar con un chip compatible con las
frecuencias utilizadas. En GSM, el roaming se hace posible gracias al IMSI (International
Mobile Subscriber Identity) y a acuerdos entre operadores de redes móviles.

**Identificación**: Se utilizan una serie de números vinculados tanto al usuario como a
la celda:

- Relacionados con el usuario: IMSI, TMSI, MSISDN e IMEI
- Relacionados con las celdas: MCC, MNC, LAC, LAI, CI y CGI

### 3.2. Global System for Mobile Communications (GSM), 2G

GSM es un sistema de telefonía móvil que utiliza una red de celdas para proporcionar
servicios de comunicación inalámbrica. Utiliza conmutación de circuitos y ofrece
servicios básicos de telefonía, SMS, datos y FAX, además de otros servicios
suplementarios.

#### 3.2.1. Arquitectura GSM

GSM se compone de tres subsistemas principales:

1. **Red de Acceso por Radio (RAN)**: Conecta a los usuarios móviles
2. **Red Central (CN) o Subsistema de Red (NSS)**: Maneja la conmutación, gestión de
   suscriptores y movilidad
3. **Subsistema de Soporte de Operaciones (OSS)**: Se encarga de la suscripción,
   tarificación, estadísticas, configuración y gestión del rendimiento de la red,
   permitiendo reducir los costos de mantenimiento

**Elementos clave de GSM**:

- **Mobile Switching Center (MSC)**: Gestiona la conmutación de circuitos entre
  dispositivos móviles, asignación de recursos de radio y procedimientos como el registro
  de ubicación y handover. El Gateway MSC (GMSC) proporciona conexión a otras redes como
  la Red de Comunicación Móvil Terrestre Pública (PLMN) o la Red Telefónica Pública
  Conmutada (PSTN).

- **Registros de localización**: Compuesto por tres elementos:

  - **Registro de Ubicación Visitante (VLR)**: Copia de los registros del HLR para
    reducir la señalización.
  - **Registro de Ubicación de Inicio (HLR)**: Base de datos con registros de
    suscriptores.
  - **Centro de Autenticación (AuC)**: Almacena claves de autenticación y cifrado. La
    clave del suscriptor, la clave de cifrado y la clave generada por el proceso no
    viajan por el aire; solo lo hace el valor aleatorio generado para la creación del
    código. Esta clave del suscriptor se encuentra también en la SIM. El valor generado
    se conoce como Signed Response (SRES) y permite autentificar a un terminal.

- **Mobile Systems (MS)**: Incluye:

  - **Equipo Móvil (ME)**: Abarca hardware y sistema operativo del terminal.
  - **Módulo de Identificación del Suscriptor (SIM)**: Contiene información de
    suscripción, la clave secreta para autenticación y cifrado, la última área de
    localización visitada, etc.

- **Base Transceiver Station (BTS)**: Proporciona cobertura de celda, realiza funciones
  de transmisión y recepción, encriptación, multiplexación, recuperación del sincronismo
  y autentificación. Puede contar con hasta 16 antenas de transmisión que trabajan con
  frecuencias distintas pero todas gestionadas por el mismo BSC.

- **Base Station Control (BSC)**: Envía órdenes a las BTS, recibe informes y alarmas, y
  ejecuta comandos del MSC. Sus funciones incluyen la configuración de BTS, la gestión de
  recursos de radio y el control de conexiones.

#### 3.2.2. Protocolos de GSM

En GSM, se emplean protocolos separados para el plano de usuario y el plano de control.
El plano de usuario transporta datos del usuario, mientras que el plano de control se
utiliza para señalización. La señalización se basa en SS7 en la red central y en
protocolos específicos de GSM en las redes de acceso por radio.

#### 3.2.3. Canales de GSM: transporte, lógicos y físicos

En los canales la información fluye entre diferentes capas de protocolos, permitiendo
segregar entre tipos de datos tanto en UL como en DL. Los canales lógicos definen el tipo
de información, los canales de transporte determinan cómo se transporta la información, y
el canal físico define dónde se transmite la información. El tráfico y el control
(señalización) pasan por las mismas capas pero por distintos canales.

**Canales lógicos**:

- **Canales de Tráfico (Traffic Channels, TCH)**: Flujo de datos del usuario, utilizan
  conmutación de circuitos para voz, con diferentes velocidades y transmisión
  discontinua.

- **Canal de Difusión (Broadcast Channel, BCH)**: Datos de difusión para todos los MS en
  una celda. Incluye:

  - **Canal de Control de Difusión (Broadcast Control Channel, BCCH)**: Transmite
    información sobre configuraciones de canales, sincronización, paging, etc.
  - **Canal de corrección de frecuencia (Frequency Correction Channel, FCCH)**:
    Proporciona información sobre la frecuencia de transmisión que deben utilizar las MS.
  - **Canal de sincronización (Synchronization Channel, SCH)**: Contiene el código de
    identidad de la estación base y permite la sincronización de tramas.

- **Canal de Control Común (Common Control Channel, CCCH)**: Señalización punto a
  multipunto. Incluye:

  - **Canal de Acceso Aleatorio (Random Access Channel, RACH)**: Permite el acceso de las
    MS sin reserva previa y se utiliza para solicitar canales de señalización o durante
    handover.
  - **Canal de Concesión de Acceso (Access Grant Channel, AGCH)**: Se utiliza para
    asignar canales de control dedicados a MS.
  - **Canal de Paginación (Paging Channel, PCH)**: Utilizado para localizar MS
    específicas.

- **Canal de Control Dedicado (Dedicated Control Channel, DCCH)**: Señalización punto a
  punto. Incluye:
  - **Canal de Control Dedicado Independiente (Stand-alone Dedicated Control Channel,
    SDCCH)**: Se utiliza para señalización sin conexión activa.
  - **Canal de Control Asociado Lento (Slow Associated Control Channel, SACCH)**: Para
    sincronización y control de potencia.
  - **Canal de Control Asociado Rápido (Fast Associated Control Channel, FACCH)**: Para
    señalización de alta prioridad.

> Los canales Stand-alone son canales dedicados que no tienen un canal de tráfico
> asociado. Se suelen emplear para establecer la comunicación.

### 3.3. The Universal Mobile Telecommunication Service (UMTS), 3G

#### 3.3.1. Arquitectura UMTS

3G introdujo dos elementos clave: el SGSN y el GGSN, que marcaron el inicio de la
conmutación de paquetes en las redes móviles:

- **Gateway GPRS Support Node (GGSN)**: Actúa como punto de acceso principal a redes de
  datos externas, con capacidad de enrutar paquetes hacia la ubicación actual del
  dispositivo móvil. Este nodo accede al HLR para obtener información sobre la ubicación
  del dispositivo.

- **Serving GPRS Support Node (SGSN)**: Se encarga de gestionar la movilidad y el cifrado
  en el tráfico basado en paquetes.

Ambos nodos también cumplen un papel esencial en la recopilación de datos relacionados
con la facturación de servicios.

> General Packet Radio Service (GPRS) es una tecnología que se utiliza para transmitir
> datos a través de redes de telefonía móvil. Fue una evolución de las redes GSM que
> ofrecía mayor capacidad de datos y una conexión más eficiente.

En GPRS, la gestión de recursos radio implica la asignación dinámica de recursos para
canales de datos en contraste con los canales de voz fijos, lo que permite una
programación de recursos más eficiente. La asignación de recursos, tanto para el UL como
para el DL, se maneja de forma independiente y se determina únicamente cuando se realiza
una solicitud de transmisión.

#### 3.3.2. Evolución hacia UMTS

UMTS representa una evolución desde GPRS, reemplazando la infraestructura de acceso por
radio existente. UTRAN (UMTS Terrestrial Radio Access Network) es la parte de UMTS
encargada de la gestión de la radio.

#### 3.3.3. HSPA y HSPA+

HSPA y HSPA+ son avances significativos de UMTS diseñados para mejorar el soporte de
tráfico de datos basados en paquetes, como los servicios de Internet. Estas tecnologías
ofrecen velocidades de transmisión considerablemente más rápidas en comparación con las
versiones anteriores de UMTS.

#### 3.3.4. Clases de Calidad de Servicio (QoS)

Las clases de QoS permiten predecir la transmisión de datos y se negocian entre las
aplicaciones y la red. La categoría Background se asigna a los recursos que quedan
disponibles cuando no se utilizan por otras clases. Es importante señalar que en GSM no
se implementa el QoS; esta característica aparece con la introducción de las tecnologías
2.5G.

#### 3.3.5. Acceso Múltiple por División de Código (CDMA)

CDMA, o Acceso Múltiple por División de Código, es una técnica que asigna a cada usuario
un código único, lo que les permite transmitir simultáneamente en el mismo ancho de
banda. En el contexto de UMTS, CDMA se utiliza para asignar códigos a los usuarios y
distinguir entre canales y celdas.

Sin embargo, CDMA también presenta desafíos. El número máximo de usuarios se ve limitado
por la interferencia y la potencia de la señal, lo que requiere un control cuidadoso de
la potencia. Además, la capacidad y el tamaño de la celda pueden fluctuar debido al
número de usuarios, lo que complica la planificación de la red.

## 4: Long Term Evolution, 4G

### 4.1. UMTS Long Term Evolution

#### 4.1.1. Visión General

El Sistema Evolved Packet (EPS) constituye la infraestructura fundamental de las
comunicaciones móviles modernas. Su núcleo se basa en E-UTRAN, la red de acceso radio,
que proporciona conectividad a través de LTE (Long Term Evolution), siendo accesible
tanto desde versiones anteriores a LTE como desde 5G, lo que asegura una conectividad
continua y flexible para los usuarios.

El núcleo de EPS es responsable de la transmisión de paquetes de datos y de la
infraestructura de servicios. La arquitectura subyacente, denominada System Architecture
Evolution (SAE), se centra en la transmisión de paquetes, mientras que para las llamadas
de voz se utiliza el IP Multimedia Subsystem (IMS), una red Next Generation Network.

EPS se divide en dos componentes principales:

- **Red de Acceso Radio (LTE)**: Se caracteriza por su flexibilidad en cuanto a ancho de
  banda, eficiencia espectral, reducción de latencia, simplicidad en la arquitectura y
  mejora en la eficiencia de los servicios basados en paquetes.
- **Núcleo de la Red (SAE - System Architecture Evolution)**: Se enfoca en la transmisión
  de paquetes de datos, proporcionando mejoras en capacidad, latencia optimizada para
  servicios IP y la capacidad de realizar handovers entre tecnologías de acceso
  diferentes de 3GPP.

Un concepto clave en las redes EPS es la **Reutilización de Frecuencia (Frequency
Reuse)**, que permite tres configuraciones:

- **Red de Frecuencia Única (Single Frequency Network)**: Todas las celdas comparten la
  misma banda de frecuencia, limitándose al centro de la celda.
- **Red de Reutilización Clásica 3 (Classical Reuse 3 Network)**: Aplicada en los bordes
  de la celda.
- **Reutilización Fraccional de Frecuencia (Fractional Frequency Reuse)**: La banda se
  divide en sub-bandas más pequeñas, generalmente en cuatro. Los usuarios cercanos a la
  estación base (en el centro de la celda) tienen una reutilización de 1, mientras que
  los usuarios más alejados (en el borde de la celda) tienen una reutilización de 3.

En LTE, la combinación de tiempo y frecuencia da lugar a los **canales físicos**,
organizados en una matriz de slots, donde cada slot puede albergar hasta 12 portadoras.
Esta organización se representa en el eje X como el ancho de banda máximo y en el eje Y
como el tiempo en milisegundos. Las **Redes Heterogéneas (Heterogeneous Networks)** son
una característica clave, ya que incluyen estaciones base con diferentes potencias de
transmisión y áreas de cobertura de diversos tamaños, como celdas macro, pico y femto,
estas últimas utilizadas para reemplazar puntos de acceso Wi-Fi. Esto puede generar mayor
interferencia, especialmente en las transiciones de celdas macro a pico.

La **Agregación de Portadoras (Carrier Aggregation)** permite la transmisión simultánea a
través de varias portadoras, dividiendo los datos entre ellas. Cada portadora tiene su
propia celda servidora, lo que puede resultar en variaciones en la cobertura. Las **Redes
de Auto-Optimización (Self-Optimizing Networks, SON)** buscan garantizar un rendimiento
óptimo de la red en entornos cambiantes, y han evolucionado hacia las **zero-touch
networks**, donde la red se configura automáticamente sin intervención manual.

#### 4.1.2. Arquitectura de la Red

La arquitectura de LTE se organiza en varios componentes clave:

- **Evolved NodeB (eNodeB)**: Actúa como la puerta de entrada entre los dispositivos
  móviles y el núcleo de la red, implementando la arquitectura E-UTRAN sin un controlador
  centralizado. Este nodo puede estar controlado por múltiples MME/S-GWs, lo que permite
  mayor flexibilidad y redundancia, gestionando de manera eficiente las conexiones y la
  movilidad.
- **Protocolos del Estrato de Acceso (AS)**: Facilitan la comunicación y la gestión de
  enlaces inalámbricos entre los eNodeBs y los UE.
- **HSS (Home Subscriber Server)**: Almacena información de suscripción de los usuarios,
  perfiles de QoS y restricciones de acceso en roaming, asegurando una experiencia de
  usuario consistente.
- **P-GW (PDN GateWay)**: Controla la transmisión de paquetes, asigna direcciones IP a
  los UE, aplica políticas de QoS y realiza la carga basada en flujos de acuerdo con las
  reglas definidas por el PCRF. Filtra los paquetes IP en los enlaces descendentes según
  el QoS y actúa como punto de anclaje de movilidad para mantener la continuidad de la
  comunicación.
- **PCRF (Policy Control and Charging Rules Function)**: Controla las políticas,
  supervisa el PCEF (Policy Control Enforcement Function) en el P-GW y autoriza el QoS,
  asegurando la correcta gestión de la calidad del servicio.
- **S-GW (Serving GateWay)**: Se encarga de transmitir todos los paquetes IP de usuario,
  actúa como ancla de movilidad durante los handovers, retiene información de los
  portadores cuando el UE está inactivo y realiza un seguimiento de la ubicación del
  usuario en modo IDLE.
- **MME (Mobility Management Entity)**: Nodo de control que gestiona la señalización
  entre el UE y la red central, administra las portadoras y las conexiones, y garantiza
  la seguridad de las comunicaciones entre la red y el UE.

#### 4.1.3. Arquitectura del Protocolo

La arquitectura del protocolo de LTE se divide en dos planos fundamentales:

- **Plano del usuario centrado en los datos**: El paquete IP destinado al UE se encapsula
  en un protocolo denominado Evolved Packet Core (EPC) y se transmite a través de un
  túnel entre el P-GW y el eNB, utilizando el Protocolo de Túneles GPRS (GTP) para la
  transferencia de datos. En el caso de S5/S8, también se puede utilizar el Protocolo de
  Gestión de Internet por Movilidad (PMIP).
- **Plano de control centrado en la señalización**: En este plano, las capas inferiores
  realizan funciones similares a las del plano de usuario, exceptuando la compresión de
  encabezados. La capa de Radio Resource Control (RRC) tiene un papel crucial en el
  establecimiento de los portadores de radio y en la configuración de las capas
  inferiores para garantizar una correcta gestión de la comunicación.

En el contexto de los procedimientos del Subsistema de Acceso a la Red (NAS), cuando un
UE se conecta a la red, el MME crea un contexto específico para el UE y le asigna un
**SAE Temporary Mobile Subscriber Identity (S-TMSI)**. Durante los períodos de
inactividad, se implementa el **Modo de Gestión de Conexión EPS IDLE (ECM-IDLE)**,
mientras que cuando se necesitan transmitir datos de enlace descendente, se activa el
**Modo de Gestión de Conexión EPS CONNECTED (ECM-CONNECTED)**. El MME también es
responsable de la autenticación y el establecimiento de claves de seguridad.

#### 4.1.4. Calidad de Servicio y Portadores

En el contexto de la **Calidad de Servicio (QoS)**, es fundamental comprender cómo se
gestionan los portadores a través de diferentes interfaces. Cada portador EPS está
asociado a un portador de capa inferior con su propia identificación, y cada nodo
mantiene un registro de la correlación entre las identificaciones de portador en sus
diversas interfaces. Para garantizar la QoS, cada portadora debe contar con una
configuración adecuada de QoS.

Un UE puede ejecutar múltiples aplicaciones simultáneamente, cada una con diferentes
requisitos de QoS. Existen dos categorías principales de portadores que desempeñan un
papel crucial en la QoS:

1. **Portadores de Tasa de Bits Garantizada Mínima (GBR)**: Están diseñados para
   aplicaciones como VoIP, que requieren un rendimiento mínimo y un throughput constante.
   Son esenciales para servicios en tiempo real.
2. **Portadores no GBR**: Están destinados a aplicaciones como la navegación web o la
   transferencia de archivos FTP, que no requieren una tasa de bits garantizada, y se
   asemejan a los servicios de tipo "background" en redes anteriores como GSM.

Para gestionar la asignación de datos a los portadores, se utilizan **Plantillas de Flujo
de Tráfico (TFT)**, que filtran paquetes basados en información de encabezado IP,
dirigiéndolos a los portadores correspondientes con la QoS adecuada. Los parámetros
asociados a cada portador son esenciales para garantizar una experiencia de usuario
óptima:

- **Parámetro de Prioridad de Asignación y Retención (ARP)**: Controla la admisión de
  llamadas y prioriza la asignación y retención de recursos.
- **Identificador de Clase de QoS (QCI)**: Influye en la gestión de colas, asignación de
  recursos y control del enlace de radio (RLC), especificando prioridades, retrasos y
  tasas de pérdida de paquetes aceptables.

Estos parámetros son fundamentales para mantener un flujo de datos eficiente y asegurar
la calidad en las comunicaciones móviles.

### 4.2. Red de acceso radioeléctrico terrestre LTE

#### 4.2.1. Interfaz de red EUTRAN

**Plano de Control: S1-MME**

El plano de control S1-MME utiliza el protocolo S1-AP basado en SCTP/IP para la
señalización, siendo responsable de la gestión de los E-RAB (E-Radio Access Bearers), la
transferencia del contexto inicial, la comunicación de la capacidad del UE, el soporte de
movilidad para UEs en LTE, el _paging_, la administración de la interfaz S1, el
transporte de señalización NAS y la transferencia de configuración para información SON.

**Plano del Usuario: S1-U**

Este plano es responsable de la transferencia de datos de usuario, transportando el
tráfico de portadores identificados por puntos de túnel GTP de origen y destino, junto
con las direcciones IP. Además, permite la asignación de categorías de tráfico de QoS
para servicios diferenciados.

**Movilidad Intra-LTE**

La movilidad intra-LTE involucra procedimientos de _handover_ dentro de la red LTE para
UEs en modo activo. El procedimiento preferido es el _X2-handover_, que se utiliza cuando
se dispone de la interfaz X2 entre eNodeBs. En caso de no contar con esta interfaz, o
cuando se configura una interfaz S1 hacia un eNodeB de destino, se utiliza el
_S1-handover_. Además, se gestiona la actualización de la área de seguimiento (TAU)
cuando es necesario.

**Movilidad sobre S1: Movilidad Intra-LTE**

En este proceso, el eNodeB de origen decide realizar un _handover_ enviando una solicitud
al eNodeB de destino, especificando la celda más óptima a la que se moverá el UE. El MME
de origen solicita confirmación al MME de destino, y una vez confirmada, se inicia el
cambio de celda. El eNodeB de destino confirma que el UE se encuentra en la nueva celda,
permitiendo liberar los recursos en el eNodeB de origen.

**Descripción del Handover (S1 y X2)**

El _handover_ puede clasificarse según la resistencia a la pérdida de paquetes. En el
caso del _seamless handover_ (sin interrupciones, como en UDP), se busca minimizar el
tiempo de interrupción. En el _lossless handover_ (sin pérdida, como en TCP), no se
tolera ninguna pérdida de paquetes. Ambos modos hacen uso del reenvío de datos en el
enlace descendente del plano de usuario. La elección del modo depende de cada portador
EPS y de la calidad del servicio proporcionado. Además, se pueden definir múltiples
eNodeBs de destino para una recuperación rápida en caso de fallos.

**Estructura del protocolo X2**

La interfaz X2 puede implementarse sobre S1 sin requerir una malla completa de
conexiones. Las funciones de X2-AP incluyen la gestión de movilidad, la gestión de carga
e interferencia, y el intercambio de información histórica. X2 puede realizar _handovers_
sin la intervención del MME.

#### 4.2.2. Interfaz aérea EUTRAN

**Generación de señales**

La interfaz aérea EUTRAN utiliza técnicas avanzadas para la generación de señales,
maximizando la eficiencia espectral y la capacidad de transmisión. En el enlace
descendente (DL) se utiliza **OFDMA** (Acceso Múltiple por División Ortogonal de
Frecuencia), mientras que en el enlace ascendente (UL) se utiliza **SC-FDMA** (Acceso
Múltiple por División de Frecuencia de Portadora Única), que es adecuado para
transmisiones con restricciones de energía.

El _scheduling_ y la adaptación del enlace se realizan a través de los Bloques de Recurso
Físico (PRB), lo que permite asignar subportadoras OFDM a distintos usuarios. Se utilizan
técnicas como **MIMO** (Entradas Múltiples, Salidas Múltiples) para mejorar la capacidad
y calidad de transmisión, mediante multiplexación espacial y **beamforming**. Este último
permite enfocar selectivamente la energía de la señal en una dirección específica,
mejorando la eficiencia y calidad de la transmisión.

**Malla de recursos**

Para comprender cómo se asignan los recursos de radio, es importante entender las
siguientes definiciones:

- **Intervalo de Transmisión de Tiempo (TTI):** Es la duración de la subtrama, que define
  la tasa mínima de adaptación y programación.
- **Rejilla de Recursos:** Cubre todas las subportadoras disponibles en el dominio de
  frecuencia y los símbolos OFDM que se transmiten durante un TTI.
- **Bloque de Recurso Físico (PRB):** Un PRB está formado por un conjunto de
  subportadoras consecutivas en frecuencia y símbolos OFDM en el dominio del tiempo
  durante un TTI.
- **Elemento de Recurso (RE):** Un RE es un par de índices que representan una
  subportadora específica y son esenciales para la asignación precisa de recursos.

#### 4.2.3. Protocolos de acceso a red, plano de control

**Plano de control**

En el plano de control, las funciones de control son gestionadas por la capa **RRC
(Control de Recursos de Radio)**, que realiza tareas como la configuración de portadoras
de radio, gestión de la información del sistema, establecimiento de conexiones, y el
_paging_. Los estados **RRC_IDLE** y **RRC_CONNECTED** definen los diferentes modos de
interacción del UE con la red.

**Estados NAS (Non Access Stratum)**

Existen dos estados en la gestión de la conectividad: **EMM-DEREGISTERED** y
**EMM-REGISTERED**, que dependen de si el UE está registrado en el MME. También existen
los estados **ECM-IDLE** y **ECM-CONNECTED**, que indican si el UE tiene conectividad con
el EPC.

**Mapeo a capas inferiores**

La señalización y el _paging_ se mapean a canales lógicos y los mensajes RRC se
transmiten a través de SRBs (Short Radio Bearers), que son mapeados por las capas
**PDCP**, **RLC**, y **MAC**.

#### 4.2.4. Protocolos de acceso a red, plano de usuario

**Seguridad**

En el plano de usuario, se emplean medidas de seguridad como contadores PDCP (**COUNT**)
y técnicas de autenticación para garantizar la integridad y autenticidad de los datos.
Además, se realizan operaciones de cifrado para proteger la privacidad de las
comunicaciones.

**Handover sin interrupciones y sin pérdida**

En un _handover_ sin interrupciones, se restablecen las entidades PDCP y se envían los
datos que aún no han sido transmitidos a la nueva celda. En el _handover_ sin pérdida, se
mantienen los números de secuencia de PDCP y los valores de **COUNT**, y la capa **RLC**
se asegura de la entrega en secuencia.

**Funciones de RLC y MAC**

- **RLC (Control de Enlace de Radio)** gestiona la segmentación y reensamblaje de PDUs de
  PDCP, asegurando la correcta transmisión de datos.
- **MAC (Control de Acceso al Medio)** desempeña un papel crucial en el _scheduling_ de
  recursos de radio y la gestión del acceso aleatorio al medio. Además, gestiona el
  **HARQ** (Automatic Repeat Request) para retransmitir paquetes si es necesario.

#### Canales físicos

Existen diferentes canales físicos tanto en el enlace descendente como en el enlace
ascendente, tales como **PDSCH**, **PMCH**, **PUSCH**, **PUCCH**, entre otros, que
gestionan la transmisión de datos y control en la red.

### 4.3. Dominio Central de LTE

#### Interfaz S5/S8 y Protocolos de Túnel en el Plano del Usuario

La interfaz S5 se considera una variante de itinerancia de la interfaz S8 y desempeña un
papel crucial en la gestión de túneles en el plano del usuario entre el S-GW (Serving
Gateway) y el P-GW (PDN Gateway). Estos túneles son establecidos y gestionados mediante
los protocolos GTP (GPRS Tunneling Protocol) y PMIP (Proxy Mobile IP). Ambos protocolos
tienen como función principal enrutar paquetes de datos entre el eNodeB (evolved Node B)
y las pasarelas de red.

La Encapsulación de Enrutamiento Genérico (GRE) es utilizada para identificar y
diferenciar flujos de tráfico dentro de un túnel, asegurando la correcta segregación y el
manejo eficiente del tráfico de datos.

#### Protocolos GTP y PMIP en el Plano de Control

En el plano de control, los protocolos GTP y PMIP son responsables de la gestión de la
movilidad y el enrutamiento de los paquetes. Estos protocolos permiten la movilidad
dentro de la red, facilitando la transición de los usuarios entre diferentes puntos de
acceso sin interrumpir sus sesiones.

#### Movilidad en el Contexto de IP

La pila de protocolos IP básica no incluye funcionalidades específicas de movilidad.
Cuando un dispositivo de usuario (UE, por sus siglas en inglés) cambia su punto de
conexión, se requiere que obtenga una nueva dirección IP, lo que implica la necesidad de
reiniciar cualquier sesión IP en curso con las nuevas direcciones asignadas.

#### Protocolo IP Móvil (Mobile IP)

El Protocolo IP Móvil (Mobile IP) resuelve este problema al permitir que el UE cambie de
punto de conexión sin interrumpir las sesiones IP activas. Mobile IP resulta
particularmente adecuado para proporcionar movilidad en entornos con acceso heterogéneo.
Utiliza direcciones como la Dirección de Inicio (Home Address, HoA) y la Dirección de
Atención (Care of Address, CoA) para gestionar de forma eficiente los cambios de
ubicación y la movilidad de los dispositivos.

#### Proxy Mobile IPv6 (PMIPv6)

Proxy Mobile IPv6 (PMIPv6) es un esquema de gestión de movilidad basado en la red, que
permite a los dispositivos móviles mantener sus sesiones de red mientras se desplazan sin
necesidad de software de Mobile IP en el UE. En PMIPv6, la red asume la responsabilidad
de proporcionar los servicios de movilidad, seguir los movimientos del UE y ejecutar la
señalización de movilidad necesaria dentro de la red central para mantener la sesión
activa durante los eventos de movilidad.

Los componentes clave de PMIPv6 son:

1. **Gateway de Acceso Móvil (MAG)**: Actúa como cliente de Mobile IP en nombre del UE.
   Este componente se encuentra en la red de acceso y es responsable de gestionar las
   tareas relacionadas con la movilidad de los dispositivos dentro de su área de
   cobertura.
2. **Anclaje de Movilidad Local (LMA)**: Desempeña un papel similar al del Agente de
   Inicio (Home Agent) en el Mobile IP tradicional. El LMA se encuentra en la red donde
   está topológicamente ubicada la Dirección de Inicio (HoA) del dispositivo móvil. Su
   función es servir como punto de anclaje para la movilidad del dispositivo y garantizar
   el reenvío adecuado de los paquetes hacia el dispositivo a medida que este se desplaza
   dentro de la red.

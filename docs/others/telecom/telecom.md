---
sidebar_position: 2
authors:
  - name: Daniel Bazo Correa
description: Aprende lo necesario de las redes móviles.
title: Redes móviles
toc_max_heading_level: 3
---

## 1. Contexto de la evolución y convergencia de las redes

### 1.1. Antecedentes históricos

de las redes actuales Las redes son un conjunto de instalaciones que un operador necesita
para proporcionar un servicio de telecomunicaciones. Para ello, requiere de una
instalación de elementos (hardware y software) necesarios para crear una infraestructura
y ofrecer un servicio a clientes. Este tipo de redes experimentan una evolución continua
que les permite competir en el mercado e incluso converger entidades, ofreciendo
múltiples servicios en una sola red o el mismo servicio a través de más de un medio.

#### 1.1.2. Silo model

El término "Silo model" se refiere a un enfoque histórico en el que diferentes servicios
de telecomunicaciones, Internet y radiodifusión se han integrado verticalmente, tanto
como negocios como conjuntos de instalaciones. Este modelo se caracteriza por la falta de
integración y comunicación efectiva entre estos servicios y tecnologías.

Veremos el modelo Silo para diferentes tecnologías:

- Red Fija/2G Móvil: existen similitudes en las capas de transmisión, conmutación y
  servicio, pero se utilizan tecnologías diferentes en las capas de terminales y acceso.
  Además, se presentan desafíos de movilidad en las redes GSM.

- Internet: Internet es actualmente la red de datos más utilizada, unificada por el
  protocolo IP. Por lo general, el proveedor de acceso a Internet (ISP) es una empresa de
  telecomunicaciones, mientras que el proveedor de servicios de Internet (NSP)
  proporciona la infraestructura a los ISPs.

- Redes de Conmutación de Paquetes Móviles: son las más utilizadas en la actualidad, y
  utilizan diferentes tecnologías de acceso, como GPRS, UMTS, LTE y 5G.
- Red Celular LTE: LTE permite la interconexión con redes 2G y 3G, enfocándose
  principalmente en servicios de datos. Los servicios de voz se desvían a través de 2G.
  Además, se han mejorado las redes de acceso y el núcleo de la red se ha rediseñado
  utilizando protocolos basados en IP, entre otros.
- Red Celular 5G: La red 5G es compatible con 2G, 3G, 4G y otras redes no 3GPP. Introduce
  servicios con baja latencia y altas velocidades, mejora la red de acceso y utiliza
  virtualización en el núcleo de la red.
- Datos de Telecomunicaciones: se utilizan para respaldar los servicios propios de la
  empresa y se ofrecen a otros operadores de red y usuarios finales a través de líneas
  alquiladas. Esto incluye actividades como redes privadas y virtuales, así como la
  provisión de servicios de Internet.
- Broadcasting: permite la unión de programas y contenido, la emisión de señales en el
  sistema de distribución de señales y la cobertura de radio en las áreas de recepción.

### 1.2. Evolución y convergencia

### 1.2.1. Redes de telecomunicaciones y redes de computadoras

Tanto las redes de telecomunicaciones como las redes de computadoras pertenecen a la
familia de las redes de comunicación. Las redes de telecomunicaciones se basan en redes
telefónicas conmutadas por circuitos y ofrecen servicios para dispositivos en movimiento.
Son desarrolladas por ingenieros de telecomunicaciones. Por otro lado, las redes de
computadoras incluyen redes domésticas, de oficina e Internet. Se accede a ellas desde
dispositivos inalámbricos y son desarrolladas por informáticos, con protocolos _ad hoc_.

::: note

Un protocolo _ad hoc_ es un conjunto de reglas personalizado diseñado para satisfacer
necesidades específicas en lugar de seguir un estándar.

:::

## 2. Redes fijas de datos

### 2.1. Servicios IP

El tráfico de redes IP ha experimentado un notable crecimiento en los últimos años, con
una tendencia al aumento a nivel global. Una de las principales fuentes de este aumento
de tráfico se ha producido en las redes metropolitanas, en parte gracias a las redes de
entrega de contenido, conocidas como CDNs (Content Delivery Networks), que gestionan la
mayor parte del tráfico de Internet, debido a dispositivos inalámbricos y móviles.

En cuanto a las tendencias en los servicios de IP, se está observando un notable
crecimiento en el tráfico de video en línea bajo demanda, así como la aparición de
problemas relacionados con la calidad en los servicios de voz. Además, cada vez es más
importante la comunicación máquina a máquina (M2M) en la interacción con dispositivos
conectados, como medidores inteligentes, sistemas de domótica, videovigilancia y
electrodomésticos, entre otros.

Algunos servicios que usan el protocolo IP son:

- Navegación web: Utiliza los protocolos HTTP (no seguro) o HTTPS (seguro), con tráfico
  variable y servicio asimétrico. El tamaño de paquete es máximo en el enlace descendente
  (Down Link, DL) y solo se envían confirmaciones de llegada de paquetes en el enlace
  ascendente (Up Link, UL).
- Servicios de asistencia: Incluyen un indicador de estado que muestra la capacidad y
  disposición de un asistente de comunicación. Los usuarios pueden recibir notificaciones
  de eventos relacionados con la disponibilidad de otros usuarios a través del protocolo
  de inicio de sesión (Session Initiation Protocol, SIP).
- Mensajería instantánea: Permite el intercambio de información en tiempo real,
  principalmente texto, y puede integrarse con otros servicios. Se utiliza el protocolo
  Session Initiation Protocol for Instant Messaging and Presence Leveraging Extensions
  (SIMPLE).
- Voz sobre IP, VoIP: Implica la transmisión de voz a través de redes IP utilizando
  conmutación de paquetes. Incluye funciones como señalización y servicios
  suplementarios. Se utiliza el protocolo SIP junto con RTP/RTCP para mantener la calidad
  de la voz.
- Push-to-talk: Comunicación permanente unidireccional (half-duplex) de voz IP. Un
  agente/usuario SIP puede establecer sesiones con otros usuarios SIP.
- Video bajo demanda y streaming: Los datos son consumidos por el cliente a medida que
  llegan, con un posible retraso inicial, asimétrico y con grandes tamaños de paquetes.
- IP TV: Garantiza la calidad de servicio (QoS) y ofrece canales solicitados por el
  usuario.
- Video progresivo: Utiliza un reproductor de video sobre HTTPS, con períodos de
  almacenamiento en buffer para lidiar con retrasos. El tráfico varía con transmisiones
  intensivas al principio y rebuffering con el máximo throughput.
- Juegos en línea: Interactivos, con paquetes cortos y alta señalización. Requieren
  confiabilidad y baja latencia, utilizando arquitecturas cliente-servidor y protocolos
  específicos según la aplicación.
- Juegos en la nube: Audio/video/comandos con latencia y alta tasa de descarga para una
  buena calidad de experiencia (QoE).
- Machine-to-Machine, M2M: Utiliza paquetes cortos con alta señalización y requiere alta
  confiabilidad, con requisitos variables dependiendo del servicio. En cuanto al IoT,
  implica objetos físicos conectados que intercambian datos, como instrumentación
  industrial, a veces a través de redes ad hoc.

### 2.2. Protocolos de Internet

IP presenta menos capas en comparación al modelo OSI.

#### 2.2.1. Protocolo de internet, IP

El Protocolo de Internet (IP) es esencial para la comunicación entre dispositivos en
redes, como Internet, LAN y redes empresariales. IP se encarga de transmitir mensajes
llamados "datagramas" entre equipos de origen y destino utilizando direcciones IP únicas.
Proporciona servicios de direccionamiento y fragmentación. IP es un servicio de entrega
no confiable y sin conexión, lo que significa que, si se producen errores en la
transmisión, los datagramas se descartan. Además, cada datagrama se trata de manera
independiente y puede seguir rutas diferentes y no necesariamente en orden. La
responsabilidad de garantizar la entrega en orden recae en capas superiores, como TCP. El
tamaño máximo de un datagrama, conocido como Unidad Máxima de Transmisión (Maximum
Transmission Unit, MTU), varía según la capa física de enlace. Si un datagrama es más
grande que el MTU, se fragmenta y se reensambla en el destino. Apuntes Arquitecturas de
Redes Móviles 8 La ruta que sigue un paquete de datos desde su origen hasta su destino a
través de múltiples redes y routers se conoce como enrutamiento. Los routers utilizan
tablas de reenvío basadas en la dirección IP de destino para determinar el siguiente
salto. Esto permite que paquetes con la misma dirección origen y destino sigan rutas
diferentes.

#### 2.2.2 Seguridad del Protocolo de Internet (IPSec)

IPSec (Internet Protocol Security) es un conjunto de protocolos de seguridad que
garantiza la autenticación al inicio de una sesión, la negociación de claves durante la
sesión y puede usarse en configuraciones de host a host, red a red y red a host.
Proporciona seguridad para el tráfico de aplicaciones en redes IP, incluyendo
autenticación de origen de datos, integridad y cifrado de datos. IPSec tiene dos modos de
operación:

1. Modo de transporte: En este modo, solo el contenido del paquete IP se cifra o
   autentica, manteniendo sin cambios la información del encabezado IP.
2. Modo túnel: En este modo, se cifra y autentica todo el paquete IP completo, que luego
   se encapsula en un nuevo paquete IP con un encabezado IP diferente. Este modo se usa
   para crear redes privadas virtuales (Virtual Private Network, VPN).

#### 2.2.3. IP multicast

La comunicación en tiempo real de one-to-many y de many-to-many a través de una
infraestructura IP permite enviar datos de manera eficiente a múltiples receptores sin
necesidad de conocer su identidad o número de receptores. Esto se logra mediante la
replicación de paquetes por conmutadores y enrutadores, eliminando la necesidad de
duplicar mensajes en cada enlace. En IP multicast, el protocolo UDP se utiliza comúnmente
debido a su eficiencia en la transmisión de datos a múltiples receptores y su falta de
necesidad de establecer conexiones individuales para cada receptor. Para el protocolo de
transporte en IP multicast, se emplea el Protocolo de Administración de Grupo de Internet
(Internet Group Management Protocol, IGMP) para IPv4 y el Descubrimiento de Oyentes
Multidifusión (Multicast Listener Discovery, MLD) para IPv6. Estos protocolos permiten a
hosts y enrutadores unirse a grupos de multidifusión (multicast) y controlar las salidas.
El enrutamiento de multidifusión busca encontrar la ruta óptima para llegar a todos los
destinos sin duplicar el envío de paquetes a través de una red específica. Esto Apuntes
Arquitecturas de Redes Móviles 9 se logra mediante el Protocolo Independiente de
Multidifusión (Protocol Independent Multicast, PIM) que gestiona eficazmente el
enrutamiento de transmisiones de multidifusión al crear una jerarquía de rutas y
considerar la dirección IP de origen para dirigir los paquetes y evitar bucles. En el
enrutamiento de multicast, las rutas cambian según las suscripciones al canal (cuando una
aplicación se incorpora o abandona una transmisión), a diferencia del unicast, donde los
cambios se deben principalmente a la topología de red o fallos en el equipo. Existen dos
modos de enrutamiento de multicast: 3. Modo Disperso (Sparse Mode): Utilizado cuando hay
un bajo porcentaje de nodos suscritos al canal de multidifusión. 4. Modo Denso (Dense
Mode): Usado cuando todos los enrutadores reciben automáticamente los mensajes de
multidifusión, a menos que envíen explícitamente un mensaje de poda. 💡 Un mensaje de
poda o prune message es una comunicación enviada por un enrutador en una red multicast
para indicar que ya no desea recibir tráfico para un grupo específico.

### 2.3. Protocolos de transporte

#### 2.3.1. UDP

El Protocolo de Datagramas de Usuario (User Datagram Protocol, UDP) es un modelo no
orientado a conexión que no garantiza la entrega, el orden o la protección contra
duplicados de los datos. Utiliza checksum para verificar la integridad de los datos y
números de puerto para direccionar funciones en la fuente y el destino. Se emplea en
aplicaciones donde la verificación y corrección de errores no son necesarias, siendo
especialmente útil en servicios de tiempo real donde es preferible perder paquetes a
esperar paquetes retrasados.

#### 2.3.2. TCP

El Protocolo de Control de Transmisión (Transmission Control Protocol, TCP) se enfoca en
la entrega confiable de datos al establecer y mantener una conexión antes de la
transmisión. Divide datos grandes en segmentos, ajustando el tamaño según la MTU de IP.
Asegura una transferencia ordenada mediante retransmisiones basadas en timers y tiempo de
ida y vuelta de los paquetes (Round-trip Time, RTT), evitando esperas infinitas. Además,
implementa control de flujo para prevenir envíos excesivos y control de congestión para
adaptar la ventana de transmisión según los ACK recibidos.

#### 2.3.3. SCTP

Los protocolos de transporte destacados son TCP y el Protocolo de Control de Transmisión
de Control de Flujo (Stream Control Transmission Protocol, SCTP). TCP se caracteriza por:
Permite la multiplexación de servicios en una única comunicación IP. Gestiona el control
de flujo y congestión para una transmisión eficiente. Sufre del head-of-line blocking, lo
que puede detener la transmisión de otros paquetes, incluso de servicios diferentes. No
permite multiplexar diferentes redes. En cuanto a SCTP, se caracteriza por: Similar a UDP
en cuanto a la entrega de mensajes, pero garantiza la entrega confiable y ordenada como
TCP. Aborda problemas como el head-of-line blocking y permite el uso de múltiples
direcciones IP, priorizando paquetes pequeños si los grandes se bloquean. Ofrece soporte
para múltiples flujos de datos con entrega parcial en secuencia. Apuntes Arquitecturas de
Redes Móviles 11 Mantiene el estado de la conexión a través de mensajes (heartbeat), con
el fin de asegurar que el camino está bien. Permite enviar datos con fiabilidad parcial y
prioridades según sea necesario.

#### 2.3.4. ICMP Protocolo de Mensajes de Control de Internet

(Internet Control Message Protocol, ICMP), se caracteriza por: Se emplea en dispositivos
de red para enviar mensajes de error. No se usa para la transferencia de datos entre
sistemas o aplicaciones de usuario final, sino principalmente en herramientas de
diagnóstico como ping y traceroute.

#### 2.3.5. Puertos Los puertos son números de 16 bits que

se vinculan a una dirección IP de host y al tipo de protocolo de comunicación.
Complementan las direcciones de origen o destino de una sesión y no son necesarios en
conexiones directas punto a punto. Los procesos se asocian a ellos a través de un socket
de Internet. Estos puertos se utilizan para identificar servicios específicos, como el
DHCP que utiliza los puertos UDP 68 para el cliente y UDP 67 para el servidor, o el HTTP
que usa el puerto 80, mientras que el HTTPS emplea el puerto 443.

### 2.4. Protocolos de aplicación

#### 2.4.1. SIP

El Protocolo de Inicio de Sesión (Session Initiation Protocol, SIP) es un protocolo
utilizado para señalizar y controlar sesiones de comunicación multimedia en redes IP. Se
encarga de configurar y controlar llamadas, así como de intercambiar mensajes entre
puntos finales para crear, modificar y finalizar sesiones con múltiples flujos de medios.
SIP es independiente de la capa de transporte y puede funcionar en TCP, UDP o SCTP,
admitiendo sesiones unicast o multicast. SIP trabaja en conjunto con otros protocolos,
como RTP (Real-time Transport Protocol) para la transmisión de medios y SDP (Session
Description Protocol) para la definición de parámetros de medios. También puede utilizar
TLS (Transport Layer Security) para transmisiones seguras en la capa de transporte.
Apuntes Arquitecturas de Redes Móviles 12 El modelo de transacción de SIP es similar al
de HTTP, con solicitudes del cliente que activan funciones en el servidor y reciben
respuestas. Las URI (Uniform Resource Indetifier) se utilizan para identificar recursos
en una red SIP, y SIP se centra en la configuración y señalización de llamadas, dejando
las funciones específicas a servidores proxy y agentes de usuario. Los elementos clave en
una red SIP incluyen: Agentes de usuario que crean o reciben mensajes SIP. Registradores
que gestionan la información de ubicación y asignan direcciones IP a URIs. Servidores
proxy que actúan como intermediarios para enrutar solicitudes y aplicar políticas. Es
decir, dirigen de una URI a otra. Servidores de redirección que generan respuestas de
redirección. Controladores de borde de sesión que realizan diversas funciones de
intermediación. Pasarelas que conectan una red SIP con otras redes, como la PSTN,
utilizando diferentes protocolos o tecnologías.

#### 2.4.2. RTP y RTCP

El Protocolo de Transporte en Tiempo Real (Real-time Transport Protocol, RTP) y el
Protocolo de Control en Tiempo Real (Real-time Transport Control Protocol, RTCP) suelen
utilizarse en conjunto y son fundamentales para la transmisión de medios en tiempo real.
Cada sesión consta de una dirección IP y dos puertos (RTP/RTCP), y se establece una
sesión para cada flujo multimedia, como audio y video. Las sesiones se inician utilizando
un protocolo de señalización como SIP y se ejecutan comúnmente sobre UDP, aunque en
ciertas situaciones se requiere TCP. RTP se encarga de transmitir medios en tiempo real,
como telefonía y videoconferencias, priorizando la entrega puntual de datos, tolerando
cierta pérdida de paquetes y admitiendo múltiples destinos a través de IP multicast.
Aunque no garantiza la entrega de paquetes, RTP proporciona información del payload, como
el formato del contenido, marcas de tiempo para la sincronización y números de secuencia
para detectar y reorganizar paquetes perdidos. Por otro lado, RTCP proporciona
estadísticas sobre el QoS de la conexión de medios, permitiendo a las aplicaciones
ajustar parámetros como la limitación del flujo o el uso de diferentes códecs. Los
mensajes RTCP incluyen informes de emisor y receptores con estadísticas sobre los
paquetes RTP enviados, descripciones de Apuntes Arquitecturas de Redes Móviles 13 fuente
para identificar participantes y mensajes de despedida para anunciar la desconexión de un
punto final. Además, se pueden utilizar mensajes de aplicación específica (APP) para
extensiones personalizadas del protocolo RTCP.

### 2.5. Calidad de la experiencia (QoE)

#### 2.5.1. Calidad del servicio, QoS El

QoS en redes se evalúa mediante indicadores clave de rendimiento (Key Performance
Indicator, KPI) como el throughput (velocidad de datos en bits/s), pérdidas de paquetes
(% de paquetes perdidos), retardo promedio (latencia) y jitter (variabilidad en el
retardo). Estos KPI son mensurables. Los acuerdos de nivel de servicio (Service Level
Agreements, SLA) son contratos entre el proveedor de servicios de red y el cliente, que
establecen la calidad de servicio garantizada. Pueden incluir múltiples especificaciones
de nivel de servicio (Several Service Level Specifications, SLS) que definen límites
adecuados para los aspectos de rendimiento del QoS. Los KPI son esenciales ya que las
aplicaciones son sensibles a factores como pérdida de datos, rendimiento, latencia y
variabilidad en el retardo. Estas garantías se ofrecen para asegurar la satisfacción del
usuario y la optimización de los recursos. Los servicios pueden ser elásticos,
adaptándose a la velocidad disponible, o inelásticos, que requieren un nivel mínimo de
calidad para funcionar adecuadamente. El rendimiento de una red se mide mediante la
velocidad de transmisión instantánea (instanteneous throughput) y promedio (average
throughput), donde el rendimiento instantáneo es una medición puntual en un momento
específico, mientras que el rendimiento promedio refleja la calidad de la conexión a lo
largo del tiempo, considerando condiciones cambiantes. Apuntes Arquitecturas de Redes
Móviles 14 La latencia se ve afectada por varios factores, como el retraso de
propagación, transmisión, procesamiento y encolado, así como el jitter, que introduce
variabilidad en el retardo. Las pérdidas de paquetes pueden ocurrir debido a varios
motivos, pero algunos protocolos, como TCP, las gestionan mediante retransmisiones. Para
abordar el jitter, es posible utilizar el buffering para retrasar los primeros paquetes.
El QoS es crucial en redes congestionadas para asignar recursos de manera eficiente y dar
prioridad a flujos críticos. Sin embargo, en los puntos de interconexión entre redes, no
siempre se garantiza QoS, a menos que sea una red privada. La falta de QoS puede causar
problemas cuando se comparten recursos. Para implementar QoS en redes IP, se pueden
duplicar las infraestructuras o utilizar etiquetado de paquetes para diferenciar y tratar
de manera distinta el tráfico de diversos servicios. Las arquitecturas de QoS incluyen el
servicio de mejor esfuerzo, que trata todo el tráfico por igual, y los servicios
integrados (IntServ) y diferenciados (DiffServ). IntServ reserva recursos para cada flujo
(en el caso de no usarse otro servicio lo ocupa), es orientado a la conexión y requiere
señalización. En cambio, DiffServ se enfoca en combinar de flujos similares (agregados),
basándose en la clasificación de paquetes en los bordes de la red, no es necesariamente
orientado a la conexión e intenta resolver los problemas de escalabilidad de IntServ. El
QoS se divide en tres planos: el plano de control, el plano de datos y el plano de
gestión. Cada plano compuesto por una serie de elementos, estos son: 5. Plano de control,
encargado de la señalización, está compuesto por: Control de admisión: Decide si se
permite o no la entrada de nuevos flujos de datos a la red, basado en la capacidad y
recursos disponibles. Sin este control no hay QoS, por lo que es fundamental. QoS
Routing: Selecciona las rutas adecuadas para los flujos de datos según sus requisitos de
calidad de servicio. Gestión de recursos: Asigna y gestiona los recursos de la red para
cumplir con los requisitos de QoS. 6. Plano de Datos, encargado de la parte de usuario,
está compuesto por: Gestión de buffers: Controla el almacenamiento temporal de datos para
equilibrar la velocidad de entrada y salida. Buffer shaping: Modela el tráfico de datos
antes de transmitirlo para evitar congestiones. Apuntes Arquitecturas de Redes Móviles 15
Evitación de congestión: Implementa estrategias para prevenir la congestión en la red.
Control de tráfico: Regula el tráfico de datos para cumplir con los requisitos de QoS.
Etiquetado de paquetes: Agrega información a los paquetes para clasificarlos según sus
necesidades de QoS. Clasificación de tráfico: Organiza los paquetes en categorías según
sus características y necesidades de QoS. Colas y planificación: Administra las colas de
paquetes y decide cuándo y en qué orden se transmiten. 7. Plano de Gestión, define el
comportamiento de la red y cómo actuar en consecuencia, está compuesto por: Medición:
Evalúa y registra el tráfico y el rendimiento de la red. Policy: Define reglas para
garantizar la calidad de servicio deseada. Acuerdos de Nivel de Servicio (SLA): Establece
contratos entre proveedores de servicios y clientes para garantizar la calidad de
servicio acordada.

#### 2.5.2. Mean Opinion Score, MOS

El QoE es subjetiva y se relaciona con las expectativas del usuario. Se mide comúnmente
con el "Mean Opinion Score" (MOS), una puntuación promedio otorgada por múltiples
usuarios en una escala del 1 al 5, donde califican la calidad de una llamada según su
percepción. Apuntes Arquitecturas de Redes Móviles 16 Existen mediciones automáticas de
QoE utilizando métodos con referencia, caracterizados por ser intrusivos ya que comparan
la señal original con la señal degradada, y métodos no intrusivos, donde se escucha de un
lado sin compararlo con nada. Uno de estos métodos es el "Perceptual Evaluation of Speech
Quality" (PESQ), que es un algoritmo utilizado en VoIP, y considera factores como los
niveles de entrada de voz, errores en el canal de transmisión, ruido ambiental, etc. Para
evaluar la calidad de los servicios de voz, se utilizan modelos como el e-Model, que
considera factores como el ruido, pérdida de paquetes, eco, etc. También se emplea POLQA,
una métrica de calidad de voz basada en percepción humana, utilizada en sistemas con alto
rendimiento binario. El QoS impacta en el QoE.

#### 2.5.6. MOS vs QoS

Los requisitos de QoE varían según el servicio y los KPI, lo que hace que la modelización
de la QoE sea compleja. Por ejemplo, en el caso de video progresivo, la tasa de tráfico
depende de la velocidad de codificación (audio + video), la latencia de red no es
constante y se requiere almacenamiento en buffer para compensar la variabilidad en la
red. El tamaño del buffer depende del servicio, la red y la memoria disponible. La QoE se
mide en función de factores como el tiempo de almacenamiento en búfer inicial, la
frecuencia de rebuffering y la duración promedio del rebuffering, y estos valores pueden
modificarse en función de las expectativas del usuario y las condiciones de la red. Por
ejemplo, en redes celulares 2G-3G, se puede aumentar el tiempo de almacenamiento en búfer
en un 20%. También se pueden ajustar la calidad y el tamaño del video según el
dispositivo y el servicio específico.

### 2.6. Redes de próxima generación (NGN) Las Redes de

Nueva Generación (NGN) son redes basadas en IP que ofrecen servicios de
telecomunicaciones. Sus características clave incluyen: Apuntes Arquitecturas de Redes
Móviles 17 8. Tecnologías de transporte de banda ancha y QoS: Utilizan múltiples
tecnologías de transporte de banda ancha que admiten QoS. 9. Funciones de servicio
independientes: Separan las funciones de servicio de las tecnologías de transporte, lo
que permite una mayor flexibilidad en la prestación de servicios. 10. Acceso abierto:
Permiten a usuarios y proveedores de servicios acceder libremente, promoviendo la
competencia y elección. 11. Movilidad: Los usuarios pueden acceder a servicios en
cualquier lugar y momento. Estas redes mejoran las infraestructuras tradicionales (la red
fija de telefonía conmutada, las redes móviles e Internet) y permiten la convergencia de
servicios, incluyendo audio, video y datos. También abordan asuntos críticos como
llamadas de emergencia, privacidad y legalidad en la interceptación de comunicaciones.

#### 2.6.1. Arquitectura de una NGN

Las NGN definen una arquitectura accesible desde cualquier dispositivo con conexión,
compuesta por: 12. Gestión de servicios/aplicación: Configuración, activación y
desactivación de servicios, asignación de recursos, QoS, facturación y gestión de
relaciones con clientes. 13. Control de red: Gestión de señalización y llamadas, con
componentes como softswitch y Registro de Ubicación de Hogar (HLR). Genera registros de
detalles de llamadas (CDR) para facturación. 14. Nucléo de transporte: Red de conmutación
de paquetes con enrutadores IP y MPLS para garantizar QoS. 💡 MPLS (Multiprotocol Label
Switching) tecnología que permite mejorar el rendimiento y la eficiencia en la
conmutación de paquetes utilizando etiquetas para identificar y dirigir el tráfico. 15.
Acceso en el borde: Interconexión entre transporte y diversas redes, permitiendo el
acceso de diferentes terminales como teléfonos analógicos y SIP mediante gateways.

#### 2.6.2. NGN y las PSTN

PSTN se refiere a la transición de la red telefónica conmutada pública. La comunicación
entre las redes PSTN y NGN se logra mediante: Pasarelas de Señalización (Signaling
Gateway, SG): Conectan comunicaciones basadas en E-1 y en IP a través del protocolo SS-7,
adaptando las capas inferiores para una interoperabilidad transparente. 💡 E-1 es un
estándar de telecomunicaciones que define la capacidad de un canal de transmisión
digital, mientras que SS7 es el equivalente a SIP. Pasarelas de Medios (Media Gateway,
MG): Separan el control de llamadas de la conversión de medios, actuando como puentes
para llamadas de voz entre redes E-1 e IP. Utilizan protocolos TDM e IP y se comunican a
través de RTP/RTCP. Controlador de Pasarela de Medios (Media Gateway Control, MGC):
Utiliza el Protocolo de Control de Pasarela de Medios (MeGaCo) para gestionar las MG y
permite la comunicación con otros MGC a través de SIP.

### 2.7. Interconexión de redes de datos

#### 2.7.1. Sistemas autónomos

Los Sistemas Autónomos (AS) son grupos de redes IP con políticas de enrutamiento
definidas, gestionados por operadores de redes. Facilitan el enrutamiento en Internet y
pueden ser redes individuales o de ISPs. Los AS se clasifican en tres categorías según su
conectividad: 16. AS stub: Conectados solo a otro AS, como una pequeña red campus. 17. AS
multihomed: Tienen múltiples conexiones a otros AS, como empresas con opciones de
conexión múltiple. 18. AS de tránsito: Proporcionan servicios de paso a otras redes. Cada
AS tiene un número único de Sistema Autónomo (ASN) asignado por la ICANN u otras
entidades, utilizado para el intercambio de información de enrutamiento exterior. Apuntes
Arquitecturas de Redes Móviles 19

#### 2.7.2. Protocolos de enrutamiento

Existen varios tipos de protocolos de enrutamiento: Protocolo de Puerta de Enlace
Interior (Interior Gateway Protocol, IGP): Utilizado en redes internas para calcular
rutas dentro de un solo AS y permitir el intercambio de datos entre nodos en diferentes
redes dentro del mismo AS. También permite el reenvío de datos cuando un AS ofrece
servicios de tránsito. Protocolo de Puerta de Enlace Exterior (Exterior Gateway Protocol,
EGP): Distribuye rutas entre diferentes AS, permitiendo a los enrutadores seleccionar la
mejor salida para enrutar datos. EGP e IGP colaboran para determinar cómo se enrutan los
datos en Internet. Protocolo de Puerta de Enlace Interior Usual (Open Shortest Path
First, OSPF): Detecta cambios en la topología y se adapta rápidamente a nuevas rutas sin
bucles. Utiliza políticas basadas en el costo de la interfaz y puede especificar rutas
preferidas. Equilibra la carga de tráfico y construye rutas eficientes hacia destinos
conocidos. Protocolo de Puerta de Enlace Exterior (Border Gateway Protocol, BGP): Usado
entre AS en Internet para intercambiar información de enrutamiento. Toma decisiones de
enrutamiento basadas en políticas y atributos como: NEXT_HOP: La dirección IP del
enrutador vecino. LOCAL_PREF: Preferencia local que determina la ruta preferida para
alcanzar una red, que se propaga a los vecinos de BGP. AS-PATH: Una lista de sistemas
autónomos que deben atravesarse para llegar a una red anunciada. Multi-exit discriminator
(MED): Se utiliza para elegir un enlace deseado si hay múltiples enlaces entre dos
sistemas autónomos. Registro de Enrutamiento en Internet (IRR): Permite a los operadores
de red publicar políticas y anuncios de enrutamiento para facilitar la interconexión,
configuración de enrutadores y políticas efectivas. Cada Registro Regional de Internet
(RIR) tiene su propio IRR.

#### 2.7.3. Peering

La jerarquía en Internet se encuentra dividida en 3 niveles: Nivel 1 (Tiers 1): Red
troncal que maneja grandes cantidades de datos y da acceso a ISPs regionales. Apuntes
Arquitecturas de Redes Móviles 20 Nivel 2 (Tiers 2): Proveedores regionales de servicios
de Internet que brindan acceso a ISPs locales. Nivel 3 (Tiers 3): ISPs locales que
ofrecen acceso a Internet a hogares y empresas. En la interconexión entre redes se pueden
dar 2 tipos de acuerdos: Tránsito: Permite que el tráfico atraviese redes diferentes,
generalmente conectando ISPs más pequeños a Internet, previo pago. Como Tiers 1 a los
Tiers 2 o 3. Peering: Acuerdo entre dos ISPs para intercambiar tráfico simétrico entre
sus clientes, reduciendo costos de tránsito y mejorando la experiencia de los usuarios,
gracias a la reducción en latencia y a un mayor control del enrutamiento. Destacar que el
peering no reemplaza el tránsito de Internet. El peering puede ser: Privado: Conexión
punto a punto que no requiere infraestructura adicional. Punto de Intercambio de Internet
(IXP): Lugar donde varios ISPs interconectan sus redes utilizando switches Ethernet y el
protocolo BGP. El servicio de tránsito en Internet se compone de: Anuncio de rutas de
clientes a otros ISPs para atraer tráfico entrante. Anuncio de rutas de otros ISPs al
cliente para atraer tráfico saliente desde el cliente. Los proveedores de tránsito en
Internet: Ofrecen diferentes niveles de servicio con garantías de rendimiento, pero la
entrega final no está garantizada. Existen muchos proveedores de tránsito que ofrecen una
amplia gama de productos y pueden operar en regiones específicas o en múltiples
continentes. Los precios y los acuerdos de nivel de servicio varían.

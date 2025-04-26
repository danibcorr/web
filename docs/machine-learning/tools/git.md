---
sidebar_position: 2
authors:
  - name: Daniel Bazo Correa
description: Control de versiones con Git.
title: Git
toc_max_heading_level: 3
---

## Bibliografía

- [Git](https://git-scm.com/)
- [Git Hooks](https://githooks.com/)
- [Learning Git: A Hands-On and Visual Guide to the Basics of Git](https://www.oreilly.com/library/view/learning-git/9781098133900/)

## 1. Introducción

<p align="center">  
  <img src={require("../../img/logos/git-logo.png").default}/>  
  <br />  
  <em>Logo de Git</em>  
</p>

**Git** es un sistema de control de versiones distribuido que permite gestionar el
historial de cambios en proyectos de software. Facilita la colaboración entre
desarrolladores, el seguimiento de modificaciones en el código y la administración de
distintas versiones del código a lo largo del tiempo.

Originalmente, Git se diseña para la línea de comandos en relación con el kernel de
Linux, por lo que mantiene una estrecha vinculación con la interfaz de línea de comandos
(CLI - **_Command Line Interface_**).

Plataformas como **GitHub** o **GitLab** utilizan Git para facilitar la gestión de
proyectos y la colaboración en línea, ofreciendo interfaces gráficas y funcionalidades
adicionales como la integración continua, la gestión de problemas y la colaboración entre
equipos.

## 2. Control de versiones

El control de versiones gestiona los cambios en archivos a lo largo del tiempo,
permitiendo la recuperación de versiones anteriores cuando es necesario.

### 2.1. Terminología

- **Repositorio local**: Espacio en el ordenador donde se almacenan todos los archivos de
  un proyecto y sus versiones anteriores. Git permite hacer un seguimiento de los cambios
  en estos archivos sin necesidad de conexión a internet.

- **Repositorio remoto**: Copia del repositorio local almacenada en internet o en una red
  externa. Plataformas como GitHub, GitLab o Bitbucket permiten que varias personas
  trabajen en el mismo proyecto desde diferentes ubicaciones. Es útil para compartir el
  código y realizar copias de seguridad.

- **Histórico (_Log_)**: Registro que muestra todos los cambios realizados en el proyecto
  a lo largo del tiempo. Cada vez que se guarda un cambio en Git (un **_commit_**), queda
  registrado en este historial con información como la fecha, el autor del cambio y una
  descripción de lo modificado. También se conoce como **_Commit History_**, siendo el
  lugar donde se almacenan todos los **_commits_** realizados.

- **Conflicto**: Situación que ocurre cuando Git no puede combinar automáticamente los
  cambios de diferentes personas en un mismo archivo. Por ejemplo, si dos personas editan
  la misma línea de un archivo y luego intentan guardar sus cambios en el repositorio
  remoto, Git no puede determinar qué versión debe mantener y marca un conflicto. En ese
  caso, es necesario revisar y decidir manualmente qué cambios conservar.

### 2.2. Áreas

<p align="center">  
  <img src={require("../../img/git-stages.png").default}/>  
  <br />  
  <em>Áreas de trabajo en Git. [Link](https://ihcantabria.github.io/ApuntesGit/_images/comandos-workflow.png)</em>  
</p>

En Git existen dos partes esenciales para el manejo de repositorios: el repositorio
local, que se encuentra en el equipo u ordenador, y el repositorio remoto, que se ubica
en un servidor externo como GitHub, GitLab o Bitbucket.

Dentro del sistema Git se distinguen diferentes áreas:

1. **_Working Directory_**: Es el directorio de trabajo donde se modifican los archivos.
   Cuando se añaden nuevos archivos en esta área, para Git están en estado _untracked_
   (sin seguimiento) hasta que se añadan explícitamente.

2. **_Staging Area_**: Funciona como un espacio de borrador donde se preparan los cambios
   para el siguiente _commit_. Se representa físicamente mediante un fichero llamado
   `index` dentro de la carpeta `.git` en la raíz del repositorio. Los archivos añadidos
   a esta área pasan a estar _tracked_ (con seguimiento).

3. **_Commit History_**: Área donde se almacenan todas las versiones confirmadas del
   proyecto.

4. **_Local Repository_**: Contiene toda la información del proyecto y su historial de
   cambios a nivel local.

El flujo de trabajo típico consiste en modificar archivos en el _Working Directory_,
añadirlos al _Staging Area_ mediante `git add`, confirmarlos al _Commit History_ con
`git commit` y finalmente subirlos al repositorio remoto con `git push`.

### 2.3. Estados de un archivo en Git

Durante su ciclo de vida en Git, un archivo puede pasar por diferentes estados:

1. **Sin seguimiento (_Untracked_)**: El archivo es nuevo y Git aún no lo está
   rastreando. No se guarda en el historial del repositorio hasta que se agregue
   manualmente con `git add`.

2. **Ignorado (_Ignored_)**: Archivos como configuraciones personales o temporales pueden
   estar en una lista especial llamada `.gitignore`. Git los omite y no los agrega al
   repositorio.

3. **Modificado (_Modified_)**: El archivo ha sido editado después de su última
   confirmación (_commit_), pero esos cambios aún no han sido registrados en Git.

4. **Preparado (_Staged_)**: Una vez que el archivo modificado se agrega con `git add`,
   entra en estado _staged_. Esto significa que está listo para ser guardado en la
   próxima confirmación.

5. **Confirmado (_Committed_)**: Cuando se ejecuta `git commit`, los cambios preparados
   se guardan en la base de datos de Git, registrándolos en el historial del repositorio
   de manera permanente.

### 2.4. Operaciones básicas

- **Clone**: Crea una copia local de un repositorio remoto.
- **Add**: Añade cambios al área de preparación (_Staging Area_).
- **Commit**: Registra una nueva versión en el repositorio local. Puede considerarse como
  una versión del proyecto. Cada _commit_ tiene un hash único compuesto por 40
  caracteres, aunque solo se necesitan los 5 primeros para referirse a dicho _commit_.
- **Push**: Sincroniza cambios locales con un repositorio remoto.
- **Pull**: Actualiza el repositorio local con cambios del repositorio remoto.
- **Fork**: Crea una copia de un proyecto para modificarla independientemente.
- **Pull Request**: Solicita la integración de cambios en un proyecto.

## 3. Git

### 3.1. Comandos básicos de Linux para Git Bash

**Git Bash** es una interfaz de línea de comandos que permite la interacción con Git
mediante el uso de comandos de Linux, facilitando la gestión del sistema de archivos y la
ejecución de diversas operaciones.

A continuación, se describen algunos comandos fundamentales y ejemplos de su uso:

| Comando   | Función                                                      | Ejemplo de uso                                                                                                                                                                                                         |
| --------- | ------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **pwd**   | Muestra la ruta completa del directorio actual.              | `pwd` - El comando proviene de _*print working directory*_. Muestra el directorio actual en el que se está trabajando, por ejemplo: `/home/usuario/`                                                                   |
| **mkdir** | Crea un nuevo directorio en la ubicación deseada.            | `mkdir nuevo_directorio` - Crea un directorio llamado `nuevo_directorio`.                                                                                                                                              |
| **cd**    | Cambia al directorio especificado.                           | `cd nuevo_directorio` - Cambia al directorio `nuevo_directorio`.                                                                                                                                                       |
| **ls**    | Lista los archivos y subdirectorios en el directorio actual. | `ls` - Muestra los archivos del directorio actual. `ls -la` - Muestra detalles adicionales, como permisos y fechas de modificación. `ls -a` - Muestra todos los archivos del directorio incluso los que están ocultos. |
| **rm**    | Elimina el archivo o directorio especificado.                | `rm archivo.txt` - Elimina el archivo `archivo.txt`. Para eliminar directorios, usar `rm -r directorio/`.                                                                                                              |
| **mv**    | Mueve o renombra un archivo o directorio.                    | `mv archivo.txt nueva_ubicacion/` - Mueve `archivo.txt` a la carpeta `nueva_ubicacion`. También puede usarse para renombrar archivos, por ejemplo: `mv archivo.txt archivo_nuevo.txt`.                                 |

### 3.2. Comandos para el control de versiones local

Un comando de Git está compuesto por tres partes: el comando en sí de Git (`git`), el
subcomando que indica la acción específica, y opcionalmente, opciones y argumentos. Por
ejemplo:

```
git commit -m "Esto es un commit"
```

En el comando anterior, `git commit` es el comando de Git, `-m` es la opción relacionada
con el comando, y `"Esto es un commit"` es el argumento que forma parte de la opción del
comando `git commit`.

A continuación se presentan algunos de los comandos más utilizados para la gestión del
control de versiones de manera local en un repositorio Git:

| Comando            | Función                                                                                                                                                                                                                                    | Ejemplo de uso                                                                                                                                      |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| **git init**       | Inicializa un repositorio local utilizando la carpeta actual, creando una carpeta oculta `.git` en la raíz con toda la configuración necesaria para el control de versiones. Por defecto, la rama principal que se crea es la rama `main`. | `git init` - Inicializa un repositorio en el directorio actual.                                                                                     |
| **git remote**     | Permite conectar un repositorio local con un repositorio remoto.                                                                                                                                                                           | `git remote add origin url_repo` - Este comando establece una relación con el repositorio remoto con _shortname_ `origin` y la URL del repositorio. |
| **git clone**      | Clona un repositorio existente en una ubicación local.                                                                                                                                                                                     | `git clone https://github.com/usuario/repositorio.git` - Clona el repositorio desde la URL indicada.                                                |
| **git add**        | Prepara archivos para su confirmación. Es importante señalar que git add no mueve un fichero del _Working Directory_ al _Staging Area_, sino que copia los ficheros.                                                                       | `git add archivo.txt` - Añade `archivo.txt` al área de preparación (_staging_).                                                                     |
| **git commit**     | Confirma los cambios en el repositorio local.                                                                                                                                                                                              | `git commit -m "Mensaje del commit"` - Confirma los cambios con el mensaje `Mensaje del commit`.                                                    |
| **git reset HEAD** | Revierte la preparación de archivos que estaban listos para ser confirmados.                                                                                                                                                               | `git reset HEAD archivo.txt` - Deshace la preparación de `archivo.txt`.                                                                             |
| **git commit**     | Modifica la última confirmación, permitiendo cambiar el mensaje o añadir archivos adicionales.                                                                                                                                             | `git commit -m "Mensaje corregido"` - Modifica el mensaje del último commit.                                                                        |
| **git status**     | Muestra el estado actual de los archivos en el repositorio.                                                                                                                                                                                | `git status` - Muestra los archivos modificados, no preparados o pendientes de confirmación.                                                        |
| **git checkout**   | Cambia entre ramas o descarta cambios en archivos específicos. También es posible utilizar git switch para cambiar de rama.                                                                                                                | `git checkout rama-nueva` - Cambia a la rama `rama-nueva`.<br />`git checkout -- archivo.txt` - Deshace los cambios en `archivo.txt`.               |
| **git branch**     | Gestiona las ramas del repositorio local.                                                                                                                                                                                                  | `git branch` - Lista las ramas existentes en el repositorio.<br />`git branch rama-nueva` - Crea una nueva rama llamada `rama-nueva`.               |
| **git merge**      | Fusiona una rama con la rama actual.                                                                                                                                                                                                       | `git merge rama-nueva` - Fusiona la rama `rama-nueva` con la rama en la que se encuentra actualmente.                                               |
| **git fetch**      | Descarga los cambios desde el repositorio remoto, pero no los fusiona.                                                                                                                                                                     | `git fetch origin` - Descarga los cambios del repositorio remoto llamado `origin`, pero no los aplica.                                              |
| **git pull**       | Descarga y fusiona los cambios del repositorio remoto con la rama actual.                                                                                                                                                                  | `git pull origin main` - Descarga y fusiona los cambios de la rama `main` del repositorio remoto `origin`.                                          |
| **git push**       | Sube los cambios confirmados a un repositorio remoto.                                                                                                                                                                                      | `git push origin main` - Sube los cambios locales confirmados a la rama `main` del repositorio remoto `origin`.                                     |
| **git log**        | Muestra el historial de confirmaciones del repositorio en orden cronológico.                                                                                                                                                               | `git log` - Muestra el historial de commits.<br />`git log --oneline` - Muestra el historial de commits de manera resumida.                         |
| **git diff**       | Muestra las diferencias entre los archivos modificados y los confirmados.                                                                                                                                                                  | `git diff` - Muestra las diferencias entre los archivos modificados en el área de trabajo.                                                          |
| **git stash**      | Almacena temporalmente los cambios no confirmados para limpiarlos del área de trabajo.                                                                                                                                                     | `git stash` - Guarda los cambios en un área temporal.<br />`git stash pop` - Recupera los cambios guardados en el stash.                            |
| **git rm**         | Elimina archivos del repositorio y del área de preparación.                                                                                                                                                                                | `git rm archivo.txt` - Elimina el archivo `archivo.txt` del repositorio y del área de trabajo.                                                      |

### 3.3. Configuración básica de Git

Antes de trabajar con GitHub o GitLab, es necesario configurar el entorno de Git local.
Esto incluye establecer la identidad y configurar la autenticación con las plataformas.

Con `git config --global --list` se pueden listar todas las variables en la configuración
global de Git y sus valores. Esta configuración es necesaria para establecer el usuario y
el correo electrónico al que estarán asociados todos los commits realizados.

#### 3.3.1. Configurar nombre de usuario y correo

Git utiliza el nombre y el correo configurados para identificar tus contribuciones.
Puedes configurarlos globalmente para que se apliquen a todos tus repositorios:

```bash
git config --global user.name "Tu Nombre"
git config --global user.email "tu-correo@example.com"
```

Para verificar la configuración:

```bash
git config --global --list
```

Si deseas configurarlos solo para un repositorio específico, omite la opción `--global` y
ejecuta los comandos dentro del directorio del repositorio.

#### 3.3.2. Configurar autenticación SSH para GitHub/GitLab

Configurar claves SSH simplifica la autenticación con GitHub/GitLab:

1. Genera una clave SSH si no tienes una:

   ```bash
   ssh-keygen -t ed25519 -C "tu-correo@example.com"
   ```

   Si tu sistema no soporta `ed25519`, usa:

   ```bash
   ssh-keygen -t rsa -b 4096 -C "tu-correo@example.com"
   ```

2. Copia la clave pública generada:

   ```bash
   cat ~/.ssh/id_ed25519.pub
   ```

3. Ve a tu cuenta de GitHub o GitLab, accede a **Settings** > **SSH and GPG keys**, y
   añade la clave pública copiada.

4. Prueba la conexión:
   ```bash
   ssh -T git@github.com
   ```
   (Para GitLab: `ssh -T git@gitlab.com`).

#### 3.3.3. Configurar autenticación con tokens personales

Si prefieres usar HTTPS en lugar de SSH, puedes crear un token personal de acceso en
GitHub/GitLab y usarlo como contraseña al clonar o realizar _push_. Para configurarlo:

1. Ve a **Settings** > **Developer Settings** > **Personal Access Tokens**.
2. Genera un token con los permisos necesarios.
3. Al realizar una operación que requiera autenticación, usa tu usuario como nombre de
   usuario y el token como contraseña.

## 4. Estrategia de control de versiones

### 4.1. Ramas

Las estrategias relacionadas con Git están estrechamente vinculadas con la forma en que
se crean, desarrollan y combinan las diferentes ramas dentro de un mismo repositorio. El
uso de ramas permite trabajar en un mismo proyecto de diferentes maneras y facilita que
distintas personas colaboren en un proyecto simultáneamente.

Una de las metodologías más básicas o estándares de Git consiste en utilizar una rama
principal conocida como `main` o `master`, que es la que se lleva a producción y debe
estar siempre disponible. Adicionalmente, se cuenta con una rama de desarrollo (`dev`)
que incorpora las nuevas características o funcionalidades que posteriormente se añadirán
a la rama principal. A partir de estas, es posible crear diferentes subramas que permiten
implementar cada característica por separado, aunque esto dependerá de la metodología de
trabajo utilizada.

En Git existe el concepto de `HEAD`, un puntero que indica la rama que se está utilizando
y apunta a un commit específico. Es posible encontrarse en un commit que no está siendo
apuntado por una rama, situación conocida como **Detached HEAD State**.

Tanto **Trunk-Based Development** como **Git Flow** son estrategias populares de control
de versiones, cada una con sus propias ventajas y casos de uso.

### 4.2. Merge y pull requests

Para combinar los cambios de una rama a otra se utilizan los merges o pull requests en
los repositorios. En este proceso intervienen dos ramas: la rama "_source_" y la rama
"_target_". La rama _source_ contiene los cambios que se desean incorporar, mientras que
la _target_ es la rama donde se introducirán dichos cambios. Por ejemplo, la rama
_source_ puede ser la rama `dev` y la _target_ puede ser la rama `main` o `master`.

### 4.3. Trunk-Based Development

<p align="center">
  <img src={require("../../img/trunk-based-git.png").default}/>
  <br />
  <em>Esquema de desarrollo Trunk-Based. [Link](https://statusneo.com/wp-content/uploads/2022/12/Beginners%20Guide%20to%20Trunk-Based%20Development.png)</em>
</p>

En esta estrategia, los desarrolladores fusionan frecuentemente pequeñas actualizaciones
en una única rama principal (a menudo llamada _trunk_ o _main_).

Las principales ventajas de esta estrategia son:

- **Facilita la Integración Continua (CI) y el Despliegue Continuo (CD)**: Esta
  metodología es ideal para entornos donde se practican CI/CD, permitiendo despliegues
  rápidos y frecuentes gracias a la fusión de cambios pequeños y frecuentes.
- **Fomenta la iteración rápida y la colaboración**: Los desarrolladores pueden trabajar
  en paralelo y fusionar sus cambios rápidamente, lo que acelera el ciclo de desarrollo.

Sin embargo, presenta las siguientes desventajas:

- **Gestión en equipos grandes**: Puede ser difícil de gestionar en equipos grandes sin
  una estricta disciplina y coordinación.
- **Rastreo de cambios individuales**: Es menos capaz de rastrear cambios individuales en
  comparación con Git Flow, lo que puede dificultar la identificación de problemas
  específicos.

### 4.4. Git Flow

<p align="center">
  <img src={require("../../img/git-flow-git.png").default} width="500"/>
  <br />
  <em>Esquema de desarrollo Git Flow. [Link](https://www.alura.com.br/artigos/assets/git-flow-o-que-e-como-quando-utilizar/imagem3.png)</em>
</p>

Esta estrategia utiliza múltiples ramas para diferentes propósitos (por ejemplo, ramas de
características, ramas de lanzamiento, ramas de corrección).

Las principales ventajas de esta estrategia son:

- **Organización y estructura**: Git Flow es altamente organizado y estructurado, lo que
  facilita la gestión de proyectos complejos.
- **Seguimiento detallado de cambios**: Permite un seguimiento detallado de los cambios
  individuales, lo que es útil para auditorías y revisiones de código.
- **Adecuado para ciclos de lanzamiento largos**: Es ideal para proyectos con ciclos de
  lanzamiento más largos, donde se requiere una planificación y gestión detallada.

Sin embargo, presenta las siguientes desventajas:

- **Complejidad**: La gestión de múltiples ramas puede ser más compleja y requerir más
  esfuerzo y coordinación.
- **Ralentización del desarrollo**: Si no se gestiona correctamente, puede ralentizar el
  proceso de desarrollo debido a la necesidad de mantener y fusionar múltiples ramas.

### 4.5. Cuándo usar Trunk-Based Development o Git Flow

- **Trunk-Based Development**: Es ideal para equipos que practican CI/CD, necesitan
  iteraciones rápidas y trabajan en proyectos con actualizaciones frecuentes. Es
  especialmente útil en entornos ágiles donde la velocidad y la flexibilidad son
  cruciales.
- **Git Flow**: Adecuado para proyectos con ciclos de lanzamiento más largos, que
  requieren un seguimiento detallado de los cambios, y para equipos que prefieren un
  enfoque más estructurado. Es ideal para proyectos donde la estabilidad y la
  planificación a largo plazo son prioritarias.

## 5. Git Hooks

Los **Git Hooks** son una funcionalidad integrada en Git que permite automatizar tareas y
aplicar políticas a lo largo del flujo de trabajo. Gracias a ellos, Git puede ejecutar
acciones en momentos clave del proceso de desarrollo, asegurando la calidad del código y
el cumplimiento de políticas específicas del proyecto.

### 5.1. Definición y uso de Git Hooks

Los Git Hooks son scripts que se ejecutan automáticamente en respuesta a eventos
específicos dentro de Git, como antes o después de realizar un _commit_, un _push_ o un
_merge_.

Para utilizar Git Hooks, es necesario crear scripts en el directorio `.git/hooks`,
ubicado en la raíz del repositorio Git. Por defecto, al crear un nuevo repositorio, Git
proporciona una serie de _hooks_ de ejemplo que pueden modificarse según las necesidades
del proyecto.

Estos scripts deben ser ejecutables y deben llevar el nombre del evento para el que se
activan, como `pre-commit`, `pre-push` o `post-merge`. Para asegurarse de que tienen los
permisos adecuados, se puede utilizar el siguiente comando:

```bash
chmod +x pre-commit
```

Una vez ubicados en el directorio correcto y con los permisos necesarios, Git ejecutará
automáticamente estos scripts cuando ocurra el evento correspondiente.

### 5.2. Tipos de Git Hooks y ejemplos

#### 5.2.1. pre-commit

Se ejecuta antes de realizar un _commit_. Es útil para verificar el formato del código,
ejecutar pruebas unitarias, validar los mensajes de _commit_ o evitar errores
ortográficos.

:::tip Ejemplo

Verificación de estilo con Black en la rama `main`.

```bash
#!/bin/bash
# Hook pre-commit para ejecutar Black solo en la rama main

# Obtener la rama actual
branch_name=$(git rev-parse --abbrev-ref HEAD)

# Verificar si estamos en la rama main
if [ "$branch_name" != "main" ]; then
    echo "No se ejecutará Black porque no estás en la rama 'main'."
    exit 0
fi

# Ejecutar Black en el directorio actual
black . --check

# Verificar el estado de la última operación
if [ $? -ne 0 ]; then
    echo "Errores de estilo detectados. Bloqueando el commit."
    exit 1
fi

echo "El commit se ha completado con éxito."
```

:::

#### 5.2.2. pre-push

Se ejecuta antes de enviar cambios a un repositorio remoto. Se emplea para evitar
_pushes_ en ramas protegidas o para ejecutar pruebas antes de subir los cambios.

:::tip Ejemplo

Instalación de dependencias y ejecución de pruebas con Poetry.

```bash
#!/bin/bash
# Hook pre-push para actualizar pip, instalar Poetry, instalar dependencias y ejecutar pruebas

# Actualizar pip
echo "Actualizando pip..."
python -m pip install --upgrade pip

# Instalar Poetry si no está instalado
if ! command -v poetry &> /dev/null; then
    echo "Instalando Poetry..."
    pip install poetry
fi

# Verificar si Poetry se instaló correctamente
if ! command -v poetry &> /dev/null; then
    echo "Error: Poetry no se pudo instalar."
    exit 1
fi

# Instalar dependencias de Poetry
echo "Instalando dependencias de Poetry..."
poetry install

# Ejecutar pruebas con Pytest
echo "Ejecutando pruebas con Pytest..."
poetry run pytest -v ./tests

# Verificar el estado de las pruebas
if [ $? -ne 0 ]; then
    echo "Error: Las pruebas no han pasado. Bloqueando el push."
    exit 1
fi

echo "El push se ha completado con éxito."
```

:::

#### 5.2.3. post-commit

Se ejecuta después de realizar un _commit_. Puede utilizarse para enviar notificaciones
automáticas al equipo.

:::tip Ejemplo

Notificación por correo tras un commit.

```bash
#!/bin/bash
# Hook post-commit para enviar una notificación por correo

# Obtener el mensaje del último commit
commit_message=$(git log -1 --pretty=%B)

# Enviar un correo electrónico (usando sendmail como ejemplo)
echo "Nuevo commit realizado: $commit_message" | sendmail -v equipo@example.com
```

:::

#### 5.2.4. post-merge

Se ejecuta después de completar un _merge_. Es útil para actualizar dependencias o
regenerar documentación.

:::tip Ejemplo

Actualización de dependencias con Poetry.

```bash
#!/bin/bash
# Hook post-merge para actualizar dependencias con Poetry

# Verificar si Poetry está instalado
if ! command -v poetry &> /dev/null; then
    echo "Poetry no está instalado. Instalándolo..."
    pip install poetry
fi

# Actualizar las dependencias
echo "Actualizando dependencias de Poetry..."
poetry update

# Ejecutar pruebas para verificar que todo funciona correctamente
echo "Ejecutando pruebas con Pytest..."
poetry run pytest -v ./tests

# Verificar el estado de las pruebas
if [ $? -ne 0 ]; then
    echo "Error: Las pruebas no han pasado. Verifica los errores."
    exit 1
fi

echo "El post-merge se ha completado con éxito."
```

:::

#### 5.2.5. pre-receive y post-receive

Estos _hooks_ se ejecutan en el servidor remoto al recibir cambios mediante _push_.

- **pre-receive**: Se usa para validar que los _commits_ cumplan con las políticas del
  proyecto antes de aceptarlos.
- **post-receive**: Se emplea para realizar despliegues automáticos en producción.

:::tip Ejemplo

Bloquear _pushes_ con mensajes de _commit_ incorrectos.

```bash
#!/bin/bash
# Hook pre-receive para validar mensajes de commit

while read oldrev newrev refname; do
    for commit in $(git rev-list $oldrev..$newrev); do
        commit_message=$(git log --format=%B -n 1 $commit)
        if ! [[ $commit_message =~ ^\[JIRA-[0-9]+\] ]]; then
            echo "El mensaje de commit '$commit_message' no cumple con el formato requerido."
            exit 1
        fi
    done
done
```

:::

:::tip Ejemplo

Despliegue automático tras recibir un _push_.

```bash
#!/bin/bash
# Hook post-receive para desplegar automáticamente el código en producción

echo "Desplegando cambios en producción..."

# Cambiar al directorio de producción
cd /var/www/mi-aplicacion

# Obtener la última versión del código
git pull origin main

# Reiniciar el servidor web para aplicar cambios
pm2 restart mi-aplicacion
```

:::

### 5.3. Recomendaciones para Git Hooks

Al escribir y gestionar Git Hooks, es recomendable seguir estas pautas:

- **Rapidez y fiabilidad**: Los _hooks_ deben ser rápidos para no ralentizar el flujo de
  trabajo y deben ejecutarse de manera confiable.
- **Documentación clara**: Es fundamental incluir comentarios en los scripts para
  facilitar su comprensión y mantenimiento.
- **Evitar modificaciones automáticas no deseadas**: Los _hooks_ no deben alterar el
  código sin la aprobación del desarrollador, ya que esto podría generar conflictos.

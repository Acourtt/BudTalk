🌿 BudTalk

Discover · Share · Experience

BudTalk es una plataforma web inspirada en los foros y comunidades digitales, creada para explotar variedades, compartir experiencias y conversar con otros usuarios.

El proyecto nace como una iniciativa de aprendizaje y desarrollo de portafolio, con el objetivo de evolucionar progresivamente hacia una aplicacion Full Stack.


CARACTERÍSTICAS


- Eploración de variedades: visualización de diferentes variedades mediantes tarjetas con imágenes e información. 
- Filtros por categoría: clasificación de variedades en Sativa, Indica e Hybrid.
- Comunidad: espacio para visualizar convesaciones y publicaciones.
- Crear publicaciones: permite compartir nuevas conversaciones con la comunidad. 
- Editar publicaciones: borrar publicaciones existente con confirmación.
- Eliminar publicaciones: borrar pulibaciones existentes con confirmación.
- Persistencia local: almacenamiento de publicaciones mediante localStorage.
- Diseño responsive: interfaz adaptable e diferentes tamaños de pantalla. 


TECNOLOGÍAS UTILIZADAS 


- React 
- JavaScript
- CSS
- Vite
- Vitest
- React Testing Library
- Jest DOM
- jsdom


INSTALACIÓN Y EJECUCIÓN

para ejecutar BudTalk localmente:

1. Clona este repositorio: 

    git clone https://github.com/Acourtt/BudTalk.git


2. Accede a la carpeta del proyecto:

    cd BudTalk


3. Instala las dependencias: 


    pnpm install


4. Inicia el servidor de desarrollo: 


    pnpm dev 


5. Abre en tu navegador la dirección que indique Vite, normalmente http://localhost:5173.



PRUEBAS 



BudTalk utiliza Vitest y React Testing Library para comprobar el comportamiento de sus componentes. 

Para ejecutar las pruebas: 

- pnpm test 

para ejecuntar todas las prueba una sola vez:

- pnpm test:run


Actualmente, ek componente CommunityFeed cuenta con prueba para: 

- Visualización de publicaciones iniciales. 
- Creación de publicaciones. 
- Edición de publicaciones. 
- Cancelación de una edición.
- Eliminación de publicaciones.

ESTRUCTURA DEL PROYECTO 


budtalk/
├── public/
│   └── images/
├── src/
│   ├── Components/
│   │   ├── CategoryFilter.jsx
│   │   ├── StrainList.jsx
│   │   ├── CommunityFeed.jsx
│   │   └── CommunityFeed.test.jsx
│   ├── test/
│   │   └── setup.js
│   ├── App.jsx
│   ├── App.css
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── README.md



PRÓXIMOS OBJETIVOS

BudTalk continúa en desarrollo. Entre los objetivos de las siguientes etapas están:

- Implementar un backend con Node.js y Express.
- Crear una API para gestionar las publicaciiones.
- Integrar una base de datos con PostgreSQL.
- Incorporar autenticación y perfil de usuario. 
- Desarrollar un sistema de comentarios y respuestas. 
- Ampliar las funcionalidades de la comunidad. 


ESTADO DEL PROYECTO 

En desarrollo. 

BudTalk es un proyecto de aprendizaje continuo que busca evolucionar desde una aplicación React con almacenamiento local hasta una plataforma full Stack. 



Desarrollo como proyecto personal de aprendizaje y portafolio. 
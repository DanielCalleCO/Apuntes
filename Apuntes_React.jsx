// Fue creado por facebook en el 2011 y en codigo abierto en el 2013. Una librería
// es una herramienta con una sola utilidad. Un framework es unconjunto de
// herramientas React es una librería para desarrollar interfaces de usuario. Se
// divide en componentes. Es compatible con otras librerías Su lenguaje es JSX

// Para abrir el live server, se debe poner npm run start

//! Dentro de return se ponen TODOS los HTML

// En la carpeta src siempre va una carpeta components

// React ha sido diseñado en torno al "Atomic Design", el cual se asemeja al diseño del universo, desde la unidad más pequeña (atomo) hasta la más grande (página)

//! COMPONENTS

// Pequeñas piezas de código encapsulado que pueden tener o no estado y que realiza un trabajo específico, de esta manera podemos romper una aplicación que sea bastante compleja en pequeñas piezas, sencillas, reutilizables y faciles de mantener.

// 2 tipos de componentes... basados en clases= palabra reservada class. 2) Functional component, se declaran con una función normal o una arrow function.
// Stateless y statefull

//! PROPERTIES = PROPS
// Son las entradas de los componentes

//!--------------ESTADOS
// Es un objeto que guarda la información de componentes.
//!PROPS
// vARIABLES QUE VIENEN DE UN COMPONENTE PADRE.
// deben ser de solo lectura e inmutables
// se usan para comunica entre componentes
// pueden ser accedidos por los hijos de los componentes
//!STATE
// variables directamente inicializadas y manejado en el componente.
// Los estados son mutables y pueden ser asincronos
// guarda informacion acerca del componente.
// se usa para generar comportamiento dinamico
//!EVENTOS
// Los eventos son similares a los eventos HTML, su principal

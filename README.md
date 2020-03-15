# Miaguila

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.1.

Proyecto creado con Angular 8, trabaje en Github identificando los branchs como `feature/` y `fix/` seguido de la descripcion del componente en el que se trabajo
Tambien utilice la metodologia de CSS BEM, separando el scss en bloques, elementos y modificadores. Utilice variables para guardar la configuracion basica de estilos de la pagina asi como colores principales y tamaños de fuentes.
Separe las funcionalidades por componentes y a su vez, los comunique entre ellos con `@Input` y `@Output` de Angular. Separe los componentes en carpetas de `Components` y `Pages`, siendo pages el componente principal. Guarde las opciones del menu en el `Constants` y los datos que se necesitan para crear el servicio en `assets` en formato `Json` haciendole peticiones con `HttpClient` cuando se necesitaba utilizar la data.

Los modulos funcionales dentro de la prueba son `Home`, `Pedir aguila` y `Rutas`
Para Pedir un servicio primero se debe seleccionar el departamento (Hay que tener en cuenta que en las rutas guardadas como favoritos solo hay lugares de Cundinamarca, por ende, en los demas departamentos no habran favoritos guardados), luego seleccionar una opcion de la lista de favoritos, y presionar siguiente; Asi mismo con la opcion de destino, teniendo que presionar alguna opcion para que aparezca el boton de `Finalizar`, se oculte el contenedor de escoger la ruta y muestre el mapa completo con la ruta seleccionada.

Las lineas que marcan el viaje solo pude hacer una linea entre ellas, porque el Api de Directions de Google Maps no me permitia activarlo para propositos de desarrollo

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# Developers

In order to develop this app you will need to install the latest release of
[Raid-Toolkit-SDK](https://github.com/raid-toolkit/raid-toolkit-sdk#installation).
The Raid-Toolkit server *MUST* be running in order to populate the app with data.
Once the app supports uploading the `JSON` returned from the [Raid-Extractor](https://github.com/raid-toolkit/extractor/releases),
you will be able to utilize a stored `JSON` file for development.

## Dependencies
- Windows 10 or higher
- [Raid-Toolkit-SDK](https://github.com/raid-toolkit/raid-toolkit-sdk#installation)
- [Raid-Extractor](https://github.com/raid-toolkit/extractor/releases)
- [Angular Material](https://material.angular.io/)
- [Angular flex-layout](https://github.com/angular/flex-layout)
- [Angular](https://angular.io/)
- [NGRX - Reactive State for Angular](https://ngrx.io/)
  - [NGRX Effects](https://ngrx.io/guide/effects)
  - [NGRX Entity](https://ngrx.io/guide/entity)
  - [NGRX Router-Store](https://ngrx.io/guide/router-store)
  - [NGRX Schematics](https://ngrx.io/guide/schematics) - For scaffolding NGRX specific components and services

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

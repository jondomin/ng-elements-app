# NgElementsApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.6.

## General

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Elements

To showcase elements running in a normal html page do the following steps

Run the `npm run build:elements` command to build the angular app in production mode and copy the JavaScript files to a preview folder

> Note there is an `index.html` file in the previews folder that we will serve up to showcase elements

Next run the `npm run serve:elements` command to run a static site http-server for the `preview/index.html` file.

Load the site in a browser and observe the elements being rendered in html

# AlergiasWebsite

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.4.

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


## Docker

We containerizing Angular application for production using Docker, for more info [click here](https://dev.to/usmslm102/containerizing-angular-application-for-production-using-docker-3mhi)

Navigate the project folder in command prompt and run the below command to build the image.

`docker build . -t dockerHubUsername/sampleapp` 

This command will look for a docker file in the current directory and create the image with tag dockerHubUsername/sampleapp. with -t command you can specify the tag for the image the default convention is <DockerHubUsername>/<ImageName>

Running a container

You can run the docker image using the below command.

docker run -p 4200:80 dockerHubUsername/sampleapp

-p flag publishes all exposed ports to the host interfaces. we are publishing container port 80 to host 4200 port.

Navigate to your browser with http://localhost:4200



#yo kingbolt

Yeoman generator for a new AngularJS-Application based on
Karma, aNgularJS, Gulp, BOwer, Typescript,
TSD and Angular-material.

##Prerequisites

- Node.js http://nodejs.org/
- git http://git-scm.com/
- Gulp http://gulpjs.com/ 
(`npm install --global gulp`)


##1. Install

```
npm install -g generator-kingbolt
```

##2. Usage

```
mkdir helloWorld
cd helloWorld
yo kingbolt
```

##3. To download all required 3rd-party files

```
npm install
bower install
gulp install
```

##4. To start developing
###console 1: for compiling and running

```
gulp watchServe
```
###console 2: for testing

```
gulp watchTest
```

##Install locally to contribute

```
git clone https://github.com/strabu/generator-kingbolt.git
cd generator-kingbolt
npm link
```

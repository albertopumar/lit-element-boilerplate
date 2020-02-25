# Lit Element Boilerplate
Start a new project using LitElement with everything you need such as router, redux, webpack, linting, etc.

# Installation
In order to start a new project using this boilerplate you just need to download it from GitHub and modify the project name in the `package.json`

```bash
$ git clone https://github.com/albertopumar/lit-element-boilerplate.git
$ npm install 
$ npm start
```

# Usage
## Redux connector
In order to connect your component to redux this project is using lit-element-redux. To get it working you will need to follow this steps:

#### 1. Use the wrapper function `createStore` to provide access to the store
```js
import { createStore } from 'lit-element-redux';

createStore(reducer, initialState, enhancers);
```

#### 2. Connect your component to the store using the `connect` method
```js
import { LitElement, html } from 'lit-element';
import { connect } from 'lit-element-redux';

export class MyComponent extends LitElement { ... }

const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(MyComponent);
customElements.define('my-connected-component', ConnectedComponent);

```
For more information about the package you can access to the [repo](https://github.com/albertopumar/lit-element-redux).

## Redux duck
To organize your redux code and keep it near the connected component this project is using [Redux Duck](https://github.com/erikras/ducks-modular-redux) structure with queries and operators.



## Router
To implement the router in a SPA way, this project is using Vaadin Router. It is a very simple and lightweight router. You can find more info on his [repo](https://github.com/vaadin/vaadin-router).

## Styles
To access all the advantages of having the styles on a CSS file this project compiles the styles inside css files into JavaScript. You can also take advantage of CSS pre-processors like SASS or SCSS.

```js
import styles from './my-component.scss';

export class MyComponent extends LitElement { 
  
  ... 

  static get styles() {
    return styles;
  }

  ...

 }

```


# Features
* Styles compiled from file to lit-html component
  * Compile css, scss and sass
* Redux [duck](https://github.com/erikras/ducks-modular-redux) structure
* Redux [connector](https://github.com/albertopumar/lit-element-redux) for lit-element
* Vaadin router
* Linting and prettier
* Hot reload on development server
* Optimization for production

# Contributors
# License

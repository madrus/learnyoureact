# NodeSchool course - LearnYouReact
> Combined with the teachings of Davide Fiorello from Sytech, Haarlem, NL

## Initialization
```js
npm install -g react-asap
npm install --save react
npm install --save react-dom
react-asap app.js
```

> Every content must always have one and only one root element, like `<div>`

## How to use external css with react-asap
Example
`react-asap app.js -s https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css`

## Notes on exercises
* `omitted` means that the code should be copied from the previous exercise
* I am not sure getInitialState is used as it should be used.
  The two approaches are not interchangeable.
  You should initialize state in the constructor when using ES6 classes,
  and define the getInitialState method when using React.createClass.

  See the official React doc on the subject of ES6 classes.
  ```JS
  class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = { /* initial state */ };
    }
  }
  ```
  is equivalent to
  ```JS
  var MyComponent = React.createClass({
    getInitialState() {
      return { /* initial state */ };
    },
  });
  ```

## References
* You can find the React.js docs here: [https://facebook.github.io/react/docs/getting-started.html](https://facebook.github.io/react/docs/getting-started.html)
* Read more about the JSX syntax here: [https://facebook.github.io/react/docs/jsx-in-depth.html](https://facebook.github.io/react/docs/jsx-in-depth.html)
* Reusable Components: [https://facebook.github.io/react/docs/reusable-components.html](https://facebook.github.io/react/docs/reusable-components.html)
* Component API: [https://facebook.github.io/react/docs/component-api.html](https://facebook.github.io/react/docs/component-api.html)
* Component Specs and Lifecycle: [https://facebook.github.io/react/docs/component-specs.html](https://facebook.github.io/react/docs/component-specs.html)
* Inline Styles: [https://facebook.github.io/react/tips/inline-styles.html](https://facebook.github.io/react/tips/inline-styles.html)

# react-base64image
> A react base64 image tag.

## install
```shell
npm install -S afeiship/react-base64image
```

## usage
1. import css
  ```scss
  @import "~react-base64image/style.scss";

  // customize your styles:
  $react-base64image-options: ()
  ```
2. import js
  ```js
  import React from 'react';
  import ReactDOM from 'react-dom';
  import ReactBase64image from 'react-base64image';
  
  // your app:
  class App extends React.Component{
    render(){
      return (
        <ReactBase64image src="http://himg.bdimg.com/sys/portrait/item/be10475f686d6c73db00.jpg" />
      )
    }
  }

  // render to dom:
  ReactDOM.render(<App/>, document.getElementById('app'));
  ```

## documentation
- https://afeiship.github.io/react-base64image/

## resouces
- https://www.robinwieruch.de/minimal-react-webpack-babel-setup/
- https://www.valentinog.com/blog/react-webpack-babel/
- https://jestjs.io/docs/en/tutorial-react#snapshot-testing-with-mocks-enzyme-and-react-16
- https://testing-library.com/docs/react-testing-library/api

## todos
- [ ] Add: semver number for every build files.
- [ ] Add: need output css files.
- [ ] Add: PWA support for docs.
- [ ] BUG: npm run dev will clean dist.

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

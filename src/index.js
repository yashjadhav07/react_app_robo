import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import 'tachyons';

// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App/>,document.getElementById('root'));
// <React.StrictMode>
//   <Hello greetings={'Hello'+' React Ninja'} />
// </React.StrictMode>,
// ReactDOM.render(<h1>hello World</h1>, document.getElementById('root'));
// registerServiceWorker();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

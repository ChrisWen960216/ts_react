/* tslint:disable */
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './styles/index.css';
import { default as Loadable } from 'react-loadable';
import App from './App';
import * as serviceWorker from './utils/serviceWorker';

const LoadableComponent = Loadable({
  loader: () => import('./App'),
  loading: () => <h1>Hello world</h1>,
});
class Index extends React.Component{
  constructor(props:any) {
    super(props);
    this.state = {};
  }

  render() {
    return <LoadableComponent/>;
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

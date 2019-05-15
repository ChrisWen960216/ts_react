import { default as React } from 'react';
import { default as logo } from './assets/logo.svg';
import './App.css';

type Props = {
  readonly count?: number;
};

type State = {
  readonly count: number;
};

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      count: this.props.count || 0,
    };
    this.addCount = this.addCount.bind(this);
  }

  addCount() {
    this.setState((preState: State) => ({ count: preState.count + 1 }));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{this.state.count}</p>
          <button onClick={this.addCount}>
            Add Count
          </button>
        </header>
      </div>
    );
  }
}

export default App;

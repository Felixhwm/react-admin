import * as React from 'react';
import { inject, observer } from 'mobx-react'
import { TodoType } from './store'
import './App.css';

import logo from './logo.svg';

declare namespace App {
  export interface Props {
    title?: string;
    todo?: TodoType
  }
  export interface State {
    text: string;
  }
}

@inject('todo')
@observer
export default class App extends React.Component<App.Props, App.State> {
  public state = { 
    text: 'To get started, edit src/App.tsx and save to reload.' 
  }
  public componentDidMount() {
    console.log(this.props.todo);
  }
  public clickHandle() {
    console.log('clicked')
  }
  public render() {
    const { text } = this.state
    const { title } = this.props
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{title}</h1>
          <button onClick={this.clickHandle}>+</button><span>total is </span>
        </header>
        <p className="App-intro">{text}</p>
      </div>
    );
  }
}

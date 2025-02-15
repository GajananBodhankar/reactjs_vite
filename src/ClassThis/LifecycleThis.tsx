import React, { Component } from "react";

export default class LifecycleThis extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      name: "Gajanan",
      greet: this.state + "hello"
    };
  }
  componentDidMount(): void {
    this.setState({name: "Max"})
  }
  render() {
    return <div >LifecycleThis, {JSON.stringify(this.state.greet)}</div>;
  }
}

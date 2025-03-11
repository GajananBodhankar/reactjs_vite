import React, { Component } from "react";

export default class BaseComponent extends Component<{ text: string; setText(value: string): void }, {}> {
  constructor(props: any) {
    super(props);
  }
  componentDidUpdate(prevProps: Readonly<{ text: string; setText(value: string): void }>, prevState: Readonly<{}>, snapshot?: any): void {
    console.log("updated");
  }
    shouldComponentUpdate(nextProps: any, nextState: any, nextContext: any): boolean {
      if(nextProps?.setText !== this.props.setText|| nextProps?.text!==this.props.text){
        return true
      }
      return false
    }

    
  render() {
    return (
      <div>
        <input type="text" value={this.props.text} onChange={(value) => this.props.setText(value.target?.value)} />
      </div>
    );
  }
}

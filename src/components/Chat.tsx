import * as React from "react";
import { string } from "prop-types";

import { XHR } from "../lib/XHR";
export interface ChatProps {
  compiler: string;
  framework: string;
}

export interface ChatState {
  value: string;
}

export class Chat extends React.Component<ChatProps, ChatState> {
  constructor(props :ChatProps) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event :React.ChangeEvent<HTMLInputElement>) {
    this.setState({value: event.target.value});
  }

  handleClick(event :React.MouseEvent<HTMLButtonElement>) {
    const xhr = new XHR();
    xhr.get(`https://us-central1-yunagilab.cloudfunctions.net/helloWorld?text=${this.state.value}`);
    event.preventDefault();
  };

  render() {
    return (
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="chat"
          aria-label="chat"
          aria-describedby="button-addon2"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <div className="input-group-append">
          <button
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon"
            onClick={this.handleClick}
          >
            Send
          </button>
        </div>
      </div>
    );
  }
}
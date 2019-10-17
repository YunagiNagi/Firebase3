import * as React from "react";
import { string } from "prop-types";

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
    alert('input : ' + this.state.value);
    event.preventDefault();
  };

  render() {
    return (
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Recipient's username"
          aria-label="Recipient's username"
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
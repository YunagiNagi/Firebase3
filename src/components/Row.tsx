import * as React from "react";

import { ChatList } from "./ChatList";

export interface RowProps { compiler: string; framework: string; }

export class Row extends React.Component<RowProps, {}> {
  render() {
    return (
      <div className="row justify-content-center w-100 m-0">
        <div className="col-12 col-xl-9">
          <div id="main"></div>
          <div id="chat"></div>
        </div>
        <div className="col-xl-3">
          <div id="chatList"></div>
        </div>
      </div>
    );
  }
}
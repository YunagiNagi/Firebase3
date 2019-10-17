import * as React from "react";

import { ChatList } from "./ChatList";

export interface RootProps { compiler: string; framework: string; }

export class Root extends React.Component<RootProps, {}> {
  render() {
    return (
      <div>
        <div id="nav"></div>
        <div id="row"></div>
      </div>
    );
  }
}
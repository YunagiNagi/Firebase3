import * as React from "react";

export interface MainProps { compiler: string; framework: string; }

export class Main3D extends React.Component<MainProps, {}> {
  render() {
    return (
      <div className="embed-responsive embed-responsive-16by9">
        <iframe
          className="embed-responsive-item"
          src="./Live3d/index.html"
          scrolling="no"
        ></iframe>
      </div>
    );
  }
}
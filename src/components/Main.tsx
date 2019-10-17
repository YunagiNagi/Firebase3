import * as React from "react";

export interface MainProps { compiler: string; framework: string; }

export class Main extends React.Component<MainProps, {}> {
  render() {
    return (
      <div className="embed-responsive embed-responsive-16by9">
        <iframe
          className="embed-responsive-item"
          src="./Live2d/Sample/TypeScript/Demo/index.html"
          scrolling="no"
        ></iframe>
      </div>
    );
  }
}
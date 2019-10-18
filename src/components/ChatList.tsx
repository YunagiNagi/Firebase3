import * as React from "react";

export interface ChatListProps { compiler: string; framework: string; }

export class ChatList extends React.Component<ChatListProps, {}> {
  render() {
    return (
      <ul className="list-group overflow-auto border border-light rounded">
        <li className="list-group-item">Cras justo odio</li>
      </ul>
    );
  }
}
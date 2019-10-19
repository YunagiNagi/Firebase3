import * as React from "react";

export interface ChatListProps { compiler: string; framework: string; }

export class ChatList extends React.Component<ChatListProps, {}> {
  render() {
    return (
      <ul id="chatlist-ul" className="list-group overflow-auto border border-light rounded">
      </ul>
    );
  }
}

// <li className="list-group-item">sample</li>
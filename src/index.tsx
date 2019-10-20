import * as React from "react";
import * as ReactDOM from "react-dom";

import { Root } from "./components/Root";
import { Nav } from "./components/Nav";
import { Row } from "./components/Row";
import { Main3D } from "./components/Main3D";
import { Chat } from "./components/Chat";
import { ChatList } from "./components/ChatList";

ReactDOM.render(
    <Root compiler="TypeScript" framework="React" />,
    document.getElementById("root")
);

ReactDOM.render(
    <Nav compiler="TypeScript" framework="React" />,
    document.getElementById("nav")
);

ReactDOM.render(
    <Row compiler="TypeScript" framework="React" />,
    document.getElementById("row")
);

ReactDOM.render(
    <Main3D compiler="TypeScript" framework="React" />,
    document.getElementById("main")
);

ReactDOM.render(
    <Chat compiler="TypeScript" framework="React" />,
    document.getElementById("chat")
);

ReactDOM.render(
    <ChatList compiler="TypeScript" framework="React" />,
    document.getElementById("chatList")
);
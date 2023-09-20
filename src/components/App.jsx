import React from "react";
import printHelloWorld from '@/scripts/script';

import '@/styles/global.css';

export default class App extends React.Component {
  render() {
    printHelloWorld();
    return (
      <>
        <h1>Demo App</h1>
        <p>This is a Paragraph</p>
      </>
    );
  }
}

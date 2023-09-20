import React from "react";
import printHelloWorld from '@/scripts/script';

import '@/styles/global.css';
import AppStyles from '@/styles/App.module.css';

export default class App extends React.Component {
  render() {
    printHelloWorld();
    return (
      <div className={AppStyles.background}>
        <h1>Demo App</h1>
        <p>This is a Paragraph</p>
      </div>
    );
  }
}

import React from 'react';
import printHelloWorld from '@/scripts/script';

export default class App extends React.Component {
  render() {
    printHelloWorld();
    return (
      <>
        <div className="background">
          <h1>Demo App</h1>
          <p>This is a Paragraph</p>  
        </div>
      </>
    );
  }
}

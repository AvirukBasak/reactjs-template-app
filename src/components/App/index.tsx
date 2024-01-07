import React from 'react'
import { printHelloWorld } from '@/utils/script'

import background from '@/images/background.jpg'
import styles from './App.module.css'

const App = (): JSX.Element => {
  printHelloWorld()
  return (
    <div className={styles.app + ' font-bold'}>
      <h1>Demo App</h1>
      <p>This is a Paragraph</p>
      <img src={background} />
    </div>
  )
}

export default App

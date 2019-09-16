import React from 'react'
import { DndProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import CurrencyList from './Сourse table'
import cursinfo from './CurseInfo'
import './style.css'
import Knight from './Сourse table/drags'


function App() {
  return (
    <DndProvider backend={HTML5Backend}>
    <div className='App'>
      <h1 className='Headline'>
          Сourse
      </h1>
      <div><Knight/></div>
      <div>
          <CurrencyList curse = {cursinfo}/>
      </div>
    </div>
    </DndProvider>
  )
}

export default App;
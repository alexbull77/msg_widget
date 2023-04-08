import React from 'react'
import './App.css'
import {LatestMessagesWidget} from "./components/LatestMessagesWidget/LatestMessagesWidget";

export const App: React.FC = () => {

  return (
    <div className='container'>
        <LatestMessagesWidget />
    </div>
  )
}

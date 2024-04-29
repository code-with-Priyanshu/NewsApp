import { useState } from 'react'
import Navbar from './components/Navbar'
import NewsArea from './components/NewsArea'

const App = () => {
  const [Category,SetCategory]=useState("general");
  return (
    <div>
      <Navbar SetCategory={SetCategory}/>
      <NewsArea Category={Category}/>
    </div>
  )
}

export default App

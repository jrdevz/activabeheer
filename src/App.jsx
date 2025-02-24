import './App.css'
import Navbar from './components/Navbar/Navbar'
import { Sidebar } from './components/Sidebar/Sidebar'
import {InventoryTable} from './components/Table/Table'

function App() {

  return (
    <div>
      <Navbar/>
      <Sidebar/>
      <InventoryTable/>
    </div>
  )
}

export default App

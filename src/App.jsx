import './App.css'
import Navbar from './components/Navbar/Navbar'
import { Sidebar } from './components/Sidebar/Sidebar'
import {InventoryTable} from './components/Table/Table'
import PageTitle from './components/PageTitle/PageTitle'

function App() {

  return (
    <div>
      <Navbar/>
      <PageTitle/>
      <Sidebar/>
      <InventoryTable/>
    </div>
  )
}

export default App

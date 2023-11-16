import {} from 'antd'
import {BrowserRouter} from "react-router-dom"
import AppFooter from './components/AppFooter'
import AppHeader from './components/AppHeader'
import AppPageContent from './components/AppPageContent'
import './App.css'

function App() {
  

  return (
    <div className='app'>
      <BrowserRouter>
      <AppHeader/>
      <AppPageContent/>
      <AppFooter/>      
      </BrowserRouter>

    </div>
  )
}

export default App

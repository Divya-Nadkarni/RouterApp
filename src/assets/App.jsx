import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './components/Home'
import Products from './components/About'
import Service from './components/Service'
import Contact from './components/Contact'

function App() {
  

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path='/about' element={<Products/>}></Route>
        <Route path='/services' element={<Service/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

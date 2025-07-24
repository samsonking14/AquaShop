import Home from './Pages/Home'
import About from './Pages/About'
import Shop from './Pages/Shop'
import Wishlist from './Pages/Wishlist'
import Contact from './Pages/Contact'
import FAQ from './Pages/FAQ'
import Wrong from './Pages/wrong'
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/Shop' element={<Shop />} />
          <Route path='/About' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/FAQ' element={<FAQ />} />
          <Route path='/Wrong' element={<Wrong />} />
          <Route path='Wishlist/' element={<Wishlist />} />

        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App

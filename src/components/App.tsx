import Blog from '../Blog'
import Footer from './Footer'
import Home from './Home'
// import Contacto from './Contacto' 

import NavBar from './NavBar'

const App = () => {
  return (
    <>
      <NavBar />
      <div id="inicio">
        <Home />
      </div>
      <div id="blog">
        <Blog/>
      </div>
      <div id="contacto">
        {/* <Contacto /> */}
      </div>
      <Footer />
    </>
  )
}

export default App

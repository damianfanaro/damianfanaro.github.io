import Blog from './Blog'
import Contact from './Contact'
import Footer from './Footer'
import Home from './Home'
import NavBar from './NavBar'

const App = () => {
  return (
    <>
      <NavBar />
      <div id="inicio">
        <Home />
      </div>
      <div id="blog">
        <Blog />
      </div>
      <div id="contacto">
        <Contact />
      </div>
      <Footer />
    </>
  )
}

export default App

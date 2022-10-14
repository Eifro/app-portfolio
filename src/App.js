import Experience from './components/Experience'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
/* import Skills from './components/Skills' */
import Works from './components/Works'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Experience />
      {/* <Skills /> */}
      <Works />
    </div>
  )
}

export default App
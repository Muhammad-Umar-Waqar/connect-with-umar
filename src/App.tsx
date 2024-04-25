
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Header from './components/Header/Header'
import Home from './components/Home'
import Projects from './components/Projects'
import Skills from './components/Skills'

function App() {

  return (
    <div className='overflow-hidden flex flex-col justify-center items-center '>

        <Header/>
     
        <Home/>
        <About /> 
        <Skills/>
        <Projects/>
        <Contact/>
    
    </div>
  )
}

export default App

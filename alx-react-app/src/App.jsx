import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WelcomeMessage from './components/WelcomeMessage'
import Header from './Header'
import MainContent from './MainContent'
import Footer from './Footer'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <div>
        <WelcomeMessage /> 
        <Header />
        <MainContent />
        <Footer />
        
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
    
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}
  
function Header () {
    return (
  <header>
  <h1>My Favorite Cities</h1>
</header>

  );
}

function MainContent () {
return (
<main>
  <p>I love to visit New York, Paris, and Tokyo.</p>
</main>


);


}

function Footer () {
 return (
         <footer>
         <p>© 2023 City Lovers</p>
          </footer>

 );

}





export default App;

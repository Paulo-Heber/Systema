import './App.css'
import { FaCoins } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { CaptalCads } from './components/CaptalCards/captalCards';

function App() {
  return (
    <>
      <div className="menu-container">

        {/* ------------HEADER---------------- */}
        <div className="menu-header">
          <FaCoins className="menu-icon" />
          <GiHamburgerMenu className="menu-hamburger" />
        </div>

        {/* --------BODY---------------- */}

        <div className="menu-body">
          <CaptalCads />

          {/* ---------TAB BAR---------------- */}

          <ul className="tab-bar-container">
            <li className="tab-bar-item">Capitais</li >
            <li className="tab-bar-item">Ferramentas</li >
            <li className="tab-bar-item">Loja</li >
            <li className="tab-bar-item">Rankin</li >
            <li className="tab-bar-item">Missões</li >
          </ul>

        </div>
      </div>
    </>
  )
}

export default App

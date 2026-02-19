import './App.css'
// ---------------IMPORT-COMPONENTS----------------
import { CaptalCads } from './components/CaptalCards/captalCards';

// ---------------IMPORT-ICONS----------------
import { FaCoins, FaTools } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineShoppingBag } from "react-icons/md";
import { PiRanking, PiTarget, PiHexagonBold } from "react-icons/pi";

function App() {
  return (
    <>
      <div className="menu-container">

        {/* ------------HEADER---------------- */}
        <div className="menu-header">
          <FaCoins className="icon" />
          <GiHamburgerMenu className="icon" />
        </div>

        {/* --------BODY---------------- */}

        <div className="menu-body">
          <CaptalCads />

          {/* ---------TAB BAR---------------- */}

          <ul className="tab-bar-container">
            <li className="tab-bar-item"><PiHexagonBold /></li >
            <li className="tab-bar-item"><FaTools /></li >
            <li className="tab-bar-item"><MdOutlineShoppingBag /></li >
            <li className="tab-bar-item"><PiRanking /></li >
            <li className="tab-bar-item"><PiTarget /></li >
          </ul>

        </div>
      </div>
    </>
  )
}

export default App

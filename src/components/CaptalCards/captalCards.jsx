import './captalCard.css';
// --------------ICONES------------------ 
import { LiaWalletSolid } from "react-icons/lia";
import { LiaDumbbellSolid } from "react-icons/lia";
import { LiaBookOpenSolid } from "react-icons/lia";
import { PiFlowerLotusLight } from "react-icons/pi";
import { LiaFireAltSolid } from "react-icons/lia";
import { LiaHeart } from "react-icons/lia";

export function CaptalCads() {

    const capitals = [
        { name: "Físico", progress: 50, color: "#9EE5C7" },
        { name: "Financeiro", progress: 70, color: "#9CCFDF" },
        { name: "Intelectual", progress: 40, color: "#FCE9B1" },
        { name: "Espiritual", progress: 60, color: "#C7C1ED" },
        { name: "Emocional", progress: 80, color: "#F8BF92" },
        { name: "Erótico", progress: 30, color: "#F98B7C" },
    ];


    const icons = {
        Físico: LiaDumbbellSolid,
        Financeiro: LiaWalletSolid,
        Intelectual: LiaBookOpenSolid,
        Espiritual: PiFlowerLotusLight,
        Emocional: LiaHeart,
        Erótico: LiaFireAltSolid,
    };


    return (
        <ul className='captais-card-container' >
            {capitals.map((capital) => {
                const IconComponent = icons[capital.name];
                return (
                    <li className="captal-card"
                        key={capital.name}
                        style={{ "--card-color": capital.color }} >

                        <div className="captal-icon-container">
                            <IconComponent className="captal-icon" />
                        </div>

                        <div className='captal-info'>
                            <p >{capital.name}</p>
                            <div className='progress-bar-status'>
                                <div className="progress-bar">
                                    <div
                                        className="progress-fill"
                                        style={{ width: `${capital.progress}%` }}
                                    />
                                </div>
                                <label>{capital.progress}%</label>

                            </div>
                        </div>

                    </li>
                );
            })}
        </ul >
    )
}
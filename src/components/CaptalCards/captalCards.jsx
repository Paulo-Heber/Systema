import './captalCard.css';
// --------------ICONES------------------ 
import { FaWallet, FaHeart, FaDumbbell } from "react-icons/fa";
import { GiBrain } from "react-icons/gi";
import { MdSelfImprovement } from "react-icons/md";
import { BsFire } from "react-icons/bs";

export function CaptalCads() {
    const capitals = [
        { name: "Físico", progress: 50 },
        { name: "Financeiro", progress: 70 },
        { name: "Intelectual", progress: 40 },
        { name: "Espiritual", progress: 60 },
        { name: "Emocional", progress: 80 },
        { name: "Erótico", progress: 30 },
    ];

    const icons = {
        Físico: FaDumbbell,
        Financeiro: FaWallet,
        Intelectual: GiBrain,
        Espiritual: MdSelfImprovement,
        Emocional: FaHeart,
        Erótico: BsFire,
    };


    return (
        <ul className='captais-card-container' >
            {capitals.map((capital) => {
                const IconComponent = icons[capital.name];
                return (
                    <li className='captal-card' key={capital.name} >

                        <div className="captal-icon-container">
                            <IconComponent className="captal-icon" />
                        </div>

                        <div>
                            <p>{capital.name}</p>
                            <div>
                                <progress value={capital.progress} max="100" className="level-progress"></progress>
                                <label >{capital.progress}%</label>
                            </div>
                        </div>
                        
                    </li>
                );
            })}
        </ul >
    )
}
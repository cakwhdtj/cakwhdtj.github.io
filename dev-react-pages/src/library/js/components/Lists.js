import { Link } from 'react-router-dom';
import React , { useState } from 'react';



function Lists({uiName, desc, steps}) {
    const className = `ui ${desc}`;
    const [clicked, setState] = useState(["","",""]);
    const onClickHandler = (uiName, desc, steps) => {
    setState([uiName , desc, steps]);
   } 
    return (
        <div className={className}>
           <h3>{uiName}</h3>
           <h4>{clicked}</h4>
           <ul>
               {steps.map(li =>
                <li key={li}>
                    <Link onClick={()=>onClickHandler(uiName , desc, li)} to={`/react-pages/${desc}/${li}`} >
                    {typeof(li)==="number" ? `Step ${li}`: li}
                    </Link>
                </li>
                )}
           </ul>
        </div>
    )
}

export default Lists;
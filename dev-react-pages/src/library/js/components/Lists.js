import { Link } from 'react-router-dom';
import React , { useCallback, useEffect, useState } from 'react';


function Lists({uiName, desc, steps}) {
    const [click,setTitle] = useState(``);
    const className = `ui ${desc}`
    const onClickHandler = (e) => {
        setTitle(e.target.text);
    }
    
// useEffect(()=>{
//     console.log(click)
// },[onClickHandler])


    return (
        <div className={className}>
           <h3>{uiName}</h3>
           <ul>
               {steps.map(li =>
                <li key={li} onClick={onClickHandler}>
                    <Link to={`/react-pages/${desc}/${li}`}>
                    {typeof(li)==="number" ? `Step ${li}`: li}
                    </Link>
                </li>
                )}
           </ul>
        </div>
    )
}

export default Lists;
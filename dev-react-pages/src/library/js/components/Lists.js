import { Link } from 'react-router-dom';
import React , { } from 'react';

function Lists({uiName, desc, steps}) {
    const className = `ui ${desc}`;

    return (
        <div className={className}>
           <h3>{uiName}</h3>
           <ul>
               {steps.map(li =>
                <li key={li}>
                    <Link to={`/react-pages/${desc}/${li}`} >
                    {typeof(li)==="number" ? `Step ${li}`: li}
                    </Link>
                </li>
                )}
           </ul>
        </div>
    )
}

export default Lists;
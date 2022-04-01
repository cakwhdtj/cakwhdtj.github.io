import React from "react";
import Pong from "./Pong";


const Sandbox = ({uiInfo,dataSet,imgSet}) => {
    switch (uiInfo[1]) {
        case 'Pong':
            return <Pong />
            break;
        default: 
            return <div>hi</div>
    }
    
}

export default Sandbox;
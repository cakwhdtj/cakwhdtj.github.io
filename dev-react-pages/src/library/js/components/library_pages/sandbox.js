import React from "react";
import Jump from "./Jump";
import Pong from "./Pong";


const Sandbox = ({uiInfo,dataSet,imgSet}) => {
    switch (uiInfo[1]) {
        case 'Pong':
            return <Pong />
        case 'Jump':
            return <Jump />
        default: 
            return <div>hi</div>
    }
}

export default Sandbox;
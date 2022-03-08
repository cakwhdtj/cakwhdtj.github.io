import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function WhrIam({getTitle}) {
    const [title , setTitle] = useState("");
    const getURL = useLocation().pathname.replace("/","_").replace("/","_").replace("/","_");
    let newTitle = () => {
        let newTitle = getURL.replace(/_/g, " ");
        getURL === "_react-pages" ? newTitle = "Library" : newTitle = newTitle.replace("react-pages", "");
        return newTitle;
    }
    useEffect(()=>{
        setTitle(newTitle);
    },[newTitle]);
    
    let willReturn = "";
    getTitle === true ? willReturn = title : willReturn = getURL;
    return willReturn;
}
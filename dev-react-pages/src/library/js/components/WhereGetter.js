import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function WhrIam({getTitle}) {
    const [title , setTitle] = useState("");
    const og = useLocation().pathname;
    const getURL = useLocation().pathname.replace("/","_").replace("/","_").replace("/","_");
    let _newTitle = () => {
        let newTitle = getURL.replace(/_/g, " ");
        getURL === "_react-pages" ? newTitle = "Library" : newTitle = newTitle.replace("react-pages", "");
        return newTitle;
    }
    useEffect(()=>{
        setTitle(_newTitle);
    },[_newTitle]);
    
    let willReturn = "";
    getTitle === true ? willReturn = title : willReturn = og;
    return willReturn;
}
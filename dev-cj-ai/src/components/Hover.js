import { useCallback, useEffect, useState, useRef } from "react";

const useHover = () => {
    const [state , setState] = useState(false);
    const ref = useRef(null);

    const handleHover = useCallback(()=> setState(true),[]);
    const handleHoverOut = useCallback(()=> setState(false),[]);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;    
        
        element.addEventListener('mouseover', handleHover);
        element.addEventListener('mouseout', handleHoverOut);
        
        
        element.removeEventListener('mouseover', handleHover);
        element.removeEventListener('mouseout', handleHoverOut);
    },[ref, handleHover, handleHoverOut]);

    return [ref, state];
};

export default useHover;



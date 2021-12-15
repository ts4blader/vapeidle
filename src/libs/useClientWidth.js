import React, {useState, useEffect} from 'react 


const useClientWidth = () => {

    const [clientWidth, setClientWidth] = useState();
    
    useEffect(() => {
        setClientWidth(window.innerWidth);
    }, [window]);
    
    
    return {clientWidth} ;
}

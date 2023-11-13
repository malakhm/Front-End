import React, {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';



const NavbarShow=({children})=>{
    let location = useLocation();

    const [urlName, setUrlName] = useState(null)
    const [adminUrl, setAdminUrl] = useState(true)

    useEffect(() => {
        setUrlName(location.pathname)
        
      }, []);

    return(
        <div>
            {(urlName == 'https://abadaibeirut.netlify.app' || urlName == 'https://abadaibeirut.netlify.app/Contact'|| urlName == 'https://abadaibeirut.netlify.app/About' || urlName == 'https://abadaibeirut.netlify.app/Menu') ? children: null}
        </div>
    )
}

export default NavbarShow;
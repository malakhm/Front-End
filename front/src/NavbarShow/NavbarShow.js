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
            {(urlName == '/' || urlName == '/Contact'|| urlName == '/About' || urlName == '/Menu') ? children: null}
        </div>
    )
}

export default NavbarShow;
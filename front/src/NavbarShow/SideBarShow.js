import React, {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';



const SideBarShow=({children})=>{
    let location = useLocation();

   
    const [adminUrl, setAdminUrl] = useState(null)

    useEffect(() => {
        setAdminUrl(location.pathname)
        
      }, []);

    return(
       <>
            {( adminUrl == '/admin/home'|| adminUrl == '/admin/products' || adminUrl == '/admin/inbox' || adminUrl == '/add-product'  || adminUrl == '/add-category' || adminUrl == '/edit-category:id') ? children: null}
            </>
    )
}

export default SideBarShow;
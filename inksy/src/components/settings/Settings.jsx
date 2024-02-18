import { useEffect, useContext } from "react";
import { CreateContext } from '../../contexts/sidebarSubMenu';

const Settings = ({children}) => {    

    const { menu, setMenu } = useContext(CreateContext);
    useEffect(()=>{
        setMenu([
            {
                title: 'Privacy',
                icon: 'icon-magnify',
                path:'/settings/privacy'
            },
            {
                title: 'Payments',
                icon: 'icon-magnify',
                path:'/settings/payment'
            },
            {
                title: 'Password',
                icon: 'icon-magnify',
                path:'/settings/password'
            },
        ])
    },[])
    
    return(
        <div className=''>            
            {children}
        </div>
    )
}

export default Settings;
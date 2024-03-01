import { useEffect, useContext } from "react";
import { CreateContext } from '../../contexts/sidebarSubMenu';

const ComGuidlines = ({children}) => {    

    const { menu, setMenu } = useContext(CreateContext);
    useEffect(()=>{
        setMenu([
            {
                title: 'Community Guidlines',
                icon: 'icon-inner-menu-icon',
                path:'/community/guidlines'
            },
            {
                title: 'About Us',
                icon: 'icon-inner-menu-icon',
                path:'/community/about'
            },
            {
                title: 'Terms of Use',
                icon: 'icon-inner-menu-icon',
                path:'/community/terms'
            },
            {
                title: 'Privacy Policies',
                icon: 'icon-inner-menu-icon',
                path:'/community/privacy'
            },
        ])
    },[])
    
    return(
        <div className=''>            
            {children}
        </div>
    )
}

export default ComGuidlines;
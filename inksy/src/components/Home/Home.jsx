import { useEffect, useContext } from "react";
import { CreateContext } from "../../contexts/sidebarSubMenu";
import Journals from "../Journals/Journals";


const Home = () => {   
    
    
    const { menu, setMenu } = useContext(CreateContext);
    useEffect(()=>{
        setMenu([
            {
                title: 'Journals',
                icon: 'icon-inner-menu-icon',
                path:'/journals'
            },
            {
                title: 'Categories',
                icon: 'icon-inner-menu-icon',
                path:'/categories/summary'
            },
            {
                title: 'People',
                icon: 'icon-inner-menu-icon',
                path:'/people'
            },
        ])
    },[])

    return(
        <div className='home-comp'>
             <Journals/>
        </div>
    )
}

export default Home;
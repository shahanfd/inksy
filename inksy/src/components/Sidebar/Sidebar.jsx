import {Link, NavLink} from 'react-router-dom'
import { CreateContext  } from '../../contexts/sidebarSubMenu'
import { useContext, useEffect } from 'react'


const data={
    main_menu: [
        {
            title: 'home',
            icon: 'icon-books',
            path:'/home'
        },
        {
            title: 'chat',
            icon: 'icon-message',
            path:'/chat'
        },
        {
            title: 'shop',
            icon: 'icon-shop',
            path:'/shop'
        },
        {
            title: 'docs',
            icon: 'icon-file',
            path:'/docs'
        },
        {
            title: 'community',
            icon: 'icon-envelope',
            path:'/community'
        },
        {
            title: 'logout',
            icon: 'icon-logout',
            path:'/logout'
        },
    ],
    sub_menu: [],
}

const handleChange=(event)=>{    
    // console.log(window.location.href)
    if(event.target.classList.contains('main-sidebar-item')){
        document.querySelectorAll('.main-sidebar .menu-items a').forEach((item)=>{
            item.classList.remove('active')
        })
        event.target.classList.add('active')
    }else if(event.target.classList.contains('sub-sidebar-item')){
        document.querySelectorAll('.sub-sidebar .menu-items a').forEach((item)=>{
            item.classList.remove('active')
        })
        event.target.classList.add('active')
    }
}

const Sidebar = () => {
    const { menu, setMenu } = useContext(CreateContext);
    const contextValue = useContext(CreateContext);
    console.log("from useEffect:", contextValue.menu[0]);
    // if(contextValue.menu[0].home){
        useEffect(()=>{
            setMenu([
                {
                    title: 'Journals',
                    icon: 'icon-magnify',
                    path:'/settings/privacy'
                },
                {
                    title: 'Categories',
                    icon: 'icon-magnify',
                    path:'/settings/payment'
                },
                {
                    title: 'People',
                    icon: 'icon-magnify',
                    path:'/settings/password'
                },
            ])
        },[])
            // console.log('home location')
    // }else{
    //     console.log('other location')
    // }

    return(
      <div className='sidebar'>
        <div className='main-sidebar'>
            <div className="logo-wrapper">
                <img src="assets/images/insky-logo.svg" alt="inksy-logo" />
            </div>
            <div className="menu-items">
                    {
                        data.main_menu.map((ite,i)=>{
                            return(
                                <div className="menu-item" key={i}>
                                    <NavLink to={ite.path} className={`main-sidebar-item ${ite.icon}`} onClick={(event)=>{ handleChange((event)) }}></NavLink>
                                </div>
                            )
                        })
                    }
            </div>
        </div>
        <div className='sub-sidebar'>
            <div className='main-heading'>Explore</div>
            <div className="menu-items">
            {                
                contextValue.menu.map((ite,i)=>{
                    return(
                        <div className="menu-item" key={i}>
                            <Link to={ite.path}  className='sub-sidebar-item' onClick={(event)=>{ handleChange((event)) }}>
                                <i className={ite.icon} />
                                {ite.title}
                            </Link>
                        </div>
                    )
                })
            }
            </div>
        </div>
      </div>
    )
}

export default Sidebar;
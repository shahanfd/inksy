import Sidebar from '../components/Sidebar/Sidebar';
import SidebarRight from '../components/Sidebar/SidebarRight';
import {CreateContextProvider} from '../contexts/sidebarSubMenu';

const Home = ({children}) => {    

    return(
        <div className='d-flex justify-content-between'>            
        {/* {console.log(children) } */}
            <CreateContextProvider>
             <Sidebar/>            
            <div className='center-layout'>
                {children}
            </div>
            <SidebarRight />
            </CreateContextProvider>
        </div>
    )
}

export default Home;
import Search from '../search/Search';
import NotificationItem from '../Notification/NotificationItem';

const notificationData = [
    {
        type: 'followReq',
        img: 'assets/images/avatar.png',
        title: 'Follow Request',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        time: 'Today at 07:00  AM'
    },
    {
        type: 'notification',
        img: 'assets/images/avatar.png',
        title: 'The Shadow of the Wind',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        time: 'Today at 07:00  AM'
    },
    {
        type: 'notification',
        img: 'assets/images/avatar.png',
        title: 'The Shadow of the Wind',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        time: 'Today at 07:00  AM'
    },
    {
        type: 'followReq',
        img: 'assets/images/avatar.png',
        title: 'Follow Request',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        time: 'Today at 07:00  AM'
    },
    {
        type: 'followReq',
        img: 'assets/images/avatar.png',
        title: 'Follow Request',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        time: 'Today at 07:00  AM'
    },
    {
        type: 'followReq',
        img: 'assets/images/avatar.png',
        title: 'Follow Request',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        time: 'Today at 07:00  AM'
    },
    {
        type: 'followReq',
        img: 'assets/images/avatar.png',
        title: 'Follow Request',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        time: 'Today at 07:00  AM'
    },
    {
        type: 'followReq',
        img: 'assets/images/avatar.png',
        title: 'Follow Request',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        time: 'Today at 07:00  AM'
    },
]


const Notification = () => { 
    return(
        <div className="notifications-page">
            <div className='search-area mb-4'>
                <Search
                    type="text"
                    placeholder="Search Notifications"
                />
            </div>
            <div className='notification-items-container'>    
                <NotificationItem data={notificationData}></NotificationItem>
            </div>
        </div>
    )
  }

export default Notification;
import './Topbar.css';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
const Topbar = () => {
    return (
        <>
            <div className='topbar'>
                <div className='topWrapper'>
                    <div className='topleft'>
                        <span className='logo'>Shams Panel</span>
                    </div>
                    <div className='topright'>
                        <div className='topbarIconContainer'>
                            <NotificationsNoneIcon />
                            <span className='topIconBadge'>2</span>
                        </div>
                        <div className='topbarIconContainer'>
                            <LanguageIcon />
                            <span className='topIconBadge'>2</span>
                        </div>
                        <div className='topbarIconContainer'>
                            <SettingsIcon />
                        </div>
                        <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className='topAvatar'/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Topbar
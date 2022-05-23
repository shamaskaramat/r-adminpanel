import './User.css';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { CalendarToday, LocationSearching, MailOutlined, PhoneAndroid, Publish } from '@material-ui/icons';
import { Link } from 'react-router-dom';

const User = () => {
    return (
        <>
            <div className='user'>
                <div className='userTitleContainer'>
                    <h1 className='userTitle'>Edit User</h1>
                    <Link to="/newuser">
                    <button className='userAddButton'>Create</button>
                    </Link>
                </div>
                <div className='userContainer'>
                    <div className="userShow">
                        <div className='userShowTop'>
                            <img className='userShowImg' src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                            <div className='userShowTopTitle'>
                                <span className='userShowuserName'>Shamas karamat</span>
                                <span className='userShowuserTitle'>MERN Developer</span>
                            </div>
                        </div>
                        <div className='userShowBottom'>
                            <span className='userShowTitle'> Account details </span>
                            <div className='userShowInfo'>
                                <PermIdentityIcon className='userShowIcon' />
                                <span className='userShowTitleInfo'>Shamas007</span>
                            </div>
                            <div className='userShowInfo'>
                                <CalendarToday className='userShowIcon' />
                                <span className='userShowTitleInfo'>03.11.1997</span>
                            </div>
                            <span className='userShowTitle'> Contact  details </span>
                            <div className='userShowInfo'>
                                <PhoneAndroid className='userShowIcon' />
                                <span className='userShowTitleInfo'>+92 313 4136 523</span>
                            </div>
                            <div className='userShowInfo'>
                                <MailOutlined className='userShowIcon' />
                                <span className='userShowTitleInfo'>shamaskaramat@outlook.com</span>
                            </div>
                            <div className='userShowInfo'>
                                <LocationSearching className='userShowIcon' />
                                <span className='userShowTitleInfo'>Shalamar Garden Lahore </span>
                            </div>
                        </div>
                    </div>
                    <div className="userUpdate">
                        <span className='userUpdateTitle'>Edit</span>
                        <form className='userUpdateForm'>
                            <div className='userUpdateLeft'>
                                <div className='userUpdateItem'>
                                    <label>Username</label>
                                    <input type="text" placeholder='Shamas007' className='userUpdateInput'></input>
                                </div>
                                <div className='userUpdateItem'>
                                    <label>Full Name</label>
                                    <input type="text" placeholder='Shamaskaramat' className='userUpdateInput'></input>
                                </div>
                                <div className='userUpdateItem'>
                                    <label>Email</label>
                                    <input type="text" placeholder='Shamaskaramat@outlook.com' className='userUpdateInput'></input>
                                </div>
                                <div className='userUpdateItem'>
                                    <label>Phone</label>
                                    <input type="text" placeholder='+92 313 4136 523' className='userUpdateInput'></input>
                                </div>
                                <div className='userUpdateItem'>
                                    <label>Adress </label>
                                    <input type="text" placeholder='Shalamar Garden Lahore' className='userUpdateInput'></input>
                                </div>
                            </div>
                            <div className='userUpdateRight'>
                                <div className='userUpadteUpload'>
                                    <img className='userUpdateImg' src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""></img>
                                    <label htmlFor="file"><Publish className='userUpdatePublish'/></label>
                                    <input type="file" id="file" style={{display:"none"}}/>
                                </div>
                                <button className='userUpdateButton'>Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default User
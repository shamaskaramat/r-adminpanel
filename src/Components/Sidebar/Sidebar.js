import "./Sidebar.css";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import BarChartIcon from '@mui/icons-material/BarChart';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import TimelineIcon from '@mui/icons-material/Timeline';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ReportOutlinedIcon from '@mui/icons-material/ReportOutlined';
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <>
            <div className="sidebar">
                <div className="sidebarWrapper">
                    <div className="sidebarMenu">
                        <h3 className="sidebartitle">Dashboard</h3>
                        <ul className="sidebarlist">
                          <Link to="/" style={{color:"inherit", textDecoration:"none"}}>
                            <li className="sidebarlistItem active" >
                                <HomeOutlinedIcon className="sidebarIcon" />
                                Home
                            </li>
                            </Link>
                            <li className="sidebarlistItem">
                                <BarChartIcon className="sidebarIcon"/>
                                Analytics
                            </li>
                            <li className="sidebarlistItem">
                                <TimelineIcon className="sidebarIcon"/>
                                Sales
                            </li>
                        </ul>
                    </div>
                    <div className="sidebarMenu">
                        <h3 className="sidebartitle">Quick Menu</h3>
                        <ul className="sidebarlist">
                        <Link to="/User" style={{color:"inherit", textDecoration:"none"}}>
                            <li className="sidebarlistItem active" >
                                <PersonOutlineOutlinedIcon className="sidebarIcon" />
                                Users
                            </li>
                        </Link>
                        <Link to="/Products" style={{color:"inherit", textDecoration:"none"}}>
                            <li className="sidebarlistItem active">
                                <Inventory2Icon className="sidebarIcon"/>
                                Products
                            </li>
                            </Link> 
                            <li className="sidebarlistItem">
                                <MonetizationOnOutlinedIcon className="sidebarIcon"/>
                                Transactions
                            </li>
                        </ul>
                    </div>
                    <div className="sidebarMenu">
                        <h3 className="sidebartitle">Notifications</h3>
                        <ul className="sidebarlist">
                            <li className="sidebarlistItem active">
                                <MailOutlineIcon className="sidebarIcon" />
                                Mail
                            </li>
                            <li className="sidebarlistItem">
                                <DynamicFeedIcon className="sidebarIcon"/>
                                Feedbacks
                            </li>
                            <li className="sidebarlistItem">
                                <ChatBubbleOutlineIcon className="sidebarIcon"/>
                                Messages
                            </li>
                        </ul>
                    </div>
                    <div className="sidebarMenu">
                        <h3 className="sidebartitle">Staff</h3>
                        <ul className="sidebarlist">
                            <li className="sidebarlistItem active">
                                <ManageAccountsIcon className="sidebarIcon" />
                                Manage
                            </li>
                            <li className="sidebarlistItem">
                                <BarChartIcon className="sidebarIcon"/>
                                Analytics
                            </li>
                            <li className="sidebarlistItem">
                                <ReportOutlinedIcon className="sidebarIcon"/>
                                Reports
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Sidebar
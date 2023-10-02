import { HiHome, HiOutlineDesktopComputer, HiOutlineMail, HiDocumentText } from 'react-icons/hi';
import { Link, useNavigate } from 'react-router-dom'; // Import Link and useNavigate

function Sidebar() {
    const navigate = useNavigate(); // Get the navigate function from React Router

    return (
        <div className="fixed top-0 h-screen w-20 m-0 flex flex-col bg-secondary text-white shadow">
            {/* Use Link components to navigate to different routes */}
            <SideBarIcon icon={<HiHome size="50" />} onClick={() => navigate('/')} />
            <SideBarIcon icon={<HiOutlineDesktopComputer size="45" />} onClick={() => navigate('/projects')} />
            <SideBarIcon icon={<HiOutlineMail size="50" />} onClick={() => navigate('/contact')} />
            <SideBarIcon icon={<HiDocumentText size="50" />} onClick={() => navigate('/resume')} />
        </div>
    );
}

const SideBarIcon = ({ icon, onClick }) => (
    <button className="sidebar-icon" onClick={onClick}>
        {icon}
    </button>
);


export default Sidebar;

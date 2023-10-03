import { HiHome, HiOutlineDesktopComputer, HiDocumentText, HiCheck } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Sidebar() {
    const [open, setOpen] = useState(false);
    const Menus = [
        { title: "Home", icon: <HiHome size="50" />, link: "/" },
        { title: "Projects", icon: <HiOutlineDesktopComputer size="45" />, link: "/projects" },
        { title: "Skills", icon: <HiCheck size="50" />, link: "/skills" },
        { title: "Resume", icon: <HiDocumentText size="50" />, link: "/resume" },
    ];

    return (
        <div className="fixed top-0 left-0 h-screen z-50 flex" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
            <div className={` ${open ? "w-64" : "w-20 "} bg-secondary/70 h-screen relative duration-300`}>
                <ul className="pt-6 justify-content-center">
                    {Menus.map((Menu, index) => (
                        <li key={index} className={`flex items-center group hover:bg-button_primary`}>
                            <span>
                                <SideBarIcon link={Menu.link} icon={Menu.icon} title={Menu.title} open={open} />
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

const SideBarIcon = ({link, icon, title, open }) => (
    <Link to={link}>
        <div className={`w-64 flex items-center ${!open || "w-20"}`}>
            <button className="sidebar-icon ml-1.5">
                {icon}
            </button>
            <span className={`ml-3 text-base font-medium text-primary group-hover:text-secondary duration-200 ${open ? "translate-x-0" : "-translate-x-50 opacity-0"}`}>{title}</span>
        </div>
    </Link>
);

export default Sidebar;
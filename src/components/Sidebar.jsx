import {FiHome, FiLayers, FiCheck, FiFileText} from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Sidebar() {
    const [open, setOpen] = useState(false);
    const Menus = [
        { title: "Home", icon: <FiHome size="50" />, link: "/" },
        { title: "Projects", icon: <FiLayers size="45" />, link: "/projects" },
        { title: "Skills", icon: <FiCheck size="50" />, link: "/skills" },
        { title: "Resume", icon: <FiFileText size="50" />, link: "/resume" },
    ];

    return (
        <div className="fixed top-0 left-0 max-sm:h-20 min-sm:h-screen max-sm:w-screen z-50 flex" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
            <div className={` ${open ? "w-64" : "w-20 "} bg-secondary max-sm:w-screen sm:h-screen sm:duration-100 max-sm:flex max-sm:items-center`}>
                <ul className="pt-6 max-sm:w-screen max-sm:justify-center sm:justify-content-center max-sm:items-center max-sm:h-20 max-sm:max-sm:flex max-sm:inline-flex mx-auto">
                    {Menus.map((Menu, index) => (
                        <li key={index} className={`flex items-center group sm:hover:bg-button_primary text-center`} aria-label={`Sidebar ${Menu.title}`}>
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
        <div className={`max-sm:ml-4 max-sm:mb-5 max-sm:mx-2.5 max-sm:w-16 sm:w-64 flex items-center md:${!open || "w-20"}`}>
            <button className="sidebar-icon sm:ml-1.5">
                {icon}
            </button>
            <span className={`max-sm:invisible ml-3 text-base font-medium text-primary group-hover:text-button_small duration-150 ${open ? "translate-x-0" : "-translate-x-50 opacity-0"}`}>{title}</span>
        </div>
    </Link>
);

export default Sidebar;
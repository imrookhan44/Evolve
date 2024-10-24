import { useState } from 'react';
import {
  Users,
  BarChart2,
  Book,
  MessageSquare,
  Puzzle,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import desktopLogo from './../../assets/sidebar/logo.svg'
const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const menuItems = [
    { icon: <Users size={20} />, label: 'Characters', isActive: activeIndex === 0 },
    { icon: <BarChart2 size={20} />, label: 'Analytics', isActive: activeIndex === 1 },
    { icon: <Book size={20} />, label: 'Knowledgebase', isActive: activeIndex === 2 },
    { icon: <MessageSquare size={20} />, label: 'Interactions', isActive: activeIndex === 3 },
    { icon: <Puzzle size={20} />, label: 'Integrations', isActive: activeIndex === 4 },
    { icon: <Settings size={20} />, label: 'Settings', isActive: activeIndex === 5 },
  ];

  return (
    <div
      className={`flex flex-col   rounded-[12px]  h-screen bg-gray-900 text-gray-300 transition-all duration-300 ${isCollapsed ? 'w-16' : 'w-64 p-2'
        } relative   sideBar_custom_class`} style={{ border: "1px solid rgba(255, 255, 255, 0.16)" }}
    >
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -right-3 top-6 bg-gray-900 rounded-full p-1 border border-gray-700 cursor-pointer hover:bg-gray-800"
      >
        {isCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
      </button>
      <div className={`p-4 ${isCollapsed ? 'px-2' : 'px-4'}`}>
        {isCollapsed ? (
          <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">e</span>
          </div>
        ) : (
          <img src={desktopLogo} alt="logo" />
        )}
      </div>
      <nav className="flex-1 mt-4">
        <ul className="space-y-2 ">
          {menuItems.map((item, index) => (
            <li key={index} onClick={() => setActiveIndex(index)}>
              <a
                href="#"
                className={` p-3 h-[48px]  flex items-center gap-4 ${isCollapsed ? 'px-2 justify-center' : 'px-4'
                  } py-2   ${item.isActive
                    ? " bg-activeItemBg-0  text-white  border-[1px] border-[#FFF] rounded-[12px]"
                    : "bg-transparent"
                  } `}
                title={isCollapsed ? item.label : ''}
              >
                {item.icon}
                {!isCollapsed && <span className='text-[#FFF] font-inter text-sm font-semibold leading-6'>{item.label}</span>}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className={`mt-auto pt-4 border-t border-gray-800 ${isCollapsed ? 'px-2' : 'px-4'
        }`}>
        <a
          href="#"
          className={`flex items-center gap-3 py-2 hover:bg-gray-800 transition-colors ${isCollapsed ? 'justify-center' : 'px-4'
            }`}
          title={isCollapsed ? 'Birdeye Workspace' : ''}
        >
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-white text-sm">B</span>
          </div>
          {!isCollapsed && (
            <div className="flex-1">
              <p className="text-sm">Workspace</p>
              <p className="text-sm font-medium">Birdeye</p>
            </div>
          )}
        </a>
      </div>

      <div className={`pt-4 pb-4 ${isCollapsed ? 'px-2' : 'px-4'}`}>
        <button
          className={`flex items-center gap-3 ${isCollapsed ? 'justify-center px-2' : 'px-4'
            } py-2 w-full hover:bg-gray-800 transition-colors text-gray-400`}
          title={isCollapsed ? 'Log out' : ''}
        >
          <LogOut size={20} />
          {!isCollapsed && <span>Log out</span>}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
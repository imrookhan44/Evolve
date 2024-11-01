import { useState } from "react";
import {
  Brain,
  Save,
  MoreVertical,
  MessageSquareMore,
  CircleAlert,
  Compass,
  Lightbulb,
} from "lucide-react";
import glowingIndicator from './../../assets/characters/Glowing Indicator.png'
const CharacterNavMenu = () => {
  const [activeTab, setActiveTab] = useState("characteristics");

  const menuItems = [
    { id: "characteristics", label: "Characteristics", icon: <CircleAlert /> },
    {
      id: "interactions",
      label: "Interactions",
      icon: <MessageSquareMore size={18} />,
    },
    { id: "aspirations", label: "Aspirations", icon: <Compass size={18} /> },
    { id: "mindset", label: "Mindset", icon: <Brain size={18} /> },
    {
      id: "capabilities",
      label: "Capabilities",
      icon: <Lightbulb size={18} />,
    },
  ];

  return (
    <div className="  px-4 mt-10 border-b-[1px] border-gray-800">
      <div className="flex items-center justify-between">
        <div>
          <ul className="flex items-center justify-center gap-2">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center gap-2 px-4 py-3 text-sm transition-colors relative
                    ${activeTab === item.id
                      ? "text-[#FFF] font-inter text-sm font-semibold leading-[100%]"
                      : "text-gray-400 font-inter text-sm font-semibold leading-[100%]"
                    }`}
                >
                  {item.icon}
                  {item.label}
                  {activeTab === item.id && (
                    <div
                      className="absolute bottom-0 left-0 top-[38px] w-full h-0.5"
                    >
                      <img src={glowingIndicator} alt="" className="w-[146px]" />
                    </div>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 px-3 py-1.5  text-[#FFF] text-sm font-semibold leading-[24px] rounded-full border border-gray-500">
            <MessageSquareMore size={18} />
            Chat
          </button>

          <button
            className="flex items-center gap-2 px-3 py-1.5 font-inter text-[#FFF] text-sm font-semibold leading-[24px] rounded-full"
            style={{
              background: "linear-gradient(90deg, #8952E0 0%, #642EFF 100%)",
            }}
          >
            <Save size={18} />
            Save
          </button>

          <button className="text-[#FFF] text-sm font-semibold leading-[24px] rounded-full">
            <MoreVertical size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CharacterNavMenu;

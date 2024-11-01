import { useState } from "react";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";
import frame1 from "./../../assets/characters/Icon Frame.png";
import frame2 from "./../../assets/characters/Icon Frame (1).png";
import favoriteIcon from "./../../assets/characters/fav.svg";
import playIcon from "./../../assets/characters/playIcon.svg";
import CustomSlider from "../common/Slider";
const VoiceSettingsPanel = () => {
  const [selectedCharacter, setSelectedCharacter] = useState("Chris");
  const [characters, setCharacters] = useState([
    { id: "Alice", image: frame1, favorite: false },
    { id: "Brian", image: frame2, favorite: false },
    { id: "Chris", image: frame2, favorite: false },
    { id: "Adam", image: frame2, favorite: false },
    { id: "Antoni", image: frame2, favorite: true },
    { id: "Arnold", image: frame2, favorite: false },
    { id: "Bill", image: frame2, favorite: false },
    { id: "Callum", image: frame2, favorite: false },
    { id: "Charlie", image: frame2, favorite: false },
  ]);

  interface handleFavType {
    id: string
  }
  const handleFavorite = (id: handleFavType) => {
    setCharacters((prevCharacters) =>
      prevCharacters.map((char) =>
        char.id === id.id ? { ...char, favorite: !char.favorite } : char
      )
    );
  };




  return (
    <div className="mt-2 relative w-full">
      <div className="w-[80%]">
        <div
          className="pl-3"
          style={{
            background:
              "linear-gradient(270deg, rgba(255, 255, 255, 0.00) -1.79%, rgba(255, 255, 255, 0.04) 60.71%), rgba(255, 255, 255, 0.08)",
            borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
            backdropFilter: "blur(48px)",
          }}
        >
          <p className="font-inter text-sm font-medium leading-[20px] p-3">
            Voice
          </p>
        </div>
        <div className="flex gap-6 p-6 w-full bg-[#191B1C] float-left  text-gray-200">
          <div className="flex-1 space-y-4">
            <h2 className="text-xs font-inter leading-4 font-semibold">
              Preset Selection
            </h2>

            <div className="flex items-center justify-between">
              <img src={playIcon} alt="playIcon" />&nbsp;
              <input
                type="search"
                placeholder="chris"
                className="rounded-[4px] border border-[#283240] flex items-center bg-transparent w-[16rem] p-1 font-inter "
              />&nbsp;
              <div

                className="flex items-center h-[32px] cursor-pointer gap-2 border border-[#52555A] rounded-[8px]"
                style={{
                  padding: "0px 08px",
                  background: "rgba(255, 255, 255, 0.08)",
                }}
              >
                <Heart size={18} className="text-gray-400" />
                <span className="text-sm">Favorite</span>
              </div>&nbsp;
              <div className="flex items-center">
                <button
                  className="flex items-center h-[32px] cursor-pointer gap-2 border border-[#52555A] rounded-tl-[8px] rounded-tr-[0px] rounded-br-[0px] rounded-bl-[8px]"
                  style={{
                    padding: "0px 06px",
                    background: "rgba(255, 255, 255, 0.08)",
                  }}
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  className="flex items-center h-[32px] cursor-pointer gap-2 border border-[#52555A] rounded-tl-[0px] rounded-tr-[8px] rounded-br-[8px] rounded-bl-[0px]"
                  style={{
                    padding: "0px 06px",
                    background: "rgba(255, 255, 255, 0.08)",
                  }}
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 ">
              {characters.map((char) => (
                <button
                  key={char.id}
                  onClick={() => setSelectedCharacter(char.id)}
                  className={`relative p-4 rounded-lg flex flex-col items-center group transition-all overflow-hidden w-[130px] h-[120px]
              ${selectedCharacter === char.id
                      ? "bg-gray-800 ring-1 ring-[#95D9F9]"
                      : "border border-gray-600 hover:bg-gray-800/50"
                    }`}
                >
                  <div className="absolute -inset-10  -translate-x-full group-hover:translate-x-full duration-[600ms] ease-in-out transition-transform   bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-45deg] bg-blend-overlay" />

                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center z-10">
                    <div className="bg-[#6dc8f0] rounded-full p-2 mb-2">
                      <svg
                        className="w-[53px] h-[53px] text-black"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                    <svg
                      onClick={() => handleFavorite({ id: char.id })}

                      className={`w-6 h-6 stroke-2 ${char.favorite ? "fill-red-600" : "text-white"
                        }`}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </div>
                  <div className="relative z-0">
                    <div>
                      <img
                        src={char.image}
                        alt={`Video ${char.id}`}
                        className="w-full h-full object-cover rounded-md"
                      />
                    </div>
                    <div className="flex justify-center flex-row-reverse items-center">
                      <span className="text-[#ABADAF] font-inter text-center text-base">
                        {char.id}
                      </span>
                      {char.favorite && (
                        <div className="">
                          <img src={favoriteIcon} alt="fav_icon" />
                        </div>
                      )}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="flex-1 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xs font-inter leading-4 font-semibold">
                Voice Settings
              </h2>
            </div>

            <div className="space-y-3">
              <div>
                <span className="text-[#F1F1F2] font-inter text-base font-medium leading-7">
                  Stability
                </span>
                <div className="flex justify-between text-sm">
                  <span className="text-[#ABADAF] font-inter text-[13px] leading-5 font-medium ">
                    More variable
                  </span>
                  <span className="text-[#ABADAF] font-inter text-[13px] leading-5 font-medium ">
                    More Stable
                  </span>
                </div>
                <CustomSlider
                  max={20}
                  defaultValue={10}
                  min={10}
                  onChange={() => console.log("jello")}
                />
              </div>
              <div>
                <span className="text-[#F1F1F2] font-inter text-base font-medium leading-7">
                  Similarity
                </span>

                <div className="flex justify-between text-sm">
                  <span className="text-[#ABADAF] font-inter text-[13px] leading-5 font-medium ">
                    Low
                  </span>
                  <span className="text-[#ABADAF] font-inter text-[13px] leading-5 font-medium ">
                    High
                  </span>
                </div>
                <CustomSlider
                  max={20}
                  defaultValue={10}
                  min={10}
                  onChange={() => console.log("jello")}
                />
              </div>

              <div>
                <span className="text-[#F1F1F2] font-inter text-base font-medium leading-7">
                  Style Exaggeration
                </span>
                <div className="flex justify-between text-sm">
                  <span className="text-[#ABADAF] font-inter text-[13px] leading-5 font-medium ">
                    None
                  </span>
                  <span className="text-[#ABADAF] font-inter text-[13px] leading-5 font-medium ">
                    Exaggerated
                  </span>
                </div>
                <CustomSlider
                  max={20}
                  defaultValue={10}
                  min={10}
                  onChange={() => console.log("jello")}
                />
              </div>
              <span className="text-[#F1F1F2] font-inter text-base font-medium leading-7">
                Speaker Boost
              </span>
            </div>
            <div className="flex items-center justify-between flex-row-reverse">
              <button
                className="rounded-[8px] border border-[#52555A] h-[32px] font-inter text-[#FFF] text-[13px] font-medium leading-5"
                style={{
                  background: "rgba(255, 255, 255, 0.08)",
                  padding: "0 12px",
                }}
              >
                To default
              </button>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#8952E0]"></div>
              </label>
            </div>
          </div>
        </div>

      </div>
      <div className="absolute w-[20%] right-0 -mt-10 p-4 text-justify">
        <h1 className="font-inter font-semibold text-base">Voice</h1>
        <p className="font-inter text-[#ABADAF] text-[12px] font-normal leading-5">Experience the power of expression with our Voice settings powered by ElevenLabs. Choose from a variety of presets and customize the voice settings as you see fit.</p>
      </div>

    </div>
  );
};

export default VoiceSettingsPanel;

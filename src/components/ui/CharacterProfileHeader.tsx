import characterImage from './../../assets/characters/Character Image.png'
const CharacterProfileHeader = () => {
  return (
    <div className="w-full p-6">
      <div className="flex items-center gap-4">
        <div className="relative">
          <div className="w-full h-full rounded-lg overflow-hidden">
            <img
              src={characterImage}
              alt="Character avatar"
              className="w-[120px] h-[120px] object-cover"
            />
          </div>
          <div className="absolute inset-0 rounded-lg bg-purple-500/20 shadow-lg shadow-purple-500/20"></div>
        </div>

        <div className="flex-1">
          <div className="">
            <div>
              <h1 className="text-[#FFF] font-inter text-[30px] font-bold -tracking-[0.6px] leading-[100%]">Archer</h1>
              <p className="text-[#E7E7E8] font-inter text-[14px] font-medium leading-[24px] mb-2">Wild Warrior</p>
            </div>
            <button className="px-4 py-1.5  text-[#FFF] font-inter font-semibold rounded-full text-[13px] hover:bg-gray-700 transition-colors " style={{ border: "1px solid rgba(255, 255, 255, 0.32)" }}>
              Edit Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterProfileHeader;
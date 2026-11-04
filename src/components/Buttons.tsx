import { HiMiniBackward, HiPause, HiMiniForward } from "react-icons/hi2";

export function Buttons() {
  return (
    <div className="flex flex-col ">
      <div className="bg-pink-100 h-1 rounded-full m-4"></div>
      <div className="flex justify-between">
        <span className="text-white">0:00</span>
        <span className="text-white">3:24</span>
      </div>
      <div className="flex gap-5 mx-auto mt-5">
        <HiMiniBackward className="text-white text-6xl" />
        <HiPause className="text-white text-6xl" />
        <HiMiniForward className="text-white text-6xl" />
      </div>
    </div>
  );
}

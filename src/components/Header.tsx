import { HiHeart, HiEllipsisVertical } from "react-icons/hi2";

export function Header() {
  return (
    <header className="flex flex-col gap-4 ">
      <div>
        <h1 className="text-4xl font-bold text-pink-200">Paranoid</h1>
      </div>
      <div className="flex justify-between">
        <h3 className="text-md text-pink-100">Black Sabbath</h3>
        <div className="flex gap-3">
          {/* like */}
          <HiHeart className="text-white size-7"></HiHeart>
          <HiEllipsisVertical className="text-white size-7"></HiEllipsisVertical>
          {/* other */}
        </div>
      </div>
    </header>
  );
}

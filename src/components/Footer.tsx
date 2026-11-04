import { HiAdjustmentsVertical, HiListBullet } from "react-icons/hi2";

export function Footer() {
  return (
    <div className="flex justify-between my-11">
      <HiAdjustmentsVertical className="text-white text-3xl" />
      <div className="h-10 bg-pink-800 drop-shadow-pink-700 flex-1 mx-6 text-ellipsis rounded-4xl flex justify-center items-center">
        <strong className="mx-auto text-center text-ellipsis text-white font-bold  line-clamp-1 text-xl">
          She couldn't help me with pan con queso y mortadella
        </strong>
      </div>
      <HiListBullet className="text-white text-3xl" />
    </div>
  );
}

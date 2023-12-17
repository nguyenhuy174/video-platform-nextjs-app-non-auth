import React from "react";
import { useRouter } from "next/router";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const IconSearch: React.FC = () => {
  const router = useRouter();

  const handleLabelClick = () => {
    router.push("/search-result");
  };
  return (
    <div className="flex items-center text-gray-200 hover:text-gray-300 cursor-pointer transition">
      <input
        className="w-150 h-10 rounded-full p-3 border border-gray-300 focus:outline-none focus:border-blue-400"
        type="text"
        placeholder="Nhập tên phim..."
      />
      <MagnifyingGlassIcon onClick={handleLabelClick} className="w-6 ml-2" />
    </div>
  );
};

export default IconSearch;

"use client"

import { useQuery } from "@tanstack/react-query";
import { useRef, useState } from "react"

type MarkerType = {
  stop_lat: string;
  stop_lon: string;
  stop_name: string;
}

function Inputs({ name, placeholder }: { name: string, placeholder: string }) {
  const { data, isLoading, isError } = useQuery<MarkerType[]>({
    queryKey: ['stopNames'],
    queryFn: () =>
      fetch(`${process.env.NEXT_PUBLIC_API}/names`).then((res) => res.json()),
  });
  const inputRef = useRef(null);

  const [inputValue, setInputValue] = useState("");
  const [isClicked, setIsClicked] = useState(false);

  function removeDiacritics(str: string) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }


  const filteredData = data?.filter((stop) =>
    removeDiacritics(stop.stop_name.toLowerCase()).includes(
      removeDiacritics(inputValue.toLowerCase())
    )
  );

  return (
    <div className="relative ">
      <input
        ref={inputRef}
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        name={name}
        placeholder={placeholder}
        onClick={() => setIsClicked(true)}
        className="py-1 outline-none placeholder:text-[#424242] rounded-md text-5xl px-2 text-white bg-inputs"
        autoComplete="off"
      />
      {isClicked && (
        <div className="absolute z-20 bg-inputs text-white rounded-md font-bold text-3xl left-0 w-149">
          <div className="overflow-y-auto h-40">
            {filteredData && filteredData.length > 0 ? (
              filteredData.map((stop) => (
                <span
                  className="block w-full hover:bg-[#323232] transition-all duration-175 text-center cursor-pointer"
                  key={stop.stop_name}
                  onClick={() => {
                    setInputValue(stop.stop_name)
                    setIsClicked(false)
                  }}
                >
                  {stop.stop_name}
                </span>
              ))
            ) : (
              <span className="block text-center text-neutral-500">No matches found</span>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default Inputs

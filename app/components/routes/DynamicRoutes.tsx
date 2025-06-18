"use client"

import InfoText from "@/app/ui/InfoText";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";

type RouteResult = {
  TripId: string;
  TripName: string;
  FromStopId: string;
  FromStopName: string;
  ToStopId: string;
  ToStopName: string;
  DepartureTime: string;
  ArrivalTime: string;
  ServiceId?: string;
  DepartureDayOffset?: number;
  ArrivalDayOffset?: number;
  SearchDate?: string;
  TripDuration: string;
};



function DynamicRoutes() {
  const searchParams = useSearchParams();

  const from = searchParams.get("from");
  const to = searchParams.get("to");
  const {
    isPending,
    isLoading,
    data: routeResults,
    error,
  } = useQuery<RouteResult[]>({
    queryKey: ["routes", from, to],
    queryFn: async () => {
      if (!from || !to) {
        return [];
      }
      const date = new Date().toISOString().slice(0, 10);
      const url = `${process.env.NEXT_PUBLIC_API}/find/route?from=${encodeURIComponent(
        from
      )}&to=${encodeURIComponent(to)}&date=${date}`;
      const res = await fetch(url);
      if (!res.ok) throw new Error("Failed to fetch routes");
      return res.json();
    },
    enabled: !!from && !!to,
  });
  if (isPending && from === "" && to == "") return <InfoText />

  if (isLoading && from != "" && to != "") return <div className="w-full flex justify-center items-center h-4/5 " >



    <div role="status">
      <svg aria-hidden="true" className="w-16 h-16 text-gray-200  animate-spin dark:text-gray-600 fill-orange-400" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
      </svg>
      <span className="sr-only">Loading...</span>
    </div>

  </div>;

  if (error) return <div>Error loading routes.</div>;
  if (!routeResults || routeResults.length === 0) return <div className="flex h-4/5 justify-center items-center">
    <span className="text-4xl text-white font-bold">
      No routes found.
    </span>
  </div>;


  return (
    <div className="flex flex-col gap-4">
      {routeResults.map((route, idx) => (
        <div
          key={idx + route.ArrivalTime + route.TripId}
          className="px-3 py-2 rounded-md h-auto bg-foreground text-white w-full"
        >
          <div className="justify-between flex items-center">
            <span className="text-2xl font-bold">
              {route.TripName !== "" ? route.TripName : route.ToStopName}
            </span>
            <div className="flex gap-5">
              <span className="text-orange-500">{route.DepartureTime}</span>
              <span>{route.TripDuration}</span>
            </div>
          </div>
          <div className="w-full px-1 flex items-center">
            <div className="flex flex-col">
              <p className="text-neutral-500">Departure</p>
              <span>{route.DepartureTime}</span>
              <span>{route.FromStopName}</span>
            </div>
            <div className="flex flex-col mx-auto">
              <p className="text-neutral-500">Arrival</p>
              <span>{route.ArrivalTime}</span>
              <span>{route.ToStopName}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DynamicRoutes;


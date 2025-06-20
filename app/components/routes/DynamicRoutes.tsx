"use client"

import InfoText from "@/app/ui/InfoText";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import React from "react";

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

function getMinutes(str: string) {
  const [h, m] = str.split(":").map(Number);
  return h * 60 + m;
}

function updateDay(dateString: string, days: number) {
  const date = new Date(dateString);
  date.setDate(date.getDate() + days);
  return date.toISOString().slice(0, 10);
}

function DynamicRoutes() {
  const searchParams = useSearchParams();

  const from = searchParams.get("from");
  const to = searchParams.get("to");

  async function fetchData({ pageParam }: { pageParam: number }) {
    if (!from || !to) {
      return { data: [], nextCursor: null };
    }

    const todayDate = new Date().toISOString().slice(0, 10);
    const date = updateDay(todayDate, pageParam);

    const url = `${process.env.NEXT_PUBLIC_API}/find/route?from=${encodeURIComponent(
      from
    )}&to=${encodeURIComponent(to)}&date=${date}`;

    const res = await fetch(url);
    if (!res.ok) throw new Error("Failed to fetch routes");

    const data = await res.json();

    const existingRoutes = localStorage.getItem("recent_routes");
    let recentRoutes = existingRoutes ? JSON.parse(existingRoutes) : [];
    const newRoute = [from, to];
    recentRoutes = recentRoutes.filter((route: string) =>
      !(route[0] === from && route[1] === to)
    );
    recentRoutes.unshift(newRoute);
    if (recentRoutes.length > 10) {
      recentRoutes = recentRoutes.slice(0, 10);
    }
    localStorage.setItem("recent_routes", JSON.stringify(recentRoutes));


    return {
      data: data as RouteResult[],
      nextCursor: pageParam + 1,
      currentPage: pageParam
    };
  }

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,

    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["routes", from, to],
    queryFn: fetchData,
    initialPageParam: 0,
    getNextPageParam: (lastPage, pages) => {
      if (pages.length >= 7 || lastPage.data.length === 0) {
        return undefined;
      }
      return lastPage.nextCursor;
    },
    enabled: !!from && !!to,
  });

  const now = new Date();
  const nowMinutes = now.getHours() * 60 + now.getMinutes();
  const todayDate = new Date().toISOString().slice(0, 10);

  const allRoutes = data?.pages.flatMap(page => page.data) || [];

  const filteredRoutes = allRoutes.filter(route => {
    if (route.SearchDate === todayDate) {
      return getMinutes(route.DepartureTime) > nowMinutes;
    }
    return true;
  });

  if (status === 'pending' && (!from || !to)) return <InfoText />;

  if (status === 'pending' && from && to) return (
    <div className="w-full flex justify-center items-center h-4/5">
      <div role="status">
        <svg aria-hidden="true" className="w-16 h-16 text-gray-200 animate-spin dark:text-gray-600 fill-orange-400" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
        </svg>
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );

  if (status === 'error') return <div>Error loading routes: {error?.message}</div>;

  if (!filteredRoutes || filteredRoutes.length === 0) return (
    <div className="flex h-4/5 justify-center items-center">
      <span className="text-4xl text-white font-bold">
        No routes found.
      </span>
    </div>
  );

  return (
    <div className="flex flex-col gap-4">
      {data?.pages.map((page, pageIndex) => (
        <React.Fragment key={pageIndex}>
          {page.data
            .filter(route => {
              if (route.SearchDate === todayDate) {
                return getMinutes(route.DepartureTime) > nowMinutes;
              }
              return true;
            })
            .map((route, routeIndex) => (
              <div
                key={`${pageIndex}-${routeIndex}-${route.TripId}-${route.DepartureTime}`}
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
                {/* Show date for future routes */}
                {route.SearchDate !== todayDate && (
                  <div className="text-sm text-gray-400 mt-2">
                    Date: {route.SearchDate}
                  </div>
                )}
              </div>
            ))}
        </React.Fragment>
      ))}

      <button
        onClick={() => fetchNextPage()}
        disabled={!hasNextPage || isFetching}
        className="bg-[#e5e5e5] font-bold text-2xl rounded-md py-2 px-5 text-[#171717] disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isFetchingNextPage
          ? 'Loading next day...'
          : hasNextPage
            ? 'Load Next Day'
            : 'No more days to load'}
      </button>

      {isFetching && !isFetchingNextPage && (
        <div className="text-center text-gray-500">Fetching...</div>
      )}
    </div>
  );
}

export default DynamicRoutes;

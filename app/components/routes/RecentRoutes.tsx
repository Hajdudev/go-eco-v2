"use client"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react"

type Route = [string, string];

function RecentRoutes() {
  const [recentRoutes, setRecentRoutes] = useState<Route[]>([]);
  const router = useRouter()

  useEffect(() => {
    try {
      const storedRoutes = localStorage.getItem("recent_routes");
      const routes: Route[] = storedRoutes ? JSON.parse(storedRoutes) : [];
      setRecentRoutes(routes);
    } catch (error) {
      console.error("Error loading recent routes:", error);
    }
  }, []);

  const handleRouteClick = (from: string, to: string) => {
    const params = new URLSearchParams({
      from: from,
      to: to,
    });
    router.push(`/?${params.toString()}`);
  };

  if (recentRoutes.length === 0) {
    return (
      <div className="px-3 py-2 rounded-md h-auto bg-foreground text-white w-full">
        <p className="text-gray-400 text-center">No recent routes</p>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      <h3 className="text-white text-lg font-medium mb-3">Recent Routes</h3>

      {recentRoutes.map((route, index) => (
        <div
          key={`${route[0]}-${route[1]}-${index}`}
          className="px-3 py-2 rounded-md h-auto bg-foreground text-white w-full cursor-pointer hover:bg-opacity-80 transition-all"
          onClick={() => handleRouteClick(route[0], route[1])}
        >
          <div className="text-xl">
            <span className="font-medium">{route[0]}</span>
            <span className="text-gray-400 mx-2">→</span>
            <span className="font-medium">{route[1]}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RecentRoutes;

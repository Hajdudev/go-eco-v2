"use client"
import { useSearchParams } from "next/navigation"
import RecentRoutes from "./routes/RecentRoutes";
import DynamicRoutes from "./routes/DynamicRoutes";

function RoutesDecider() {

  const searchParams = useSearchParams();

  const from = searchParams.get("from");
  const to = searchParams.get("to");
  return (
    <>
      {from == "" || to == "" || from == null || to == null ? <RecentRoutes /> : <DynamicRoutes />}
    </>
  )
}

export default RoutesDecider

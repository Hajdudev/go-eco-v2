import { Suspense } from "react";
import TanstackProvider from "../lib/query/QueryProvider";
import InfoText from "../ui/InfoText";
import RoutesDecider from "./RoutesDecider";


function Routes() {
  return (
    <div className="bg-foreground lg:w-160 w-88 md:w-125 rounded-md flex flex-col border-border border-1 ">
      <div className=" bg-inputs text-2xl lg:text-4xl text-white overflow-hidden font-bold flex w-full py-3 px-6 justify-between items-center rounded-t-md">
        <span>Routes: </span>
      </div>
      <div className="w-full flex flex-col gap-1 bg-inputs py-1 px-3 overflow-scroll h-70 md:h-75 lg:h-84">
        <TanstackProvider >
          <Suspense fallback={<InfoText />} >
            <RoutesDecider />
          </Suspense>
        </TanstackProvider>
      </div>
    </div>
  );
}

export default Routes;

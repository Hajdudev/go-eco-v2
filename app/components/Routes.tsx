import TanstackProvider from "../lib/query/QueryProvider";
import DynamicRoutes from "./routes/DynamicRoutes";


function Routes() {
  return (
    <div className="bg-foreground w-160  rounded-md flex flex-col border-border border-1 ">
      <div className=" bg-inputs text-4xl text-white overflow-hidden font-bold flex w-full py-3 px-6 justify-between items-center rounded-t-md">
        <span>Results: </span>
      </div>
      <div className="w-full flex flex-col gap-1 bg-inputs py-1 px-3 overflow-scroll h-84">
        <TanstackProvider >
          <DynamicRoutes />

        </TanstackProvider>
      </div>
    </div>
  );
}

export default Routes;

import Input from "./components/Input";
import Map from "./components/map/Map";
import Routes from "./components/Routes";

export default function Home() {
  return (
    <div className="flex w-screen h-screen">
      <div className="w-1/2 gap-7 flex-col flex justify-center items-center  h-full">

        <h1 className="text-white  font-bold text-7xl">Go-Eco</h1>
        <Input />
        <Routes />
      </div>
      <div className="w-1/2 h-full">
        <Map />
      </div>
    </div>
  );
}

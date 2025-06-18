import Input from "./components/Input";
import Routes from "./components/Routes";

export default function Home() {
  return (
    <div className="flex w-screen h-screen">
      <div className="w-1/2 gap-7 flex-col flex justify-center items-center  h-full">
        <Input />
        <Routes />
      </div>
      <div className="w-1/2 h-full"></div>
    </div>
  );
}

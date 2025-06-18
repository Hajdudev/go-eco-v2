import Input from "./components/Input";

export default function Home() {
  return (
    <div className="flex w-screen h-screen">
      <div className="w-1/2 flex justify-center items-center  h-full">
        <Input />
      </div>
      <div className="w-1/2 h-full"></div>
    </div>
  );
}

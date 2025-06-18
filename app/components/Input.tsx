import TanstackProvider from "../lib/query/QueryProvider";
import InputForm from "./routes/InputForm";

function Input() {
  return (
    <div className=" flex border-border border-1 rounded-md bg-foreground p-5 flex-col ">
      <TanstackProvider >
        <InputForm />
      </TanstackProvider>
    </div>
  );
}

export default Input;

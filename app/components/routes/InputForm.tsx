"use client"
import Inputs from "./Inputs"
import Form from "next/form"

function InputForm() {
  return (
    <Form action="" className="flex flex-col gap-5 font-mono ">

      <Inputs name="from" placeholder="From stop" />
      <Inputs name="to" placeholder="To Stop" />

      <button
        type="submit"
        className="bg-[#e5e5e5] font-bold text-2xl rounded-md  py-2 px-5 text-[#171717] "
      >
        Search
      </button>
    </Form>
  )
}

export default InputForm

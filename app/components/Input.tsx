function Input() {
  return (
    <div className=" flex border-border border-1 rounded-md bg-foreground p-5 flex-col ">
      <form className="flex flex-col gap-5 font-mono ">
        <input placeholder="From stop" className="py-1 placeholder:text-[#424242] rounded-md text-3xl px-2 bg-inputs" />
        <input placeholder="To stop" className=" py-1  placeholder:text-[#424242] text-3xl rounded-md px-2 bg-inputs" />
        <button className="bg-[#e5e5e5] font-bold rounded-md  py-2 px-5 text-[#171717] ">Search</button>

      </form>


    </div>
  )
}

export default Input

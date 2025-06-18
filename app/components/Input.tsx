function Input() {
  return (
    <div className=" flex border-border border-1 rounded-md bg-foreground p-5 flex-col ">
      <form action="/route/" className="flex flex-col gap-5 font-mono ">
        <input
          name="from"
          placeholder="From stop"
          className="py-1 outline-none placeholder:text-[#424242] rounded-md text-5xl px-2 text-white bg-inputs"
        />

        <input
          name="to"
          placeholder="To stop"
          className=" py-1  placeholder:text-[#424242] text-5xl rounded-md px-2 bg-inputs text-white outline-none"
        />
        <button
          type="submit"
          className="bg-[#e5e5e5] font-bold text-2xl rounded-md  py-2 px-5 text-[#171717] "
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default Input;

export default function Sign() {
  return (
    <div className="flex  w-[500px] rounded-md shadow-lg mt-10 ml-5 h-[230px] justify-center z-20 relative bg-red-500 ">
      <form className="w-full h-full flex flex-col p-4">
        <div className="relative mt-4">
          <input
            id="username"
            className="peer w-[70%] p-2 transition-colors  outline-none  border-b  border-b-blue-500 focus:border-b-2 focus:border-purple-900"
          />
          <label
            htmlFor="username"
            className="d absolute text-[15px] font-bold left-0 bottom-[2px] cursor-text peer-focus:text-xs peer-focus:-top-2 transition-all"
          >
            username
          </label>
        </div>

        <div className="relative mt-4">
          <input
            id="username"
            className="peer w-[70%] p-2 transition-colors  outline-none  border-b  border-b-blue-500 focus:border-b-2 focus:border-purple-900"
          />
          <label
            htmlFor="username"
            className="d absolute text-[15px] font-bold left-0 bottom-[2px] cursor-text peer-focus:text-xs peer-focus:-top-2 transition-all"
          >
            username
          </label>
        </div>
        <div className="relative mt-4">
          <input
            id="username"
            className="peer w-[70%] p-2 transition-colors  outline-none  border-b  border-b-blue-500 focus:border-b-2 focus:border-purple-900"
          />
          <label
            htmlFor="username"
            className="d absolute text-[15px] font-bold left-0 bottom-[2px] cursor-text peer-focus:text-xs peer-focus:-top-2 transition-all"
          >
            username
          </label>
        </div>
      </form>
    </div>
  );
}

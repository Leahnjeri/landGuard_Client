
const App = () => {
  return (
    <>
      <div className="bg-gray-100 flex h-screen  w-full  justify-center items-center">
        {/* login div */}
        <div className="flex flex-col justify-center items-center  bg-white max-w-2xl shadow-2xl w-full px-6 py-8 rounded-md mx-4 ">
          
          <h1 className="text-green-900 text-2xl font-bold font-serif underline">Login page</h1>

          <div className="flex flex-col py-2 px-2 shadow-2xl rounded-md border-gray-400">
            <label className="">Name</label>
            <input type="text" placeholder="enter your name" className="bg-gray-500 border-2 rounded-md px-2" />
          </div>
          <div className="flex flex-col py-2 px-2 shadow-2xl rounded-md border-gray-400">
            <label className="">email</label>
            <input type="text" placeholder="enter your name" className="bg-gray-500 border-2 rounded-md px-2" />
          </div>
          <div className="flex flex-col py-2 px-2 shadow-2xl rounded-md border-gray-400">
            <label className="">password</label>
            <input type="text" placeholder="enter your name" className="bg-gray-500 border-2 rounded-md px-2" />
          </div>


        </div>
      </div>
    </>
  )
}

export default App
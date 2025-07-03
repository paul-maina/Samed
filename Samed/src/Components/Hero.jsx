


function Hero(){

    const search=()=>{}
    return(
        <div className="m-5">
            <div className="flex font-normal p-5">
                <div className="flex gap-5 justify-center m-auto">
                    <a href="/" className="text-blue-800 hover:text-teal-300">|About Us|</a>
                    <a href="/" className="text-blue-800 hover:text-teal-300">|Services|</a>
                    <a href="/" className="text-blue-800 hover:text-teal-300">|Blog|</a>
                    <a href="/" className="text-blue-800 hover:text-teal-300">|FAQ|</a>
                    <a href="/" className="text-blue-800 hover:text-teal-300">|Contact|</a>        
                </div>
                <div>
                    <a href="/" className="text-blue-800 hover:text-teal-300 absolute left-[85%]">Login/Sign In </a>
                </div>
            </div>
                <div className="logo flex gap-10">
                    <img src="https://imgur.com/prS4lTC.png" alt="" className="w-auto h-20 "/>
                    <form className="w-1/2 text-center m-auto  p-2 rounded-3xl ">
                        <input 
                           type="text"
                           placeholder="search"
                           className="w-full px-4 py-2 bg-gray-300 text-left placeholder:text-left rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-400">
                           </input>

                    </form>

                </div>



        </div>
      
    )
}


export default Hero;
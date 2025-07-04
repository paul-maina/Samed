import { UserIcon } from '@heroicons/react/24/outline';


function Hero(){
    

    const search=()=>{}
    
    return(
        <div className="">
            <div className="flex font-normal bg-purple-700">
                <div className="flex flex-wrap p-5 gap-5 justify-center m-auto">
                    |<a href="/" className="text-white hover:text-teal-300">About Us</a>
                    |<a href="/" className="text-white hover:text-teal-300">Services</a>
                    |<a href="/" className="text-white hover:text-teal-300">Blog</a>
                    |<a href="/" className="text-white hover:text-teal-300">FAQ</a>
                    |<a href="/" className="text-white hover:text-teal-300">Contact</a>|        
                </div>
            
            </div>
                <div className="logo flex gap-10">
                    <a href="">
                        <img src="https://imgur.com/prS4lTC.png" alt="" className="w-auto h-20 "/>
                    </a>
                    
                    <form className="w-1/2 text-center m-auto  p-2 rounded-3xl ">
                        <input 
                           type="text"
                           placeholder="Search for products"
                           className="w-full px-4 py-2 border text-left placeholder:text-left rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-400">
                           </input>
                    </form>

                    <div className="justify-content m-auto text-center">
                        <a href="/account" 
                            className="flex flex-col items-center group"
                            >
                            <div className="bg-white p-2 rounded-full mb-1 group-hover:bg-gray-100 transition">
                                <UserIcon className="w-5 h-5 text-blue-800" />
                            </div>
                            <span className="text-blue-800 text-sm group-hover:text-teal-300 transition">
                                Account
                            </span>
                        </a>
                    </div>
                </div>



        </div>
      
    )
}


export default Hero;
<div className="Menu1 ">
    <div className="flex font-normal bg-sky-700">
        <div className="">Free delivery within Mombasa</div>
        <div>
            <ul>
                |<li><a href="/" className="text-white cursor-pointer">About Us</a></li>
                |<li><a href="/" className="text-white cursor-pointer">Services</a></li>
                |<li><a href="/" className="text-white cursor-pointer">Blog</a></li>
                |<li><a href="/" className="text-white cursor-pointer">Contact</a></li>|
            </ul>
        </div>
            
    </div>
    <div className="Menu2 logo flex gap-10">
        <div>
            <a href="">
                        <img src="https://i.imgur.com/prS4lTC.png" alt="logo" className="w-auto h-20 mx-16"/>
                    </a>
        </div>
        <div>
            <form className="w-1/2 text-center m-auto  p-2 rounded-3xl ">
                        <input 
                           type="text"
                           placeholder="Search for products"
                           className="w-full px-4 py-2 border text-left placeholder:text-left rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-400">
                           </input>
                    </form>
        </div>
        <div>
            <ul>
                <li>
                    <a href="/" className="flex flex-col items-center cursor-pointer transition">
                           <div><ShoppingCartIcon className="w-5 h-5"/></div>
                            Cart
                        </a>
                </li>
                <li>
                    <a href="/account" className="px-5 mr-16 flex flex-col text-white items-center cursor-pointer transition">
                                <div><UserIcon className="w-5 h-5"/></div>
                                Login/Register
                    </a>
                </li>
            </ul>
        </div>
        
    </div>
 
</div>
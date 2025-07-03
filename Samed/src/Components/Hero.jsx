


function Hero(){
    return(
        <div>
            <div className="flex">
                <div className="flex justify-between items-center gap-5 font-normal pt-5 m-auto">
                    <a href="/" className="text-blue-800 ">About Us</a>
                    <a href="/" className="text-blue-800">Services</a>
                    <a href="/" className="text-blue-800">Blog</a>
                    <a href="/" className="text-blue-800">FAQ</a>
                    <a href="/" className="text-blue-800">Contact </a>        
                </div>
                <div>
                    <a href="/" className="text-blue-800 justify-center items-center m-auto pt-5">Login/Sign In </a>
                </div>
            </div>
         <div className="logo">
            <img src="https://i.imgur.com/J7mTQ3L.png" alt="" className="w-auto h-20 mx-5 px-2"/>
         </div>



        </div>
      
    )
}


export default Hero;
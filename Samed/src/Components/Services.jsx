


function Services(){
const services=()=>{}

    return(
        <div className="p-5">
            <div className="Services m-auto text-center font-bold">Our Services</div>
                <div className="m-auto text-center max-w-3xl"> 
                    <h1 className="font-bold text-3xl mb-3 text-center text-sky-700">
                        What We Offer
                    </h1>

                    <p className="text-green-700">
                        Samed Pharmaceuticals is dedicated to providing professional, accessible, 
                        and compassionate pharmacy services to support your health and well-being.
                    </p>

                </div>
                <div onClick={services} className="gap-5 grid grid-cols-3 justify-center text-center max-w-3xl m-auto">
                    <div className="cursor-pointer font-medium hover:bg-sky-700 hover:text-white
                                    border-2 p-1 px-3 rounded-md text-sky-700">
                        <a href="/">Prescription Dispensing</a>
                    </div>
                    <div className="cursor-pointer font-medium hover:bg-sky-700 hover:text-white
                                    border-2 p-1 px-3 rounded-md text-sky-700">
                        <a href="/">Medical Consultations</a> 
                    </div>
                    <div className="cursor-pointer font-medium hover:bg-sky-700 hover:text-white
                                    border-2 p-1 px-3 rounded-md text-sky-700">
                        <a href="/">STI/UTI Screenings</a> 
                    </div>
                    <div className="cursor-pointer font-medium hover:bg-sky-700 hover:text-white
                                    border-2 p-1 px-3 rounded-md text-sky-700">
                        <a href="/">Lab Services</a>
                    </div>
                    <div className="cursor-pointer font-medium hover:bg-sky-700 hover:text-white
                                    border-2 p-1 px-3 rounded-md text-sky-700">
                        <a href="/" >Home Delivery </a>
                    </div>
                </div>
                
            {/*<div className="flex flex-wrap justify-between m-3 gap-4 p-5 max-w-6xl mx-auto">

                    <div className="w-50 text-center">
                        <img src="https://i.postimg.cc/fWYSfq3N/prescriptio.webp" alt="Prescription Dispensing" className="w-full h-30 object-contain mb-2" />
                        <p className="text-sm font-medium text-green-700">💊 Prescription Dispensing</p>
                    </div>

                    <div className="w-50 text-center">
                        <img src="https://i.imgur.com/00KrmPo.jpeg" alt="Medical Consultations" className="w-full h-30 object-cover mb-2 rounded" />
                        <p className="text-sm font-medium text-green-700">👨‍⚕️ Medical Consultations</p>
                    </div>

                    <div className="w-50 text-center">
                        <img src="https://i.postimg.cc/qMCnSBD9/wellbeing.webp" alt="Wellness Products" className="w-full h-30 object-contain mb-2" />
                        <p className="text-sm font-medium text-green-700">🌿 Wellness & Health Products</p>
                    </div>

                    <div className="w-50 text-center">
                        <img src="https://i.postimg.cc/k5jzZyBM/delivery.webp" alt="Home Delivery" className="w-full h-30 object-contain mb-2" />
                        <p className="text-sm font-medium text-green-700">🏍 Home Delivery Services</p>
                    </div>

                    <div className="w-50 text-center">
                        <img src="https://i.imgur.com/SfFC6Ay.jpeg" alt="STI/UTI Screenings" className="w-full h-30 object-cover mb-2 rounded" />
                        <p className="text-sm font-medium text-green-700">🧪 STI/UTI Screenings</p>
                    </div>
            </div> 
            */}


           
        </div>
        
    )

}



export default Services;
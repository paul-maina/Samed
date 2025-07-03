


function Services(){
    return(
        <div className="mt-5">
            <div className="Services m-auto text-center font-bold">Our Services</div>
                <div className="m-auto text-center max-w-3xl"> 
                    <h1 className="font-bold text-3xl mb-3 text-center text-blue-900">
                        What We Offer
                    </h1>

                    <p className="text-green-700">At Samed Pharmaceuticals, we are committed to supporting your health and well-being through professional,
                    accessible, and compassionate pharmacy services. Whether you're managing a chronic condition, 
                    in need of expert advice, or just looking for everyday health products, we’ve got you covered.
                    </p>

                </div>
            <div className="flex flex-wrap justify-between m-3 gap-4 p-5 max-w-6xl mx-auto">

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


           
        </div>
        
    )

}



export default Services;
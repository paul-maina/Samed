



function Products(){
    return(
        <div className="max-w-6xl m-auto bg-gray-200 rounded-2xl p-5">
             <div className="m-auto text-center font-bold">Our Products</div>
             <div className="">
                <h1 className="font-bold text-3xl mb-3 text-center p-2 text-blue-900">Trusted Health & Wellness Essentials</h1>
                <p className="text-center pb-2 text-green-700">
                   Whether you need fast-acting pain relief or daily supplements to boost your health, you'll find what you need right 
                   here—conveniently categorized for your ease.
                </p>
             </div>
            <div className="mx-5">
                <div className="text-center text-xl font-bold text-blue-900 p-5">Product Categories</div>
                <div className="flex gap-5">

                    <div className="bg-teal-200 p-5 rounded-br-4xl rounded-tl-4xl">
                        <h1 className="font-bold text-center">Pain Relief</h1>
                        <p className="text-center pb-2 text-green-700">
                        For fast, effective relief from headaches, muscle aches, and joint pain.
                        Examples: Panadol, Ibuprofen, Diclofenac Gel</p>
                    </div>

                    <div className="bg-teal-200 p-5 rounded-br-4xl rounded-tl-4xl">
                        <h1 className="font-bold text-center">Cold & Flu</h1>
                        <p className="text-center pb-2 text-green-700">
                            Relieve symptoms like congestion, cough, and fever with our pharmacist-approved remedies.
                        Examples: FluPlus, Actifed, Strepsils, Vitamin C</p>
                    </div>

                    <div className="bg-teal-200 p-5 rounded-br-4xl rounded-tl-4xl">
                        <h1 className="font-bold text-center">Chronic Medication</h1>
                        <p className="text-center pb-2 text-green-700">
                            Maintenance medications for long-term conditions such as hypertension, diabetes, and asthma.
                        Examples: Metformin, Losartan, Salbutamol Inhalers</p>
                    </div>

                    <div className="bg-teal-200 p-5 rounded-br-4xl rounded-tl-4xl">
                        <h1 className="font-bold text-center">Skin Care</h1>
                        <p className="text-center pb-2 text-green-700">
                            Gentle and effective solutions for all skin types, including medical creams, cleansers, and moisturizers.
                        Examples: Nivea, Cetaphil, Hydrocortisone Cream</p>
                    </div>

                    <div className="bg-teal-200 p-5 rounded-br-4xl rounded-tl-4xl">
                        <h1 className="font-bold text-center">Sexual Health</h1>
                        <p className="text-center pb-2 text-green-700">
                            Discreet and trusted products for reproductive and intimate wellness.
                        Examples: Condoms, Emergency Contraceptives, Lubricants</p>
                    </div>
                </div>

            </div>
        </div>
       
    )
}


export default Products;
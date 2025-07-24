<div className="dropdownMenu bg-sky-700 text-white p-4 font-normal">
    
    <ul>
        <li>
            <div className="flex items-center mx-16">
                <button onClick={() => setIsOpen(!isOpen)} className="flex flex-col gap-1 w-6 mr-4">
                <span className="block h-o.5 bg-white"></span>
                <span className="block h-o.5 bg-white"></span>
                <span className="block h-o.5 bg-white"></span>
                </button>
                <span><a href="/" className="">ALL CATEGORIES</a></span>
            </div>
            

            {isOpen && (
            <div className="absolute mx-16 bg-sky-700 text-white hover:text-black rounded z-50 p-4">
                <ul>
                <li><a href="/" className="block px-2 py-1 hover:bg-gray-100 rounded">Medical Conditions</a></li>
                    <ul className="">
                        <li><a href="/" className="">Fever</a></li>
                        <li><a href="/" className="">Stomach Care Digestive health</a></li>
                        <li><a href="/" className="">Pain Reliefmanagement</a></li>
                        <li><a href="/" className="">Bone joint and muscle aches</a></li>
                        <li><a href="/" className="">Diabetes</a></li>
                        <li><a href="/" className="">Reproductive Health</a></li>
                        <li><a href="/" className="">Allergy Relief</a></li>
                        <li><a href="/" className="">HIV</a></li>
                        <li><a href="/" className="">Bacterial fungal Protozoal infections</a></li>
                        <li><a href="/" className="">Hypertension</a></li>
                        <li><a href="/" className="">Oral care</a></li>
                    </ul>
                <li><a href="/" className="">Vitamins & Supplements</a>
                    <ul>
                        <li><a href="/" className="">Supplements</a></li>
                        <li><a href="/" className="">Health foods & drinks</a></li>
                        <li><a href="/" className="">Workout Essentials</a></li>
                        <li><a href="/" className="">Weight Management</a></li>
                    </ul>
                </li>
                <li><a href="/" className="">Vitamins & Supplements</a>Beauty & Skin Care
                    <ul>
                        <li><a href="" className="">Hair care</a></li>
                        <li><a href="" className="">Acne</a></li>
                        <li><a href="" className="">Face care</a></li>
                        <li><a href="" className="">Beard care</a></li>
                    </ul>
                </li>
                <li><a href="/" className="">Personal Care & Hygiene</a>
                    <ul>
                        <li><a href="" className=""></a></li>
                        <li><a href="" className=""></a></li>
                        <li><a href="" className=""></a></li>
                        <li><a href="" className=""></a></li>
                    </ul>
                </li>
                <li><a href="/" className="">First Aid & Emergency</a>
                    <ul>
                        <li><a href="" className=""></a></li>
                        <li><a href="" className=""></a></li>
                        <li><a href="" className=""></a></li>
                        <li><a href="" className=""></a></li>
                    </ul>
                </li>
                <li><a href="/" className="">Medical Devices</a>
                    <ul>
                        <li><a href="" className=""></a></li>
                        <li><a href="" className=""></a></li>
                        <li><a href="" className=""></a></li>
                        <li><a href="" className=""></a></li>
                    </ul>
                </li>
            </ul>

                <ul><a href="/" className="">OFFERS</a></ul>
                <ul><a href="/" className="">SUBMIT PRESCRIPTION</a></ul>
            </div>)}
      </li>

    </ul>      
 
</div>
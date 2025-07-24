import { UserIcon } from '@heroicons/react/24/outline';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

function Header(){
   const [isOpen, setIsOpen] = useState(false); // isOpen starts as false

   
    return(
        <div className="">
            <div className="flex font-normal bg-sky-700">
                <div className="">paulkariz66@gmail.com</div>
                 
                <div className="flex flex-wrap gap-5 m-auto mr-5">
                    |<a href="/" className="text-white hover:text-teal-300">About Us</a>
                    |<a href="/" className="text-white hover:text-teal-300">Services</a>
                    |<a href="/" className="text-white hover:text-teal-300">Blog</a>
                    |<a href="/" className="text-white hover:text-teal-300">FAQ</a>
                    |<a href="/" className="text-white hover:text-teal-300">Contact</a>|        
                </div>
                <div>
                    <a href="/account" className="px-5 mr-16 flex flex-col text-white items-center hover:text-black transition">
                                <div><UserIcon className="w-5 h-5"/></div>
                                Login/Register
                    </a>
                </div>
            </div>

                <div className="logo flex gap-10">
                   <a href="">
                        <img src="https://i.imgur.com/prS4lTC.png" alt="logo" className="w-auto h-20 mx-16"/>
                    </a>
                    
                    <form className="w-1/2 text-center m-auto  p-2 rounded-3xl ">
                        <input 
                           type="text"
                           placeholder="Search for products"
                           className="w-full px-4 py-2 border text-left placeholder:text-left rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-400">
                           </input>
                    </form>

                    <div className="flex gap-5 justify-center m-auto text-center">
                        
                        <a href="/" className="flex flex-col items-center hover:text-teal-300 transition">
                           <div><ShoppingCartIcon className="w-5 h-5"/></div>
                            Cart
                        </a>
                    </div>
                </div>
                <div className="dropdownMenu bg-sky-700 text-white p-4 font-normal">
    <ul>
        <li>
            <div className="flex items-center mx-16">
                <button onClick={() => setIsOpen(!isOpen)} className="flex flex-col gap-1 w-6 mr-4 ">
                    <span className="block h-0.5 w-full bg-white"></span>
                    <span className="block h-0.5 w-full bg-white"></span>
                    <span className="block h-0.5 w-full bg-white"></span>
                </button>
                <span>ALL CATEGORIES</span>
            </div>

            {isOpen && (
                <div className="absolute mx-16 bg-sky-700 text-white hover:text-black rounded z-50 p-4">
                    {[
                        {
                            name: "Medical Conditions",
                            subcategories: [
                                "Fever", "Stomach Care Digestive health", "Pain Reliefmanagement",
                                "Bone joint and muscle aches", "Diabetes", "Reproductive Health",
                                "Allergy Relief", "HIV", "Bacterial fungal Protozoal infections",
                                "Hypertension", "Oral care"
                            ]
                        },
                        {
                            name: "Vitamins & Supplements",
                            subcategories: [
                                "Supplements", "Health foods & drinks",
                                "Workout Essentials", "Weight Management"
                            ]
                        },
                        {
                            name: "Beauty & Skin Care",
                            subcategories: [
                                "Hair care", "Acne", "Face care", "Beard care"
                            ]
                        },
                        {
                            name: "Personal Care & Hygiene",
                            subcategories: []
                        },
                        {
                            name: "First Aid & Emergency",
                            subcategories: []
                        },
                        {
                            name: "Medical Devices",
                            subcategories: []
                        }
                    ].map((category, index) => (
                        <div key={index} className="group relative">
                            <a href="/" className="block px-2 py-1 hover:bg-gray-100 rounded">
                                {category.name}
                            </a>
                            {category.subcategories.length > 0 && (
                                <ul className="hidden group-hover:block absolute left-full top-0 ml-1 w-48 bg-sky-700 shadow-lg rounded p-2">
                                    {category.subcategories.map((subcategory, subIndex) => (
                                        <li key={subIndex}>
                                            <a href="/" className="block px-2 py-1 hover:bg-sky-200 hover:text-black rounded">
                                                {subcategory}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}

                    <div className="mt-2">
                        <a href="/" className="block px-2 py-1 hover:bg-gray-100 rounded">OFFERS</a>
                    </div>
                    <div className="mt-1">
                        <a href="/" className="block px-2 py-1 hover:bg-gray-100 rounded">SUBMIT PRESCRIPTION</a>
                    </div>
                </div>
                        )}
                    </li>
                </ul>
            </div>
        </div>
    )}


export default Header;
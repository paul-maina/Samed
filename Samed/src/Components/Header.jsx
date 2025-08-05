import { UserIcon } from '@heroicons/react/24/outline';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { Link } from 'react-router-dom';


function Header(){
   const [isOpen, setIsOpen] = useState(false); // isOpen starts as false

   
    return(
        <div className="">
            <div className="Menu1 ">
                <div className="flex font-normal bg-sky-700 p-2 justify-between">
                    <div className="mx-16">Free delivery within Mombasa</div>
                    <div className="gap-5 flex px-10">
                            |<Link to="/about" className="text-white cursor-pointer">About Us</Link>
                            |<Link to="/services" className="text-white cursor-pointer">Services</Link>
                            |<Link to="/blogs" className="text-white cursor-pointer">Blogs</Link>
                            |<Link to="/contact" className="text-white cursor-pointer">Contact</Link>
                    </div>      
                </div>
                <div className="Menu2 flex gap-10 items-center justify-between p-2">
                    <div>
                        <Link to="/">
                                    <img src="https://i.imgur.com/prS4lTC.png" alt="logo" className="w-auto h-20 mx-16"/>
                                </Link>
                    </div>
                    <div className="flex-1">
                        <form className="w-full text-center p-2 rounded-3xl ">
                                    <input 
                                    type="text"
                                    placeholder="Search for products"
                                    className="w-full px-4 py-2 border text-left placeholder:text-left rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-400">
                                    </input>
                                </form>
                    </div>
                    <div>
                        <ul className="flex gap-5 px-10">
                            <li>
                                <Link to="/cart" className="flex flex-col items-center cursor-pointer transition">
                                    <div><ShoppingCartIcon className="w-5 h-5"/></div>
                                        Cart
                                    </Link>
                            </li>
                            <li>
                                <Link to="/account" className="flex flex-col  items-center cursor-pointer transition">
                                            <div><UserIcon className="w-5 h-5"/></div>
                                            Login/Register
                                </Link>
                            </li>
                        </ul>
                    </div>
                    
                </div>
                
            </div>


                <div className="dropdownMenu">
                   <ul className="flex items-center gap-10 bg-sky-700 text-white p-4 font-normal">
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
                            <div className="absolute left-0 bg-sky-700 text-white rounded z-50 p-4 flex flex-col gap-y-2 mx-16">
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
                            <Link to="/" className="block hover:bg-gray-100 rounded">
                                {category.name}
                            </Link>
                            {category.subcategories.length > 0 && (
                                <ul className="hidden group-hover:block absolute left-full top-0 ml-1 bg-sky-700 shadow-lg rounded p-2 w-max">
                                    {category.subcategories.map((subcategory, subIndex) => (
                                        <li key={subIndex}>
                                            <Link to="/" className="block hover:bg-sky-200 hover:text-black rounded">
                                                {subcategory}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
                        )}
                </li>
                    <div className="">
                    <Link to="/offers" className=" hover:text-black ">OFFERS</Link>
                    </div>
                    <div className="">
                        <Link to="/submit prescription" className="hover:text-black ">SUBMIT PRESCRIPTION</Link>
                    </div>
                </ul>
                
            </div>
            
        </div>
    )}


export default Header;
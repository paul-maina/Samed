import { FaFacebookF, FaYoutube, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

function Footer(){

return(
    <div className="Footer bg-sky-700">
        <div className="grid grid-cols-3 mx-16 p-2 text-white font-medium justify-between">
        <div className="Mission">
            <h1 className="font-bold text-2xl">Our Mission</h1>
            <p className="">To provide safe, reliable, and effective pharmaceutical products that support the health and well-being of every customer</p>
            
            <br/>

            <div className="contact">
            <h1 className="font-bold text-2xl">Our Contact</h1>
            <p>
                <ul>
                    <li>Bamburi house ground floor</li>
                    <li>Mombasa Bamburi</li>
                    <li><strong>Phone:</strong> 07xxxxxxx</li>
                    <li><strong>Address:</strong> 6558-00,Mombasa</li>
                    <li><strong>Email:</strong> samed@info</li>
                </ul> <br/>
                <div className="flex space-x-4 mb-4  text-white">
                    <a href="/"><FaLinkedinIn /></a>
                    <a href="/"><FaFacebookF /></a>
                    <a href="/"><FaInstagram /></a>
                    <a href="/"><FaYoutube /></a>
                </div>
            </p>
        </div>

        </div>
        
        <div className="Useful Links">
            <ul>
                <h1 className="font-bold text-2xl">Useful Links</h1>
                <li>About Us</li>
                <li>Services</li>
                <li>Blog</li>
                <li>Delivery information</li>
            </ul>
            <ul>
                <hi>Complaints</hi>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
        <div className="Partner">
                <h1 className="font-bold text-2xl">Partner</h1>
                <img src="https://iili.io/FkenoVs.md.png" alt="" className="w-auto h-60 hover:scale-200 rounded"></img>
                
        </div>
        
    </div>
    <div className="Separator w-full border-t border-white mx-16"></div>
    <div className="mx-16 text-white py-5 font-bold">©2025 www.Samedpharmacy.co.ke - All rights reserved.</div>

    </div>
    )}



export default Footer;
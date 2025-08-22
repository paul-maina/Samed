import { FaFacebookF, FaYoutube, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

function Contact() {
  return (
    <div className="contact flex flex-col md:flex-row gap-10 justify-center mx-auto p-6 max-w-6xl">
      
      <div>
        <h1 className="font-bold text-2xl text-sky-700 mb-4">Our Contact</h1>
        <ul className="space-y-1 text-green-700">
          <li>Bamburi House, Ground Floor</li>
          <li>Mombasa, Bamburi</li>
          <li><strong>Phone:</strong> 07xxxxxxx</li>
          <li><strong>Address:</strong> 6558-00, Mombasa</li>
          <li><strong>Email:</strong> samed@info</li>
        </ul>

     
        <div className="flex space-x-4 mt-4 text-[#003333]">
          <a href="/" aria-label="LinkedIn"><FaLinkedinIn /></a>
          <a href="/" aria-label="Facebook"><FaFacebookF /></a>
          <a href="/" aria-label="Instagram"><FaInstagram /></a>
          <a href="/" aria-label="YouTube"><FaYoutube /></a>
        </div>
      </div>

     
      <form className="w-full max-w-md p-2">
        <h3 className="text-md font-semibold mb-2">
          Send Us a Message / Prescription
        </h3>
        <div className="bg-blue-100 rounded-xl p-5 ">
          <div>
            <label className="block text-sm mb-1" htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full border-b border-gray-400 focus:outline-none bg-transparent py-2"
              required
            />
          </div>
          <div>
            <label className="block text-sm mb-1" htmlFor="number">Phone Number</label>
            <input
              type="tel"
              id="number"
              name="number"
              className="w-full border-b border-gray-400 focus:outline-none bg-transparent py-2"
              required
            />
          </div>
          <div>
            <label className="block text-sm mb-1" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border-b border-gray-400 focus:outline-none bg-transparent py-2"
              required
            />
          </div>
          <div>
            <label className="block text-sm mb-1" htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              className="w-full border-b border-gray-400 focus:outline-none bg-transparent py-2"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-full hover:bg-sky-300 transition"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;

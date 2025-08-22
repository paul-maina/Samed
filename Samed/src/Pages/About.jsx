function About() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 py-10">
      
     
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-sky-700 mb-3">About Us</h1>
        <p className="text-green-700 max-w-3xl mx-auto">
          SAMED Pharmaceutical is a trusted name in healthcare, committed to improving lives 
          with accessible and affordable medical solutions.  
          We serve communities with a strong focus on professionalism, integrity, and care.
        </p>
      </div>

      
      <div className="flex flex-col lg:flex-row items-center gap-10">
        
        
        <div className="flex justify-center">
          <img
            src="https://i.postimg.cc/QNb9Wdw8/shelf.png"
            alt="Shelf"
            className="w-full max-w-sm rounded-lg shadow-md"
          />
        </div>

        <div className="grid gap-8 text-center lg:text-left">
          <div>
            <h2 className="text-2xl font-bold text-sky-700 mb-2">Our Mission</h2>
            <p className="text-green-700">
              To provide safe, reliable, and effective pharmaceutical products that support 
              the health and well-being of every customer.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-sky-700 mb-2">Our Vision</h2>
            <p className="text-green-700">
              A healthier community empowered through accessible and expert healthcare solutions.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default About;

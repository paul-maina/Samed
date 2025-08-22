function Blogs() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 py-10">
      
    
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-sky-700 mb-3">Our Blog</h1>
        <p className="text-green-700 max-w-2xl mx-auto">
          Welcome to our blog, where we share health tips, pharmacy insights, and updates 
          on our products and services.
        </p>
      </div>

      
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        
        <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition">
          <img
            src="https://i.postimg.cc/SR6fFJ67/power-enhancer.webp"
            alt="Blog Example"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-bold text-sky-700 mb-2">
              5 Essential Health Tips for Everyday Life
            </h2>
            <p className="text-green-700 mb-3">
              Discover simple lifestyle changes you can make today to improve 
              your overall health and wellness.
            </p>
            <a
              href="#"
              className="text-sky-600 font-semibold hover:underline"
            >
              Read More →
            </a>
          </div>
        </div>
        
       
      </div>
    </div>
  );
}

export default Blogs;

function Testimonials() {
  const testimonials = [
    {
      text: "The staff at SAMED Pharmaceutical were so helpful when I needed urgent medication. Highly recommend!",
      name: "Mercy A.",
      location: "Nairobi",
    },
    {
      text: "Quick delivery and great customer service.",
      name: "James M.",
      location: "Thika",
    },
    {
      text: "They had exactly what I needed, and the process was smooth from order to doorstep. Thank you!",
      name: "Diana K.",
      location: "Mombasa",
    },
    {
      text: "Professional pharmacists who took the time to explain my prescription in detail.",
      name: "Peter O.",
      location: "Kisumu",
    },
  ];

  return (
    <div className="max-w-6xl m-auto p-5">
      
      <div className="text-center font-bold">Testimonials</div>
      <h2 className="text-3xl font-bold text-sky-700 text-center mb-6">
        What Our Customers Say
      </h2>

      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="border border-sky-700 rounded-xl p-5 shadow-sm hover:shadow-md transition-all"
          >
            <div className="text-yellow-500 mb-2">⭐⭐⭐⭐⭐</div>
            <p className="text-gray-700 italic mb-3">“{t.text}”</p>
            <p className="font-semibold text-green-700">
              — {t.name}, {t.location}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;

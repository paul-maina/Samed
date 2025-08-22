function Services() {
  const services = [
    { name: "Prescription Dispensing", link: "/" },
    { name: "Medical Consultations", link: "/" },
    { name: "STI/UTI Screenings", link: "/" },
    { name: "Lab Services", link: "/" },
    { name: "Home Delivery", link: "/" },
  ];

  return (
    <div className="max-w-6xl m-auto p-5">

      <div className="text-center font-bold">Our Services</div>
      <div className="text-center max-w-3xl m-auto">
        <h1 className="font-bold text-3xl mb-3 text-sky-700">What We Offer</h1>
        <p className="text-green-700">
          Samed Pharmaceuticals is dedicated to providing professional,
          accessible, and compassionate pharmacy services to support your health
          and well-being.
        </p>
      </div>

     
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-6 max-w-3xl m-auto">
        {services.map((service, index) => (
          <a
            key={index}
            href={service.link}
            className="cursor-pointer font-medium text-sky-700 border-2 border-sky-700 p-3 rounded-md text-center transition-all hover:bg-sky-700 hover:text-white"
          >
            {service.name}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Services;

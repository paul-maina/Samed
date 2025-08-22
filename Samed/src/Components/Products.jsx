function Products() {
  return (
    <div className="max-w-6xl mx-auto p-5">
      
      <div className="text-center mb-10">
        <h1 className="font-bold text-3xl mb-3 text-blue-900">
          Trusted Health & Wellness Essentials
        </h1>
        <p className="text-green-700 max-w-3xl mx-auto">
          Whether you need fast-acting pain relief or daily supplements to boost your health,
          you'll find what you need right here—conveniently categorized for your ease.
        </p>
      </div>

     
      <div>
        <h2 className="text-center text-2xl font-bold text-blue-900 mb-6">
          Product Categories
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
         
          <div className="bg-teal-200 p-6 rounded-2xl hover:shadow-lg transition">
            <h3 className="font-bold text-xl text-center mb-2">Pain Relief</h3>
            <p className="text-green-700 text-center">
              For fast, effective relief from headaches, muscle aches, and joint pain.
              <span className="block mt-2 text-gray-800">
                Examples: Panadol, Ibuprofen, Diclofenac Gel
              </span>
            </p>
          </div>

          <div className="bg-teal-200 p-6 rounded-2xl hover:shadow-lg transition">
            <h3 className="font-bold text-xl text-center mb-2">Cold & Flu</h3>
            <p className="text-green-700 text-center">
              Relieve congestion, cough, and fever with pharmacist-approved remedies.
              <span className="block mt-2 text-gray-800">
                Examples: FluPlus, Actifed, Strepsils, Vitamin C
              </span>
            </p>
          </div>

          <div className="bg-teal-200 p-6 rounded-2xl hover:shadow-lg transition">
            <h3 className="font-bold text-xl text-center mb-2">Chronic Medication</h3>
            <p className="text-green-700 text-center">
              Maintenance medicines for hypertension, diabetes, and asthma.
              <span className="block mt-2 text-gray-800">
                Examples: Metformin, Losartan, Salbutamol Inhalers
              </span>
            </p>
          </div>

          <div className="bg-teal-200 p-6 rounded-2xl hover:shadow-lg transition">
            <h3 className="font-bold text-xl text-center mb-2">Skin Care</h3>
            <p className="text-green-700 text-center">
              Effective solutions for all skin types including creams, cleansers & moisturizers.
              <span className="block mt-2 text-gray-800">
                Examples: Nivea, Cetaphil, Hydrocortisone Cream
              </span>
            </p>
          </div>

          <div className="bg-teal-200 p-6 rounded-2xl hover:shadow-lg transition">
            <h3 className="font-bold text-xl text-center mb-2">Sexual Health</h3>
            <p className="text-green-700 text-center">
              Discreet & trusted products for reproductive and intimate wellness.
              <span className="block mt-2 text-gray-800">
                Examples: Condoms, Emergency Contraceptives, Lubricants
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;

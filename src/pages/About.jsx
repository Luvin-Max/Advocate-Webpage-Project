const About = () => {
  const specializations = [
    {
      name: "Civil Law",
      description: "Civil disputes, contract issues, and property matters",
    },
    { name: "Criminal Law", description: "Criminal defense and prosecution" },
    {
      name: "Divorce & Family Law",
      description: "Divorce, child custody, family disputes",
    },
    {
      name: "Property Disputes",
      description: "Property registration and litigation",
    },
  ];
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-[#1a237e]">
          About Me
        </h1>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-4">Education</h2>
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <p className="text-lg font-semibold">
                M.A., B.L. (Bachelor of Laws)
              </p>
              <p className="text-gray-600">University of Madras</p>
            </div>

            <h2 className="text-2xl font-bold mb-4">Experience</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-4xl font-bold ">10+</p>
              <p className="text-gray-700">Years of Legal Practice</p>
              <p className="mt-4 text-gray-600">
                Practicing at Vallioor Court and handling cases across
                Tirunelveli district
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Specializations</h2>
            <div className="space-y-4">
              {specializations.map((spec, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg">{spec.name}</h3>
                  <p className="text-gray-600">{spec.description}</p>
                </div>
              ))}
            </div>

            {/* <h2 className="text-2xl font-bold mt-8 mb-4">Certifications</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Certified in Civil Law</li>
                  <li>Certified in Family Law</li>
                  <li>Mediation and Arbitration Certified</li>
                  <li>Certified in Property Law</li>
              </ul>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

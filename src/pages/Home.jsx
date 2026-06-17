import { Gavel, Users, BookOpen, Award } from "lucide-react";

const Home = () => {
  const practiceAreas = [
    {
      title: "Civil Law",
      description: "Skilled handling of civil disputes and litigation",
    },
    { title: "Criminal Law", description: "Strong defense in criminal cases" },
    {
      title: "Family Law",
      description: "Compassionate family matter resolution",
    },
    {
      title: "Property Law",
      description: "Property disputes and registration",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#1a237e] to-[#283593] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-4">J.Paul Stephen Raja</h1>
            <p className="text-2xl text-yellow-400 mb-6">
              M.A., B.L. | Advocate
            </p>
            <p className="text-xl mb-4">
              Practicing Advocate in Civil, Criminal and Family Law
            </p>
            <p className="text-gray-200 mb-8 text-lg">
              With years of experience in civil, criminal, and family law, I
              provide dedicated legal representation and practical advice to
              protect your rights and interests.
            </p>
            <button className="bg-yellow-400 text-[#1a237e] px-8 py-4 rounded-lg text-lg font-bold hover:bg-yellow-300 transition transform hover:scale-105">
              Book Free Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Practice Areas Preview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#1a237e]">
            Practice Areas
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {practiceAreas.map((area, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition"
              >
                <Gavel className="h-12 w-12 text-yellow-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{area.title}</h3>
                <p className="text-gray-600">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      {/* <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#1a237e]">
            Why Choose Me
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Award className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                15+ Years Experience
              </h3>
              <p className="text-gray-600">
                Extensive experience in various legal domains
              </p>
            </div>
            <div className="text-center">
              <Users className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Personal Attention</h3>
              <p className="text-gray-600">
                Each case receives dedicated focus
              </p>
            </div>
            <div className="text-center">
              <BookOpen className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Guidance</h3>
              <p className="text-gray-600">
                Clear legal advice every step of the way
              </p>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Home;

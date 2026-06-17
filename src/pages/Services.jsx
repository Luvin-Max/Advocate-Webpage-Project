import { Gavel } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Civil Case Filing",
      description:
        "Complete assistance in filing civil cases with proper documentation",
      details: "Civil suits, contract disputes, property matters",
    },
    {
      title: "Criminal Defense",
      description: "Strong legal defense for criminal cases",
      details: "Bail applications, trial representation, appeals",
    },
    {
      title: "Divorce Consultation",
      description: "Experienced guidance through divorce proceedings",
      details: "Mutual consent, contested divorce, alimony",
    },
    {
      title: "Property Registration Support",
      description: "End-to-end property registration assistance",
      details: "Document verification, registration, mutation",
    },
    {
      title: "Legal Notice Drafting",
      description: "Professional legal notice preparation",
      details: "Demand notices, reply notices, legal correspondence",
    },
    {
      title: "Court Representation",
      description: "Experienced representation in courts",
      details: "Vallioor Court and Tirunelveli district courts",
    },
  ];

  const faqs = [
    {
      question: "What are your consultation charges?",
      answer:
        "Initial consultation is free. Please contact for detailed fee structure.",
    },
    {
      question: "Which courts do you practice in?",
      answer:
        "I practice at Vallioor Court and various courts in Tirunelveli district.",
    },
    {
      question: "How do I book an appointment?",
      answer:
        "You can call or use the contact form to schedule an appointment.",
    },
  ];

  const testimonials = [
    {
      text: "Mr. Stephen handled my property case with great professionalism. Very satisfied with the outcome.",
      name: "Kumar R.",
    },
    {
      text: "Professional and dedicated lawyer. Highly recommended for family matters.",
      name: "Priya S.",
    },
    {
      text: "Excellent legal advice and support throughout my case. Thank you!",
      name: "Muthu P.",
    },
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-[#1a237e]">
          Legal Services
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-yellow-100 p-3 rounded-lg">
                  <Gavel className="h-8 w-8 text-yellow-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <p className="text-sm text-yellow-600 font-semibold">
                    {service.details}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        {/* <section className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-[#1a237e]">
            Client Testimonials
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow">
                <p className="text-gray-600 italic">"{testimonial.text}"</p>
                <p className="mt-4 font-semibold">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </section> */}

        {/* FAQ Section */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-[#1a237e]">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;

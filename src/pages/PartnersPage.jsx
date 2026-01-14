import { ArrowRight } from "lucide-react";

const partners = [
  {
    name: "Google",
    category: "Cloud & AI",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    description: "Cloud infrastructure, AI services, and digital innovation platform."
  },
  {
    name: "Meta",
    category: "Marketing & Social",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",
    description: "Social media marketing and digital advertising solutions."
  },
  {
    name: "AWS",
    category: "Cloud Infrastructure",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
    description: "Scalable cloud hosting, DevOps and enterprise infrastructure."
  },
  {
    name: "Shopify",
    category: "E-commerce",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg",
    description: "Online store development and commerce optimization."
  },
  {
    name: "Adobe",
    category: "Design & Marketing",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Adobe_Corporate_logo.svg",
    description: "Creative tools and digital marketing experience platforms."
  },
  {
    name: "Figma",
    category: "UI/UX Design",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
    description: "Collaborative interface design and prototyping platform."
  },
  {
    name: "Salesforce",
    category: "CRM",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg",
    description: "Customer relationship management and automation platform."
  },
  {
    name: "Zoho",
    category: "Business Tools",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Zoho_Logo_2022.svg",
    description: "ERP, CRM, finance, and productivity business solutions."
  }
];

const PartnersPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* HERO */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-24 text-center">
        <h1 className="text-5xl font-bold mb-4">Our Technology Partners</h1>
        <p className="text-lg text-blue-100 max-w-2xl mx-auto">
          We collaborate with world-class platforms to deliver secure, scalable and innovative solutions.
        </p>
      </section>

      {/* PARTNERS GRID */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="h-16 flex items-center justify-center mb-6">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-10 object-contain"
                />
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {partner.name}
              </h3>

              <span className="text-sm text-blue-600 font-medium">
                {partner.category}
              </span>

              <p className="text-gray-600 text-sm mt-3">
                {partner.description}
              </p>

              <div className="mt-5 flex items-center text-blue-600 font-medium opacity-0 group-hover:opacity-100 transition">
                Learn more <ArrowRight className="ml-2 w-4 h-4" />
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Want to become our partner?
        </h2>
        <p className="text-gray-600 mb-8">
          Join our global partner ecosystem and grow together.
        </p>

        <a
          href="/contact"
          className="inline-block bg-blue-600 text-white px-10 py-4 rounded-full font-semibold hover:bg-blue-700 transition"
        >
          Contact Us
        </a>
      </section>

    </div>
  );
};

export default PartnersPage;

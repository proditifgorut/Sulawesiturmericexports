import React from 'react';
import { Ship, BadgeCheck, FileText, MapPin } from 'lucide-react';

const Trust: React.FC = () => {
  const credentials = [
    {
      icon: <MapPin className="w-12 h-12 text-primary" />,
      title: "Exclusive Sulawesi Origin",
      text: "Our turmeric is cultivated in the unique, fertile lands of Sulawesi, known for producing high-potency spices."
    },
    {
      icon: <Ship className="w-12 h-12 text-primary" />,
      title: "Integrated Logistics",
      text: "Seamless sea/air freight handling (FOB/CIF) to your destination port."
    },
    {
      icon: <BadgeCheck className="w-12 h-12 text-primary" />,
      title: "International Certifications",
      text: "HACCP, ISO 22000, and EU/USDA Organic documents available upon request."
    },
    {
      icon: <FileText className="w-12 h-12 text-primary" />,
      title: "Guaranteed Transparency",
      text: "Third-party lab reports on Curcumin levels provided for every shipment."
    }
  ];

  return (
    <section id="trust" className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-secondary mb-4">Global Standards, Local Quality.</h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-600 mb-12">
          We are more than just suppliers; we are your strategic partners who understand the nuances of import standards.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {credentials.map((item, index) => (
            <div key={index} className="p-8 border border-gray-200 rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col items-center">
              <div className="flex-shrink-0 flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-dark mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trust;

import React from 'react';

interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  cta: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, title, description, cta }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col transform hover:-translate-y-2 transition-transform duration-300">
    <img src={image} alt={title} className="w-full h-56 object-cover" />
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-2xl font-bold text-secondary mb-2">{title}</h3>
      <p className="text-gray-600 mb-4 flex-grow">{description}</p>
      <a href="#contact" className="mt-auto inline-block bg-secondary text-white font-semibold py-2 px-6 rounded-lg hover:bg-dark transition-colors duration-300 text-center">
        {cta}
      </a>
    </div>
  </div>
);

const Products: React.FC = () => {
  const productData = [
    {
      image: "https://images.unsplash.com/photo-1598555762612-329b35346313?q=80&w=1974&auto=format&fit=crop",
      title: "Highest Value: Turmeric Powder",
      description: "A ready-to-use product formulated for the health and retail industries in Europe & America. 100% purity guaranteed, available for your private label. Ideal for supplements, cosmetics, and functional foods.",
      cta: "View Powder Specs & Organic Certification"
    },
    {
      image: "https://images.unsplash.com/photo-1607013251379-e6eecfffe234?q=80&w=1974&auto=format&fit=crop",
      title: "Industrial Raw Material: Dried Turmeric",
      description: "The most efficient form for export. Low moisture content ensures durability, satisfying your extraction and pharmaceutical industry needs. Suitable for bulk shipments to Asia and the Middle East.",
      cta: "Order Your Dried Turmeric Volume"
    },
    {
      image: "https://images.unsplash.com/photo-1600271886707-95354e2493e4?q=80&w=1965&auto=format&fit=crop",
      title: "Maximum Freshness: Fresh Turmeric Rhizome",
      description: "Selected fresh turmeric with natural aroma and water content, perfect for local and regional functional beverage industries. We provide rapid handling and packaging to maintain freshness.",
      cta: "Request Fresh Turmeric Sample"
    }
  ];

  return (
    <section id="products" className="py-20 bg-light">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-secondary mb-12">Our Product Categories</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {productData.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;

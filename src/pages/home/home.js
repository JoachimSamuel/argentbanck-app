import React from 'react';
import Hero from '../../components/Hero'
import FeatureItem from '../../components/FeatureItem'; 
import featuresData from '../../data/featureData.json'; 
const Home = () => {
  console.log(featuresData);
  
  return (
    <main>
      <Hero />
      <section className="features">
        <h2 className="sr-only">Features</h2>
        {featuresData.map((feature, index) => (
          <FeatureItem
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </section>
    </main>
  );
};

export default Home;

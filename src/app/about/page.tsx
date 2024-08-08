'use client'; // Add this line to mark this as a Client Component

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface Name {
  first: string;
  last: string;
}

interface Picture {
  large: string;
}

interface Founder {
  name: Name;
  picture: Picture;
}

const fetchRandomUser = async (): Promise<Founder> => {
  const response = await fetch('https://randomuser.me/api/');
  const data = await response.json();
  return data.results[0];
};

const AboutPage = () => {
  const [founder, setFounder] = useState<Founder | null>(null);

  useEffect(() => {
    const getUser = async () => {
      const user = await fetchRandomUser();
      setFounder(user);
    };

    getUser();
  }, []);

  if (!founder) return <p>Loading...</p>;

  return (
    <div className="min-h-screen bg-green-900 text-gray-100">
      <div className="container mx-auto px-4 py-12">
        {/* Company History */}
        <section className="company-history mb-12">
          <h1 className="text-4xl font-bold mb-6 text-green-400 border-b-4 border-green-400 pb-2">Company History</h1>
          <p className="text-lg mb-6 leading-relaxed">
            AMERTA BOTANICAL WEST BORNEO, founded in 2017, is a leading producer of kratom powder with GMP standards. Our journey began with a vision to excel in the kratom industry by providing high-quality and sustainably sourced products.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-green-600">
              <h2 className="text-xl font-semibold mb-2 text-green-300">Founding</h2>
              <p className="text-lg">
                The company was founded in 2017 by a team of dedicated professionals who saw the potential in kratom as a sustainable and beneficial botanical product. Their expertise in botany, business, and manufacturing laid the foundation for the company&apos;s growth.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-green-600">
              <h2 className="text-xl font-semibold mb-2 text-green-300">Milestones</h2>
              <ul className="text-lg list-disc list-inside">
                <li><strong className="text-green-400">Initial Launch (2017):</strong> The company launched its first kratom powder product, focusing on quality and purity.</li>
                <li><strong className="text-green-400">Expansion of Product Line (2018):</strong> Expanded the product line to include various kratom strains and formulations.</li>
                <li><strong className="text-green-400">Certifications and Quality Assurance (2019):</strong> Achieved GMP certification, bolstering the company&rsquo;s reputation.</li>
                <li><strong className="text-green-400">Technological Advancements (2020):</strong> Invested in state-of-the-art processing technology.</li>
                <li><strong className="text-green-400">Market Expansion (2021):</strong> Entered new markets and established distribution networks.</li>
                <li><strong className="text-green-400">Sustainability Initiatives (2022):</strong> Launched sustainability programs focusing on eco-friendly practices.</li>
                <li><strong className="text-green-400">Awards and Recognition (2023):</strong> Received industry awards for excellence in product quality and business practices.</li>
                <li><strong className="text-green-400">Recent Developments (2024):</strong> Introduced innovative products and services.</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-green-600">
              <h2 className="text-xl font-semibold mb-2 text-green-300">Vision &amp; Mission</h2>
              <p className="text-lg mb-4">
                <span className="font-semibold text-green-300">Vision:</span>
                <br />
                To be the global leader in kratom powder processing, recognized for exceptional quality, innovation, and ethical practices.
              </p>
              <p className="text-lg">
                <span className="font-semibold text-green-300">Mission:</span>
                <br />
                To provide high-quality, sustainably sourced kratom products that enhance the well-being of our customers while supporting responsible and eco-friendly practices.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="team mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-green-400 border-b-4 border-green-400 pb-2">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member */}
            <div className="team-member bg-gray-800 shadow-lg rounded-lg p-6 hover:bg-gray-700 transition-colors duration-300 border border-green-600">
              <div className="flex items-start mb-4">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-green-600">
                  <Image src={founder.picture.large} alt={`${founder.name.first} ${founder.name.last}`} width={128} height={128} style={{ objectFit: 'cover' }} />
                </div>
                <div className="ml-6 flex-1">
                  <h3 className="text-xl font-semibold mb-2 text-green-300">{`${founder.name.first} ${founder.name.last}`} &ndash; Founder &amp; CEO</h3>
                  <p className="text-lg mb-4">
                    <span className="font-semibold text-green-300">Role:</span> As the Founder and CEO, {founder.name.first} leads the company&apos;s strategic vision, oversees all major business decisions, and drives growth and innovation.
                    <br />
                    <span className="font-semibold text-green-300">Experience:</span> Over [X] years of experience in the botanical and herbal product industry. Known for [specific achievements].
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Culture Section */}
        <section className="culture">
          <h2 className="text-3xl font-semibold mb-6 text-green-400 border-b-4 border-green-400 pb-2">Our Culture</h2>
          <p className="text-lg mb-6 leading-relaxed">
            At AMERTA BOTANICAL WEST BORNEO, our culture is built on respect, collaboration, and innovation. We foster a dynamic and inclusive environment where every team member&rsquo;s voice is valued.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-green-600">
              <h3 className="text-xl font-semibold mb-4 text-green-300">Company Culture</h3>
              <ul className="text-lg list-disc list-inside">
                <li><span className="text-green-200">Team Collaboration:</span> We believe in teamwork and open communication.</li>
                <li><span className="text-green-200">Innovation and Creativity:</span> Embracing new ideas to enhance products and processes.</li>
                <li><span className="text-green-200">Sustainability:</span> Committed to eco-friendly practices and social responsibility.</li>
                <li><span className="text-green-200">Professional Development:</span> Providing opportunities for growth and learning.</li>
                <li><span className="text-green-200">Customer Focus:</span> Prioritizing customer satisfaction and quality.</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-green-600">
              <h3 className="text-xl font-semibold mb-4 text-green-300">Core Values</h3>
              <ul className="text-lg list-disc list-inside">
                <li><span className="text-green-200">Integrity:</span> Upholding honesty and ethical standards.</li>
                <li><span className="text-green-200">Excellence:</span> Striving for the highest quality in every aspect.</li>
                <li><span className="text-green-200">Respect:</span> Valuing and respecting individuals and the environment.</li>
                <li><span className="text-green-200">Innovation:</span> Continuously improving and innovating.</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;

"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface TeamMember {
  name: {
    first: string;
    last: string;
  };
  email: string;
  picture: {
    large: string;
  };
}

const TeamsPage = () => {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=10')
      .then((response) => response.json())
      .then((data) => setTeamMembers(data.results));
  }, []);

  return (
    <div className="min-h-screen bg-green-900 text-gray-200">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-green-400 border-b-4 border-green-400 pb-2">Meet Our Team</h1>
        <div className="team-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member bg-gray-800 p-6 rounded-lg shadow-lg border border-green-600 transition-transform transform hover:scale-105 hover:shadow-2xl">
              <div className="flex items-center mb-4">
                <Image
                  src={member.picture.large}
                  alt={`${member.name.first} ${member.name.last}`}
                  width={120}
                  height={120}
                  className="rounded-full border-4 border-green-300"
                />
                <div className="ml-6">
                  <h2 className="text-xl font-semibold mb-2 text-green-300">{`${member.name.first} ${member.name.last}`}</h2>
                  <p className="text-lg text-green-200">{member.email}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamsPage;

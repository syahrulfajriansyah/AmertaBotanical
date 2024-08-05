// src/components/TeamMemberCard/TeamMemberCard.tsx
import React from 'react';

interface TeamMember {
  name: string;
  title: string;
  image: string;
  bio: string;
}

const TeamMemberCard: React.FC<{ member: TeamMember }> = ({ member }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img
        src={member.image}
        alt={member.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
        <p className="text-gray-500 mb-4">{member.title}</p>
        <p className="text-gray-700">{member.bio}</p>
      </div>
    </div>
  );
};

export default TeamMemberCard;

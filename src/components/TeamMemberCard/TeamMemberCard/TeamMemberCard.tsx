import Image from 'next/image';

interface TeamMemberCardProps {
  member: {
    image: string;
    name: string;
    role: string;
  };
}

const TeamMemberCard = ({ member }: TeamMemberCardProps) => {
  return (
    <div className="team-member bg-gray-800 shadow-lg rounded-lg p-6 hover:bg-gray-700 transition-colors duration-300 border border-green-600">
      <div className="flex items-start mb-4">
        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-green-600">
          <Image src={member.image} alt={member.name} width={128} height={128} style={{ objectFit: 'cover' }} />
        </div>
        <div className="ml-6 flex-1">
          <h3 className="text-xl font-semibold mb-2 text-green-300">{member.name} &ndash; {member.role}</h3>
          <p className="text-lg mb-4">
            <span className="font-semibold text-green-300">Role:</span> {member.role}
            <br />
            <span className="font-semibold text-green-300">Experience:</span> [Describe experience and achievements]
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;

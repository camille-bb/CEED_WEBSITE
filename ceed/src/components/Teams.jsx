import React from 'react';
import MemberSpotlight from'./MemberSpotlight'

// Example slideshow images
import slide1 from '../images/slide1.JPG';
import slide2 from "../images/furniture1.jpg";
import slide3 from '../images/slide3.jpg';
import slide4 from '../images/slide4.png';


const Members = () => {

  const [activeMember, setActiveMember] = React.useState(null);


  const memberlist = [
    { name: 'Mechanical Team', 
      role: '', 
      photo: '/Logos/mechlogo.png', 
      description: 'We design the mechanical parts of the projects!e design the mechanical parts of the projects!e dese design the mechanical parts of the projects!e design the mechanical parts of the projects!e design the mechanical parts of the projects!e design the mechanical parts of the projects!',
      slidephotos: [slide1, slide2, slide3, slide4]},

    { name: 'Electrical Team', 
      role: '', 
      photo: '/Logos/electricallogo.png' , 
      description: "",
      slidesphotos: []},

    { name: 'Software Team', 
      role: '', 
      photo: '/Logos/softwarelogo.png' , 
      description: "",
      slidesphotos: []}
  ];

  return (
    <div className="relative">
      <Grid members={memberlist} setActiveMember={setActiveMember} />

      {/*If there is an active member (onClick) then show the spotlight*/}
      {activeMember && (
          <MemberSpotlight member={activeMember} setActiveMember={setActiveMember} />
      )}
    </div>
  );
};

const Grid = ({members, setActiveMember}) =>{
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-5xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Meet the Teams.
          </h2>
        </div>

        <ul className="mt-12 grid gap-x-20 gap-y-12 sm:grid-cols-3 lg:grid-cols-3">
          {members.map((member, index) => (
            <div className="cursor-pointer hover:transition-transform" onClick={() => setActiveMember(member)}>
              <li key={index} className="flex-wrap items-center gap-x-2">
                <img className="mb-2 w-25 h-25 rounded-full object-cover" src={member.photo} alt={member.name} />
                <div>
                  <h3 className="text-xl mb-2 text-center text-base font-semibold tracking-tight text-gray-900">{member.name}</h3>
                  <p className="text-center text-sm font-semibold text-indigo-600">{member.role}</p>
                </div>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default Members;

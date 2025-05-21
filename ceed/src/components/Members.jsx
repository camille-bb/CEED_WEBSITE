import React from 'react';
import MemberSpotlight from'./MemberSpotlight'


const Members = () => {

  const [activeMember, setActiveMember] = React.useState(null);


  const memberlist = [
    { name: 'Benjamin Okoronkwo', 
      role: 'Mechanical Engineer Team Lead', 
      photo: '/Member_Photos/Benjamin/Benjamin_headshot.jpeg', 
      description: 'Hi I am Benjamin.'},

    { name: 'Name1', 
      role: 'Role', 
      photo: '/Member_Photos/Empty2.png' , 
      description: "Description: Major+Year, Favorite class at Cornell so far, Least favorite class, Favorite dining hall, and one thing you love doing!"},

    { name: 'Steven Chen', 
      role: 'Role', 
      photo: '/Member_Photos/Empty2.png' , 
      description: ""},
      
    { name: 'Name3', role: 'Role', photo: '/Member_Photos/Empty2.png' , description: ""},
    { name: 'Name4', role: 'Role', photo: '/Member_Photos/Empty2.png' , description: ""},
    { name: 'Name5', role: 'Role', photo: '/Member_Photos/Empty2.png' , description: ""},
    { name: 'Name6', role: 'Role', photo: '/Member_Photos/Empty2.png' , description: ""},
    { name: 'Name7', role: 'Role', photo: '/Member_Photos/Empty2.png' , description: ""},
    { name: 'Name8', role: 'Role', photo: '/Member_Photos/Empty2.png' , description: ""},
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
            Meet the Team.
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

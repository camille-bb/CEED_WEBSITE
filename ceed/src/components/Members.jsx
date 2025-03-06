import React from 'react';

const Members = () => {
  const members = [
    { name: 'Benjamin Okoronkwo', role: 'President', photo: '/Member_Photos/Benjamin_headshot.jpeg' },
    { name: 'Blank Name', role: 'Role', photo: '/Member_Photos/Empty2.png' },
    { name: 'Blank Name', role: 'Role', photo: '/Member_Photos/Empty2.png' },
    { name: 'Blank Name', role: 'Role', photo: '/Member_Photos/Empty2.png' },
    { name: 'Blank Name', role: 'Role', photo: '/Member_Photos/Empty2.png' },
    { name: 'Blank Name', role: 'Role', photo: '/Member_Photos/Empty2.png' },
    { name: 'Blank Name', role: 'Role', photo: '/Member_Photos/Empty2.png' },
    { name: 'Blank Name', role: 'Role', photo: '/Member_Photos/Empty2.png' },
  ];

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            Meet the Team.
          </h2>
        </div>

        <ul className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-4 lg:grid-cols-4">
          {members.map((member, index) => (
            <li key={index} className="flex-wrap items-center gap-x-6">
              <img className="size-14 rounded-full" src={member.photo} alt={member.name} />
              <div>
                <h3 className="text-center text-base font-semibold tracking-tight text-gray-900">{member.name}</h3>
                <p className="text-center text-sm font-semibold text-indigo-600">{member.role}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Members;

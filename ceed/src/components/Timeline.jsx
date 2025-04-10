import React from 'react';

function Timeline() {
  const events = [
    { year: "2020", title: "Year 1", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua" },
    { year: "2021", title: "Year 2", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua" },
    { year: "2022", title: "Year 3", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua" },
    { year: "2023", title: "Year 4", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua" },
    { year: "2024", title: "Year 5", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua" },
    { year: "2025", title: "Year 6", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua" }
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">

      <div className="relative flex flex-col items-center">
        {/* Vertical Line */}
        <div className="absolute w-1 bg-black  transform" style={{ height: `${events.length * 130}px` }}></div>


        {/* Events */}
        <div className="flex flex-col p-2 mx-auto md:grid md:grid-cols-9">
          {events.map((event, index) => (
            <div key={index} className={`flex ${index % 2 === 0 ? 'flex-row-reverse' : ''} md:contents`}>

                {/* Dot for this event */}
              <div
                className="absolute w-5 h-5 bg-black rounded-full"
                style={{
                  top: `${115 * (index + 1) }px`, 
                  left: '50%', 
                  transform: 'translateX(-47%) translateY(-200%)'
                }}
              />
              {/* Event Box */}
              <div
                className={`relative p-4 text-gray-800 rounded-xl ${index % 2 === 0 ? 'col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto text-right' : 'col-start-5 col-end-10 mr-auto md:ml-24 text-left'} 
                ${index % 2 !== 0 ? 'transform translate-y-28' : ''} mt-12`}>
                <h3 className="text-lg font-semibold lg:text-xl text-red-800">{event.title}</h3>
                <span className="block text-sm font-bold text-gray-500">{event.year}</span>
                <p className="mt-2 leading-6 text-black">{event.description}</p>
                </div>



              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Timeline;

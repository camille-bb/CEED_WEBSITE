import React from 'react'

function Recruitment() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="text-center mb-12">
        {/* Header */}
        <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
          Join Our Team
        </h2>
        {/* Description Area */}
        <p className="mt-4 text-lg leading-7 text-gray-600 max-w-2xl mx-auto">
          We’re always looking for passionate, creative, and driven people. 
          Fill out the form below to apply and we’ll get back to you soon!
        </p>
      </div>

      <div className="flex items-center justify-center">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSeRQb7CfBphnQMnwkOx6ABr_dFb-dKO_AbVh1VD0QTzkh0pLg/viewform?embedded=true"
          width="640"
          height="422"
          className="rounded-xl shadow-lg border border-gray-200"
        ></iframe>
      </div>
    </div>
  )
}

export default Recruitment

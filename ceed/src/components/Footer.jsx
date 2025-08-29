import React from 'react';

function Footer() {
  return (
    <footer>
      <hr/>
      <div className="bg-white m-4">
        <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8 p-4 sm:flex sm:items-center sm:justify-between">
                {/* CEED Logo */}

                <a href="/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                    <img src="/Logos/main.png" class="h-20" alt="" />
                    <h1 class="font-sans font-bold self-center text-7xl font-semibold whitespace-nowrap text-red-800">CEED</h1>
                </a>

                {/* Links Grid */}
                <div className="text-center grid grid-cols-2 gap-8 sm:gap-6">
                  <div>
                    <h2 class="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow Us</h2>
                    <ul class="flex flex-col space-y-3 items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                      <li>
                          <a href="https://www.instagram.com/cornelleed/" class="hover:underline me-4 md:me-6" target="_blank" rel= "noopener noreferrer">Instagram  </a>
                      </li>
                      <li>
                          <a href="https://www.youtube.com/@CornellEED/" class="hover:underline me-4 md:me-6" target="_blank" rel= "noopener noreferrer">Youtube  </a>
                      </li>
                      <li>
                          <a href="https://cornell.campusgroups.com/ceedc/home/" class="hover:underline me-4 md:me-6" target="_blank" rel= "noopener noreferrer">Campus Groups  </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h2 class="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">Quick Links</h2>
                    <ul class="flex flex-col space-y-3 items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <a href="/teams" class="hover:underline me-4 md:me-6" rel= "noopener noreferrer">Teams  </a>
                        </li>
                        <li>
                            <a href="/projects" class="hover:underline me-4 md:me-6" rel= "noopener noreferrer">Projects  </a>
                        </li>
                        <li>
                            <a href="/Recruitment" class="hover:underline me-4 md:me-6" rel= "noopener noreferrer">Recruitment  </a>
                        </li>
                    </ul>
                  </div>
                </div>

            {/*Rights Reserved*/}
            </div>
            <div class="border-gray-200 sm:mx-auto dark:border-gray-700" />
            <div class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 <a href="/" class="hover:underline">CEED™</a>. This organization is registered student organization of Cornell University. All rrights reserved.</div>
        </div>
    </footer>


  );
}

export default Footer;

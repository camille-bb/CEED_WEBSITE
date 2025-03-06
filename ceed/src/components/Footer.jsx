import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="bg-white dark:bg-gray-900 m-4">
      <hr/>
        <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <div class="sm:flex sm:items-center sm:justify-between">
                <a href="/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                    <img src="/Logos/main.png" class="h-8" alt="Flowbite Logo" />
                    <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">CEED</span>
                </a>
                <div className="text-center grid grid-cols-2 gap-8 sm:gap-6">
                  <div>
                    <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow Us</h2>
                    <ul class="flex flex-col items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                      <li class ="mb-4">
                          <a href="https://www.instagram.com/cornelleed/" class="hover:underline me-4 md:me-6" target="_blank" rel= "noopener noreferrer">Instagram  </a>
                      </li>
                      <li>
                          <a href="https://www.youtube.com/@CornellEED/" class="hover:underline me-4 md:me-6" target="_blank" rel= "noopener noreferrer">Youtube  </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Quick Links</h2>
                    <ul class="flex flex-col items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <a href="https://www.instagram.com/cornelleed/" class="hover:underline me-4 md:me-6" target="_blank" rel= "noopener noreferrer">Members  </a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/@CornellEED/" class="hover:underline me-4 md:me-6" target="_blank" rel= "noopener noreferrer">Projects  </a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/@CornellEED/" class="hover:underline me-4 md:me-6" target="_blank" rel= "noopener noreferrer">Recruitment  </a>
                        </li>
                    </ul>
                  </div>
                </div>
            </div>
            <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <div class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 <a href="/" class="hover:underline">CEED™</a>. All Rights Reserved.</div>
        </div>
        </div>
    </footer>


  );
}

export default Footer;

import React from 'react'

export default function Footer() {
  return (
    <div className='bg-gray-800 text-white py-12 '>
        <div class="max-w-7xl mx-auto px-7 sm:px-6 lg:px-8">

    <div class="grid grid-cols-2 md:grid-cols-3 gap-8">
      {/*  Brand Section  */}
      <div class="space-y-4">
        <h3 class="text-2xl font-extrabold">PORTFOLIO</h3>
        <p class="text-gray-400 text-sm">
          FUTURE DEVELOPER
        </p>

      </div>

      {/* <!-- Links Section 1 --> */}
      <div>
        <h4 class="text-lg font-semibold mb-4">Company</h4>
        <ul class="space-y-2 text-gray-400 text-sm">
          <li><a href="#" class="hover:text-white transition-colors">About Me</a></li>
          <li><a href="#" class="hover:text-white transition-colors">Project</a></li>
          {/* <li><a href="#" class="hover:text-white transition-colors">Blog</a></li> */}
          <li><a href="#" class="hover:text-white transition-colors">Contact</a></li>
        </ul>
      </div>

      <div className=''>
        <h4 class="text-lg font-semibold mb-4">Feedback Me</h4>
        <p class="text-gray-400 text-sm mb-4">
         Comment your request
        </p>
        <form class="flex flex-col space-y-2">
          <input 
            type="text"
            placeholder="Enter Your Comment..." 
            class="px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button 
            type="submit" 
            class="bg-blue-600 hover:bg-green-400 text-white px-4 py-2 rounded-md transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </div>

    {/* <!-- Bottom Bar --> */}
    <div class="mt-12 pt-8 border-t border-gray-700 flex flex-col  md:flex-row justify-center items-center text-gray-400 text-sm">
      <p>&copy; Develop Sudo|Crypt</p>
    
    </div>
  </div>
    </div>
  )
}

import React from 'react'

export default function Footer() {
  return (
    <footer id="Footer" className="bg-gray-800 py-12 text-white">
      <div className="mx-auto max-w-7xl px-7 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="space-y-4">
            <h3 className="text-2xl font-extrabold">PORTFOLIO</h3>
            <p className="text-sm text-gray-400">FUTURE DEVELOPER</p>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold">Navigate</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#About" className="transition-colors hover:text-white">
                  About Me
                </a>
              </li>
              <li>
                <a href="#projects" className="transition-colors hover:text-white">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="transition-colors hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold">Feedback Me</h4>
            <p className="mb-4 text-sm text-gray-400">Comment your request</p>
            <form className="flex flex-col space-y-2">
              <input
                type="text"
                placeholder="Enter Your Comment..."
                className="rounded-md bg-gray-700 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="rounded-md bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-green-400"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-center border-t border-gray-700 pt-8 text-sm text-gray-400 md:flex-row">
          <p>&copy; Develop Sudo|Crypt</p>
        </div>
      </div>
    </footer>
  )
}

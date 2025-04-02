import { Link } from "react-router-dom";

import "../App.css";

export default function Landing() {
  return (
    <div className="flex">
      <div className=" top-0 left-0 h-full bg-[#90D5FF] text-white w-64">
        <div>
          <div className="">
            <div class="relative flex flex-col  rounded-xl  text-black  p-4 ">
              <nav class="flex flex-col gap-1 min-w-[240px] p-2 font-sans text-base font-normal text-gray-700">
                <div
                  role="button"
                  tabindex="0"
                  class="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
                >
                  <div class="grid place-items-center mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-5 w-5 text-gray-500 hover:text-blue-600 cursor-pointer"
                    >
                      <path
                        fillRule="evenodd"
                        d="M17.25 2.75a3.75 3.75 0 015.3 5.3L7.28 23.02a.75.75 0 01-.32.2l-5.25 1.5a.75.75 0 01-.95-.95l1.5-5.25a.75.75 0 01.2-.32L17.25 2.75zm3.54 1.77a2.25 2.25 0 00-3.18 0l-1.12 1.12 3.18 3.18 1.12-1.12a2.25 2.25 0 000-3.18zM2.98 21.02l1.02-3.55 8.48-8.48 3.18 3.18-8.48 8.48-3.55 1.02z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  '<Link to="/drug"> Create Drug </Link>
                </div>
                <div
                  role="button"
                  tabindex="0"
                  class="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
                >
                  <div class="grid place-items-center mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-6 w-6 text-gray-500 hover:text-blue-600 cursor-pointer"
                    >
                      <path d="M12 3C7 3 2.73 6.11 1 12c1.73 5.89 6 9 11 9s9.27-3.11 11-9c-1.73-5.89-6-9-11-9zm0 15c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm0-12a5 5 0 100 10 5 5 0 000-10zm0 8a3 3 0 110-6 3 3 0 010 6z" />
                    </svg>
                  </div>{" "}
                  <Link to="/viewdrug"> View Drug </Link>
                </div>
                <div
                  role="button"
                  tabindex="0"
                  class="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
                >
                  <div class="grid place-items-center mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-5 w-5 text-gray-500 hover:text-blue-600 cursor-pointer"
                    >
                      <path
                        fillRule="evenodd"
                        d="M17.25 2.75a3.75 3.75 0 015.3 5.3L7.28 23.02a.75.75 0 01-.32.2l-5.25 1.5a.75.75 0 01-.95-.95l1.5-5.25a.75.75 0 01.2-.32L17.25 2.75zm3.54 1.77a2.25 2.25 0 00-3.18 0l-1.12 1.12 3.18 3.18 1.12-1.12a2.25 2.25 0 000-3.18zM2.98 21.02l1.02-3.55 8.48-8.48 3.18 3.18-8.48 8.48-3.55 1.02z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>{" "}
                  <Link to="/viewdrug"> Create Other Services </Link>
                </div>

                <div
                  role="button"
                  tabindex="0"
                  class="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
                >
                  <div class="grid place-items-center mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-5 w-5 text-gray-500 hover:text-blue-600 cursor-pointer"
                    >
                      <path
                        fillRule="evenodd"
                        d="M17.25 2.75a3.75 3.75 0 015.3 5.3L7.28 23.02a.75.75 0 01-.32.2l-5.25 1.5a.75.75 0 01-.95-.95l1.5-5.25a.75.75 0 01.2-.32L17.25 2.75zm3.54 1.77a2.25 2.25 0 00-3.18 0l-1.12 1.12 3.18 3.18 1.12-1.12a2.25 2.25 0 000-3.18zM2.98 21.02l1.02-3.55 8.48-8.48 3.18 3.18-8.48 8.48-3.55 1.02z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <Link to="/test1"></Link> Create Test
                </div>
                <div
                  role="button"
                  tabindex="0"
                  class="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
                >
                  <div class="grid place-items-center mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-6 w-6 text-gray-500 hover:text-blue-600 cursor-pointer"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 3a9 9 0 11-6.364 15.364.75.75 0 011.06-1.06A7.5 7.5 0 1012 4.5a7.455 7.455 0 00-5.364 2.244l1.942 1.942a.75.75 0 11-1.06 1.06L4.22 6.72a.75.75 0 010-1.06l3.317-3.317a.75.75 0 011.06 1.06L6.658 4.938A8.955 8.955 0 0112 3z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>{" "}
                  <Link to="/update">Update Drug price</Link>
                </div>
                <div
                  role="button"
                  tabindex="0"
                  class="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
                >
                  <div class="grid place-items-center mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-6 w-6 text-gray-500 hover:text-red-700 cursor-pointer"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 7.5V18a3 3 0 003 3h6a3 3 0 003-3V7.5H6zM9.75 10.5a.75.75 0 011.5 0v6a.75.75 0 01-1.5 0v-6zm4.5 0a.75.75 0 011.5 0v6a.75.75 0 01-1.5 0v-6zM9 4.5A1.5 1.5 0 0110.5 3h3A1.5 1.5 0 0115 4.5V6h4.5a.75.75 0 010 1.5H4.5a.75.75 0 010-1.5H9V4.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <Link to="/delete">Delete Drug</Link>
                </div>
                <div
                  role="button"
                  tabindex="0"
                  class="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
                >
                  <div class="grid place-items-center mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-6 w-6 text-gray-500 hover:text-blue-600 cursor-pointer"
                    >
                      <path d="M12 3C7 3 2.73 6.11 1 12c1.73 5.89 6 9 11 9s9.27-3.11 11-9c-1.73-5.89-6-9-11-9zm0 15c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm0-12a5 5 0 100 10 5 5 0 000-10zm0 8a3 3 0 110-6 3 3 0 010 6z" />
                    </svg>
                  </div>
                  <Link to="/viewtran">VIEW HOSPITAL RECIEPT</Link>
                </div>
                <div
                  role="button"
                  tabindex="0"
                  class="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
                >
                  <div class="grid place-items-center mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-6 w-6 text-gray-500 hover:text-blue-600 cursor-pointer"
                    >
                      <path d="M12 3C7 3 2.73 6.11 1 12c1.73 5.89 6 9 11 9s9.27-3.11 11-9c-1.73-5.89-6-9-11-9zm0 15c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm0-12a5 5 0 100 10 5 5 0 000-10zm0 8a3 3 0 110-6 3 3 0 010 6z" />
                    </svg>
                  </div>
                  <Link to="/pro">View Production</Link>
                </div>

                <div
                  role="button"
                  tabindex="0"
                  class="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
                >
                  <div class="grid place-items-center mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      class="h-5 w-5"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <Link to="/culture">Register New Users</Link>
                </div>

                <div
                  role="button"
                  tabindex="0"
                  class="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
                >
                  <div class="grid place-items-center mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-6 w-6 text-gray-500 hover:text-blue-600 cursor-pointer"
                    >
                      <path d="M12 3C7 3 2.73 6.11 1 12c1.73 5.89 6 9 11 9s9.27-3.11 11-9c-1.73-5.89-6-9-11-9zm0 15c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm0-12a5 5 0 100 10 5 5 0 000-10zm0 8a3 3 0 110-6 3 3 0 010 6z" />
                    </svg>
                  </div>{" "}
                  <Link to="/Receipt">Reciept </Link>
                </div>
                <div
                  role="button"
                  tabindex="0"
                  class="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
                >
                  <div class="grid place-items-center mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-6 w-6 text-gray-500 hover:text-blue-600 cursor-pointer"
                    >
                      <path d="M12 3C7 3 2.73 6.11 1 12c1.73 5.89 6 9 11 9s9.27-3.11 11-9c-1.73-5.89-6-9-11-9zm0 15c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm0-12a5 5 0 100 10 5 5 0 000-10zm0 8a3 3 0 110-6 3 3 0 010 6z" />
                    </svg>
                  </div>{" "}
                  <Link to="/pro">Production List </Link>
                </div>

                <div
                  role="button"
                  tabindex="0"
                  class="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
                >
                  <div class="grid place-items-center mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      class="h-5 w-5"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12 2.25a.75.75 0 01.75.75v9a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM6.166 5.106a.75.75 0 010 1.06 8.25 8.25 0 1011.668 0 .75.75 0 111.06-1.06c3.808 3.807 3.808 9.98 0 13.788-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788a.75.75 0 011.06 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <Link to="/logout"> LogOut </Link>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-2 ml-10 mr-10">
        <h1 className="text-xl mt-2 font-bold">WELCOME BACK ADMIN</h1>
        <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-3">
          <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
            <div className="text-sm font-medium text-gray-500 truncate">
              HOSPITAL
            </div>
            <div className="mt-1 text-3xl font-semibold text-gray-900">List</div>
          </div>
          <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
            <div className="text-sm font-medium text-gray-500 truncate">
              Production
            </div>
            <div className="mt-1 text-3xl font-semibold text-gray-900">
              List
            </div>
          </div>
          <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
            <div className="text-sm font-medium text-gray-500 truncate">
              Total Productions Branches
            </div>
            <div className="mt-1 text-3xl font-semibold text-gray-900">6</div>
          </div>
          <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
            <div className="text-sm font-medium text-gray-500 truncate">
              Reciept
            </div>
            <div className="mt-1 text-3xl font-semibold text-gray-900">
              List
            </div>
          </div>
          <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
            <div className="text-sm font-medium text-gray-500 truncate">
              Youghut
            </div>
            <div className="mt-1 text-3xl font-semibold text-gray-900">List</div>
          </div>
          <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
            <div className="text-sm font-medium text-gray-500 truncate">
              Total Bread
            </div>
            <div className="mt-1 text-3xl font-semibold text-gray-900">
              List
            </div>
          </div>
         
      </div>
      <div>
      <div className=" mt-24 p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Production Records</h2>
      <div className="overflow">
        <table className="w-full border-collapse border border-gray-300">
          <thead className="bg-[#90D5FF]">
            <tr className="text-xs md:text-sm">
              <th className="border p-2">Branch</th>
              <th className="border p-2">Date</th>
              <th className="border p-2">Production</th>
              <th className="border p-2">Income Cash</th>
              <th className="border p-2">Income Bank</th>
              <th className="border p-2">Total Income</th>
              <th className="border p-2">Expense</th>
              <th className="border p-2">Balance</th>
            </tr>
          </thead>
          <tbody>

              <tr  className="text-center text-xs md:text-sm">
                <td className="border p-2">Dogarawa</td>
                <td className="border p-2">21-12-2024</td>
                <td className="border p-2">5,000,000</td>
                <td className="border p-2">700,000</td>
                <td className="border p-2">200,498</td>
                <td className="border p-2 font-bold">233,234</td>
                <td className="border p-2 text-red-500">345,543</td>
                <td className="border p-2 text-green-500">234,5678</td>
              </tr>
              <tr  className="text-center text-xs md:text-sm">
                <td className="border p-2">Dogarawa</td>
                <td className="border p-2">21-12-2024</td>
                <td className="border p-2">5,000,000</td>
                <td className="border p-2">700,000</td>
                <td className="border p-2">200,498</td>
                <td className="border p-2 font-bold">233,234</td>
                <td className="border p-2 text-red-500">345,543</td>
                <td className="border p-2 text-green-500">234,5678</td>
              </tr>
              <tr  className="text-center text-xs md:text-sm">
                <td className="border p-2">Dogarawa</td>
                <td className="border p-2">21-12-2024</td>
                <td className="border p-2">5,000,000</td>
                <td className="border p-2">700,000</td>
                <td className="border p-2">200,498</td>
                <td className="border p-2 font-bold">233,234</td>
                <td className="border p-2 text-red-500">345,543</td>
                <td className="border p-2 text-green-500">234,5678</td>
              </tr>
          </tbody>
        </table>
      </div>

          
        </div>
        
      </div>
      </div>
      
      
      


    </div>
  );
}

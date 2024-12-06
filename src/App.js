import React, { useState } from "react";
import Dropdown from "./components/Dropdown";
function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  // Toggle the sidebar
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="w-full md:flex">
        <aside className={`sidebar  bg-white w-64 min-h-screen h-screen overflow-y-auto  md:block shadow fixed md:sticky top-0 pb-2  ${isSidebarOpen ? "open" : ""}`} >
            <nav className="flex flex-col justify-between h-full w-full">
                    <div className="logo  p-5">
                        <img src="assets/images/main-logo.svg"/>
                    </div>
                    <ul className="p-2">
                        <li>
                            <a href="#" className="flex items-center p-3 rounded-xl text-gray-500 hover:bg-gray-100">
                                <i className="mr-2"> <img src="assets/images/dash-ico.svg"/></i>
                                <span >Dashboard</span>
                              </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-3 rounded-xl text-gray-400 hover:bg-gray-100">
                                <i className="mr-2"> <img src="assets/images/agencies-ico.svg"/></i>
                                <span>Agangies</span>
                              </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-3 rounded-xl text-gray-400 hover:bg-gray-100">
                                <i className="mr-2"> <img src="assets/images/division-ico.svg"/></i>
                                <span>Division</span>
                              </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-3 rounded-xl text-gray-400 hover:bg-gray-100">
                                <i className="mr-2"> <img src="assets/images/location-ico.svg"/></i>
                                <span>Location</span>
                              </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-3 rounded-xl text-gray-400 hover:bg-gray-100">
                                <i className="mr-2"> <img src="assets/images/user-ico.svg"/></i>
                                <span>Users</span>
                              </a>
                        </li>
                    </ul>
                     <div className="safe-bx text-center px-3 mt-auto">
                          <div className=" bg-tailoredtxt2 p-4 rounded-xl">
                              <figure className="bg-white rounded-full p-3 w-16 h-16 m-auto mb-3">
                                  <img src="assets/images/safe-ico.svg"/>
                              </figure>
                              <h3 className="text-white font-semibold text-xl">Keep you safe!</h3>
                              <p className="text-black font-medium text-xs mt-2 mb-2">Update your security password, keep your account safe!</p>
                              <h4 className="text-white font-semibold text-lg">Update Privacy</h4>
                          </div>
                      </div>       
            </nav>
        </aside>
        <main className="flex-1 flex-col relative z-20 p-3 md:p-5">
            <header className="flex items-center justify-between">
            
              <div className="flex flex-col flex-wrap mr-auto hidden md:block">
                <h1 className="text-gray-800 font-semibold text-2xl">Dashboard</h1>
                <p className="text-gray-600 text-md">4.45 pm 19 Jan 2022</p>
              </div>
              <div className="flex rounded-md  md:min-w-2xl min-w-80 mr-3 hidden md:flex">
                <input type="text" name="username" id="username" autocomplete="username" className="bg-white block flex-1 rounded-md border-0 py-3 pl-3 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 placeholder:text-gray-400 focus:ring-0 sm:text-sm/6" placeholder="Search"/>
              </div>
              <div className="items-center  space-x-3 flex w-full md:w-auto">
                  <div className="relative">
                    <button className="p-2 bg-white rounded-xl hover:bg-gray-200 focus:outline-none focus:ring">
                          <img src="assets/images/notify-ico.svg"/>
                    </button>
                  </div>
                  <div className="relative admin-pic flex items-center m-auto md:m-0" >
                    <span className="text-gray-950 font-semibold text-md mr-2">Admin</span>
                    <Dropdown/>
                    
                  </div>
              </div>
              <button className="menu-toggle md:hidden text-black" onClick={toggleSidebar}>
                ☰
              </button>
            </header>
            <section className="grid grid-cols-1 gap-5 mt-6 sm:grid-cols-2 lg:grid-cols-4">
                <div className="flex flex-wrap border border-transparent rounded-xl p-4 pb-2 relative bg-white">
                    <figure className="w-8 h-8 mr-3">
                        <img src="assets/images/coin-ico1.png"/>
                    </figure>
                    <div className="absolute right-0 top-0 w-28">
                    <img src="assets/images/growth-img1.png"/>
                    </div>
                    <div className="coin-bx w-full mt-2">
                        <h4 className="text-gray-900 font-medium text-md">From Social</h4>
                        <span className="text-gray-900 font-bold text-lg block">20</span>
                        <small className="text-greencolor font-extrabold text-xs flex items-center">
                          <i className="w-4 mr-2"><img src="assets/images/graph-ico1.png"/></i>
                          7.2% </small>
                    </div>
                </div>
                <div className="flex flex-wrap border border-transparent rounded-xl p-4 pb-2 relative bg-white">
                    <figure className="w-8 h-8 mr-3">
                        <img src="assets/images/coin-ico2.png"/>
                    </figure>
                    <div className="absolute right-0 top-0 w-28">
                    <img src="assets/images/growth-img2.png"/>
                    </div>
                    <div className="coin-bx w-full mt-2">
                        <h4 className="text-gray-900 font-medium text-md">From Strech Zone Website</h4>
                        <span className="text-gray-900 font-bold text-lg">96</span>
                        <small className="text-darkreddcolor font-extrabold text-xs flex items-center">
                          <i className="w-4 mr-2"><img src="assets/images/graph-ico2.png"/></i>
                          7.2% </small>
                    </div>
                </div>
                <div className="flex flex-wrap border border-transparent rounded-xl p-4 pb-2 relative bg-white">
                    <figure className="w-8 h-8 mr-3">
                        <img src="assets/images/coin-ico3.png"/>
                    </figure>
                    <div className="absolute right-0 top-0 w-28">
                    <img src="assets/images/growth-img1.png"/>
                    </div>
                    <div className="coin-bx w-full mt-2">
                        <h4 className="text-gray-900 font-medium text-md">Total Leads</h4>
                        <span className="text-gray-900 font-bold text-lg">187</span>
                        <small className="text-greencolor font-extrabold text-xs flex items-center">
                          <i className="w-4 mr-2"><img src="assets/images/graph-ico1.png"/></i>
                          9.5% </small>
                    </div>
                </div>
                <div className="flex flex-wrap border border-transparent rounded-xl p-4 pb-2 relative bg-white">
                    <figure className="w-8 h-8 mr-3">
                        <img src="assets/images/coin-ico4.png"/>
                    </figure>
                    <div className="absolute right-0 top-0 w-28">
                    <img src="assets/images/growth-img1.png"/>
                    </div>
                    <div className="coin-bx w-full mt-2">
                        <h4 className="text-gray-900 font-medium text-md">Total Agencies</h4>
                        <span className="text-gray-900 font-bold text-lg">50</span>
                        <small className="text-greencolor font-extrabold text-xs flex items-center">
                          <i className="w-4 mr-2"><img src="assets/images/graph-ico1.png"/></i>
                         6.5% </small>
                    </div>
                </div>
            </section>
            <section className="grid grid-cols-1 gap-5 mt-6 sm:grid-cols-4 lg:grid-cols-4">
                <div className="bg-white rounded-xl col-span-3 p-5">
                  <div className="md:flex items-center justify-between">
                      <div className="flex flex-col flex-wrap mb-3">
                          <p className="text-gray-800 font-bold text-2xl">Location Leads List</p>
                          <p className="text-gray-600 text-sm">lorem ipsum team dolor sit amet</p>
                      </div>
                      <div className="rounded-md  md:min-w-2xl md:min-w-80 md:ml-auto md:flex relative">
                        <input type="text" name="username" id="username" autocomplete="username" className="w-full bg-white block flex-1 rounded-md border dark:border-gray-700 py-2 pl-2 ring-inset ring-gray-400 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 placeholder:text-gray-400 focus:ring-0 sm:text-sm/6" placeholder="Search"/>
                        <button className="absolute right-3 top-2 w-6">
                            <img src="assets/images/srch-ico.png"/>
                        </button>
                      </div>
                  </div>
                  <select class="appearance-none w-full py-1 px-2 bg-white" name="whatever" id="frm-whatever">
                      <option value="">Please choose&hellip;</option>
                      <option value="1">Item 1</option>
                      <option value="2">Item 2</option>
                      <option value="3">Item 3</option>
                  </select>
                  <div className="relative overflow-x-auto sm:rounded-lg  border dark:border-gray-700">
                      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                          <tbody>
                              <tr className="hover:text-white text-white bg-tailoredtxt2 hover:bg-tailoredtxt2">
                                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                      <div className="flex items-center">
                                          <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-white border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                      </div>
                                  </th>
                                  <td className="px-6 py-4">
                                      Location Id
                                  </td>
                                  <td className="px-6 py-4 text-center">
                                    Location Name
                                  </td>
                                  <td className="px-6 py-4 text-center">
                                    Total leads
                                  </td>
                                  <td className="px-6 py-4 text-center">
                                    From Social
                                  </td>
                              </tr>
                              <tr className=" hover:text-white hover:bg-tailoredtxt2">
                                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                      <div className="flex items-center">
                                          <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-white border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                      </div>
                                  </th>
                                  <td className="px-6 py-4">
                                      13527
                                  </td>
                                  <td className="px-6 py-4 text-center">
                                      Stretch Zone - Scarsdale, NY
                                  </td>
                                  <td className="px-6 py-4 text-center">
                                      8
                                  </td>
                                  <td className="px-6 py-4 text-center">
                                      8
                                  </td>
                              </tr>
                              <tr className=" hover:text-white hover:bg-tailoredtxt2">
                                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                      <div className="flex items-center">
                                          <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-white border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                      </div>
                                  </th>
                                  <td className="px-6 py-4">
                                      13527
                                  </td>
                                  <td className="px-6 py-4 text-center">
                                      Stretch Zone - Paseo Verde, NV
                                  </td>
                                  <td className="px-6 py-4 text-center">
                                      5
                                  </td>
                                  <td className="px-6 py-4 text-center">
                                      5
                                  </td>
                              </tr>
                              <tr className=" hover:text-white hover:bg-tailoredtxt2">
                                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                      <div className="flex items-center">
                                          <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-white border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                      </div>
                                  </th>
                                  <td className="px-6 py-4">
                                      13527
                                  </td>
                                  <td className="px-6 py-4 text-center">
                                      Stretch Zone - Central Park, CO
                                  </td>
                                  <td className="px-6 py-4 text-center">
                                      8
                                  </td>
                                  <td className="px-6 py-4 text-center">
                                      8
                                  </td>
                              </tr>
                              <tr className=" hover:text-white hover:bg-tailoredtxt2">
                                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                      <div className="flex items-center">
                                          <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-white border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                      </div>
                                  </th>
                                  <td className="px-6 py-4">
                                      13527
                                  </td>
                                  <td className="px-6 py-4 text-center">
                                      Stretch Zone - Scarsdale, NY
                                  </td>
                                  <td className="px-6 py-4 text-center">
                                      8
                                  </td>
                                  <td className="px-6 py-4 text-center">
                                      8
                                  </td>
                              </tr>
                              <tr className=" hover:text-white hover:bg-tailoredtxt2">
                                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                      <div className="flex items-center">
                                          <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-white border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                      </div>
                                  </th>
                                  <td className="px-6 py-4">
                                      13527
                                  </td>
                                  <td className="px-6 py-4 text-center">
                                      Stretch Zone - Paseo Verde, NV
                                  </td>
                                  <td className="px-6 py-4 text-center">
                                      5
                                  </td>
                                  <td className="px-6 py-4 text-center">
                                      5
                                  </td>
                              </tr>
                              <tr className=" hover:text-white hover:bg-tailoredtxt2">
                                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                      <div className="flex items-center">
                                          <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-white border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                      </div>
                                  </th>
                                  <td className="px-6 py-4">
                                      13527
                                  </td>
                                  <td className="px-6 py-4 text-center">
                                      Stretch Zone - Central Park, CO
                                  </td>
                                  <td className="px-6 py-4 text-center">
                                      8
                                  </td>
                                  <td className="px-6 py-4 text-center">
                                      8
                                  </td>
                              </tr>
                              <tr className=" hover:text-white hover:bg-tailoredtxt2">
                                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                      <div className="flex items-center">
                                          <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-white border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                      </div>
                                  </th>
                                  <td className="px-6 py-4">
                                      13527
                                  </td>
                                  <td className="px-6 py-4 text-center">
                                      Stretch Zone - Scarsdale, NY
                                  </td>
                                  <td className="px-6 py-4 text-center">
                                      8
                                  </td>
                                  <td className="px-6 py-4 text-center">
                                      8
                                  </td>
                              </tr>
                              <tr className=" hover:text-white hover:bg-tailoredtxt2">
                                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                      <div className="flex items-center">
                                          <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-white border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                      </div>
                                  </th>
                                  <td className="px-6 py-4">
                                      13527
                                  </td>
                                  <td className="px-6 py-4 text-center">
                                      Stretch Zone - Paseo Verde, NV
                                  </td>
                                  <td className="px-6 py-4 text-center">
                                      5
                                  </td>
                                  <td className="px-6 py-4 text-center">
                                      5
                                  </td>
                              </tr>
                              <tr className=" hover:text-white hover:bg-tailoredtxt2">
                                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                      <div className="flex items-center">
                                          <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-white border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                      </div>
                                  </th>
                                  <td className="px-6 py-4">
                                      13527
                                  </td>
                                  <td className="px-6 py-4 text-center">
                                      Stretch Zone - Central Park, CO
                                  </td>
                                  <td className="px-6 py-4 text-center">
                                      8
                                  </td>
                                  <td className="px-6 py-4 text-center">
                                      8
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                  </div>

                </div>
                <div className="bg-white rounded-xl col-span-1">
                    <ul className="flex flex-col w-100 p-4">
                        <li className="flex items-center py-3">
                            <figure className="w-10">
                                <img src="assets/images/coin-ico1.png"/>
                            </figure>
                            <div className=" pl-2">
                                <h4 className="text-tailoredtxt2 font-semibold text-md">Loream ipsum</h4>
                                <p className="text-gray-600 font-medium text-md">lorem ipsum team dolor</p>
                            </div>
                        </li>
                        <li className="flex items-center py-3">
                            <figure className="w-10">
                                <img src="assets/images/coin-ico2.png"/>
                            </figure>
                            <div className=" pl-2">
                                <h4 className="text-tailoredtxt2 font-semibold text-md">Loream ipsum</h4>
                                <p className="text-gray-600 font-medium text-md">lorem ipsum team dolor</p>
                            </div>
                        </li>
                        <li className="flex items-center py-3">
                            <figure className="w-10">
                                <img src="assets/images/coin-ico3.png"/>
                            </figure>
                            <div className=" pl-2">
                                <h4 className="text-tailoredtxt2 font-semibold text-md">Loream ipsum</h4>
                                <p className="text-gray-600 font-medium text-md">lorem ipsum team dolor</p>
                            </div>
                        </li>
                        <li className="flex items-center py-3">
                            <figure className="w-10">
                                <img src="assets/images/coin-ico4.png"/>
                            </figure>
                            <div className=" pl-2">
                                <h4 className="text-tailoredtxt2 font-semibold text-md">Loream ipsum</h4>
                                <p className="text-gray-600 font-medium text-md">lorem ipsum team dolor</p>
                            </div>
                        </li>
                        <li className="flex items-center py-3">
                            <figure className="w-10">
                                <img src="assets/images/coin-ico1.png"/>
                            </figure>
                            <div className=" pl-2">
                                <h4 className="text-tailoredtxt2 font-semibold text-md">Loream ipsum</h4>
                                <p className="text-gray-600 font-medium text-md">lorem ipsum team dolor</p>
                            </div>
                        </li>
                        <li className="flex items-center py-3">
                            <figure className="w-10">
                                <img src="assets/images/coin-ico2.png"/>
                            </figure>
                            <div className=" pl-2">
                                <h4 className="text-tailoredtxt2 font-semibold text-md">Loream ipsum</h4>
                                <p className="text-gray-600 font-medium text-md">lorem ipsum team dolor</p>
                            </div>
                        </li>
                        <li className="flex items-center py-3">
                            <figure className="w-10">
                                <img src="assets/images/coin-ico3.png"/>
                            </figure>
                            <div className=" pl-2">
                                <h4 className="text-tailoredtxt2 font-semibold text-md">Loream ipsum</h4>
                                <p className="text-gray-600 font-medium text-md">lorem ipsum team dolor</p>
                            </div>
                        </li>
                        <li className="flex items-center py-3">
                            <figure className="w-10">
                                <img src="assets/images/coin-ico4.png"/>
                            </figure>
                            <div className=" pl-2">
                                <h4 className="text-tailoredtxt2 font-semibold text-md">Loream ipsum</h4>
                                <p className="text-gray-600 font-medium text-md">lorem ipsum team dolor</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        </main>
    </div>
  );
}

export default App;

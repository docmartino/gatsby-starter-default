import React from "react"
import { Link } from "gatsby"
import etoile from "../images/etoile.png"

function MenuDD() {
  document.getElementById("btnMenu").classList.toggle("hidden")
  document.getElementById("btnMenu2").classList.toggle("hidden")

  
}


const MenuTop = () => {
  return (
    <>
      <div className="sm:flex sm:justify-between">
        <div className="flex items-center relative">
          {" "}
          <img
            src={etoile}
            className="max-h-5 my-2 mx-2 sm:mr-2 sm:ml-0"
            alt="star"
          /> Sparkles{" "}
          <div className="sm:hidden absolute right-0 mr-5">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              onClick={MenuDD}

            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
        </div>
        <div className="hidden sm:block" id='btnMenu'>
          <ul className="sm:flex m-2">
            <li className="m-2">
              <Link to="/" className="flex">
                Product
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </li>
            <li className="m-2">
              <Link to="/" className="flex mr-1">
                Ressources{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </li>
            <li className="m-2">
              <Link to="/">Pricing</Link>
            </li>
            <li className="m-2">
              <Link to="/">Customers</Link>
            </li>
            <li className="m-2">
              <Link to="/">Company</Link>
            </li>
          </ul>
        </div>
        <div className="hidden sm:block mt-2" id='btnMenu2'>
          {" "}
          <button className="bg-[#7755cc] text-white font-bold py-2 px-4 rounded-md w-32 mx-2">
            {" "}
            Log in{" "}
          </button>
          <button className="bg-[#0eb4d1] text-white font-bold py-2 px-4 rounded-md w-32 ml-2">
            {" "}
            Get started{" "}
          </button>
        </div>
      </div>
    </>
  )
}

export default MenuTop

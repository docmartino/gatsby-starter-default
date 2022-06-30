import React from "react"
import { Link } from "gatsby"

const MenuTop = () => {
  return (
    <>
      <ul className="flex m-2">
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
          <Link to="/">Compagny</Link>
        </li>
      </ul>
    </>
  )
}

export default MenuTop

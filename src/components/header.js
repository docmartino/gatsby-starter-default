import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import etoile from "../images/etoile.png"

const Header = ({ siteTitle }) => (
  <header className="py-10 "
    style={{
      margin: `0 auto`,
      maxWidth: `var(--size-content)`,
      // padding: `var(--space-4) var(--size-gutter)`,
      
      display: `flex`,
      alignItems: `center`,
      justifyContent: `space-between`,
    }}
  >
    <div className="flex items-center"> <img src = { etoile } className="max-h-5 my-2 mr-2" alt="star"/> Sparkels </div>
    <div>
      <ul className="flex m-2">
        <li className="m-2">
          <Link to="/">Product</Link>
        </li>
        <li className="m-2">
          <Link to="/">Ressources</Link>
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
    </div>
    <div>
      {" "}
      <button className="bg-[#7755cc] text-white font-bold py-2 px-4 rounded-md w-32 mx-2"> Log in  </button>
      <button className="bg-[#0eb4d1] text-white font-bold py-2 px-4 rounded-md w-32 ml-2"> Get started </button>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

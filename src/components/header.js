import * as React from "react"
import PropTypes from "prop-types"
import etoile from "../images/etoile.png"
import MenuTop from "../components/nav-menu"

const Header = ({ siteTitle }) => (
  <header
    className="py-2 "
    style={{
      margin: `0 auto`,
      maxWidth: `1200px`,
      // padding: `var(--space-4) var(--size-gutter)`,

      display: `flex`,
      alignItems: `center`,
      justifyContent: `space-between`,
    }}
  >
    <div className="flex items-center">
      {" "}
      <img
        src={etoile}
        className="max-h-5 my-2 mr-2"
        alt="star"
      /> Sparkels{" "}
    </div>
    <div>
      <MenuTop />
    </div>
    <div>
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
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

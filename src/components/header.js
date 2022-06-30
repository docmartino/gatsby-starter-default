import * as React from "react"
import PropTypes from "prop-types"
import MenuTop from "../components/nav-menu"

const Header = ({ siteTitle }) => (
  <header
    className="py-2 "
    style={{
      margin: `0 auto`,
      maxWidth: `1200px`,
      // padding: `var(--space-4) var(--size-gutter)`,
      // display: `flex`,
      // alignItems: `center`,
      // justifyContent: `space-between`,
    }}
  >
    <MenuTop />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

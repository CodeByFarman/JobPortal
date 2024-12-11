// MobileMenu.js
const MobileMenu = () => {
    return (
      <div className="mobile-menu-wrap mobile-header-border">
        <nav>
          <ul className="mobile-menu font-heading">
            <li className="has-children">
              {/* <a className="active" href="index.html">Home</a> */}
              <ul className="sub-menu">
                <li><a href="index.html">Home 1</a></li>
                <li><a href="index-2.html">Home 2</a></li>
                <li><a href="index-3.html">Home 3</a></li>
              </ul>
            </li>
            {/* Repeat for other menu items */}
          </ul>
        </nav>
      </div>
    );
  };
  
  export default MobileMenu;
  
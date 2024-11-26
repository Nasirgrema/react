import { Link } from "react-router-dom";
function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to ="/">myHome</Link>
          </li>
          <li>
            <Link to="/services">Learning</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
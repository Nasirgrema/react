import { Link as Tkb } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Tkb to="/">Home</Tkb>
          </li>
          <li>
            <Tkb to="/services">Services</Tkb>
          </li>
          <li>
            <Tkb to="/about">About</Tkb>
          </li>
          <li>
            <Tkb to="/contact">Contact</Tkb>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
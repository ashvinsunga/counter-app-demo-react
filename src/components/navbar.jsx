const NavBar = ({ totalCounters }) => {
  return (
    <nav class='navbar bg-light'>
      <div class='container-fluid'>
        <a class='navbar-brand' href='#'>
          Navbar
          <span className='badge badge-pill bg-secondary m-2'>
            {totalCounters}
          </span>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;

import Logo from "../logo/Logo";

const Navbar = ({children}:any) => {
  return (
    <nav className="nav-bar">
           <Logo />
    {children}
    </nav>
  );
};

export default Navbar;

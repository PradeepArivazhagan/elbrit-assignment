import logo from "../assets/logo.png"
const Header = () => {
  return (
    <header className="py-4 px-10 md:px-28 lg:px-40 shadow-md">
        <img src={logo} alt="Elbrit logo" className="w-36 md:w-44 lg:w-52" />
    </header>
  )
}

export default Header
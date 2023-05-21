import logoo from "../IMAGES/LOGO.png"

const Navbar = () => {
    return (
        <div className="navbar flex flex-row justify-between border-4 border-red-600" >
            <div className="logo-container">
                <img className="logo w-40 hover:transition" src={logoo} alt="" />
            </div>
            <div className="nav-items bg-orange-400 flex flex-row justify-center items-center">
                <ul className="items flex flex-row justify-center items-center gap-[3rem] bg-pink-400 p-4 m-2 px-10">
                    <li>Search</li>
                    <li>Offers</li>
                    <li>Help</li>
                    <li>USER</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;
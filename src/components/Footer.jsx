
const Footer = () => {
    return (

        <div className="mainfooter flex lg:justify-around items-start w-full bg-black text-white px-5 py-8 text-xs pb-20 lg:pb-8 lg:text-xl">
            <div className="item about flex flex-col lg:gap-2">
                <h4 className="font-semibold lg:text-xl" >ABOUT</h4>
                <ul>
                    <li>Contact Us</li>
                    <li>About Us</li>
                    <li>Careers</li>
                    <li>Stories</li>
                    <li>Press</li>
                    <li>Corporate Information</li>
                </ul>
            </div>
            <div className="item help flex flex-col gap-2">
                <h4 className="font-semibold lg:text-xl">HELP</h4>
                <ul>
                    <li>Payments</li>
                    <li>Order</li>
                    <li>Cancellation & Returns</li>
                    <li>FAQs</li>
                    <li>Report Infringement</li>
                </ul>
            </div>
            <div className="item policy flex flex-col gap-2">
                <h4 className="font-semibold lg:text-xl">POLICY</h4>
                <ul>
                    <li>Return Policy</li>
                    <li>Terms Of Use</li>
                    <li>Security</li>
                    <li>Privacy</li>
                    <li>Sitemap</li>
                </ul>
            </div>
            <div className="item social flex flex-col gap-2">
                <h4 className="font-semibold lg:text-xl">SOCIAL</h4>
                <ul>
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>Youtube</li>
                    <li>Instagram</li>
                </ul>
            </div>
        </div>

    )
}

export default Footer





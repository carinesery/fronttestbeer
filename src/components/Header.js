import Logo from "./Logo.js";
import Account from "./Account.js";
import Cart from "./Cart.js";


import "../styles/Header.css";

function Header () {
    const currentDate = new Date()
    const currentTime = currentDate.getHours();
    // const currentTime = 10;
    const itsTimeToDrinkBeer = currentTime >=18 || currentTime <= 4;
    const waitingTimeToDrink = 18 - currentTime;
    //console.log(currentTime);
    const catchphrase = itsTimeToDrinkBeer ? <span>"C'est l'heure de <strong>triiinnnquer</strong> !!!"</span> : <span>"On se retrouve dans <strong>{`${waitingTimeToDrink}`} heures</strong> pour trinquer !"</span>;
    return (
        <div className="header">
            <div className="identity-ecommerce">
                <Logo className="logo-trink"/>
                {/* <div class="brand-catchphrase"> */}
                    <span className="brand">Trink !</span>
                    <span className="catchphrase">{ catchphrase } ... dites-le avec l'accent que vous voulez ;)</span>
                {/* </div> */}
            </div>
            <div className="account-cart">
                <Account />
                <Cart />
            </div>
        </div>
    )
}

export default Header;
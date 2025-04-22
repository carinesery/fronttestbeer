import "../styles/Main.css";
import FirstHeading from "./FirstHeading";
import ProductCardsContainer from "./ProductCardsContainer";

function Main () {
    return (
        <div className="main-container">
            <FirstHeading />
            <ProductCardsContainer />
        </div>
    )
}

export default Main;
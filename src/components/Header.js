
function Header(props) {
    return (
        <header>
            <div className="headerLeft">
                <img width={170} height={20} src="/img/logo.png" alt="" />
                <div className="headerInfo">
                    <p> Город кроссовок </p>
                </div>
            </div>
            <ul className="headerRight">
                <li className="rightLi1">
                    <img width={21.6} height={21.6} src="/img/cart.svg" alt="" onClick={props.onClickCart}/>
                    <span>28990 тенге</span>
                </li>
                <li className="rightLi2">
                    <img width={21.6} height={21.6} src="/img/account.svg" alt="" />
                </li>
            </ul>
        </header>
    );
}

export default Header;
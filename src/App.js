

function App() {
  return (
    <div className="wrapper">

      <header>
        <div className="headerLeft">
          <img width={170} height={20} src="/img/logo.png" alt="" />
          <div className="headerInfo">
            <p> Город кроссовок </p>
          </div>
        </div>
        <ul className="headerRight">
          <li className="rightLi1">
            <img width={18} height={18} src="/img/cart.svg" alt="" />
            <span>21990 тенге</span>
          </li>
          <li className="rightLi2">
            <img width={18} height={18} src="/img/account.svg" alt="" />
          </li>
        </ul>
      </header>

      <div className="content">
        <h1 className="allSneakers">Все кроссовки</h1>
        <div className="sneakers">
          <div className="card">
            <img width={133} height={112} src="/img/sneakers/1.jpg" alt="sneakers" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="sneakersDescription">
              <div className="sneakersInfo">
                <span>цена:</span>
                <b>19990 тенге</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/add.svg" alt="add" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="/img/sneakers/2.jpg" alt="sneakers" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="sneakersDescription">
              <div className="sneakersInfo">
                <span>цена:</span>
                <b>19990 тенге</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/add.svg" alt="add" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="/img/sneakers/3.jpg" alt="sneakers" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="sneakersDescription">
              <div className="sneakersInfo">
                <span>цена:</span>
                <b>19990 тенге</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/add.svg" alt="add" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="/img/sneakers/4.jpg" alt="sneakers" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="sneakersDescription">
              <div className="sneakersInfo">
                <span>цена:</span>
                <b>19990 тенге</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/add.svg" alt="add" />
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;

import React from 'react';
import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect (() => {
    fetch('https://6374ec2208104a9c5f8d4b08.mockapi.io/Items')
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
      });
  }, []);

  const onAddToCart = (obj) => {
    setCartItems(prev => [... prev, obj]);
  }

  return (
    <div className="wrapper">
      {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)}/>}
      <Header onClickCart={() => setCartOpened(true)}/>
      <div className="content">
        <div className="contentHead">
          <h1 className="allSneakers">Все кроссовки</h1>
          <div className="search">
            <img src="/img/search.svg" alt="Search" />
            <input type="text" placeholder="Поиск.." />
          </div>
        </div>
        <div className="sneakers">
          {items.map((item) => (
            <Card 
              title={item.title} 
              price={item.price} 
              image={item.image}
              onFavorite = {() => alert("click favorite")} 
              onAdd = {(obj) => onAddToCart(obj)}/>
          ))}
        </div>
      </div>

    </div>
  );
}

export default App;

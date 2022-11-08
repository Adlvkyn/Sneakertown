import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

function App() {
  return (
    <div className="wrapper">
      <Drawer />
      <Header />
      <div className="content">
        <div className="contentHead">
          <h1 className="allSneakers">Все кроссовки</h1>
          <div className="search">
            <img src="/img/search.svg" alt="Search" />
            <input type="text" placeholder="Поиск.." />
          </div>
        </div>
        <div className="sneakers">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
      </div>

    </div>
  );
}

export default App;

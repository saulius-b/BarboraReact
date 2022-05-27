import './CSSFiles/App.css'
import './CSSFiles/BasketItem.css'
import './CSSFiles/ItemBasket.css'
import './CSSFiles/ItemPlaceholder.css'
import './CSSFiles/Products.css'
import './CSSFiles/Product.css'
import './CSSFiles/Main.css'



import Main from './App/Main/Main';


const App = () => {
  return (
    <div className="App">
      <header id="Header">Header</header>
      <Main />
      <footer id="Footer">Footer</footer>
    </div>
  );
}

export default App;

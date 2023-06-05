
import GlobalStyle from './Styles/GlobalStyle';
import ProductList from './Components/Product/ProductList';
import Header from './Components/Header/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ProductList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;

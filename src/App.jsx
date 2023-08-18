import './App.css';
import PageContainer from './components/PageContainer';
import { ProductContextProvider } from './components/Context/ProductContextProvider';
function App() {
  return (
    <>
      <ProductContextProvider>
        <PageContainer></PageContainer>
      </ProductContextProvider>
    </>
  );
}

export default App;

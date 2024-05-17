// Styles
import './globalStyles.css';
import './components/main/Main.css';
import './components/footer/Footer.css';

// Functions
import { Header } from './components/header/Header';
import { Main } from './components/main/Main';
import { Footer } from './components/footer/Footer';


function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Title from './components/Titulo/Titulo'; 
import ImageGallery from './components/ImageGallery/ImageGallery';

function App() {
  return (
    <>
      <Header />
      
      <Title text="Ropa de invierno" level={1} />
      <Title text="Explora nuestros productos" level={2} />
      
      <ImageGallery />
      
      <Footer />
    </>
  );
}

export default App;
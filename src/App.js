import './App.css';
import Footer from './components/Footer.js';
import ImageContent from './components/ImageContent';
import Navbar from './components/Navbar';
import Questions from './components/Questions.js';
import SubAreaComponent from './components/SubAreaComponent.js';

function App() {
  return (
    <div className="App flex flex-col">
      <Navbar />
      <ImageContent />
      <SubAreaComponent/>
      <Questions />
      <Footer />
    </div>
  );
}

export default App;

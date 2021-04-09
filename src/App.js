import './App.css';
import TheX from './sections/TheX/TheX';
import ContactUs from './sections/ContactUs/ContactUs';
import Header from './sections/Header/Header';
import Subscription from './sections/Subscription/Subscription';

function App() {
  return (
    <div className="App">
      <Header />
      <Subscription />
      <TheX />
      <ContactUs />
    </div>
  );
}

export default App;

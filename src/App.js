import './App.css';
import Nav from './Nav';
import Footer from './Footer';
import SlideShow from './SlideShow';

function App() {
  return (
    <div className="App">
      <Nav />
      <SlideShow />< div className='impact-container'>
        <h1 className='impact-title'>STRENGTHENING OUR COMMUNITY FROM GROUND UP</h1>
      <section className='impact-section'>
        <div className='impact-item'><p className='impact-number'>#8.5M</p><p>funds awarded across the country</p></div>
        <div className='impact-item'><p className='impact-number'>#100,000</p><p>grants distributed to local organizations</p></div>
        <div className='impact-item'><p className='impact-number'>41%</p><p>funding focused on children and young people</p></div>
        <div className='impact-item'><p className='impact-number'>78%</p><p>of guarantees have an annual income of under #500,000  </p></div>
      </section></div>
      <Footer />
    </div>
  );
}

export default App;

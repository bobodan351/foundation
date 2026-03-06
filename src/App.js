import "./App.css";
import Nav from "./Nav";
import Footer from "./Footer";
import SlideShow from "./SlideShow";
import Counter from "./Counter";
import checkingImg from "./images/checking.png";
import handIcon from "./images/handIcon.png";
import icountry from "./images/icontry.png";

function App() {
  return (
    <div className="App">
      <Nav />
      <SlideShow />
      <div className="impact-container">
        <h1 className="impact-title">
          STRENGTHENING OUR COMMUNITY FROM GROUND UP
        </h1>
        <section className="impact-section">
          <div className="impact-item">
            <p className="impact-number">
              #<Counter end={8.5} />M
            </p>
            <p>Funds awarded across the country</p>
          </div>
          <div className="impact-item">
            <p className="impact-number">
              #<Counter end={100000} />
            </p>
            <p>Grants distributed to local organizations</p>
          </div>
          <div className="impact-item">
            <p className="impact-number">41%</p>
            <p>Funding focused on children and young people</p>
          </div>
          <div className="impact-item">
            <p className="impact-number">78%</p>
            <p>Of guarantees have an annual income of under #500,000 </p>
          </div>
        </section>
      </div>
      <section className="mission-container">
        <div className="mission-item">
          <img src={handIcon} alt="" />
          <h2>Become a Volunteer</h2>
          <p>
            Becoming a volunteer with TFUF brings purpose, connection, and the
            chance to make lasting positive change.
          </p>
        </div>
        <div className="mission-item donate">
          <img src={icountry} alt=""  />
          <h2>Donate</h2>
          <p>
            Donating through TFUF empowers change, supports vital causes, and
            helps build stronger communities for a better future.
          </p>
        </div>
        <div className="mission-item">
          <img src={checkingImg} alt="" />
          <h2>Partner With Us</h2>
          <p>Partnering with TFUF amplifies impact, fosters collaboration, and drives meaningful change for vulnerable children in Nigeria.</p>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;

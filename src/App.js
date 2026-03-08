import "./App.css";
import Nav from "./Nav";
import Footer from "./Footer";
import SlideShow from "./SlideShow";
import Counter from "./Counter";
import checkingImg from "./images/checking.png";
import handIcon from "./images/handIcon.png";
import icountry from "./images/icontry.png";
import tryout from "./images/tryout3 (1).png"

function App() {
  return (
    <div className="App">
      <Nav />
      <SlideShow />
      <div className="impact-container">
      <div className="impact-header">
  <p className="impact-tag">OUR IMPACT</p>
  <h2>Strengthening Our Community From The Ground Up</h2>
</div>
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
            <p className="impact-number"><Counter end={ 45}/>%</p>
            <p>Funding focused on children and young people</p>
          </div>
          <div className="impact-item">
            <p className="impact-number"><Counter end={78}/>%</p>
            <p>Of guarantees have an annual income of under #500,000 </p>
          </div>
        </section>
      </div>
      <section className="home-about-section">
        <div className="home-about-container">
          <h1 className="title">Welcome To The Apeke Dynasty Foundation</h1>
          <div className="span-after"></div>
          <p>
           The Apeke Dynasty Foundation (ADF) is a dedicated charitable organization founded in 
Nigeria by a group of selfless and visionary women. These female leaders are commiƩed 
to enhancing the general well-being of women and children within their communities. 
ADF operates inclusively, offering support to women and children regardless of their 
tribe, socioeconomic status, or religion. Our foundation also prioritizes educating young 
girls about the dangers and realities of trafficking. Officially registered and licensed by the 
Nigerian Government's Corporate Affairs Commission (CAC), ADF aims to provide both 
physical and mental relief, thereby significantly improving the lives of our target Audience.
          </p>
          <button className="read-more">Read More</button>
        </div>
        <div className="home-about-img"><img src={tryout} alt="" /></div>
      </section>
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

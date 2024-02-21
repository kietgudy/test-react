import videoHomePage from "../../assets/video-homepage.mp4";
const HomePage = (props) => {
  return (
    <div className="homepage-container">
      <video autoPlay muted loop>
        <source src={videoHomePage} type="video/mp4" />
      </video>
      <div className="homepage-content">
        <div>
          <h1 className="title-intro">Make forms worth filling out</h1>
        </div>
        <div className="title-body">
          <span>
            Get more data-like signups, feedback, and anything else-with forms
            designed to be refreshingly different.
          </span>
        </div>
        <div >
          <button className="btn-start">Get started-it's free</button>
        </div>
      </div>
    </div>
  );
};
export default HomePage;

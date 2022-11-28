import "../assets/styles/otherbusinessventures.scss";
import useLocoScroll from "../components/hooks/useLocoScroll";
import Navigation from "../components/Navigation";
// import FooterMenu from "../components/FooterMenu";
import Footer from "../components/Footer";

const OtherBusinessVentures = () => {
  return (
    <>
      {
        <div
          className="ventures
            main-container"
          id="main-container"
          data-scroll-container
        >
          <Navigation />
          <section className=" hero">
            <div className="hero__content">
              <h1 className="hero__title">Other Business Affiliates</h1>
              <p className="hero__desc">coming soon</p>
            </div>
          </section>
          <Footer />
        </div>
      }
    </>
  );
};

export default OtherBusinessVentures;

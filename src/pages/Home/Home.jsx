import Footer from "../../Footer/Footer";
import Featured from "../../components/Featured/Featured";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import MailList from "../../components/mailList/MailList";
import PropertyList from "../../components/propertyList/propertyList";
import "./Home.css";
const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <div className="homeTitle">Browse by property type</div>
        <PropertyList />
        <h1 className="homeTitle">Homes guests love</h1>
        <FeaturedProperties />
        <MailList />
        <Footer />
      </div>
    </>
  );
};
export default Home;

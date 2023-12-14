import "./Hotel.css";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import MailList from "../../components/MailList/MailList";
import Footer from "../../Footer/Footer";
import useFetch from "../../components/hooks/useFetch.js";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useLocation } from "react-router-dom";
const Hotel = () => {
  const location = useLocation();
  const id = location.split("/"[2]);
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const { data, loading, error } = useFetch(`/hotels/${id}`);

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };
  return (
    <div>
      <Navbar />
      <Header type="list" />
      {loading ? (
        "loading"
      ) : (
        <div className="hotelContainer">
          {open && (
            <div className="slider">
              <FontAwesomeIcon icon={faCircleXmark} />
            </div>
          )}
          <div className="hotelWrapper">
            <button className="bookNow">Reserve / Book Now!</button>
            <h1 className="hotelTitle">{data.name}</h1>
            <div className="hotelAddress">
              <FontAwesomeIcon icon={faLocationDot} />
              <span>{data.address}</span>
            </div>
            <span className="hotelDistance">{Hotel.distance}</span>
            <span className="hotelPriceHighlight">
              Book a stay over ${Hotel.cheapestPrice} at this property and get a
              free airport taxi
            </span>
            <div className="hotelImages">
              {data.photos.map((photo) => (
                <div className="hotelImgWrapper" key={photos.id}>
                  <img
                    onClick={handleOpen}
                    src={photo.src}
                    alt=""
                    className="hotelImg"
                  />
                </div>
              ))}
            </div>
            <div className="hotelDetails">
              <div className="hotelDetailsText">
                <h1 className="hotelTitle">Stay in the heart of karkow</h1>
                <p className="hotelDesc">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Consectetur odio unde deleniti eos, provident ratione nam
                  illum modi, dicta voluptas autem eligendi nihil cupiditate ad.
                  Modi incidunt exercitationem ea dolor? Earum quaerat
                  aspernatur, culpa tenetur beatae modi ut quasi atque
                  perferendis incidunt porro asperiores, non labore saepe
                  placeat corrupti dolorem. Natus, vero deleniti! Molestias,
                  eos.
                </p>
              </div>
              <div className="hotelDetailsPrice">
                <h1>Perfect for a 9-nights stay</h1>

                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
                  voluptatem!
                </span>
                <h2>
                  <b>$945</b>(9 nights)
                </h2>
                <button>Reserve / Book Now!</button>
              </div>
            </div>
          </div>
          <MailList />
          <Footer />
        </div>
      )}
    </div>
  );
};
export default Hotel;

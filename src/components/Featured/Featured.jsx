import useFetch from "../hooks/useFetch";
import "./Featured.css";
const Featured = () => {
  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=berlin,madrid,london"
  );
  return (
    <div className="featured">
      {loading ? (
        "loading please wait"
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://images.pexels.com/photos/1334605/pexels-photo-1334605.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitle">
              <h1>Berlin</h1>
              <h2>{data[0]}</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://images.pexels.com/photos/1334605/pexels-photo-1334605.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitle">
              <h1>Madrid</h1>
              <h2>{data[1]}</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://images.pexels.com/photos/1334605/pexels-photo-1334605.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitle">
              <h1>London</h1>
              <h2>{data[2]}</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default Featured;

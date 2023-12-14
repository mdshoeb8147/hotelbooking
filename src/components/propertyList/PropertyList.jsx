import useFetch from "../hooks/useFetch";
import "./PropertyList.css";
const PropertyList = () => {
  const { data, loading, error } = useFetch("/hotels/countByType");

  const images = [
    "https://images.pexels.com/photos/1157255/pexels-photo-1157255.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/699466/pexels-photo-699466.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1191377/pexels-photo-1191377.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1191377/pexels-photo-1191377.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1191377/pexels-photo-1191377.jpeg?auto=compress&cs=tinysrgb&w=600",
  ];
  return (
    <div className="pList">
      {loading ? (
        "loading"
      ) : (
        <>
          {data &&
            images.map((img, i) => (
              <div className="pListItem" key={i}>
                <img src={img} alt="" className="pListImg" />
                <div className="pListTitle">
                  <h1>{data[i]?.type}</h1>
                  <h2>
                    {data[i]?.count}
                    {data[i]?.type}
                  </h2>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};
export default PropertyList;

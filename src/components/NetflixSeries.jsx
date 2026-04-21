 import  SeriesData  from "../api/seriesData.json";
 import { SeriesCard } from "./SeriesCard";

export const NetflixSeries = () => {
  return (
    <div className="series-container">
      <h1 className="main-heading" style={{ textAlign: "center" }}>Best trending series for You</h1>
      <ul className="grid-layout">
{SeriesData.map((cureElem) => (
  <SeriesCard key={cureElem.id} data={cureElem}/>


))}

  </ul>
  </div>

);



};

export default NetflixSeries;
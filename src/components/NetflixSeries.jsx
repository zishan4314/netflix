 import  SeriesData  from "../api/seriesData.json";
 import { SeriesCard } from "./SeriesCard";

export const NetflixSeries = () => {
  return (
    
    <div className="series-container">
      <div className="netflix-heading-box">
        <div className="netflix-logo-container">
          <img src="/Netflix_icon.jpg" alt="Netflix Icon" className="netflix-bg-icon" />
        </div>
        <h2 className="main-heading">Netflix Series</h2>
      </div>
      <ul className="grid-layout">
{SeriesData.map((cureElem) => (
  <SeriesCard key={cureElem.id} data={cureElem}/>

))}

  </ul>
  </div>
);


};
export default NetflixSeries;
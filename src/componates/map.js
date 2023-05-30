import React, { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker";

const AnyReactComponent = ({ text }) => <div className="text-sm">{text}</div>;

function Map() {
  const [covidAll, setCovidAll] = useState([]);
  const [covidCountries, setCovidCountries] = useState([]);
  const [covidHistorical, setCovidHistorical] = useState([]);
  const defaultProps = {
    center: {
      lat: 18.5204,
      lng: 73.8567,
    },
    zoom: 11,
  };
  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/all")
      .then((res) => res.json())
      .then((json) => setCovidAll(json));
    fetch("https://disease.sh/v3/covid-19/countries")
      .then((res) => res.json())
      .then((json) => setCovidCountries(json));
    fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=all")
      .then((res) => res.json())
      .then((json) => setCovidHistorical(json));
  }, []);
  console.log(covidAll);
  console.log(covidCountries);
  console.log(covidHistorical);
  return (
    // Important! Always set the container height explicitly
    <div className="h-[80vh] w-2/3 mx-auto mt-10">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        {covidCountries &&
          covidCountries.map((item, key) => (
            <Marker
              key={key}
              lat={item.countryInfo.lat}
              lng={item.countryInfo.long}
              text={item.country}
              data={item}
              onClick={() => alert(JSON.stringify(item))}
            />
          ))}
      </GoogleMapReact>
    </div>
  );
}

export default Map;

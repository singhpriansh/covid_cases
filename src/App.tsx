import { css, Global } from "@emotion/react";
import { useEffect, useState } from "react";
import BarChart from "./components/BarChart";
import CountryList from "./components/CountryList";
import GlobalInfo from "./components/GlobalInfo";
import { Country_data, ResponseData } from "./types";

const App: React.FunctionComponent = () =>  {
  const [data, setData] = useState< ResponseData|undefined >(undefined);
  const [activeCountries, setActiveCountries] = useState<Country_data[]>([]);

  const fetchData = async () => {
    const result = await fetch("https://api.covid19api.com/summary");
    const data: ResponseData = await result.json();
    
    setData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onCountryClick = (country: Country_data) => {
    const countryIndex = activeCountries.findIndex(activecountry => (
      activecountry.ID === country.ID
    ))
    if(countryIndex > -1) {
      const newActiveCountries = [...activeCountries]
      newActiveCountries.splice(countryIndex,1)
      setActiveCountries(newActiveCountries)
    }else{
      setActiveCountries([...activeCountries, country])
    }
  }

  return (
    <div>
      <Global styles= {css`
        body {
          background-color: bisque;
        }
      `}/>

      {data ? (
        <>
          <GlobalInfo
            newConfirmed = {data?.Global.NewConfirmed}
            newDeaths = {data?.Global.NewDeaths}
            newRecovered = {data?.Global.NewRecovered}
          />
          <hr/>
          

          {activeCountries.length ? <BarChart
            countries={activeCountries}
          />: null}

          <CountryList
            country_data = {data?.Countries}
            onItemClick={onCountryClick}
          />
        </>
      ): (
        "Loading..."
      )}
    </div>
  );
}

export default App;

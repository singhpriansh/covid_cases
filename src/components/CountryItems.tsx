import styled from "@emotion/styled";
import { useState } from "react";
import { Country_data } from "../types";


interface Props {
  country: Country_data;
  onItemClick: (country: Country_data) => void;
}

interface ListContentProps {
  isActive: boolean;
}

const ListItem = styled.li`
  list-style-type: none;
  flex: 0 0 50%;
  text-align: center;

  @media (min-width: 420px) {
    flex: 0 0 33.33%
  }
`;

const ListContent = styled.div<ListContentProps>`
  background-color: ${props => (props.isActive ? "lavenderblush" :"#f7f7f7")} ;
  margin: 5px;
  cursor: pointer;
  padding: 10px 0;
`;

const CountryItem: React.FunctionComponent <Props> = ({
  country,
  onItemClick
}) => {
  const [isActive, setisActive] = useState<boolean>(false);

  const handleonclick = (country: Country_data) => {
    onItemClick(country);
    setisActive(!isActive);
  }

  return (
    <ListItem >
      <ListContent
        isActive = {isActive}
        onClick = {() => handleonclick(country)}>
        <h4>{country.Country}</h4>
        <div>New Confirmed: {country.NewConfirmed}</div>
        <div>New Deaths: {country.NewDeaths}</div>
        <div>New Recovered: {country.NewRecovered}</div>
      </ListContent>
    </ListItem>
  )
};

export default CountryItem;
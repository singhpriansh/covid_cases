import styled from "@emotion/styled";
import { Country_data } from "../types";
import CountryItem from "./CountryItems";

interface Props {
    country_data: Country_data[];
    onItemClick: (country: Country_data) => void;
}

const ListWrapper = styled.ul`
    padding: 0;
    display: flex;
    flex-wrap: wrap;
`;

const CountryList: React.FunctionComponent<Props> = ({
    country_data,
    onItemClick
}) => {
    return (
        <ListWrapper>
            {country_data.map((country) => (
                <CountryItem
                    key={country.ID}
                    country={country}
                    onItemClick={onItemClick}
                />
            ))}
        </ListWrapper>
    );
};

export default CountryList;
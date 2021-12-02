export type Country_data = {
    Country: string;
    CountryCode: string;
    Date: Date;
    ID: string;
    NewConfirmed: number;
    NewDeaths: number;
    NewRecovered: number;
    Premium: object;
    Slug: string;
    TotalConfirmed: number;
    TotalDeaths: number;
    TotalRecovered: number;
};

export type Global_data = {
    NewConfirmed: 100282;
    TotalConfirmed: 1162857;
    NewDeaths: 5658;
    TotalDeaths: 63263;
    NewRecovered: 15405;
    TotalRecovered: 230845;
};

export type ResponseData = {
    Countries: Country_data[];
    Global: Global_data;
};
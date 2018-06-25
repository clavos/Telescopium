export class Company{
    constructor(){
        
    }

    name: string;
    founder: string;
    founded: number;
    employees: number;
    vehicles: number;
    launch_sites: number;
    test_sites: number;
    ceo: string;
    cto: string;
    coo: string;
    cto_propulsion: string;
    valuation: number;
    headquarters: {
        address: string;
        city: string;
        state: string;
    };
    summary: string;
}

export class Companyhistory{
    constructor(){
        
    }

    title: string;
    event_date_utc : Date;
    event_date_unix : Date;
    flight_number: number;
    details : string;
    links : {
        reddit : string;
        article : string;
        wikipedia : string;
    };
}
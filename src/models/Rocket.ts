export class Rocket{
    id: string;
    name: string;
    type: string;
    active: boolean;
    stages: number;
    boosters: Number;
    cost_per_launchv : Number;
    success_rate_pct: Number;
    first_flight: Date;
    country: string;
    company: string;
    height: {
        meters: Number;
        feet: Number;
    };
    diameter: {
        meters: Number;
        feet: Number;
    };
    mass: {
        kg: 30146;
        lb: 66460
    };
    payload_weights: [
        {
            id: string;
            name: string;
            kg: number;
            lb: number;
        }
    ];
    first_stage: {
        reusable: boolean;
        engines: number;
        fuel_amount_tons: Number;
        burn_time_sec: number;
        thrust_sea_level: {
            kN: number;
            lbf: number;
        };
        thrust_vacuum: {
            kN: number;
            lbf: number
        }
    };
    second_stage: {
        engines: number;
        fuel_amount_tons: number;
        burn_time_sec: number;
        thrust: {
            kN: number;
            lbf: number
        };
        payloads: {
            option_1: string;
            composite_fairing: {
                height: {
                    meters: number;
                    feet: number;
                };
                diameter: {
                    meters: number;
                    feet: number;
                }
            }
        }
    };
    engines: {
        number: number;
        type: string;
        version: string;
        layout: string;
        engine_loss_max: number;
        propellant_1: string;
        propellant_2: string;
        thrust_sea_level: {
            kN: number;
            lbf: number;
        };
        thrust_vacuum: {
            kN: number;
            lbf: number;
        };
        thrust_to_weight: number
    };
    landing_legs: {
        number: number;
        material: string
    };
    description: string;
}
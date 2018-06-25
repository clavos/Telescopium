export class Capsule {
    id: string;
    name: string;
    type: string;
    active: string;
    crew_capacity: number;
    sidewall_angle_deg: number;
    orbit_duration_yr: number;
    heat_shield: {
        material:  string;
        size_meters: number;
        temp_degrees: number;
        dev_partner:  string;
    };
    thrusters: [
        {
            type:  string;
            amount: number;
            pods: number;
            fuel_1: string;
            fuel_2: string;
            thrust: {
                kN: number;
                lbf: number;
            }
        }
    ];
    launch_payload_mass: {
        kg: number;
        lb: number;
    };
    launch_payload_vol: {
        cubic_meters: number;
        cubic_feet: number;
    };
    return_payload_mass: {
        kg: number;
        lb: number;
    };
    return_payload_vol: {
        cubic_meters: number;
        cubic_feet: number;
    };
    pressurized_capsule: {
        payload_volume: {
            cubic_meters: number;
            cubic_feet: number;
        }
    };
    trunk: {
        trunk_volume: {
            cubic_meters: Number;
            cubic_feet: number;
        };
        cargo: {
            solar_array: number;
            unpressurized_cargo: boolean;
        }
    };
    height_w_trunk: {
        meters: number;
        feet: number;
    };
    diameter: {
        meters: number;
        feet: number;
    }
}

export class CapsuleDetails{
    capsule_serial: string;
    capsule_id: string;
    status: string;
    original_launch: Date;
    missions: string[];
    landings: number;
    type: string;
    details: string;
}
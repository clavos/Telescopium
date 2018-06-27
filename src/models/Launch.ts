export class Launch {
    flight_number: number;
    mission_name: string;
    launch_year: number;
    launch_date_unix: number;
    launch_date_utc: string;
    launch_date_local: string;
    rocket: {
        rocket_id: string;
        rocket_name: string;
        rocket_type: string;
        first_stage: {
            cores: [
                {
                    core_serial: string;
                    flight: number;
                    block: null;
                    reused: false;
                    land_success: false;
                    landing_type: number;
                    landing_vehicle: string;
                }
            ]
        };
        second_stage: {
            block: number;
            payloads: [
                {
                    payload_id:string;
                    reused: boolean;
                    customers: string[];
                    payload_type: string;
                    payload_mass_kg: number;
                    payload_mass_lbs: number;
                    orbit: string;
                    orbit_params: {
                        reference_system: string;
                        regime: string;
                        longitude: string;
                        semi_major_axis_km: string;
                        eccentricity: string;
                        periapsis_km: number;
                        apoapsis_km: number;
                        inclination_deg: number;
                        period_min: number;
                        lifespan_years: number;
                    }
                }
            ]
        }
    };
    telemetry: {
        flight_club: string;
    };
    reuse: {
        core: boolean;
        side_core1: boolean;
        side_core2: boolean;
        fairings: boolean;
        capsule: boolean;
    };
    launch_site: {
        site_id: string;
        site_name: string;
        site_name_long: string;
    };
    launch_success: boolean;
    links: {
        mission_patch: string;
        mission_patch_small: string;
        article_link: string;
        wikipedia: string;
        video_link: string;
    };
    details: string;
}
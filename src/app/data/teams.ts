export class Teams {
    id: number;
    name: string;
    link: string;
    venue: {
        name: string;
        link: string;
        city: string;
        timezone: {
            id: number;
            offset: string;
            tz: string;
        };
    };
    abbreviation: string;
    teamName: string;
    locationName: string;
    firstYearOfPlay: string;
    division: {
        id: number,
        name: string,
        link: string,
    };
    conference: {
        id: number,
        name: string,
        link: string,
    };
    franchise: {
        franchiseId: number;
        teamName: string;
        link: string;
    };
    shortName: string;
    officialSiteUrl: string;
    franciseId: number;
    active: boolean;
}

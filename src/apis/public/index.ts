import * as types from "./index.d";

export const fetchCertificates = async function(): Promise<Array<types.Certificate>> {
    const res = await fetchSuccess("data/certificates.json");
    const json = await res.json() as Array<any>;
    return json.map(val => ({
        name: val["name"],
        issuedDate: new Date(val["issuedDate"]),
        certificatePath: val["certificatePath"],
        issuers: val.issuers
    }));
}

export const fetchOrganizations = async function(): Promise<Array<types.Organization>> {
    const res = await fetchSuccess("data/organizations.json");
    const json = await res.json();
    return Object.keys(json).map(key => {
        const value = json[key];
        return {
            id: key,
            name: value["name"],
            url: new URL(value["url"]),
            imagePath: value["imagePath"]
        };
    });
}

export const fetchClouds = async function(): Promise<Array<types.Cloud>> {
    const res = await fetchSuccess("data/skills/clouds.json");
    const json = await res.json();
    return Object.keys(json).map(key => {
        const value = json[key];
        return {
            id: key,
            name: value["name"],
            url: new URL(value["url"]),
            imagePath: value["imagePath"]
        };
    });
}

export const fetchDatabases = async function(): Promise<Array<types.Database>> {
    const res = await fetchSuccess("data/skills/databases.json");
    const json = await res.json();
    return Object.keys(json).map(key => {
        const value = json[key];
        return {
            id: key,
            name: value["name"],
            url: new URL(value["url"]),
            imagePath: value["imagePath"]
        };
    });
}

export const fetchFeeds = async function(): Promise<Array<types.Feed>> {
    const res = await fetchSuccess("data/skills/databases.json");
    const json = await res.json();
    return Object.keys(json).map(key => {
        const value = json[key];
        return {
            id: key,
            name: value["name"],
            url: new URL(value["url"]),
            imagePath: value["imagePath"]
        };
    });
}

export const fetchFrameworks = async function(): Promise<Array<types.Framework>> {
    const res = await fetchSuccess("data/skills/frameworks.json");
    const json = await res.json();
    return Object.keys(json).map(key => {
        const value = json[key];
        return {
            id: key,
            name: value["name"]
        };
    });
}

export const fetchLanguages = async function(): Promise<Array<types.Language>> {
    const res = await fetchSuccess("data/skills/languages.json");
    const json = await res.json();
    return Object.keys(json).map(key => {
        const value = json[key];
        return {
            id: key,
            name: value["name"],
            url: new URL(value["url"]),
            imagePath: value["imagePath"]
        };
    });
}

export const fetchLinguistics = async function(): Promise<Array<types.Linguistic>> {
    const res = await fetchSuccess("data/skills/linguistics.json");
    const json = await res.json();
    return Object.keys(json).map(key => {
        const value = json[key];
        return {
            id: key,
            name: value["name"],
            imagePath: value["imagePath"]
        };
    });
}

export const fetchSoftwares = async function(): Promise<Array<types.Software>> {
    const res = await fetchSuccess("data/skills/softwares.json");
    const json = await res.json();
    return Object.keys(json).map(key => {
        const value = json[key];
        return {
            id: key,
            name: value["name"],
            url: new URL(value["url"]),
            imagePath: value["imagePath"]
        };
    });
}

export const fetchVersionControlSystems = async function(): Promise<Array<types.VersionControlSystem>> {
    const res = await fetchSuccess("data/skills/vcs.json");
    const json = await res.json();
    return Object.keys(json).map(key => {
        const value = json[key];
        return {
            id: key,
            name: value["name"],
            url: new URL(value["url"]),
            imagePath: value["imagePath"]
        };
    });
}

const fetchSuccess = async function(url: string, status: number = 200): Promise<Response> {    
    const response = await fetch(url);
    if (response.status !== status) {
        const message = "Status does not indicate success ${response.status} - ${response.statusText}";
        throw Error(message);
    }
    return response;
}

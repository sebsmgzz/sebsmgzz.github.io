import * as types from "./index.d";

export const fetchCertificates = async function(): Promise<Array<types.Certificate>> {
    const res = await fetchSuccess("data/certificates.json");
    const json = await res.json() as Array<any>;
    return json.map(val => Object.assign(val, {
        issuedDate: new Date(val["issuedDate"])
    }));
}

export const fetchOrganizations = async function(): Promise<Array<types.Organization>> {
    const res = await fetchSuccess("data/organizations.json");
    const json = await res.json();
    return Object.keys(json).map(key => {
        const value = json[key];
        return Object.assign(value, {
            id: key
        });
    });
}

export const fetchClouds = async function(): Promise<Array<types.Cloud>> {
    const res = await fetchSuccess("data/skills/clouds.json");
    const json = await res.json();
    return Object.keys(json).map(key => {
        const value = json[key];
        return Object.assign(value, {
            id: key
        });
    });
}

export const fetchDatabases = async function(): Promise<Array<types.Database>> {
    const res = await fetchSuccess("data/skills/databases.json");
    const json = await res.json();
    return Object.keys(json).map(key => {
        const value = json[key];
        return Object.assign(value, {
            id: key
        });
    });
}

export const fetchFeeds = async function(): Promise<Array<types.Feed>> {
    const res = await fetchSuccess("data/skills/feeds.json");
    const json = await res.json();
    return Object.keys(json).map(key => {
        const value = json[key];
        return Object.assign(value, {
            id: key
        });
    });
}

export const fetchFrameworks = async function(): Promise<Array<types.Framework>> {
    const res = await fetchSuccess("data/skills/frameworks.json");
    const json = await res.json();
    return Object.keys(json).map(key => {
        const value = json[key];
        return Object.assign(value, {
            id: key
        });
    });
}

export const fetchLanguages = async function(): Promise<Array<types.Language>> {
    const res = await fetchSuccess("data/skills/languages.json");
    const json = await res.json();
    return Object.keys(json).map(key => {
        const value = json[key];
        return Object.assign(value, {
            id: key
        });
    });
}

export const fetchLinguistics = async function(): Promise<Array<types.Linguistic>> {
    const res = await fetchSuccess("data/skills/linguistics.json");
    const json = await res.json();
    return Object.keys(json).map(key => {
        const value = json[key];
        return Object.assign(value, {
            id: key
        });
    });
}

export const fetchSoftwares = async function(): Promise<Array<types.Software>> {
    const res = await fetchSuccess("data/skills/softwares.json");
    const json = await res.json();
    return Object.keys(json).map(key => {
        const value = json[key];
        return Object.assign(value, {
            id: key
        });
    });
}

export const fetchVersionControlSystems = async function(): Promise<Array<types.VersionControlSystem>> {
    const res = await fetchSuccess("data/skills/vcs.json");
    const json = await res.json();
    return Object.keys(json).map(key => {
        const value = json[key];
        return Object.assign(value, {
            id: key
        });
    });
}

export const fetchProjects = async function(): Promise<Array<types.Project>> {
    const res = await fetchSuccess("data/projects.json");
    const json = await res.json() as Array<any>;
    return json.map(val => Object.assign(val, {
        startDate: new Date(val["startDate"])
    }));
}

const fetchSuccess = async function(url: string, status: number = 200): Promise<Response> {    
    const response = await fetch(url);
    if (response.status !== status) {
        const message = "Status does not indicate success ${response.status} - ${response.statusText}";
        throw Error(message);
    }
    return response;
}

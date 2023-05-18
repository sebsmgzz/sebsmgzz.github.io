
import { fetchSuccess } from "utils/fetch";

import * as d from "./local.d";

const certificatesEndpoint = "/data/certificates.json";
const cloudsEndpoint = "/data/clouds.json";
const codingLanguagesEndpoint = "/data/coding-languages.json";
const databasesEndpoint = "/data/databases.json";
const feedsEndpoint = "/data/feeds.json";
const frameworksEndpoint = "/data/frameworks.json";
const linguisticLanguagesEndpoint = "/data/linguistic-languages.json";
const organizationsEndpoint = "/data/organizations.json";
const projectsEndpoint = "/data/projects.json";
const softwaresEndpoint = "/data/softwares.json";
const versionControlSystemsEndpoint = "/data/version-control-systems.json";

export const fetchAll = async function<T>(endpoint: string): Promise<Array<T>> {
    const res = await fetchSuccess(endpoint);
    return await res.json();
}

export const fetchAllCertificates = async function(): Promise<Array<d.Certificate>> {
    const entities = await fetchAll(certificatesEndpoint);
    return Object.keys(entities).map(id => {
        const entity = entities[id];
        return Object.assign(entity, { 
            id,
            issuedAt: new Date(entity["issuedAt"]) 
        });
    });
}

export const fetchAllClouds = async function(): Promise<Array<d.Cloud>> {
    const entities = await fetchAll(cloudsEndpoint);
    return Object.keys(entities).map(id => {
        const entity = entities[id];
        return Object.assign(entity, { id });
    });
}

export const fetchAllCodingLanguages = async function(): Promise<Array<d.CodingLanguage>> {
    const entities = await fetchAll(codingLanguagesEndpoint);
    return Object.keys(entities).map(id => {
        return Object.assign(entities[id], { id });
    });
}

export const fetchAllDatabases = async function(): Promise<Array<d.Database>> {
    const entities = await fetchAll(databasesEndpoint);
    return Object.keys(entities).map(id => {
        return Object.assign(entities[id], { id });
    });
}

export const fetchAllFeeds = async function(): Promise<Array<d.Feed>> {
    const entities = await fetchAll(feedsEndpoint);
    return Object.keys(entities).map(id => {
        return Object.assign(entities[id], { id });
    });
}

export const fetchAllFrameworks = async function(): Promise<Array<d.Framework>> {
    const entities = await fetchAll(frameworksEndpoint);
    return Object.keys(entities).map(id => {
        return Object.assign(entities[id], { id });
    });
}

export const fetchAllLinguisticLanguages = async function(): Promise<Array<d.LinguisticLanguage>> {
    const entities = await fetchAll(linguisticLanguagesEndpoint);
    return Object.keys(entities).map(id => {
        return Object.assign(entities[id], { id });
    });
}

export const fetchAllOrganizations = async function(): Promise<Array<d.Organization>> {
    const entities = await fetchAll(organizationsEndpoint);
    return Object.keys(entities).map(id => {
        return Object.assign(entities[id], { id });
    });
}

export const fetchAllProjects = async function(): Promise<Array<d.Projects>> {
    const entities = await fetchAll(projectsEndpoint);
    return Object.keys(entities).map(id => {
        const entity = entities[id];
        return Object.assign(entity, { 
            id,
            startDate: new Date(entity["startDate"]) 
        });
    });
}

export const fetchAllSoftwares = async function(): Promise<Array<d.Software>> {
    const entities = await fetchAll(softwaresEndpoint);
    return Object.keys(entities).map(id => {
        return Object.assign(entities[id], { id });
    });
}

export const fetchAllVersionControlSystems = async function(): Promise<Array<d.VersionControlSystem>> {
    const entities = await fetchAll(versionControlSystemsEndpoint);
    return Object.keys(entities).map(id => {
        return Object.assign(entities[id], { id });
    });
}

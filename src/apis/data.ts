
import { fetchSuccess } from "utils/fetch";

import * as d from "./data.d";
import { CodeCategory } from "./data.d";

const certificatesEndpoint = "/data/certificates.json";
const cloudsEndpoint = "/data/clouds.json";
const codesEndpoint = "/data/codes.json";
const databasesEndpoint = "/data/databases.json";
const feedsEndpoint = "/data/feeds.json";
const frameworksEndpoint = "/data/frameworks.json";
const languagesEndpoint = "/data/languages.json";
const organizationsEndpoint = "/data/organizations.json";
const projectsEndpoint = "/data/projects.json";
const softwaresEndpoint = "/data/softwares.json";
const vcssEndpoint = "/data/vcss.json";

export const fetchAll = async function<T = any>(endpoint: string): Promise<T> {
    const res = await fetchSuccess(endpoint);
    return await res.json();
}

export const fetchAllCertificates = async function(): Promise<Array<d.Certificate>> {
    const entities = await fetchAll<Array<any>>(certificatesEndpoint);
    return entities.map<d.Certificate>(entity => ({
        ...entity,
        issuedAt: new Date(entity.issuedAt)
    }));
}

export const fetchAllClouds = async function(): Promise<Array<d.Cloud>> {
    const entities = await fetchAll<Array<any>>(cloudsEndpoint);
    return entities.map<d.Cloud>(entity => ({ 
        ...entity,
        refUrl: new URL(entity.refUrl)
    }));
}

export const fetchAllCodes = async function(): Promise<Array<d.Code>> {
    const entities = await fetchAll<Array<any>>(codesEndpoint);
    return entities.map<d.Code>(entity => ({ 
        ...entity,
        category: entity.category as CodeCategory,
        refUrl: new URL(entity.refUrl)
    }));
}

export const fetchAllDatabases = async function(): Promise<Array<d.Database>> {
    const entities = await fetchAll<Array<any>>(databasesEndpoint);
    return entities.map<d.Database>(entity => ({ 
        ...entity,
        refUrl: new URL(entity.refUrl)
    }));
}

export const fetchAllFeeds = async function(): Promise<Array<d.Feed>> {
    const entities = await fetchAll<Array<any>>(feedsEndpoint);
    return entities.map<d.Feed>(entity => ({ 
        ...entity,
        refUrl: new URL(entity.refUrl)
    }));
}

export const fetchAllFrameworks = async function(): Promise<Array<d.Framework>> {
    const entities = await fetchAll<Array<any>>(frameworksEndpoint);
    return entities.map<d.Framework>(entity => ({ 
        ...entity
    }));
}

export const fetchAllLanguages = async function(): Promise<Array<d.Language>> {
    const entities = await fetchAll<Array<any>>(languagesEndpoint);
    return entities.map<d.Language>(entity => ({ 
        ...entity
    }));
}

export const fetchAllOrganizations = async function(): Promise<Array<d.Organization>> {
    const entities = await fetchAll<Array<any>>(organizationsEndpoint);
    return entities.map<d.Organization>(entity => ({ 
        ...entity,
        refUrl: new URL(entity.refUrl)
    }));
}

export const fetchAllProjects = async function(): Promise<Array<d.Project>> {
    const entities = await fetchAll<Array<any>>(projectsEndpoint);
    return entities.map<d.Project>(entity => ({ 
        ...entity,
        id: parseInt(entity.id),
        date: new Date(entity.date)
    }));
}

export const fetchAllSoftwares = async function(): Promise<Array<d.Software>> {
    const entities = await fetchAll<Array<any>>(softwaresEndpoint);
    return entities.map<d.Software>(entity => ({ 
        ...entity,
        category: entity.category as d.SoftwareType,
        refUrl: new URL(entity.refUrl)
    }));
}

export const fetchAllVCSs = async function(): Promise<Array<d.VersionControlSystem>> {
    const entities = await fetchAll<Array<any>>(vcssEndpoint);
    return entities.map<d.VersionControlSystem>(entity => ({ 
        ...entity,
        refUrl: new URL(entity.refUrl)
    }));
}

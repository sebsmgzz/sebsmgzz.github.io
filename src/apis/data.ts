
import { fetchSuccess } from "utils/fetch";

import { data } from "constants/public";
import * as d from "./data.d";

export const fetchAll = async function<T = any>(endpoint: string): Promise<T> {
    const res = await fetchSuccess(endpoint);
    return await res.json();
}

export const fetchAllCertificates = async function(): Promise<Array<d.Certificate>> {
    const entities = await fetchAll<Array<any>>(data.certificates);
    return entities.map<d.Certificate>(entity => ({
        ...entity,
        issuedAt: new Date(entity.issuedAt)
    }));
}

export const fetchAllClouds = async function(): Promise<Array<d.Cloud>> {
    const entities = await fetchAll<Array<any>>(data.clouds);
    return entities.map<d.Cloud>(entity => ({ 
        ...entity,
        refUrl: new URL(entity.refUrl)
    }));
}

export const fetchAllCodes = async function(): Promise<Array<d.Code>> {
    const entities = await fetchAll<Array<any>>(data.codes);
    return entities.map<d.Code>(entity => ({ 
        ...entity,
        category: entity.category as d.CodeCategory,
        refUrl: new URL(entity.refUrl)
    }));
}

export const fetchAllDatabases = async function(): Promise<Array<d.Database>> {
    const entities = await fetchAll<Array<any>>(data.databases);
    return entities.map<d.Database>(entity => ({ 
        ...entity,
        refUrl: new URL(entity.refUrl)
    }));
}

export const fetchAllFeeds = async function(): Promise<Array<d.Feed>> {
    const entities = await fetchAll<Array<any>>(data.feeds);
    return entities.map<d.Feed>(entity => ({ 
        ...entity,
        refUrl: new URL(entity.refUrl)
    }));
}

export const fetchAllFrameworks = async function(): Promise<Array<d.Framework>> {
    const entities = await fetchAll<Array<any>>(data.frameworks);
    return entities.map<d.Framework>(entity => ({ 
        ...entity
    }));
}

export const fetchAllLanguages = async function(): Promise<Array<d.Language>> {
    const entities = await fetchAll<Array<any>>(data.languages);
    return entities.map<d.Language>(entity => ({ 
        ...entity
    }));
}

export const fetchAllOrganizations = async function(): Promise<Array<d.Organization>> {
    const entities = await fetchAll<Array<any>>(data.organizations);
    return entities.map<d.Organization>(entity => ({ 
        ...entity,
        refUrl: new URL(entity.refUrl)
    }));
}

export const fetchAllProjects = async function(): Promise<Array<d.Project>> {
    const entities = await fetchAll<Array<any>>(data.projects);
    return entities.map<d.Project>(entity => ({ 
        ...entity,
        id: parseInt(entity.id),
        date: new Date(entity.date)
    }));
}

export const fetchAllSoftwares = async function(): Promise<Array<d.Software>> {
    const entities = await fetchAll<Array<any>>(data.softwares);
    return entities.map<d.Software>(entity => ({ 
        ...entity,
        category: entity.category as d.SoftwareType,
        refUrl: new URL(entity.refUrl)
    }));
}

export const fetchAllVCSs = async function(): Promise<Array<d.VersionControlSystem>> {
    const entities = await fetchAll<Array<any>>(data.vcss);
    return entities.map<d.VersionControlSystem>(entity => ({ 
        ...entity,
        refUrl: new URL(entity.refUrl)
    }));
}


export const fetchSuccess = async function(url: string, successStatus: number = 200): Promise<Response> {    
    const response = await fetch(url);
    if (response.status !== successStatus) {
        const message = "Status does not indicate success ${response.status} - ${response.statusText}";
        throw Error(message);
    }
    return response;
}

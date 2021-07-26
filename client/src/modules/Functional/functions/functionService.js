import axios from 'axios';

const getQueryString = (parameters) => {
    let queryString = '';
    for (let key in parameters) {
        queryString = queryString.length > 0
            ? `${queryString}&${key}=${parameters[key]}`
            : `${key}=${parameters[key]}`;
    }

    return queryString;
}

const getUrl = (functionName, parameters = null) => {
    let url = `https://www.wolframcloud.com/obj/85100044/coursework/${functionName}`;
    if (parameters !== null) {
        const queryString = getQueryString(parameters);
        url = `${url}?${queryString}`;
    }

    return url;
}

export default {
    requestValue: async (functionName, parameters = null) => {
        const url = getUrl(functionName, parameters);
        const result = await axios(url);

        return result.data;
    },
    getImageUrl: getUrl,
};
// fetch API에 대한 인터페이스
const parseResponse = async response => {
    const { status } = response;
    let data;
    if(status === 200) {
        data = await response.json();
    }
    return { status, data };
}

const request = async ({
    method = "GET",
    url,
    headers = {},
    body
}) => {
    const config = {
        method,
        headers: new window.Headers(headers)
    }

    if(body) config.body = JSON.stringify(body);

    const response = await fetch(url, config);

    return parseResponse(response);
}

const get = async (url, headers) => {
    const response = await request({ method: "GET", url, headers });
    return response.data;
}

const post = async (url, body, headers) => {
    const response = await request({ method: "POST", url, body, headers });
    return response.data;
}

export { get, post }
const sendFetch = urlPath => (data={}) => fetch(urlPath, {
    method: 'POST',
    headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        ...(localStorage.authToken ? {Authorization: 'Bearer ' + localStorage.authToken} : {})
    },
    body: JSON.stringify(data)
}).then(res => res.json())
    .then(result => {

        if ('errors' in result) throw new Error(JSON.stringify(result.errors))
        return result;
    })

export default sendFetch;
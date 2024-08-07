export const allApiHit = (url,seState) => {
    fetch(url, { method: 'GET' })
        .then(res => res.json())
        .then(result => seState(result))
        .catch(err => console.log(err))
}
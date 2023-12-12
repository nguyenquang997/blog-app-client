async function getPosts(url) {
    try {
        const res = await fetch(url,
            {
                method: 'GET',
            }
        )

        const data = await res.json()
        return data
    } catch (error) {
        console.error(error)
        return []
    }
}

export default getPosts
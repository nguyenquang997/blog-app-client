
const URI = 'http://localhost:5000/'

export const getPosts = async () => {
    try {
        const res = await fetch(URI,
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

export const createPost = async (data) => {
    try {
        const res = await fetch(URI,
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }
        )
        const refData = await res.json()
        return refData
    } catch (error) {
        console.error(error)
        return []
    }
}


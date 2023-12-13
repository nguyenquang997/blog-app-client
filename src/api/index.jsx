
// eslint-disable-next-line react-refresh/only-export-components
const URI = 'https://blog-app-r6gh.onrender.com/'

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

        return await res.json()
    } catch (error) {
        console.error(error)
        return []
    }
}

export const deletePost = async (data) => {
    try {
        const res = await fetch(URI,
            {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }
        )
        return await res.json()
    } catch (error) {
        console.error(error)
        return []
    }
}

export const updatePost = async (data) => {
    try {
        const res = await fetch(URI,
            {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }
        )
        return await res.json()
    } catch (error) {
        console.error(error)
        return []
    }
}


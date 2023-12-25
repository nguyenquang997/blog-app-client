
// eslint-disable-next-line react-refresh/only-export-components
const URI = 'https://blog-app-r6gh.onrender.com/'
// const URI = 'http://localhost:5000/'

export const getPosts = async () => {
    try {
        const res = await fetch(URI,
            {
                method: 'GET',
            }
        )

        const data = await res.json()
        return data.map(x => ({
            ...x,
            imgURL: `${URI}static/${x.imgPart}`
        }))
    } catch (error) {
        console.error(error)
        return []
    }
}

export const createPost = async (dataUpdate) => {
    try {
        const res = await fetch(URI,
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dataUpdate)
            }
        )

        const data = await res.json()
        return {
            ...data,
            imgURL: `${URI}static/${data.imgPart}`
        }
    } catch (error) {
        console.error(error)
        return []
    }
}

export const deletePost = async (dataDelete) => {
    try {
        const res = await fetch(URI,
            {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dataDelete)
            }
        )

        const data = await res.json()
        return {
            ...data,
            imgURL: `${URI}static/${data.imgPart}`
        }
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


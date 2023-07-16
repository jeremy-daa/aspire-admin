const usePost = async (url, body, token) => {
    const config = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(body)
    }

    try {
        const res = await fetch(`https://test.oneloveethiopiatour.com/api/${url}`, config);
        const json = await res.json();
        const data = json.data;
        return data;
    } catch (error) {
        console.log(error)
    }

};

export default usePost;
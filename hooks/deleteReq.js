const useDelete = async (url, id, token) => {
    const config = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    }

    try {
        const res = await fetch(`https://test.yuyana.com/${url}/${id}`, config);
        const json = await res.json();
        const data = json.data;
        return data;
    } catch (error) {
        console.log(error)
    }

};

export default useDelete;

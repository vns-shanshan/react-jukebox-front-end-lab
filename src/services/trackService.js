// @ts-ignore
const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/tracks`;

async function index() {
    try {
        const res = await fetch(BASE_URL);

        return res.json();

    } catch (error) {
        console.log(error);
    }
};

async function create(formData) {
    try {
        const res = await fetch(BASE_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        });

        const data = await res.json();

        return data;
    } catch (error) {
        console.log(error);
    }
}

async function show(trackId) {
    const idUrl = `${BASE_URL}/${trackId}`
    try {
        const res = await fetch(idUrl);
        const data = await res.json();

        return data;

    } catch (error) {
        console.log(error);
    }
}

async function update(formData, trackId) {
    const idUrl = `${BASE_URL}/${trackId}`

    try {
        const res = await fetch(idUrl, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        });

        const data = await res.json();

        console.log(data);

        return data;
    } catch (error) {
        console.log(error);
    }
}

async function remove(trackId) {
    const idUrl = `${BASE_URL}/${trackId}`

    try {
        const res = await fetch(idUrl, {
            method: "DELETE",
        });

        console.log(res);
    } catch (error) {
        console.log(error);
    }
}



export { index, create, show, update, remove };
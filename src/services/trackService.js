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

export { index, create };
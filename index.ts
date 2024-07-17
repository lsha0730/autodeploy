import axios from "axios"
import express from "express"

const PORT = 8000

async function getJoke() {
    const {data} = await axios.get("https://icanhazdadjoke.com", {
        headers: {
            Accept: "application/json"
        }
    })
    return data.joke || ""
}

const app = express()

app.get("/", async (req, res) => {
    const joke = await getJoke()
    res.send(joke)
})

app.listen(PORT);
console.log(`App listening at port ${PORT}`);

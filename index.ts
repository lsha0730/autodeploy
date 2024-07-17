import axios from "axios"

async function main() {
    const {data} = await axios.get("https://icanhazdadjoke.com", {
        headers: {
            Accept: "application/json"
        }
    })
    console.log(data.joke)
}

main()
import { getAllDeputies } from "./routes/deputies"

const main = async () => {
    const deputies = await getAllDeputies();
    console.log({deputies, count: deputies.length});
}

/** Run the program. */
main();
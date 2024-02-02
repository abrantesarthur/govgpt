import { getAllDeputies, getDeputy } from "./routes/deputies"

const main = async () => {
    const deputies = await getAllDeputies();
    console.log({deputies});
    const deputy = await getDeputy({id: deputies[0].id});
    console.log({deputy});
}

/** Run the program. */
main();
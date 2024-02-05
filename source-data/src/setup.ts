import { getAllDeputies, getDeputyExpenses } from "./routes/deputies"

const main = async () => {
    const deputies = await getAllDeputies();
    // console.log({deputies});
    const expenses = await getDeputyExpenses({deputyId: deputies[2].id});
    console.log()
    console.log({expenses, count: expenses.length});
}

/** Run the program. */
main();
import { buildDeputyExpensesFile } from "./file-builders";

// TODO: use some key management system to store the OpenAI api key
const main = async () => {
    await buildDeputyExpensesFile();
}

/** Run the program. */
main();
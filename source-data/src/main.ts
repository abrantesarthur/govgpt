import { CSV_HEADER_KEYS, SOURCE_DATA_FILE_PATH } from "./constants";
import { getAllDeputies, getDeputyExpenses } from "./routes/deputies"
import * as fs from 'fs';
import { Deputy, Expense } from "./routes/deputies/types";
import { getInterval } from "./helpers";

/**
 * TODO: create a script to call this funtion instead of doing 'yarn start'
 * TODO: create a helper to fetch deputy expenses. This way, when we want to
 *       extend this service to fetch other types of information (e.g., expenses
 *       from cities, projects of law, etc), this scales more nicely.
 */
const main = async () => {

    console.log("Getting deputies...")

    // fetch all deputies
    const deputies = await getAllDeputies();

    console.log(`Fetched ${deputies.length} deputies.`)

    // start timer
    const t0 = new Date();

    // declare metrics variables
    let expensesCount = 0;
    const deputiesCount = deputies.length;

    // write the csv header
    const csvHeader = `${CSV_HEADER_KEYS.join(',')}\n`;
    fs.writeFileSync(SOURCE_DATA_FILE_PATH, csvHeader);

    // get each deputy's expenses
    for (let i = 0; i < deputies.length; i += 1) {
        const deputy = deputies[i];
        
        // compute and report the total running time since the start of the program
        const t1 = new Date();
        let rt = getInterval({t1: t0, t2: t1, reportIn: 'minutes'});
        console.log(`[${rt} min]: getting the expenses from deputy ${i + 1}/${deputiesCount}, ${deputy.deputyName}...`)
        const expenses = await getDeputyExpenses({deputyId: deputy.id});
        
        expensesCount += expenses.length;

        // TODO: do this with a helper function
        const expensesCsv = expenses.map((expense) => {
            // merge deputy and expense in a single object
            const mergedDeputyExpense: Deputy & Expense = {
                ...deputy,
                ...expense
            };

            // convert the object to a CSV row
            return CSV_HEADER_KEYS.map((k) => mergedDeputyExpense[k] ?? '').join(',') + '\n';
        }).join('');

        // write the expenses to the CSV file
        fs.appendFileSync(SOURCE_DATA_FILE_PATH, expensesCsv, {});
        
        const t2 = new Date();
        const dt = getInterval({t1, t2});
        rt = getInterval({t1: t0, t2, reportIn: 'minutes'});
        console.log(`[${rt} min]: fetched and saved ${expenses.length} expenses from ${deputy.deputyName} in ${dt}s.`);
    }

    const rt = getInterval({t1: t0, t2: new Date(), reportIn: 'minutes'});
    console.log(`[${rt} min]: DONE! Fetched and saved ${expensesCount} expenses from ${deputiesCount}.`);

}

/** Run the program. */
main();
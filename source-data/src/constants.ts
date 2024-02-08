import { Deputy, Expense } from "./routes/deputies/types";

/** The CSV header keys */
export const CSV_HEADER_KEYS: (keyof Deputy | keyof Expense)[] = [
    'deputyName',
    'expenseType',
    'amount',
    'year',
    'month',
    'day',
    'sellerName',
    'partyAcronym',
    'stateAcronym',
    // 'receiptUrl',
    // 'photoUrl',
];

/** one milliseonc */
export const ONE_MS = 1;

/** one second */
export const ONE_SEC = 1000 * ONE_MS;

/** one minute */
export const ONE_MIN = 60 * ONE_SEC;

// TODO: this should probably be fetched from an environment variable
/** the path to the file where the source data should be stored */
export const SOURCE_DATA_FILE_PATH = __dirname + `./sourceData.csv`;
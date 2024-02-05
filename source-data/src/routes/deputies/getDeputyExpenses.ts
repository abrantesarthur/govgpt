import { GET_DEPUTY_EXPENSES_URL, YEAR } from "./constants";
import { paginate } from "../helpers/paginate";
import { DadosAbertosLink, DadosAbertosLinkRelationship, Expense } from "./types";

/**
 * get a Deputy
 * 
 * @param param: the parameters to filter the deputy
 * @returns a deputy's information
 */
export const getDeputyExpenses = async ({
    deputyId,
}: {
    /** the deputy id */
    deputyId: number;
}): Promise<Expense[]> => paginate<Expense>({
        url: GET_DEPUTY_EXPENSES_URL(deputyId),
        options: {
            params: {
                ano: YEAR,
            }
        },
        getNextUrl: (res) => (res.data.links as DadosAbertosLink[]).filter((l) => l.rel === DadosAbertosLinkRelationship.Next)[0]?.href,
        getCurrentPage: (res) => (res.data.dados as Expense[]),
    });
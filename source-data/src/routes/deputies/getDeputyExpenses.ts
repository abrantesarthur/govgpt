import { GET_DEPUTY_EXPENSES_URL, MONTH_NUMBER_TO_STRING, YEAR } from "./constants";
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
        getCurrentPage: (res) => (res.data.dados).map((d: any) => ({
            year: d.ano,
            month: MONTH_NUMBER_TO_STRING[d.mes as string],
            day: Number((d.dataDocumento as string).substring(8)),
            expenseType: d.tipoDespesa,
            amount: d.valorDocumento,
            receiptUrl: d.urlDocumento,
            sellerName: d.nomeFornecedor,
            sellerCpnj: d.cnpjCpfFornecedor,
        })),
    });
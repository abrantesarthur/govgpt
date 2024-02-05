/** The codes for the Brazilian political parties */
enum PartyAcronym {
    /** Avante */
    AVANTE = 'AVANTE',
    /** Cidadania */
    CIDADANIA = 'CIDADANIA',
    /** Movimento Democratico Brasileiro */
    MDB = 'MDB',
    /** Partido Novo */
    NOVO = 'NOVO',
    /** Patriota */
    PATRIOTA = 'PATRIOTA',
    /** Partido Comunista do Brasil */
    PCdoB = 'PCdoB',
    /** Partido Democratico Trabalhista */
    PDT = 'PDT',
    /** Partido Liberal */
    PL = 'PL',
    /** Podemos */
    PODE = 'PODE',
    /** Partido Progressista */
    PP = 'PP',
    /** Partido Socialista Brasileiro */
    PSB = 'PSB',
    /** Partido Social Democrata */
    PSD= 'PSD',
    /** Partido da Social-Democracia Brasileira */
    PSDB = 'PSDB',
    /** Partido Socialismo e Liberdade */
    PSOL = 'PSOL',
    /** Partido dos Trabalhadores */
    PT = 'PT',
}

/** The acronym of the Brazilian states */
enum StateAcronym {
    /** Acre */
    AC = 'AC',
    /** Alagoas */
    AL = 'AL',
    /** Amapá */
    AP = 'AP',
    /** Amazonas */
    AM = 'AM',
    /** Bahia */
    BA = 'BA',
    /** Ceará */
    CE = 'CE',
    /** Distrito Federal */
    DF = 'DF',
    /** Espírito Santo */
    ES = 'ES',
    /** Goiás */
    GO = 'GO',
    /** Maranhão */
    MA = 'MA',
    /** Mato Grosso */
    MT = 'MT',
    /** Mato Grosso do Sul */
    MS = 'MS',
    /** Minas Gerais */
    MG = 'MG',
    /** Pará */
    PA = 'PA',
    /** Paraíba */
    PB = 'PB',
    /** Paraná */
    PR = 'PR',
    /** Pernambuco */
    PE = 'PE',
    /** Piauí */
    PI = 'PI',
    /** Rio de Janeiro */
    RJ = 'RJ',
    /** Rio Grande do Norte */
    RN = 'RN',
    /** Rio Grande do Sul */
    RS = 'RS',
    /** Rondônia */
    RO = 'RO',
    /** Roraima */
    RR = 'RR',
    /** Santa Catarina */
    SC = 'SC',
    /** São Paulo */
    SP = 'SP',
    /** Sergipe */
    SE = 'SE',
    /** Tocantins */
    TO = 'TO',
}

/** the interface representing a Deputy */
export interface Deputy {
    /** the Deputy ID */
    id: number;
    /** the URI from where to retrieve the Deputy */
    deputyUri: string;
    /** the Deputy's name */
    deputyName: string;
    /** the Deputy's political party's acronym */
    partyAcronym: PartyAcronym;
    /** the acronym of the state */
    stateAcronym: StateAcronym;
    /** the photo URL */
    photoUrl: string;
}


export enum DadosAbertosLinkRelationship {
    Self = "self",
    Next = "next",
    First = "first",
    Last = "last",
};

/** The type of the entries within the "links" field returned by the "Dados Abertos API" */
export interface DadosAbertosLink {
    /** The link's relationship to the current page */
    rel: DadosAbertosLinkRelationship,
    /** The url where to fetch the page that is related to the current page */
    href: string,
}


export interface Expense {
    /** The year when the expense occurred */
    year: number,
    /** The month when the expense occurred */
    month: number,
    /** The day when the expense was made */
    day: number,    
    /** The type of the expense */
    expenseType: string,
    /** The amount of the expense */
    amount: number,
    /** The url where to fetch the receipt */
    receiptUrl: string,
    /** The name of the seller */
    sellerName: string,
    /** The cnpj of the seller */
    sellerCnpj: string,
}
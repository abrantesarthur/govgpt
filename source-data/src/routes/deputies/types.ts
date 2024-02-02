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
    uri: string;
    /** the Deputy's name */
    nome: string;
    /** the Deputy's political party's acronym */
    partyAcronym: PartyAcronym;
    /** the URI from where to retrieve the Party  */
    partyUri: string;
    /** the acronym of the state */
    stateAcronym: StateAcronym;
    /** the legislature ID */
    legislatureId: number;
    /** the photo URL */
    photoUrl: string;
    /** the Deputy's email address */
    email: string;
}
export type Bet = {
    C: string;
    N: string;
    TYPE: string;
    NID: string;
    D: string;
    T: string;
    DAY: string;
    S: string;
    LN: string;
    IMF: boolean;
    OCG: {
      [key: string]: {
        ID: string;
        N: string;
        MBS: string;
        SO: number;
        OC: {
          [key: string]: {
            ID: string;
            O: string;
            N: string;
            MBS: string;
            G: string;
            OD: number;
            IMF: boolean;
          };
        };
      };
    };
    HEC: boolean;
  }
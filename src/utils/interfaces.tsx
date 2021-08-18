export type CryptoType = {
    description: string;
    id: string;
    logo_url: string;
    name: string;
    reddit_url: string;
    price: string
}

export interface Currency {
    id: "";
    currency: "";
    symbol: "";
    name: "";
    price: "";
    '1d': {
        price_change_pct: "";
    },
    '30d': {
        price_change_pct: "";
    },
    '365d': {
        price_change_pct: "";
    }
}
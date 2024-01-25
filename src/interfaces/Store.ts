
export interface StoreLookup {
    id: number;
    store_id: "string";
    url: "string";
}

export interface Store {
    id: number;
    name: string;
    domain: string;
    slug: string;
    image_background: string;
}
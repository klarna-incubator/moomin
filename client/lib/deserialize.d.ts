interface Json {
    type: "View" | "Text";
    props: {
        [key: string]: any;
    };
}
export declare function deserialize(json: Json | string | Json[], i?: number): any;
export {};

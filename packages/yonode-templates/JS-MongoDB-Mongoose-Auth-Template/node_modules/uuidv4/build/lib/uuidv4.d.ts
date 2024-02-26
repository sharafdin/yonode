declare const regex: {
    v4: RegExp;
    v5: RegExp;
};
declare const jsonSchema: {
    v4: {
        type: string;
        pattern: string;
    };
    v5: {
        type: string;
        pattern: string;
    };
};
declare const uuidv4: () => string;
declare const isUuid: (value: string) => boolean;
declare const empty: () => string;
declare const fromString: (text: string, namespace?: string) => string;
export { uuidv4 as uuid, regex, isUuid, empty, fromString, jsonSchema };

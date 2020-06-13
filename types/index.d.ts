export interface IField {
    name: string;
    type: string;
    isScalar: boolean;
    isString: boolean;
    list: boolean;
    readonly: boolean;
    values: string[] | undefined;
    relationType: string;
}

export interface IModel {
    name: string;
    slug: string;
    pluralName: string;
    fields: IField[];
}

export interface IWhereInput {
    OR?: IWhereInput[];
    [key: string]: string | number | boolean;
}

export interface IQuery {
    where?: IWhereInput;
    orderBy?: string;
    offset?: number;
    limit?: number;
}

export interface IField {
    name: string;
    type: string;
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

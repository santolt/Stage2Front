export interface Journal {
    response: Response;
}

export interface Response {
    numFound: number;
    start:    number;
    maxScore: number;
    docs:     Doc[];
}

export interface Doc {
    id?:               string;
    journal:          string;
    eissn:            Eissn;
    publication_date: Date;
    article_type:     ArticleType;
    author_display:   string[];
    abstract:         string[];
    title_display:    string;
    score:            number;
}

export enum ArticleType {
    Correction = "Correction",
    ResearchArticle = "Research Article",
}

export enum Eissn {
    The15457885 = "1545-7885",
    The15537404 = "1553-7404",
    The19326203 = "1932-6203",
}

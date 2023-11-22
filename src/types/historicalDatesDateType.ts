export interface IHistoricalDatesDate {
    id: number;
    text: string;
    items: ICateroryItem[];
}

export interface ICateroryItem {
    id: number;
    date: string;
    description: string;
}
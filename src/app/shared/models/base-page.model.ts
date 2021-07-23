export interface BasePageData {
    title: string;
    description: string;
}

export interface PageData {
    name: string;
    base: BasePageData;
}

export interface BaseState {
    data: PageData[];
    currentPageData: BasePageData;
}

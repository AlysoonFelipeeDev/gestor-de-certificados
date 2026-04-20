export interface NavigationRoute {
    label: string,
    route: string
};

export interface CollectionRoute {
    id: string,
    establishments: establishmentVisit[],
    certificateValueWeek: number,
    registeredRoute: RegisteredRoute,
    date: Date
}

export interface RegisteredRoute {
    id: string,
    nameRoute: string,
    employee: string,
    establishments: Establishment[]
}
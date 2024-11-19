interface Route {
    path: string;
    component: any;
    children?: Route[]; // Optional child routes for nested routing
    params?: string[]; // Optional route parameters
}
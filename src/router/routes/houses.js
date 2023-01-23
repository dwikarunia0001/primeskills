const houses = {
    path: "/",
    name: "Home",
    // component: () => import('@/views/Welcome.vue'),
    children: [
        {
            path: "",
            name: "",
            component: () => import('@/views/Home.vue'),
        },
        {
            path: "welcome",
            name: "Welcome",
            component: () => import('@/views/Welcome.vue'),
        },
        {
            path: "houses",
            name: "Houses",
            component: () => import('@/views/Houses.vue'),
        }
        ,
        {
            path: "houses/:name",
            name: "Houses by Name",
            component: () => import('@/views/HouseByName.vue'),
        }
    ],
};

export default houses;
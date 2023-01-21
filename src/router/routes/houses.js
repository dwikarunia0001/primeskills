const houses = {
    path: "/home",
    name: "Home",
    children: [
        {
            path: "houses",
            name: "Houses",
            component: () => import('@/views/Houses.vue'),
        },
        {
            path: "/auth/signup",
            name: "Signup",
            component: () => import('@/views/Auth/Signup.vue'),
        },
    ],
};

export default houses;
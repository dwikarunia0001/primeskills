import { defineStore } from "pinia";
import * as s$houses from '@/services/houses';

const d$houses = defineStore({
    id: 'houses',
    state: () => ({
        list: [],
    }),
    actions: {
        async a$list() {
            try {
                const data = await s$houses.list();
                console.log(data)
                this.list = data;
                console.log(list)
            } catch(e) {
                console.error('actions todo list error', e);
                console.log(list)
                throw e;
            }
        }
    },
    getters: {
        g$list: ({ list }) => list,
    },
});

export default d$houses;
<template>
    <div class="col-9 position-absolute end-0 me-5">
    <!--INPUT DATA-->
    <section>

    </section>

    <!--DISPLAY DATA-->
    <section>
        <h1>TEST</h1>
        <ol v-for="(item, index) in g$list" :key="index" class="text-capitalize">
            <li>{{ item.name }}</li>
        </ol>
    </section>
</div>
</template>

<script>
import { mapActions, mapState } from 'pinia'
import {RouterLink} from 'vue-router'
// contoh import stores todo
import d$houses from '@/stores/houses.js'; 
    export default {
        name: 'Houses',
        computed: {
            ...mapState(d$houses, ['g$list']),
        },
        methods: {
            ...mapActions(d$houses, ['a$list']),
            async getList() {
                try {
                    await this.a$list();
                } catch(e) {
                    console.error('methods getList error', r);
                }
            }
        },
        async created() {
            await this.getList();
        }
    };
</script>

<style>

</style>
<template>
    <main class="position-absolute top-50 start-50 translate-middle">
        <!--INPUT DATA-->
        <section>
           <img class="mx-auto" src="../assets/img/sorting-hat.png" alt="sorting-hat" width="230" height="200">
            <form action="#" class="traits text-white">
                <p>What do people often say about you?</p>
                <div v-for="(item, index) in g$list" :key="index" class="text-capitalize">
                <input type="radio" :id="item.name" name="traits" :value="item.name">
                <label :for="item.name" class="text-white text-wrap">{{item.traits.map(x => x.name).join(', ')}}</label><br>
                </div>
                <input type="submit" value="Submit" class="btn-warning px-4 mt-2" style="width: 100%">
            </form>
        </section>
        <!--DISPLAY DATA
        <section>
            <p>TEST</p>
            <div v-for="(item, index) in g$list" :key="index" class="text-capitalize">
                
                    <p>{{ item.name }}</p>
                
            </div>
        </section>
        -->
    </main>
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
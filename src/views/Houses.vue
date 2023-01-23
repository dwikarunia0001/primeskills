<template>
    <main class="position-absolute top-50 start-50 translate-middle">
        <!--INPUT DATA-->
        <section>
           <img src="../assets/img/sorting-hat.png" alt="sorting-hat" width="230" height="200">
            <form action="#" class="traits text-white">
                <p>What do people often say about you?</p>
                <div class="ms-1">
                <input type="radio" id="gryffindor" name="traits" value="Gryffindor">
                <label for="gryffindor" class="text-white">Courage, Chivalary, Nerve</label><br>
                <input type="radio" id="ravenclaw" name="traits" value="Ravenclaw">
                <label for="ravenclaw" class="text-white">Inteligence, Wisdom, Wit</label><br>
                <input type="radio" id="hufflepuff" name="traits" value="Hufflepuff">
                <label for="hufflepuff" class="text-white">Patience, Loyal, Modesty</label><br>
                <input type="radio" id="slytherin" name="traits" value="Slytherin">
                <label for="slytherin" class="text-white">Ambition, Determination, Cunning</label><br>
                </div>
                <input type="submit" value="Submit" class="btn-warning px-4 mt-2" style="width: 100%">
            </form>
        </section>

        <!--DISPLAY DATA-->
        <section>
            <p>TEST</p>
            <ol v-for="(item, index) in g$list" :key="index" class="text-capitalize">
                <li>{{ item.name }}</li>
            </ol>
        </section>
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
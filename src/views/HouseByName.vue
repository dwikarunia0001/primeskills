<template>
  <div class="text-white" > <!--style="height:590px"-->
    <main class="position-absolute top-50 start-50 translate-middle ">
        <div class="container">
            <div class="row">
                <div class="col justify-content-center align-items-center text-center">
                    
                    <div class="card text-center justify-content-center align-items-center text-center" >
                        <div class="card-header">
                            <ul class="nav nav-tabs card-header-tabs">
                                <li class="nav-item" v-for="(item, index) in g$list" :key="index">
                                    <a class="nav-link" :href="'/houses/'+item.name">{{item.name}}</a>
                                </li>
                            </ul>
                        </div>
                        <div class="text-white">
                            <div v-if="this.$route.path == '/houses/Gryffindor'">
                                <div class="card mx-3 my-5 border-5 p-2" style="width: 18rem;background-color: #FF2400;border-color: #AA6C39;">
                                    <img src="../assets/img/g-logo.png" class="card-img-top mx-auto" alt="Gryffindor" style="width: 10rem;">
                                    <div class="card-body">
                                        <h3 class="card-title text-white fw-bolder">Gryffindor</h3>
                                        <p class="card-text text-xs">Courage, Chivalary, Nerve, Daring, Determination, Bravery</p>
                                    </div>
                                </div>
                            </div>
                            <div v-if="this.$route.path == '/houses/Ravenclaw'">
                                <div class="card mx-3 my-5 border-5 p-2" style="width: 18rem;background-color: #082664;border-color: #CD7F32;">
                                    <img src="../assets/img/r-logo.png" class="card-img-top mx-auto" alt="Gryffindor" style="width: 10rem;">
                                    <div class="card-body">
                                        <h3 class="card-title text-white fw-bolder">Ravenclaw</h3>
                                        <p class="card-text text-xs">Learning, Acceptance, Inteligence, Wisdom, Wit, Creativity</p>
                                    </div>
                                </div>
                            </div>
                            <div v-if="this.$route.path == '/houses/Hufflepuff'">
                                <div class="card mx-3 my-5 border-5 p-2" style="width: 18rem;background-color: #E9AC2D;border-color: black;">
                                    <img src="../assets/img/h-logo.png" class="card-img-top mx-auto d-block" alt="Gryffindor" style="width: 10rem;">
                                    <div class="card-body">
                                        <h3 class="card-title text-white fw-bolder">Hufflepuff</h3>
                                        <p class="card-text text-xs">Hardworking, Patience, Loyalty, Just, Fairness, Modesty</p>
                                    </div>
                                </div>
                            </div>
                            <div v-if="this.$route.path == '/houses/Slytherin'">
                                <div class="card mx-3 my-5 border-5 p-2" style="width: 18rem;background-color: #1a472a;border-color: #C0C0C0;">
                                    <img src="../assets/img/s-logo.png" class="card-img-top mx-auto d-block" alt="Slytherin" style="width: 10rem;">
                                    <div class="card-body">
                                        <h3 class="card-title text-white fw-bolder">Slytherin</h3>
                                        <p class="card-text text-xs">Hardworking, Patience, Loyalty, Just, Fairness, Modesty</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </main>
  </div>
</template>

<script>
import { mapActions, mapState } from 'pinia'
// import {RouterLink} from 'vue-router'
// contoh import stores todo
import d$houses from '@/stores/houses.js'; 
    export default {
        name: 'HouseByName',
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
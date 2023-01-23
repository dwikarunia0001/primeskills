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
                                <h5 class="card-title">Special title treatment</h5>
                                <p class="card-text">THIS Ravenclaw HOUSES</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                            <div v-if="this.$route.path == '/houses/Hufflepuff'">
                                <h5 class="card-title">Special title treatment</h5>
                                <p class="card-text">THIS Hufflepuff HOUSES</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                            <div v-if="this.$route.path == '/houses/Slytherin'">
                                <h5 class="card-title">Special title treatment</h5>
                                <p class="card-text">THIS Slytherin HOUSES</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
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
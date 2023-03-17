import {createRouter, createWebHistory} from 'vue-router';
import HelloWorld from "@/components/HelloWorld.vue";

const routes = [
    {
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld,
    },
    // {
    //     path: '/MyKnowledge',
    //     name: 'MyKnowledge',
    //     component: MyKnowledge,
    // },
    // {
    //     path: '/CreateHexagram',
    //     name: 'CreateHexagram',
    //     component: CreateHexagram,
    // },
    // {
    //     path: '/StoresHexagram',
    //     name: 'StoresHexagram',
    //     component: StoresHexagram,
    // },
]

export const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
});
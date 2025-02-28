import { createRouter, createWebHistory } from "vue-router";
import DataBlock from "@/components/DataBlock.vue";
import FormBlock from "@/components/FormBlock.vue";

const routes = [
    { path: '/', component: FormBlock },
    { path: '/data', component: DataBlock },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
import {createRouter, createWebHashHistory} from 'vue-router'
import PlayGame from "@/views/PlayGame.vue";
import HallOfFame from "@/components/HallOfFame.vue";

const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes: [
        {
            path: "/",
            redirect: "/HomeView"
        },
        {path: "/HomeView", component: () => import('../views/HomeView.vue')},

        {
            path: '/game',
            name: 'Game',
            component: PlayGame
        },
        {
            path: '/hallOfFame',
            name: 'playGame',
            component: HallOfFame
        },

    ]
})

export default router

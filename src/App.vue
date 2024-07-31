<script setup>
import {onBeforeMount} from "vue";
import {SoundHelper} from "@/Helper/SoundHelper";
import {useGameStore} from "@/Store/game";

let game = useGameStore()

onBeforeMount(() => {
  SoundHelper.loadGameSounds()
  game.scoreList = JSON.parse(localStorage.getItem('scoreList') || '[]')
})

</script>

<template>
  <main class="all-center h-[100vh] bg-[#2b3925]">
    <router-view/>
  </main>
</template>

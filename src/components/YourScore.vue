<script setup>
import {useGameStore} from "@/Store/game";


const game = useGameStore()

</script>


<template>
  <div class="absolute right-0 top-0 w-48 h-12 bg-transparent all-center flex-col">
    <h2 class="font-mono"> High Score : {{ game.scoreList[0]?.score }}</h2>
    <h2 class="font-mono"> Your Score : {{ game.yourScore }}</h2>
  </div>
</template>


<script setup>

import {useGameStore} from "@/Store/game";

const game = useGameStore()
</script>

<template>
  <div class="all-center flex-col py-5 px-5 border-double border-4 border-orange-500 bg-green-800 rounded">
    <h2 class="text-3xl my-3 text-red-500 all-center">Game Over</h2>

    <div class="border-2 border-orange-500 bg-gradient-to-b w-full all-center flex-col rounded">
      <input type="text" class="text-md text-gray-950 font-mono py-1 my-2 w-[80%] px-2 rounded bg-gray-200 "
             v-model="game.playerDetail.playerName"
             placeholder="Enter your Name">

      <button class="border-2 border-green-500 rounded bg-green-500 p-0.5 w-1/3 my-1"
              @click="game.snake.addScoreInList()">Save
      </button>
    </div>

    <div class=" w-full all-center flex-col rounded-2xl my-3">
      <h2 class="text-xl my-2 font-mono">Your Score : {{ game.yourScore }}</h2>
      <hr class="w-11/12 border-black"/>
    </div>

    <Transition name="scale">
      <button class="w-16 h-16 my-3"
              @click.stop="game.restartGame()" v-if="game.saveScore">
        <img src="/pix/repeat.png" alt="repeat_icon">
      </button>
    </Transition>

    <Transition name="scale">
      <router-link to="/" class="" v-if="game.saveScore">
        <img class="w-16 h-16" @click="game.quitGame()" src="/pix/quit.png" alt="main-menu_icon">
      </router-link>
    </Transition>
  </div>
</template>

<script setup>
import {useGameStore} from "@/Store/game";

const game = useGameStore()
</script>

<template>
  <div>
    <div class="all-center flex-col bg-green-800 p-16 rounded border-2 border-orange-500">
      <div class="border-2 border-orange-500 w-80 py-2 rounded-2xl flex justify-around">
        <h2 class="text-gray-200">Music</h2>
        <input id="musicBar" v-model="game.musicVolume" class="w-1/2 accent-orange-500" max="100"
               min="0"
               name="range"
               type="range"
               v-on:input="game.setSound()">
      </div>

      <div class="border-2 border-orange-500 w-80 py-2 my-2 rounded-2xl flex justify-between">
        <h2 class="text-gray-200 ml-5">Vibration</h2>
        <label class="relative inline-flex items-center cursor-pointer mr-10">
          <input checked class="sr-only peer" type="checkbox" value="" @click="game.toggleVirateBtn()">
          <div
              class="w-11 h-6 bg-gray-600 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-gray-600 after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-gray-200 after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-500"></div>
        </label>
      </div>

      <div class="all-center my-10">
        <button class="">
          <img alt="play_icon" class="w-16 h-16" src="/pix/play.png" @click.stop="game.resumeGame()">
          <p class="text-sm text-gray-200">Play</p>
        </button>
        <button class="mx-4">
          <img alt="repeat_icon" class="w-16 h-16" src="/pix/repeat.png" @click.stop="game.restartGame()">
          <p class="text-sm text-gray-200">Repeat</p>
        </button>
        <router-link class="" to="/">
          <img alt="main-menu_icon" class="w-16 h-16" src="/pix/Menu_Icon.png">
          <p class="text-sm text-gray-200">MainMenu</p>
        </router-link>
      </div>
 
    </div>
  </div>
</template>

<style scoped>
</style>

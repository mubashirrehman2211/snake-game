<script setup>
import {useGameStore} from "@/Store/game";

const game = useGameStore()
</script>

<template>
  <div class="all-center flex-col bg-green-800 p-16 rounded border-2 border-orange-500">
    <div class="border-2 border-orange-500 w-80 py-2 rounded-2xl flex justify-around">
      <h2 class="text-gray-200">Music</h2>
      <input type="range" class="w-1/2 accent-orange-500" name="range" v-model="game.musicVolume"
             v-on:input="game.setSound()"
             id="musicBar"
             min="0"
             max="100">
    </div>

    <div class="border-2 border-orange-500 w-80 py-2 my-2 rounded-2xl flex justify-between">
      <h2 class="text-gray-200 ml-5">Vibration</h2>
      <label class="relative inline-flex items-center cursor-pointer mr-10">
        <input type="checkbox" value="" @click="game.toggleVirateBtn()" class="sr-only peer " checked>
        <div
            class="w-11 h-6  bg-gray-600 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-gray-600 after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-gray-200 after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-500"></div>
      </label>
    </div>

    <div class="border-2 border-orange-500 w-20 h-8 all-center mt-4 rounded bg-green-950 text-gray-200">
      <button @click="game.setting = false">Back</button>
    </div>
  </div>
</template>

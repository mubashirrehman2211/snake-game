<script setup>
import {useGameStore} from "@/Store/game";
import {onMounted} from "vue";

const game = useGameStore()


</script>

<template>
  <div class="bg-green-800 border-double border-4  border-orange-500 w-[100%] h-[700px] px-4 rounded">

    <div class="flex justify-end">
      <button class="text-gray-200 text-4xl font-bold hover:text-red-600" @click="game.HOF = false">&#215;</button>
    </div>

    <div class="my-5">
      <h2 class="all-center text-3xl text-gray-300">Hall Of Fame</h2>
      <hr class="w-1/2 m-auto border-dotted border-4"/>
    </div>

    <table class="m-auto">
      <tr class="border-2 border-orange-500">
        <th class="border-l-2 border-orange-500 px-3 py-2 font-mono text-xl text-gray-300">Rank</th>
        <th class="border-l-2 border-orange-500 px-3 py-2 font-mono text-xl text-gray-300">Name</th>
        <th class="border-l-2 border-orange-500 px-3 py-2 font-mono text-xl text-gray-300">Score</th>
        <th class="border-l-2 border-orange-500 px-3 py-2 font-mono text-xl text-gray-300">Date</th>
        <th class="border-l-2 border-orange-500 px-3 py-2 font-mono text-xl text-gray-300">Number of Mush</th>
      </tr>
      <tr class="border-2 border-orange-500" v-for="(user, index) in game.scoreList">
        <th class="border-l-2 border-orange-500 text-lg font-mono text-black">{{ index + 1 }}</th>
        <th class="border-l-2 border-orange-500 text-lg font-mono text-gray-300">{{ user.name }}</th>
        <th class="border-l-2 border-orange-500 text-lg font-mono text-black">{{ user.score }}</th>
        <th class="border-l-2 border-orange-500 text-lg font-mono text-black">{{ user.date }}</th>
        <th class="border-l-2 border-orange-500 text-lg font-mono text-black">{{ user.numberOfMush }}</th>
      </tr>
    </table>
  </div>
</template>



<script setup>
import {useGameStore} from "@/Store/game";

const game = useGameStore()

const p = defineProps({
  direction: String
})
const arrow = {D: '▼', U: '▲', R: '▶︎', L: '◀︎'}

</script>

<template>
  <button @click.stop="game.changeDirection(direction)"
          class="border-2 border-gray-500 text-gray-100 rounded-3xl flex w-12 h-12 all-center">
    {{ arrow[direction] }}
  </button>
</template>

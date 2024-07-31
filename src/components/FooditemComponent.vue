<script setup>
import {useGameStore} from "@/Store/game";
import {computed, onBeforeUnmount, onMounted, ref} from "vue";

const game = useGameStore()

const styles = computed(() => {
  return {
    width: game.gridBoxSize + 'px',
    height: game.gridBoxSize + 'px',
    left: game.foodItem.col * game.gridBoxSize + 'px',
    top: game.foodItem.row * game.gridBoxSize + 'px',
  }
})

let interval = ref(0)

onMounted(() => {
  interval.value = setInterval(() => {
    if (game.paused || game.gameOver) return
    game.foodItem.age += 1000
  }, 1000)
})

onBeforeUnmount(() => clearInterval(interval.value))
</script>

<template>
  <transition name="scale">
    <img :src="`/pix/${game.foodItem.color}Mush.png`"
         :style="styles"
         :class="{'animate-pulse-zoom': game.foodItem.disappearing}"
         class="absolute"
         :key="game.foodItem"
         alt="food"/>
  </transition>
</template>

<script setup>
import {useGameStore} from "@/Store/game";
import {computed} from "vue";
import {Box} from "@/Classes/Box";

const p = defineProps({
  box: Box,
})

const game = useGameStore()

const src = computed(() => {
  return p.box.isHead ? '/pix/SnakeHead.png' : `/pix/${p.box.color}Link.png`
})


const styles = computed(() => {
  const angles = {U: 0, D: 180, L: -90, R: 90}
  const headDirection = angles[game.snake.direction]

  return {
    left: p.box.col * game.gridBoxSize + 'px',
    top: p.box.row * game.gridBoxSize + 'px',
    width: game.gridBoxSize + 'px',
    height: game.gridBoxSize + 'px',
    transform: `rotate(${headDirection}deg)`,
    duration: game.speed + 'ms',
  }
})
</script>

<template>
  <img :src="src"
       :style="styles"
       class="snake absolute all-center transition-all text-xs ease-linear"
       alt="snake"/>
</template>

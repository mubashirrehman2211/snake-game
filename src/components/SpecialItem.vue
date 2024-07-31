<script setup>
import {useGameStore} from "@/Store/game";
import {computed} from "vue";

const game = useGameStore()

const styl = computed(() => {
  return {
    left: game.specialItem.col * game.gridBoxSize + 'px',
    top: game.specialItem.row * game.gridBoxSize + 'px',
    width: game.gridBoxSize + 'px',
    height: game.gridBoxSize + 'px'
  }
})
</script>

<template>
  <div v-if="!game.disableItem">
    <img :src="`/pix/${game.specialItem.item}.png`" :style="styl" class="absolute" alt="special-item"/>
    <div class="absolute animate-ping bg-yellow-100 rounded-full" :style="styl"></div>
  </div>
</template>

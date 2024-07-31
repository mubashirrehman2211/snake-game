<script setup>
import {useGameStore} from "@/Store/game";

const game = useGameStore()
</script>

<template>
  <!--  COUNT 3 -->
  <Transition name="popup-1">
    <div class="all-center absolute" v-if="game.count3">
      <div class="all-center w-16 h-16 border-2 border-orange-500 bg-orange-500 rounded-full">
        <h2 class="text-5xl text-gray-950">3</h2>
      </div>
    </div>
  </Transition>

  <!--  COUNT 2 -->
  <Transition name="popup-1">
    <div class="all-center absolute" v-if="game.count2">
      <div class="all-center w-16 h-16 border-2 border-orange-500 bg-orange-500 rounded-full">
        <h2 class="text-5xl text-gray-950">2</h2>
      </div>
    </div>
  </Transition>

  <!--  COUNT 1-->
  <Transition name="popup-1">
    <div class="all-center absolute" v-if="game.count1">
      <div class="all-center w-16 h-16 border-2 border-orange-500 bg-orange-500 rounded-full">
        <h2 class="text-5xl text-gray-950">1</h2>
      </div>
    </div>
  </Transition>
</template>


<style scoped>
.popup-1-enter-active {
  animation: bounce-out 0.7s;
}

.popup-1-leave-active {
  animation: bounce-out 0.7s reverse;
}

@keyframes bounce-out {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>

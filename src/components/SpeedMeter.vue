<script setup>

import {useGameStore} from "@/Store/game";

const game = useGameStore()


import {computed} from "vue";

const rotation = computed(() => {
  return {
    Transform: `rotate(${game.speed / 10}deg)`
  }

})
</script>

<template>
  <div
      class="speedometer-container image-circle fixed right-0 top-0 w-[150px] h-[150px] border-4 border-double border-orange-500 rounded-full overflow-hidden">
    <div
        class="speedometer-center absolute left-[67px] top-[67px] w-2 h-2 border-2 border-white bg-white rounded-full z-[20]"></div>
    <div
        class="speedometer-circle-hide absolute left-[11px] top-[11px] w-[120px] h-[120px] bg-green-800 rounded-full z-[9]"></div>

    <div
        class="speedometer-bottom-hide absolute left-[-10px] top-[75px] w-[170px] h-[100px] bg-green-800 rounded z-[11]">
      <!--      <p class="text-lg text-gray-300">{{ game.speed }}</p>-->
    </div>

    <div class="arrow-container absolute left-[16px] top-[16px] w-[110px] h-[110px] z-[12]">
      <div
          class="arrow-wrapper relative w-[110px] h-[110px] bg-transparent rotate-[10deg] transition-all duration-300"
          :style="rotation">
        <div
            class="arrow absolute left-[13px] top-[53px] w-[50px] h-[4px] bg-orange-500"></div>
        <!--        <img src="/pix/needle.png" class="arrow absolute left-[34px] top-[78px] w-[55px] h-[4px]"-->
        <!--             alt="">-->
      </div>
    </div>

    <div class="speedometer-scale absolute left-[69px] top-[1px] w-[4px] h-[140px] bg-red-700 rotate-[90deg]"></div>
    <div class="speedometer-scale absolute left-[69px] top-[1px] w-[4px] h-[140px] bg-red-700 rotate-[-80deg]"></div>
    <div class="speedometer-scale absolute left-[69px] top-[1px] w-[4px] h-[140px] bg-red-700 rotate-[-70deg]"></div>
    <div class="speedometer-scale absolute left-[69px] top-[1px] w-[4px] h-[140px] bg-red-700 rotate-[-60deg]"></div>
    <div class="speedometer-scale absolute left-[69px] top-[1px] w-[4px] h-[140px] bg-red-700 rotate-[-50deg]"></div>
    <div class="speedometer-scale absolute left-[69px] top-[1px] w-[4px] h-[140px] bg-red-700 rotate-[-40deg]"></div>
    <div
        class="speedometer-scale absolute left-[69px] top-[1px] w-[4px] h-[140px] bg-green-600 rotate-[-30deg]"></div>
    <div
        class="speedometer-scale absolute left-[69px] top-[1px] w-[4px] h-[140px] bg-green-600 rotate-[-20deg]"></div>
    <div
        class="speedometer-scale absolute left-[69px] top-[1px] w-[4px] h-[140px] bg-green-600 rotate-[-10deg]"></div>
    <div class="speedometer-scale absolute left-[69px] top-[1px] w-[4px] h-[140px] bg-green-600 rotate-[0deg]"></div>
    <div class="speedometer-scale absolute left-[69px] top-[1px] w-[4px] h-[140px] bg-green-600 rotate-[10deg]"></div>
    <div class="speedometer-scale absolute left-[69px] top-[1px] w-[4px] h-[140px] bg-green-600 rotate-[20deg]"></div>
    <div class="speedometer-scale absolute left-[69px] top-[1px] w-[4px] h-[140px] bg-blue-700 rotate-[30deg]"></div>
    <div class="speedometer-scale absolute left-[69px] top-[1px] w-[4px] h-[140px] bg-blue-700 rotate-[40deg]"></div>
    <div class="speedometer-scale absolute left-[69px] top-[1px] w-[4px] h-[140px] bg-blue-700 rotate-[50deg]"></div>
    <div class="speedometer-scale absolute left-[69px] top-[1px] w-[4px] h-[140px] bg-blue-700 rotate-[60deg]"></div>
    <div class="speedometer-scale absolute left-[69px] top-[1px] w-[4px] h-[140px] bg-blue-700 rotate-[70deg]"></div>
    <div class="speedometer-scale absolute left-[69px] top-[1px] w-[4px] h-[140px] bg-blue-700 rotate-[80deg]"></div>
    <div
        class="speedometer-scale absolute left-[69px] top-[1px] w-[4px] h-[140px] bg-gradient-to-r from-red-700 to-blue-700 rotate-[90deg]"></div>
  </div>
</template>
<style scoped>


</style>

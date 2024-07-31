<script setup>

import {useGameStore} from "@/Store/game";

const game = useGameStore()

</script>

<template>
  <div class="fixed left-0 top-0 all-center h-screen w-screen bg-[rgba(0,0,0,0.7)]">
    <div class="border-4 border-double border-orange-500 bg-green-800 w-1/2 px-3 rounded-lg">
      <div>
        <h2 class="text-2xl font-mono py-3">INTRODUCTION</h2>
        <p class="all-center font-sans text-md text-gray-200 break-words">This game called "Snake Mania" or "Snake
          Revolution"
          typically
          involve the
          player
          controlling a
          snake,
          there is no official version of game, so gameplay varies.The most common version of the game involves the
          snake eating items which make it longer, with the objective being to avoid running into a border or the itself
          for
          as long as possible.</p>
        <p class="all-center font-sans text-md text-gray-200 my-3 break-words">The player loses when the snake either
          runs into a
          border
          or its own body.<br/>Because of this, the game
          becomes
          more difficult as it goes on, due to the growth of the snake.</p>
      </div>

      <div class="all-center">
        <button class="w-24 h-12 border-2 border-orange-500 bg-green-600 text-gray-300 rounded my-3 hover:bg-green-700"
                @click.stop="game.hideIntro()">Continue
        </button>
      </div>
    </div>
  </div>
</template>


<style scoped>

.edit-1 {
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  animation: typing 1s, cursor 1s step-end infinite;
}

/* cursor blinking */
@keyframes cursor {
  50% {
    border-color: #000;
  }
}

/* typing effect */
@keyframes typing {
  from {
    width: 0;
  }
}

</style>

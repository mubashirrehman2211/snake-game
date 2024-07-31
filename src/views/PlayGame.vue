<script setup>
import {useGameStore} from '@/Store/game.js'
import BoxComponent from "@/views/BoxComponent.vue";
import {Snake} from '@/Classes/Snake.js'
import {computed, onBeforeMount, onBeforeUnmount, onMounted} from "vue";
import ButtonComponent from "@/components/ButtonComponent.vue";
import PopUp from "@/components/PopUp.vue";
import GameoverPopup from "@/components/GameoverPopup.vue";
import FooditemComponent from "@/components/FooditemComponent.vue";
import {SoundHelper} from "@/Helper/SoundHelper";
import YourScore from "@/components/YourScore.vue";
import SpecialItem from "@/components/SpecialItem.vue";
import PauseMenu from "@/components/PauseMenu.vue";
import StartCount from "@/components/StartCount.vue";
import SpeedMeter from "@/components/SpeedMeter.vue";

const game = useGameStore()


onBeforeMount(() => {
  game.snake = new Snake()
  game.generateFoodItem()
  game.generateSpecialFoodItem()
})
onMounted(() => {
  game.soundInterval()
  game.getSound()
  game.vibrateSound()

  function checkScore() {
    let score = localStorage.getItem('yourScore')
    if (score) {
      return game.highScore = score
    }
  }

  game.startCount()
  checkScore()
  game.keyboardBtn()

  window.addEventListener('resize', game.resizeGameBoard)

  SoundHelper.play('gameplayMusic')

  setInterval(() => {
    game.showSpecialItem = !game.showSpecialItem
  }, 10000)

})


onBeforeUnmount(() => {
  window.removeEventListener('resize', game.resizeGameBoard)
})
const mainStyle = computed(() => {
  return {
    width: game.gridSize + 'px',
    height: game.gridSize + 'px',
  }
})

</script>

<template>
  <div id="game-board" :style="mainStyle" class="game relative rounded-lg">
    <div class="absolute left-0 top-0" @click="game.gameMenu()">
      <img src="/pix/pause-1.png" class="rounded-full w-12 opacity-80" alt="pause_icon">
    </div>
    <YourScore/>


    <transition-group name="scale">
      <BoxComponent v-for="box in game.snake.boxes" :key="box" :box="box"/>
    </transition-group>

    <FooditemComponent/>
    <SpecialItem/>

    <Transition name="popup">
      <pop-up v-if="game.gameOver">
        <GameoverPopup/>
      </pop-up>
    </Transition>

    <ButtonComponent/>
    <SpeedMeter/>
  </div>


  <StartCount/>

  <Transition name="popup">
    <pop-up v-if="game.pauseMenu">
      <PauseMenu/>
    </pop-up>
  </Transition>
</template>

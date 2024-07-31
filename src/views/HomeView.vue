<script setup>
import MainMenu from "@/components/MainMenu.vue";
import IntroductionPopup from "@/components/IntroductionPopup.vue";
import {useGameStore} from "@/Store/game";
import {onBeforeMount, onMounted} from "vue";

const game = useGameStore()

onMounted(() => {
  game.introPopUp = JSON.parse(localStorage.getItem('hideIntro'))
})

</script>

<template>
  <div class="w-screen h-screen background-image all-center">
    <MainMenu/>
    <Transition name="popup">
      <IntroductionPopup v-if="!game.introPopUp"/>
    </Transition>
  </div>
</template>




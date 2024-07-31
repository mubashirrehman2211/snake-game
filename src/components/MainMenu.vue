<script setup>
import PopUp from "@/components/PopUp.vue";
import SettingMenu from "@/components/SettingMenu.vue";
import {useGameStore} from "@/Store/game";
import HallOfFame from "@/components/HallOfFame.vue";
import IntroductionPopup from "@/components/IntroductionPopup.vue";


const game = useGameStore()
</script>

<template>
  <!--  PLAY BUTTON-->

  <div class="all-center flex-col w-full h-[70%]">
    <router-link to="/game" class="flex w-1/4 m-auto toggle">
      <div><img class="hover:scale-110 duration-200" src="/pix/play.png" alt="play_icon"/></div>
      <div class="hover-name font-mono text-3xl text-gray-800 m-5">Play</div>
    </router-link>

    <!--    SETTING BUTTON-->

    <div class="flex w-1/4 m-auto toggle" @click="game.setting = true">
      <div><img class="hover:scale-110 duration-200" src="/pix/settings.png" alt="settings_icon"/></div>
      <div class="hover-name font-mono text-3xl text-gray-800 m-5">Setting</div>
    </div>

    <Transition name="popup">
      <pop-up v-if="game.setting">
        <SettingMenu/>
      </pop-up>
    </Transition>

    <!--    HALL OF FAME BUTTON-->

    <div class="flex w-1/4 m-auto toggle" @click="game.HOF = true">
      <div><img class="hover:scale-110 duration-200" src="/pix/hallOfFame.png" alt="hallOfFame_icon"/></div>
      <div class="hover-name font-mono text-3xl text-gray-800 m-5">High Score</div>
    </div>

    <Transition name="popup">
      <pop-up v-if="game.HOF">
        <HallOfFame/>
      </pop-up>
    </Transition>

    <!--    HELP BUTTON-->

    <div @click="game.introPopUp = false" class="flex w-1/4 m-auto toggle">
      <div><img class="hover:scale-110 duration-200" src="/pix/help.png" alt="help_icon"/></div>
      <div class="hover-name font-mono text-3xl text-gray-800 m-5">Help</div>
    </div>

    <Transition name="popup">
      <pop-up v-if="!game.introPopUp">
        <IntroductionPopup/>
      </pop-up>
    </Transition>

    <!--    QUIT BUTTON-->

    <router-link to="/" class="flex w-1/4 m-auto toggle">
      <div><img class="hover:scale-110 duration-200" src="/pix/quit.png" alt="quit_icon"/></div>
      <div class="hover-name font-mono text-3xl text-gray-800 m-5">Quit</div>
    </router-link>
  </div>
</template>

<style scoped>
.hover-name {
  transform: translateX(100px);
  opacity: 0;
  transition: 0.3s linear;
}

.toggle:hover .hover-name {
  transform: translateX(0);
  opacity: 1;
}

</style>


<script setup>
import BaseButton from "@/components/BaseButton.vue";
import {useGameStore} from "@/Store/game";

const game = useGameStore()
</script>

<template>
  <div class="fixed bottom-4 right-4 grid grid-cols-3 grid-rows-3"
       @click.stop="() =>{}">
    <base-button direction="U" class="col-start-2"/>

    <base-button direction="L" class="row-start-2 col-start-1"/>

    <base-button direction="R" class="row-start-2 col-start-3"/>

    <base-button direction="D" class="row-start-3 col-start-2"/>
  </div>

</template>



<template>
  <v-animation-three
    :width="164"
    :height="164"
    :lights="lights"
    :auto-play="true"
    :rotation="rotation"
    :file-path="file"
    :background-alpha="0"
    @load="onLoad"
  />
</template>

<script setup>
const file = "/models/balls.glb"
const rotation = ref();
rotation.value = {
  x: 0,
  y: 0,
  z: 0,
};
const lights = ref()
lights.value = [
  {
    type: "AmbientLight",
    color: 0xaaaaaa,
  },
  {
    type: "DirectionalLight",
    position: { x: 10, y: 10, z: 10 },
    color: 0xffffff,
    intensity: 0.8,
  },
]

const rotate = () => {
  requestAnimationFrame(rotate);
  rotation.value.y -= 0.01;
}
const onLoad = () => {
  rotate();
}
</script>
<template>
  <div ref="el"></div>
</template>

<script setup>
import P5 from "p5";
const distinct = (arr) => Array.from(new Set(arr))
const el = ref('el')
const initialEvents = [
  "preload",
  "setup",
  "draw",
  "deviceMoved",
  "deviceTurned",
  "deviceShaken",
  "keyPressed",
  "keyReleased",
  "keyTyped",
  "mouseMoved",
  "mouseDragged",
  "mousePressed",
  "mouseReleased",
  "mouseClicked",
  "doubleClicked",
  "mouseWheel",
  "touchStarted",
  "touchMoved",
  "touchEnded",
  "windowResized",
];
const props = defineProps(["additionalEvents"])
const p5Events = computed(() => {
  const { additionalEvents } = props;
  return Array.isArray(additionalEvents)
    ? distinct(initialEvents.concat(additionalEvents))
    : initialEvents;
})
const emits = defineEmits([
  "sketch",
  "preload",
  "setup",
  "draw",
  "deviceMoved",
  "deviceTurned",
  "deviceShaken",
  "keyPressed",
  "keyReleased",
  "keyTyped",
  "mouseMoved",
  "mouseDragged",
  "mousePressed",
  "mouseReleased",
  "mouseClicked",
  "doubleClicked",
  "mouseWheel",
  "touchStarted",
  "touchMoved",
  "touchEnded",
  "windowResized",
])
onMounted(() => {
  new P5((sketch) => {
    emits("sketch", sketch)
    for (const p5EventName of p5Events.value) {
      const vueEventName = (p5EventName || '').toLowerCase();
      const savedCallback = sketch[p5EventName];
      sketch[p5EventName] = (...args) => {
        if (savedCallback) {
          savedCallback(sketch, ...args);
        }
        emits(vueEventName, sketch, ...args);
      };
    }
  }, el.value);
})
</script>

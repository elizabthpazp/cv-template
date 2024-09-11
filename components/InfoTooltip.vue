<template>
  <div class="relative inline-block">
    <span
      @mouseenter="showTooltip"
      @mouseleave="hideTooltip"
      @touchstart="toggleTooltip"
      @focus="showTooltip"
      @blur="hideTooltip"
      tabindex="0"
      class="cursor-help"
    >
     <InfoIcon class="w-4 h-4" />
    </span>
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    > 
      <div
        v-if="isVisible"
        class="absolute z-50 px-3 py-2 text-sm font-medium border-2 border-gray-700 text-white bg-gray-900 rounded-lg shadow-sm tooltip"
        :class="[`top-full sm:top-full md:${tooltipClass} lg:${tooltipClass} xl:${tooltipClass}`]"
        role="tooltip"
      >
        {{ text }}
        <div class="tooltip-arrow" data-popper-arrow></div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { InfoIcon } from "lucide-vue-next";

const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    default: "top",
    validator: (value) => ["top", "bottom", "left", "right"].includes(value),
  },
});

const isVisible = ref(false);

const tooltipClass = computed(() => {
  switch (props.position) {
    case "bottom":
      return "top-full mt-2";
    case "left":
      return "right-full mr-2";
    case "right":
      return "left-full ml-2";
    default:
      return "bottom-full mb-2";
  }
});

const showTooltip = () => {
  isVisible.value = true
}

const hideTooltip = () => {
  isVisible.value = false
}

const toggleTooltip = (event) => {
  event.preventDefault() 
  isVisible.value = !isVisible.value
}
 
const handleClickOutside = (event) => {
  if (isVisible.value && !event.target.closest('.relative')) {
    isVisible.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
  document.addEventListener('touchstart', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
  document.removeEventListener('touchstart', handleClickOutside)
})
</script>

<style scoped>
.tooltip {
  max-width: 300px;
  min-width: 200px;
  white-space: normal;
  word-wrap: break-word;
}

.bottom-full, .top-full {
  left: 50%;
  transform: translateX(-50%);
}

.tooltip-arrow {
  position: absolute;
  width: 0;
  height: 0;
  border-style: solid;
}

.tooltip-arrow::before {
  content: '';
  position: absolute;
  width: 8px;
  height: 8px;
  background: inherit;
  transform: rotate(45deg);
}

.top-full .tooltip-arrow {
  top: -4px;
  left: 50%;
  transform: translateX(-50%);
}

.bottom-full .tooltip-arrow {
  bottom: -4px;
  left: 50%;
  transform: translateX(-50%);
}

.left-full .tooltip-arrow {
  top: 50%;
  right: -4px;
  transform: translateY(-50%);
}

.right-full .tooltip-arrow {
  top: 50%;
  left: -4px;
  transform: translateY(-50%);
}

.left-full, .right-full {
  white-space: normal;
  word-wrap: break-word;
  width: max-content;
}

.left-full {
  right: 100%;
}

.right-full {
  left: 100%;
}
</style>
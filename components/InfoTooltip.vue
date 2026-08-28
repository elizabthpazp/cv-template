<template>
  <div class="relative inline-block">
    <span
      @mouseenter="showTooltip"
      @mouseleave="hideTooltip"
      @touchstart="toggleTooltip"
      @focus="showTooltip"
      @blur="hideTooltip"
      @keydown.enter="handleEnterKey"
      @keydown.escape="handleEscapeKey"
      tabindex="0"
      class="cursor-help inline-flex items-center justify-center min-w-[44px] min-h-[44px] p-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      role="button"
      :aria-label="ariaLabel || 'More information'"
      :aria-expanded="isVisible"
      aria-haspopup="true"
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
        ref="tooltipElement"
        class="absolute z-50 px-3 py-2 text-sm font-medium border-2 border-gray-700 text-white bg-gray-900 rounded-lg shadow-sm tooltip"
        :class="[`top-full sm:top-full md:${tooltipClass} lg:${tooltipClass} xl:${tooltipClass}`]"
        :style="{ maxWidth: maxWidth }"
        role="tooltip"
        :aria-live="isVisible ? 'polite' : 'off'"
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
  ariaLabel: {
    type: String,
    default: "",
  },
  maxWidth: {
    type: String,
    default: "300px",
  },
});

// Generate unique ID for this tooltip instance
const tooltipId = `tooltip-${Math.random().toString(36).substr(2, 9)}`;

// Try to inject global tooltip state, provide fallback if not available
const tooltipState = inject('tooltipState', null);
const isVisible = computed(() => {
  if (tooltipState) {
    return tooltipState.activeTooltipId.value === tooltipId;
  }
  return localVisible.value;
});

// Local state fallback for when global state isn't available
const localVisible = ref(false);

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
  if (tooltipState) {
    tooltipState.setActiveTooltip(tooltipId);
  } else {
    localVisible.value = true;
  }
}

const hideTooltip = () => {
  if (tooltipState) {
    tooltipState.clearActiveTooltip();
  } else {
    localVisible.value = false;
  }
}

const toggleTooltip = (event) => {
  event.preventDefault();
  if (isVisible.value) {
    hideTooltip();
  } else {
    showTooltip();
  }
}
 
const handleEnterKey = (event) => {
  event.preventDefault();
  toggleTooltip(event);
};

const handleEscapeKey = (event) => {
  event.preventDefault();
  hideTooltip();
};

const handleClickOutside = (event) => {
  if (isVisible.value && !event.target.closest('.relative')) {
    hideTooltip();
  }
}

// Tooltip positioning adjustment for mobile viewport
const tooltipElement = ref(null);

const adjustTooltipPosition = () => {
  if (!tooltipElement.value) return;
  
  const tooltip = tooltipElement.value;
  const rect = tooltip.getBoundingClientRect();
  const viewport = {
    width: window.innerWidth,
    height: window.innerHeight
  };
  
  // Reset any previous positioning adjustments
  tooltip.style.left = '';
  tooltip.style.right = '';
  tooltip.style.top = '';
  tooltip.style.bottom = '';
  
  // Adjust horizontal position if tooltip overflows
  if (rect.right > viewport.width) {
    tooltip.style.left = `${viewport.width - rect.width - 10}px`;
    tooltip.style.transform = 'translateX(0)';
  } else if (rect.left < 0) {
    tooltip.style.left = '10px';
    tooltip.style.transform = 'translateX(0)';
  }
  
  // Adjust vertical position if tooltip overflows
  if (rect.bottom > viewport.height && props.position === 'top') {
    tooltip.classList.remove('bottom-full', 'mb-2');
    tooltip.classList.add('top-full', 'mt-2');
  } else if (rect.top < 0 && props.position === 'bottom') {
    tooltip.classList.remove('top-full', 'mt-2');
    tooltip.classList.add('bottom-full', 'mb-2');
  }
};

// Watch for visibility changes to adjust positioning
watch(isVisible, (newValue) => {
  if (newValue) {
    nextTick(() => {
      adjustTooltipPosition();
    });
  }
});

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
  min-width: 200px;
  white-space: normal;
  word-wrap: break-word;
}

@media (max-width: 640px) {
  .tooltip {
    max-width: calc(100vw - 20px);
    min-width: 180px;
  }
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

@media (max-width: 640px) {
  .left-full, .right-full {
    max-width: calc(100vw - 20px);
  }
}

.left-full {
  right: 100%;
}

.right-full {
  left: 100%;
}

/* Focus styles for better keyboard navigation */
.cursor-help:focus {
  outline: 2px solid #6366f1;
  outline-offset: 2px;
}

/* Print styles to show tooltip content inline */
@media print {
  .cursor-help {
    display: none;
  }
  
  .tooltip-content-print {
    display: inline;
    font-size: 0.875rem;
    color: #4b5563;
    margin-left: 0.5rem;
  }
}
</style>
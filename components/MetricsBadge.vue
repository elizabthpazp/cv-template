<template>
  <span 
    :class="badgeClasses"
    class="inline-flex items-center px-2 py-1 rounded-md font-semibold text-sm transition-all duration-200"
    role="img"
    :aria-label="`${value} ${label || ''}`"
  >
    <span class="font-bold">{{ value }}</span>
    <span v-if="label" class="ml-1 font-medium">{{ label }}</span>
  </span>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  value: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    default: '',
  },
  variant: {
    type: String,
    default: 'info',
    validator: (value) => ['success', 'info', 'highlight'].includes(value),
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value),
  },
});

const badgeClasses = computed(() => {
  const baseClasses = [];
  
  // Variant classes
  switch (props.variant) {
    case 'success':
      baseClasses.push('bg-green-100 text-green-800 border border-green-200');
      break;
    case 'highlight':
      baseClasses.push('bg-indigo-100 text-indigo-800 border border-indigo-200');
      break;
    default:
      baseClasses.push('bg-blue-100 text-blue-800 border border-blue-200');
  }
  
  // Size classes
  switch (props.size) {
    case 'sm':
      baseClasses.push('text-xs px-1.5 py-0.5');
      break;
    case 'lg':
      baseClasses.push('text-base px-3 py-1.5');
      break;
    default:
      baseClasses.push('text-sm px-2 py-1');
  }
  
  return baseClasses.join(' ');
});
</script>

<style scoped>
/* Responsive scaling for mobile */
@media (max-width: 640px) {
  .text-sm {
    font-size: 0.8rem;
  }
  
  .text-xs {
    font-size: 0.7rem;
  }
  
  .text-base {
    font-size: 0.9rem;
  }
}

/* Print styles to ensure visibility */
@media print {
  .inline-flex {
    background-color: transparent !important;
    border: 1px solid #374151 !important;
    color: #374151 !important;
  }
}
</style>
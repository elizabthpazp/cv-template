<template>
  <li class="text-gray-700 space-y-1 mb-2">
    <div class="flex items-start gap-2 flex-wrap">
      <span class="font-semibold text-gray-800">{{ achievement.action }}</span>
      <span class="flex-1">{{ achievement.description }}</span>
      <MetricsBadge 
        v-if="achievement.metric"
        :value="achievement.metric.value"
        :label="achievement.metric.label"
        :variant="achievement.metric.variant"
        :size="achievement.metric.size || 'md'"
        class="ml-2 flex-shrink-0"
      />
    </div>
  </li>
</template>

<script setup>
import MetricsBadge from './MetricsBadge.vue';

const props = defineProps({
  achievement: {
    type: Object,
    required: true,
    validator: (value) => {
      return (
        typeof value.action === 'string' &&
        typeof value.description === 'string' &&
        (value.metric === undefined || 
         (typeof value.metric.value === 'string' && 
          ['success', 'info', 'highlight'].includes(value.metric.variant || 'info')))
      );
    }
  },
});
</script>

<style scoped>
/* Ensure proper spacing and alignment on mobile */
@media (max-width: 640px) {
  .flex-wrap {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .ml-2 {
    margin-left: 0;
    margin-top: 0.5rem;
  }
}

/* Print styles for ATS compatibility */
@media print {
  li {
    page-break-inside: avoid;
    margin-bottom: 0.5rem;
  }
  
  .font-semibold {
    font-weight: bold;
  }
}
</style>
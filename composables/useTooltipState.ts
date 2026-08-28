/**
 * Global tooltip state management composable
 * Ensures only one tooltip is visible at a time across the entire application
 * 
 * @returns {Object} Tooltip state management functions
 * @property {Ref<string | null>} activeTooltipId - Currently active tooltip identifier
 * @property {Function} setActiveTooltip - Set a tooltip as active
 * @property {Function} clearActiveTooltip - Clear the active tooltip
 * @property {Function} isTooltipActive - Check if a specific tooltip is active
 */

const activeTooltipId = ref<string | null>(null);

export const useTooltipState = () => {
  const setActiveTooltip = (tooltipId: string) => {
    activeTooltipId.value = tooltipId;
  };

  const clearActiveTooltip = () => {
    activeTooltipId.value = null;
  };

  const isTooltipActive = (tooltipId: string): boolean => {
    return activeTooltipId.value === tooltipId;
  };

  return {
    activeTooltipId: readonly(activeTooltipId),
    setActiveTooltip,
    clearActiveTooltip,
    isTooltipActive,
  };
};

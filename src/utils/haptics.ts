/**
 * Safe mobile haptic feedback wrapper
 */
export const triggerHaptic = (type: 'light' | 'medium' | 'heavy' | 'success' | 'warning', enabled: boolean = true) => {
  if (!enabled || typeof navigator === 'undefined' || !navigator.vibrate) return;

  try {
    switch (type) {
      case 'light':
        navigator.vibrate(12);
        break;
      case 'medium':
        navigator.vibrate(24);
        break;
      case 'heavy':
        navigator.vibrate(45);
        break;
      case 'warning':
        navigator.vibrate([20, 40, 20]);
        break;
      case 'success':
        navigator.vibrate([15, 30, 25, 30, 40]);
        break;
    }
  } catch {
    // Graceful fallback if device/browser disallows vibration
  }
};

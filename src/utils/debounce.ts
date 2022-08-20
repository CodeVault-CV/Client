export default function debounce(func: any, delay: number = 1000) {
  let timeout: NodeJS.Timeout | null;

  return function (...args: any) {
    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(() => {
      timeout = null;
      func(...args);
    }, delay);
  };
}

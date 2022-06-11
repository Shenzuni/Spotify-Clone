export function display_mm_ss(s: number) {

  const minutes = Math.floor(s / 60);
  const seconds = (s % 60).toString().padStart(2, "0");

  return minutes + ":" + seconds;
}

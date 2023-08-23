export function formatTime(time: string | null) {
  if (time == null) return "Present";
  return new Date(time).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
}

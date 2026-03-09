import { formatDistanceToNow } from "date-fns";

export function formatDate(dateString, isTimeAgo = false) {
  const date = new Date(dateString);
  if (isTimeAgo) {
    return formatDistanceToNow(date);
  } else {
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  }
}

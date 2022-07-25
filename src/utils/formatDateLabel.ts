function formatDate(date: Date) {
  const month = String(date.getMonth()).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${month}.${day}`;
}

export default function formatDateLabel(start: Date, end: Date) {
  return `${String(start.getFullYear())}.${formatDate(start)} ~ ${formatDate(end)}`;
}
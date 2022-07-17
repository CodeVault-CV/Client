function formatDate(date: Date) {
  const year = String(date.getFullYear()).slice(-2);
  const month = String(date.getMonth()).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}년 ${month}월 ${day}일`;
}

export default function formatDateLabel(start: Date, end: Date) {
  return `${formatDate(start)} - ${formatDate(end)}`;
}
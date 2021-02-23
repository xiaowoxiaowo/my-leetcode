export function textSort (text) {
  if (Array.isArray(text)) return JSON.stringify(text);
  return text;
}

export function pritnf (text) {
  const value = textSort(text);
  document.getElementById('text').innerHTML = value;
}

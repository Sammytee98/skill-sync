export const stripHtml = (html) => {
  const div = document.createElement("div");
  const stripped = html.replace(/<br\s*\/?>/gi, "\n");
  // const stripped = newLines.replace(/|/gi, "\n");
  div.innerHTML = stripped.replace(/%/g, " ");
  return div.textContent || div.innerText || "";
};

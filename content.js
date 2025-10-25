// Optional: Highlight selected text
document.addEventListener("mouseup", () => {
    const selectedText = window.getSelection().toString();
    if (selectedText) console.log("Selected text:", selectedText);
});

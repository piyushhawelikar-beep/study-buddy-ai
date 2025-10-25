const inputText = document.getElementById("inputText");
const outputDiv = document.getElementById("output");

document.getElementById("summarizeBtn").addEventListener("click", async () => {
    const text = inputText.value;
    if (!text) return alert("Please enter some text");
    const summary = await summarizeText(text);
    outputDiv.innerText = summary;
});

document.getElementById("translateBtn").addEventListener("click", async () => {
    const text = inputText.value;
    if (!text) return alert("Please enter some text");
    const translated = await translateText(text, "hi");
    outputDiv.innerText = translated;
});

document.getElementById("rewriteBtn").addEventListener("click", async () => {
    const text = inputText.value;
    if (!text) return alert("Please enter some text");
    const rewritten = await rewriteText(text);
    outputDiv.innerText = rewritten;
});

document.getElementById("quizBtn").addEventListener("click", async () => {
    const text = inputText.value;
    if (!text) return alert("Please enter some text");
    const quiz = await generateQuiz(text);
    outputDiv.innerText = quiz;
});

// --- Chrome Built-in AI API Functions ---
async function summarizeText(text) {
    try { const response = await chrome.ai.summarizer.summarize({ input: text }); return response.output; } 
    catch (err) { console.error(err); return "Error: Could not summarize text."; }
}

async function translateText(text, targetLang) {
    try { const response = await chrome.ai.translator.translate({ input: text, targetLanguage: targetLang }); return response.output; } 
    catch (err) { console.error(err); return "Error: Could not translate text."; }
}

async function rewriteText(text) {
    try { const response = await chrome.ai.rewriter.rewrite({ input: text, style: "improve" }); return response.output; } 
    catch (err) { console.error(err); return "Error: Could not rewrite text."; }
}

async function generateQuiz(text) {
    try { const response = await chrome.ai.prompt.create({ input: `Create 5 multiple-choice quiz questions from this text:\n${text}` }); return response.output; } 
    catch (err) { console.error(err); return "Error: Could not generate quiz."; }
}

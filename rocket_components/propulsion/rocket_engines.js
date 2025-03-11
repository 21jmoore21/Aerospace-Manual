function toggleSolution(id, caretId) {
    var solution = document.getElementById(id);
    var caret = document.getElementById(caretId);
    var isOpen = getComputedStyle(solution).display === 'none'; // Correct check
    solution.style.display = isOpen ? 'block' : 'none';
    caret.classList.toggle('open', isOpen);
}

function changeSpanText(spanId) {
    const spanElement = document.getElementById(spanId);
    if (spanElement.textContent == " Show Answer") {
        spanElement.textContent = " Hide Answer";
    } 
    else if (spanElement.textContent == " Hide Answer"){
        spanElement.textContent = " Show Answer";
    }
    else if (spanElement.textContent == " Hide Work"){
        spanElement.textContent = " Show Work";
    }
    else if (spanElement.textContent == " Show Work"){
        spanElement.textContent = " Hide Work";
    }
}
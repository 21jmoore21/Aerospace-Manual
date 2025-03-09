function toggleSolution(id, caretId) {
    var solution = document.getElementById(id);
    var caret = document.getElementById(caretId);
    var isOpen = getComputedStyle(solution).display === 'none'; // Correct check
    solution.style.display = isOpen ? 'block' : 'none';
    caret.classList.toggle('open', isOpen);
}
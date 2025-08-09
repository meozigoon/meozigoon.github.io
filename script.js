// Footer year
document.getElementById("yearNow").textContent = new Date().getFullYear();

// Timeline toggle: show only 2025 by default
const toggleBtn = document.getElementById("toggleYears");
let showAll = false;
toggleBtn.addEventListener("click", () => {
    showAll = !showAll;
    document.querySelectorAll("#timelineList .year-block").forEach((block) => {
        const year = block.getAttribute("data-year");
        if (showAll) {
            block.classList.remove("hidden");
        } else {
            if (year !== "2025") {
                block.classList.add("hidden");
            } else {
                block.classList.remove("hidden");
            }
        }
    });
    toggleBtn.textContent = showAll ? "올해만 보기" : "전체 연도 보기";
});

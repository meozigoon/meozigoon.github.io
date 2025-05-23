const btn = document.getElementById("toggle-experience");
            const timelineToggleWrapper = document.getElementById(
                "timeline-toggle-wrapper"
            );
            let opened = false;
            btn.addEventListener("click", () => {
                opened = !opened;
                timelineToggleWrapper.style.display = opened ? "block" : "none";
                btn.textContent = opened ? "접기" : "펼치기";
            });
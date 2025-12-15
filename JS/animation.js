function typeEffectHTML(element, speed) {
    const originalHTML = element.innerHTML;
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = originalHTML;

    const fullText = tempDiv.textContent; // extract plain text
    let i = 0;

    const tagSpan = element.querySelector("span");
    const spanText = tagSpan ? tagSpan.textContent : "";

    element.innerHTML = "";

    const timer = setInterval(() => {
        if (i <= fullText.length) {
            let typed = fullText.substring(0, i);
            if (typed.includes(spanText)) {
                typed = typed.replace(spanText, `<span>${spanText}</span>`);
            }
            element.innerHTML = typed.replace("\n", "<br>");
            i++;
        } else {
            clearInterval(timer);
        }
    }, speed);
}

document.addEventListener("DOMContentLoaded", function () {
    // Apply to hero title
    const h1 = document.querySelector(".hero h1");
    if (h1) {
        typeEffectHTML(h1, 75);
    }

    // Animate skill items and hero paragraph
    const skillItems = document.querySelectorAll(".skill-item");
    const heroItems = document.querySelectorAll(".heroP");

    skillItems.forEach((item, index) => {
        item.style.opacity = 0;
        item.style.transform = "translateY(20px)";
        setTimeout(() => {
            item.style.transition = "all 0.5s ease";
            item.style.opacity = 1;
            item.style.transform = "translateY(0)";
        }, index * 150);
    });
    heroItems.forEach((item, index) => {
        item.style.opacity = 0;
        item.style.transform = "translateY(20px)";
        setTimeout(() => {
            item.style.transition = "all 0.9s ease";
            item.style.opacity = 1;
            item.style.transform = "translateY(0)";
        }, index * 150);
    });
});
$(document).ready(function() {
    const textElement = $(".text");
    const originalText = textElement.text();
    textElement.text(""); // Clear initial text

    let i = 0;
    const typingSpeed = 75; // ms per character
    const cursorBlinkSpeed = 500; // ms

    // Add blinking cursor
    textElement.append('<span class="cursor">|</span>');
    const cursor = $(".cursor");

    // Start typing animation
    const typingInterval = setInterval(function() {
        if (i < originalText.length) {
            textElement.html(
                originalText.substring(0, i+1) +
                '<span class="cursor">|</span>'
            );
            i++;
        } else {
            clearInterval(typingInterval);
            // Change cursor to steady after typing completes
            cursor.css("animation", "none").css("opacity", "1");
        }
    }, typingSpeed);

    // Add CSS for blinking cursor
    $("<style>")
        .prop("type", "text/css")
        .html(`
            .cursor {
                animation: blink ${cursorBlinkSpeed}ms infinite;
                opacity: 1;
            }
            @keyframes blink {
                0%, 100% { opacity: 1; }
                50% { opacity: 0; }
            }
        `)
        .appendTo("head");
});
function getElementTop(element) {
    const rect = element?.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return rect ? rect.top + scrollTop : null;
}

function animateRunningNumbers(containerClass, numberClass) {
    const container = document.querySelector(`.${containerClass}`);
    const numbers = container?.querySelectorAll(`.${numberClass}`);
    if (!container || !numbers) return;

    let isAnimated = false;

    function handleScroll() {
        const containerTop = getElementTop(container);
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;

        if (containerTop && containerTop < scrollTop + windowHeight && !isAnimated) {
            isAnimated = true;
            numbers.forEach(number => {
                const targetValue = parseInt(number.textContent.replace(/\D/g, ''), 10);
                if (isNaN(targetValue)) return;

                let currentValue = 0;
                const increment = Math.ceil(targetValue / 100); // Animation speed
                const interval = setInterval(() => {
                    currentValue += increment;
                    if (currentValue >= targetValue) {
                        currentValue = targetValue;
                        clearInterval(interval);
                    }
                    number.textContent = `${currentValue}`;
                }, 20); // Update interval
            });

            window.removeEventListener("scroll", handleScroll);
        }
    }

    window.addEventListener("scroll", handleScroll);
}

animateRunningNumbers("js-running-value", "js-running-number");


document.querySelector('.video-content-play-btn').addEventListener('click', function() {
    var videoElement = document.querySelector('.video-content-element');
    var thumbnail = document.querySelector('.video-content-thumbnail');
    
    thumbnail.style.display = 'none';
    videoElement.style.display = 'block';
});
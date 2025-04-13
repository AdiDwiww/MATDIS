const textElement = document.querySelector(".aqua");
        const words = ["Permutasi", "Kombinasi"];
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function typeEffect() {
            let currentWord = words[wordIndex];
            let displayText = isDeleting 
                ? currentWord.substring(0, charIndex--) 
                : currentWord.substring(0, charIndex++);

            textElement.textContent = displayText;

            let speed = isDeleting ? 100 : 150;

            if (!isDeleting && charIndex === currentWord.length + 1) {
                speed = 1000; // Tunggu sebelum menghapus
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
            }

            setTimeout(typeEffect, speed);
        }

        typeEffect();
const circle = document.getElementById('circle');
const toggleButton = document.getElementById('toggleButton');

        toggleButton.addEventListener('click', () => {
            if (circle.style.backgroundColor === 'red') {
                circle.style.backgroundColor = 'green';
                toggleButton.textContent = 'Turn Off';
            } else {
                circle.style.backgroundColor = 'red';
                toggleButton.textContent = 'Turn On';
            }
        });
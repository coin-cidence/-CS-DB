document.addEventListener('DOMContentLoaded', function() {
    const hindiButton = document.getElementById('hindiButton');
    const englishButton = document.getElementById('englishButton');

    hindiButton.addEventListener('mouseover', function() {
        englishButton.querySelector('.Container').style.backgroundColor = '#FFFFFF';
        hindiButton.querySelector('.Container').style.backgroundColor = '#D4D4D4';
        hindiButton.querySelector('.language-option.hindi .checkmark').style.display = 'inline';
    });

    hindiButton.addEventListener('mouseout', function() {
        englishButton.querySelector('.Container').style.backgroundColor = '#D4D4D4';
        hindiButton.querySelector('.Container').style.backgroundColor = '#FFFFFF';
        hindiButton.querySelector('.language-option.hindi .checkmark').style.display = 'none';
    });
});

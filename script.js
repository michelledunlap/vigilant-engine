document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelectorAll('.emotion').forEach(emotion => {
        emotion.addEventListener('click', function() {
            // Toggle greyed-out class
            this.classList.toggle('greyed-out');
            // If this is a sub-emotion, grey out its children
            let nextElement = this.nextElementSibling;
            while(nextElement && nextElement.classList.contains('emotion-subcolumn')) {
                Array.from(nextElement.querySelectorAll('.emotion')).forEach(child => {
                    child.classList.add('greyed-out');
                });
                nextElement = nextElement.nextElementSibling;
            }
        });
    });
});

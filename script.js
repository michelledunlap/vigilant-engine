document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelectorAll('.emotion').forEach(emotion => {
        emotion.addEventListener('click', function() {
            const relatedSection = document.getElementById(this.dataset.related);
            if (relatedSection) {
                // Toggle the related section visibility
                relatedSection.style.display = relatedSection.style.display === 'none' ? 'block' : 'none';
            }
            // Toggle greyed-out class
            this.classList.toggle('greyed-out');
            if (this.dataset.related) {
                // Grey out all related emotions
                document.querySelectorAll('#' + this.dataset.related + ' .emotion').forEach(relatedEmotion => {
                    relatedEmotion.classList.add('greyed-out');
                });
            }
        });
    });
});

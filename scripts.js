fetch('tips.json')
    .then(response => response.json())
    .then(data => {
        const tips = data.tips;
        const today = new Date();
        const startOfYear = new Date(today.getFullYear(), 0, 0);
        const dayOfYear = Math.floor((today - startOfYear) / 1000 / 60 / 60 / 24);
        const tipIndex = dayOfYear % tips.length;
        document.getElementById('tip').textContent = tips[tipIndex];
    })
    .catch(error => console.error('Error loading tips:', error));

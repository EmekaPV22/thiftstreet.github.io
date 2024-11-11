window.addEventListener('scroll', function () {
    const items = document.querySelectorAll('.item.hidden');
    items.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
            item.classList.remove('hidden');
            item.style.animation = getAnimationDirection((index + 1) % 4);
        }
    });
});

function getAnimationDirection(direction) {
    switch (direction) {
        case 1: // Fly in from the left
            return 'flyInLeft 1.2s ease forwards;';
        case 2: // Fly in from the bottom
            return 'flyInBottom 1.2s ease forwards;';
        case 3: // Fly in from the top
            return 'flyInTop 1.2s ease forwards;';
        case 0: // Fly in from the right
            return 'flyInRight 1.2s ease forwards;';
    }
    return '';
}

function openMenu() {
    document.getElementById('sideMenu').style.left = '0';
    document.body.classList.add('shrink');

    // Toggle buttons
    document.querySelector('.menu-btn').style.display = 'none';
    document.querySelector('.close-btn').style.display = 'block';
}

function closeMenu() {
    document.getElementById('sideMenu').style.left = '-300px';
    document.body.classList.remove('shrink');

    // Toggle buttons
    document.querySelector('.menu-btn').style.display = 'block';
    document.querySelector('.close-btn').style.display = 'none';
}

window.onload = function() {
    setTimeout(function() {
        // Trigger the logo to move off-screen
        document.querySelector('header h1').style.animation = 'moveLogoRight 1s forwards';
        // Trigger the text to fade out
        document.querySelector('header p').style.animation = 'fadeOutText 0.25s forwards';
        // After the logo moves off-screen, display the "Thrift Gallery" message
        setTimeout(function() {
            document.getElementById('thrift-gallery-message').style.display = 'block';
            document.getElementById('thrift-gallery-message').style.opacity = '1';
        }, 1000); // Wait for the logo animation to finish before showing the message
    }, 11000); // Trigger after 2 seconds
};

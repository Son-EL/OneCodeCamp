function createRandomCircle() {
    // Create a new circle element
    const circle = document.createElement('div');
    
    // Set circle styles
    const size = Math.floor(Math.random() * 200) + 20; 
    const color = '#3498db'; // Blue color

    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
    circle.style.borderRadius = '50%';
    circle.style.backgroundColor = color;
    circle.style.position = 'absolute';

    // Set circle position based on click coordinates
    const x = event.clientX - size / 2;
    const y = event.clientY - size / 2;

    circle.style.left = `${x}px`;
    circle.style.top = `${y}px`;

    // Append circle to the body
    document.body.appendChild(circle);
}

// Attach the click event listener to the body
document.body.addEventListener('click', createRandomCircle);
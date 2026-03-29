// ... existing code ...

// Load gallery images
function loadGallery() {
  const galleryContainer = document.getElementById('gallery-container');
  if (!galleryContainer) return; // Only run on gallery.html

  // Set the total number of photos you have in the folder
  const numberOfPhotos = 7;
  const imagePaths = [];

  // Automatically generate paths like: img/photos/photo-1.jpg, img/photos/photo-2.jpg, etc.
  for (let i = 1; i <= numberOfPhotos; i++) {
    imagePaths.push(`img/photos/photo-${i}.jpg`);
  }

  // Group images
  const groupedImages = {
    'Our Journey': imagePaths
  };

  // Generate HTML for each group
  for (const [day, srcArray] of Object.entries(groupedImages)) {
    const section = document.createElement('section');
    section.className = 'card';

    const title = document.createElement('h2');
    title.style.color = 'var(--primary-color)';
    title.style.borderBottom = '2px solid var(--secondary-color)';
    title.style.paddingBottom = '0.5rem';
    title.style.marginBottom = '1.5rem';
    title.textContent = day;
    section.appendChild(title);

    const grid = document.createElement('div');
    grid.style.display = 'grid';
    grid.style.gridTemplateColumns = 'repeat(auto-fit, minmax(250px, 1fr))';
    grid.style.gap = '1rem';

    srcArray.forEach((src) => {
      const imgWrapper = document.createElement('div');
      imgWrapper.className = 'image-placeholder';
      imgWrapper.style.height = '200px';
      imgWrapper.style.marginBottom = '0';
      imgWrapper.style.overflow = 'hidden';
      imgWrapper.style.padding = '0'; // Remove padding to fit image nicely

      const img = document.createElement('img');
      img.src = src;
      img.alt = 'Gallery photo';
      img.style.width = '100%';
      img.style.height = '100%';
      img.style.objectFit = 'cover';

      imgWrapper.appendChild(img);
      grid.appendChild(imgWrapper);
    });

    section.appendChild(grid);
    galleryContainer.appendChild(section);
  }
}

// ... existing code ...
document.addEventListener('DOMContentLoaded', () => {
  loadGallery();
});

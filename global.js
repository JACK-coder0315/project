const supportContainer = document.querySelector('#support-section');
const opposeContainer = document.querySelector('#oppose-section');

async function loadProject2Data() {
  const response = await fetch('./lib/projectdata.json');
  const data = await response.json();

  data.forEach(item => {
    const figure = document.createElement('figure');
    figure.innerHTML = `
      <img src="${item.image}" alt="${item.alt}">
      <figcaption><strong>${item.caption}</strong></figcaption>
    `;
    if (item.section === 'support') {
      supportContainer.appendChild(figure);
    } else {
      opposeContainer.appendChild(figure);
    }
  });
}

loadProject2Data();
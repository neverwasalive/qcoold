const workersData = [
  { name: "John Smith", info: "Engineer", photo: "img/worker2.png" },
  { name: "Emily Johnson", info: "Designer", photo: "img/worker3.png" },
  { name: "Michael Brown", info: "Manager", photo: "img/worker4.png" },
  { name: "Sarah Davis", info: "Developer", photo: "img/worker5.png" },
  { name: "David Wilson", info: "Tester", photo: "img/worker6.png" },
  { name: "Sophia Martinez", info: "Analyst", photo: "img/worker7.png" },
  { name: "James Anderson", info: "Administrator", photo: "img/worker8.png" },
  { name: "Joe Peterson", info: "AI developer", photo: "img/worker9.png" },
];

function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

function populateDynamicBlocks() {
  const blocks = document.querySelectorAll(".dynamic-workers .dynamic-block");
  const doubledWorkers = [...workersData, ...workersData, ...workersData, ...workersData];
  const shuffledWorkers = shuffleArray(doubledWorkers);

  blocks.forEach((block, index) => {
    if (shuffledWorkers[index]) {
      block.innerHTML = `
        <img src="${shuffledWorkers[index].photo}" alt="${shuffledWorkers[index].name}">
        <h3>${shuffledWorkers[index].name}</h3>
        <p>${shuffledWorkers[index].info}</p>
      `;
    }
  });
}

window.onload = populateDynamicBlocks;

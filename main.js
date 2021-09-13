const projects = [
{
    id: 0,
    title: 'Facebook 360',
    picture: 'popup-img/placeholder.png',
    modalPicture: 'popup-img/big-placeholder.png',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe..",
    technologis: ['node.js', 'bootstrap', 'sass'],
    liveLink: '#',
    codeLink: '#',
  },
  {
    id: 1,
    title: 'Uber Navigation',
    picture: 'popup-img/placeholder.png',
    modalPicture: 'popup-img/big-placeholder.png',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe..",
    technologis: ['node.js', 'bootstrap', 'sass'],
    liveLink: '#',
    codeLink: '#',
  },
];

const renderTechnologies = (techArr) => {
  let technologiesHtml = "<ul class='technologies-used'>";
  techArr.forEach((tech, index) => {
    technologiesHtml += `<li class='technology'>${tech}</li>`;
    if (index !== (techArr.length - 1)) {
      technologiesHtml += "<li class='separator'><img src='image/vertical-line.png' alt='Line separing the technologies used in a project'></li>";
    }
  });
  technologiesHtml += '</ul>';
  return technologiesHtml;
};

const renderTechnologiesForModal = (techArr) => {
  let technologiesHtml = "<ul class='technologies-used'>";
  techArr.forEach((tech, index) => {
    if (index === 0) {
      technologiesHtml += "<li class='separator'><img src='image/vertical-line.png' alt='Line separing the technologies used in a project'></li>";
    }
    technologiesHtml += `<li class='technology'>${tech}</li>`;
    technologiesHtml += "<li class='separator'><img src='image/vertical-line.png' alt='Line separing the technologies used in a project'></li>";
  });
  technologiesHtml += '</ul>';
  return technologiesHtml;
};

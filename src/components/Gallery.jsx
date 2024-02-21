import React from 'react';

const photos = [
  {
    src: "./src/assets/images/calculator.png",
    alt: "image 1",
    name: "Calculator App",
    description: 'Calculator online',
    live: 'https://ramonsaguini.github.io/Calculator/',
    repo: 'https://github.com/ramonsaguini/Calculator',
  },
  {
    src: "./src/assets/images/age-check.png",
    alt: "Image 2",
    name: "Age Check App",
    description: 'Check your Age and how you like',
    live: 'https://ramonsaguini.github.io/ageCheck/',
    repo: 'https://github.com/ramonsaguini/ageCheck',
  },
  {
    src: "./src/assets/images/quizApp.png",
    alt: "Image 3",
    name: "Quiz App",
    description: 'Quiz game with some questions to answer',
    live: 'https://quiz-game-eight-gamma.vercel.app/',
    repo: 'https://github.com/ramonsaguini/quizGame',
  },
  {
    src: "./src/assets/images/travel-california.png",
    alt: "Image 4",
    name: "Travel California",
    description: 'Travel agency for the state of California/USA',
    live: 'https://ramonsaguini.github.io/travel-california/',
    repo: 'https://github.com/ramonsaguini/travel-california',
  },
  {
    src: "./src/assets/images/site-samanta.png",
    alt: "Image 5",
    name: "Samanta's Site",
    description: 'Hair salon website',
    live: 'https://site-88uh6wqe1-ramonsaguini.vercel.app/',
    repo: 'https://github.com/ramonsaguini/siteSam',
  }
];

const Gallery = () => {
  return (
    <div className="container">
      <div className="row">
        {photos.map((photo, index) => (
          <div key={index} className="col-md-4">
            <div className="text-center border mb-4">
              <img src={photo.src} className="img-fluid" alt={photo.alt} />
              <div className=' pt-2 mt-2'>
                <h3>{photo.name}</h3>
                <p>{photo.description}</p>
                <a href={photo.live} target="_blank" rel="noopener noreferrer" className="btn btn-primary me-2">Live</a>
                <a href={photo.repo} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">GitHub Repo</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;

import React from 'react';

const MyPhoto = () => {
  return (
    <aside className="container">
      <div className="text-center"> {/* Centering content */}
        <img src="src/assets/images/ramon.jpg" alt="Ramon's Picture" className="img-fluid mt-5" />
        
        {/* Text */}
        <h2 className="mt-3">Ramon Saguini de Andrade!</h2>
        <p>Age: 33 Years Old</p>
        <p>City: Liverpool/Uk</p>
        <p>Speak: Portuguese/English</p>
        <p></p>
        
        {/* Download button for resume */}
        <div className="mt-3">
          <a href="" download="ramonAndradeCv.pdf" className="btn btn-primary">Download Resume</a>
        </div>
      </div>
    </aside>
  );
};

export default MyPhoto;

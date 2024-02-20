// src/components/MySkills.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faJs, faReact, faNodeJs,} from '@fortawesome/free-brands-svg-icons';

const MySkills = () => {
  return (
    <div className="container ">
      <h2 className="mt-5 text-center">My Skylls and Knowledge</h2>
      <div className="row">
        <div className="col-md-6 text-center">
          <h3>Frontend</h3>
          <ul style={{ listStyleType: 'none' }}>
            <li>HTML <FontAwesomeIcon icon={faHtml5} /></li>
            <li>CSS <FontAwesomeIcon icon={faCss3} /></li>
            <li>JavaScript <FontAwesomeIcon icon={faJs} /></li>
            <li>React <FontAwesomeIcon icon={faReact} /></li>   
          </ul>
          </div>
          <div className="col-md-6">
          <h3>BackEnd</h3>
          <ul style={{ listStyleType: 'none' }}>
            <li>Node.Js <FontAwesomeIcon icon={faNodeJs} /></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MySkills;

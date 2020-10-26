import React from 'react';
import '../css/StoryBanner.css';
import thunder from '../images/rayo.svg';

function StoryBanner(props) {
  return (
    <div className="story columns">
      <div className="column left">
        <h2 className="story-title upper">{props.upperTitle}</h2>
        <h2 className="story-title lower">{props.lowerTitle}</h2>
        <p className="story-text">{props.text}</p>
        {!props.noThunder && (
            <img className="thunder" src={thunder} alt="Ícono de rayo" />
          )}
      </div>
      <div className="column right">
      {props.viz && (
          <iframe src={props.viz} className="viz" title={props.vizTitle} width="100%" height="300"></iframe>
        )}
      </div>
    </div>
  );
}

export default StoryBanner;

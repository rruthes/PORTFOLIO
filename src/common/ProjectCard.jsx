import React from "react";
import spotifyData from '../../assets/spotify.png'

function ProjectCard( src, link ) {
  return (
    <a href={ link }>
      <img className="hover" src={ src } alt="Spotify Data" />
      <h3>Spotify Data</h3>
      <p>Data science project using Python and Spotify data.</p>
    </a>
  );
}

export default ProjectCard;

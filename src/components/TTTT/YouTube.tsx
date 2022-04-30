import React from 'react';

export default function YouTube() {
  return (
    <div>
      <h1>
        <big>HYPA HYPA! </big>
        <br />
        <br />
        <big>Electric Callboy</big> Cover der <big>Thunfische</big>:
      </h1>
      "HOL DEN SCHNAPS RAUS! HEUTE SAUF ICH MIR EIN'!"
      <div className="video">
        <iframe
          src="https://www.youtube.com/embed/hAVTTkDCcwE"
          title="HYPA HYPA"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
      Weitere Videos findest du auf unserem YouTube Kanal
    </div>
  );
}

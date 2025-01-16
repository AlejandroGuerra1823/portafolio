import React from 'react';
import './Timeline.css'; // Asegúrate de tener el archivo de estilos

const Timeline = ({ events }) => {
  return (
    <div className="timeline">
      {events.map((event, index) => (
        <div key={index} className={`timeline-event ${index % 2 === 0 ? 'left' : 'right'}`}>
          <div className="timeline-date">{event.date}</div>
          <div className="timeline-content">
            <h3>{event.title}</h3>
            <p>{event.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;

import React from 'react';

const Segment = (props) => {
  return (
    <div>
      <h3>Segment {props.segment.name}</h3>
      <div>Total Time: {props.segment.elapsed_time}</div>
      <div>Moving Time: {props.segment.moving_time}</div>
      <div>Distance: {props.segment.distance}</div>
      <div>Average Heart Rate: {props.segment.average_heartrate}</div>
      <div>Climb Category: {props.segment.climb_category}</div>
      <div>Date: {props.segment.start_date_local}</div>
    </div>
  );
}

export default Segment;
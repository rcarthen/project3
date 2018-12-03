import React from 'react';
import AddToCalendar from 'react-add-to-calendar';
 
class Calendar extends React.Component {
    
  static displayName = 'Example';
  state = {
    event: {
      title: 'Yebba Meet & Greet',
      description: 'This is the sample event provided as an example only',
      location: 'New York City, NY',
      startTime: '2016-09-16T20:15:00-04:00',
      endTime: '2016-09-16T21:45:00-04:00'
    }
  };
  
 
  render() {
    return <AddToCalendar event={this.state.event} buttonTemplate={{'far fa-calendar-alt': 'left' }}/>
    ;
  };
  
}

export default Calendar;
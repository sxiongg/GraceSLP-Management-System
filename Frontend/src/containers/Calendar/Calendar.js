import React, { Component } from 'react';
import { connect } from 'react-redux';
import clone from 'clone';
import notification from '../../components/notification';
import ModalEvents from './modalEvents';
import calendarActions from '../../redux/calendar/actions';
import { CalendarStyleWrapper } from './calendar.style';
import DnDCalendar from './DnDCalendar';
import axios from 'axios';
const { changeView, changeEvents } = calendarActions;

export var otherAttributes = [];

const getIndex = (events, selectedEvent) =>
  events.findIndex(event => event.id === selectedEvent.id);
class FullCalender extends Component {
  state = {
    view: this.props.view,
    modalVisible: false,
    selectedData: undefined,
    events: []
  };

  componentDidMount() {
    axios.get('http://localhost:5000/api/appointments')
    .then(response => {
      console.log (response.data);
      this.setState({events: response.data});
      console.log(this.state.events)
      // otherAttributes = (response.data[0])
    })
  }

  onSelectEvent = selectedData => {
    this.setState({ modalVisible: 'update', selectedData });
  };
  onSelectSlot = selectedData => {
    this.setState({ modalVisible: 'new', selectedData });
  };
  onView = view => {
    this.props.changeView(view);
  };
  onEventDrop = newOption => {
    const { event, start, end } = newOption;
    const events = clone(this.state.events);
    const allDay = new Date(end).getTime() !== new Date(start).getTime();
    const updatedEvent = { ...event, start, end, allDay };
    const index = getIndex(events, updatedEvent);
    events[index] = clone(updatedEvent);
    this.props.changeEvents(events);
    notification(
      'success',
      'Move event successfully',
      `${event.title} was dropped onto ${event.start}`
    );
  };
  setModalData = (type, selectedData) => {
    const { changeEvents } = this.props;
    const events = clone(this.state.events);
    const { modalVisible } = this.state;
    if (type === 'cancel') {
      this.setState({
        modalVisible: false,
        selectedData: undefined
      });
    } else if (type === 'delete') {
      const index = getIndex(events, selectedData);
      if (index > -1) {
        events.splice(index, 1);
      }
      changeEvents(events);
      this.setState({
        modalVisible: false,
        selectedData: undefined
      });
    } else if (type === 'updateValue') {
      this.setState({ selectedData });
    } else {
      if (modalVisible === 'new') {
        events.push(selectedData);

        let headers = {
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
          }
        }

        let newAppt = {
          date: selectedData.start.toJSON().substring(0, selectedData.start.toJSON().length-2),
          time: selectedData.start.toLocaleTimeString().substring(0, selectedData.start.toLocaleTimeString().length-3),
          notes: selectedData.title,
          patientId: 1,
          doctorId: selectedData.desc,
          locationId: 1
        }
        axios.post('http://localhost:5000/api/appointments', newAppt, headers)
        .then(response => {
          console.log(response.data);
          console.log(selectedData);
          console.log(selectedData.start.toLocaleTimeString().substring(0, selectedData.start.toLocaleTimeString().length-3));
          console.log(selectedData.start.toJSON().substring(0, selectedData.start.toJSON().length-2));
          console.log(selectedData.start.toJSON());
        })

      } else {
        const index = getIndex(events, selectedData);
        if (index > -1) {
          events[index] = selectedData;
        }
      }
      changeEvents(events);
      this.setState({
        modalVisible: false,
        selectedData: undefined
      });
    }
  };

  render() {
    const { view, events } = this.props;
    const { modalVisible, selectedData } = this.state;
    const calendarOptions = {
      events,
      view,
      selectedData,
      onSelectEvent: this.onSelectEvent,
      onSelectSlot: this.onSelectSlot,
      onView: this.onView,
      onEventDrop: this.onEventDrop
    };
    return (
      <CalendarStyleWrapper className="isomorphicCalendarWrapper">
        <ModalEvents
          modalVisible={modalVisible}
          selectedData={selectedData}
          setModalData={this.setModalData}
        />
        <DnDCalendar {...calendarOptions} />
      </CalendarStyleWrapper>
    );
  }
}

function mapStateToProps(state) {
  const { events, view } = state.Calendar.toJS();
  return { events, view };
}
export default connect(mapStateToProps, { changeView, changeEvents })(
  FullCalender
);

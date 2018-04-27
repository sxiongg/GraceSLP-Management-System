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

const getIndex = (events, selectedEvent) =>
  events.findIndex(event => event.id === selectedEvent.id);
class FullCalender extends Component {
  state = {
    view: this.props.view,
    modalVisible: false,
    selectedData: undefined
  };

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
    const events = clone(this.props.events);
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
    const events = clone(this.props.events);
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

        let newAppointment = {
          date: selectedData.start,
          time: selectedData.start.toLocaleTimeString(),
          notes: "",
          patientId: 0,
          doctorId: 0,
          locationId: 1
        }

        axios.post("http://localhost:5000/api/appointments", selectedData, headers)
        .then(response => {
          console.log(response.data);
          console.log(selectedData);
          console.log(selectedData.start.toDateString());
          console.log(selectedData.start.toLocaleTimeString());
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

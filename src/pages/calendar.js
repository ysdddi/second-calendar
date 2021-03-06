import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction';
import koLocale from '@fullcalendar/core/locales/ko';
import '../css/calendar.css';
import {useState} from 'react';
//util imp
import SpeedDial from '../util/speedDial';
import AppBar from '../util/appBar';
import BasicModal from '../util/modal';

function Calendar() {

    const selectClick = (e) => {
        console.log('hi!')
    }
    const [event, setEvent] = useState();

  return (
    <>
    <div className='mainBox'>
    <div className='calendarBox'>
      <FullCalendar
       plugins={[ dayGridPlugin, interactionPlugin,]}
       initialView="dayGridMonth"
       selectable={true}
       select={selectClick}
       locale={koLocale}
       eventColor="#dd57ff"
       headerToolbar={{
           start: 'prev,next',
           center: 'title',
           end: 'today'
       }}
       aspectRatio={1.8}
       events={[
        {start:'2022-05-31',
        end:'2022-05-31',
        title: 'example'
      }]}

        />
        </div>
        <SpeedDial />
        </div>
    </>
  );
}

export default Calendar;

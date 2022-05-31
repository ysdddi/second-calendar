import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction';
import koLocale from '@fullcalendar/core/locales/ko';
import '../css/calendar.css';
import {useState} from 'react';


function Main() {

    const selectClick = (e) => {
        console.log(e)
    }
    const [event, setEvent] = useState();

  return (
    <>
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
       eventLimit={true}
       aspectRatio={1.5}
       events={[
        {start:'2022-05-31',
        end:'2022-05-31',
        title: 'example'
      }]}

        />
        </div>
    </>
  );
}

export default Main;

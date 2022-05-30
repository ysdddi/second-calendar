import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction';
import koLocale from '@fullcalendar/core/locales/ko';
import moment from "moment";

function Main() {

    const selectClick = (e) => {
        console.log(e)
    }

  return (
    <>
      <FullCalendar
       plugins={[ dayGridPlugin, interactionPlugin ]}
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
        />
    </>
  );
}

export default Main;

import Calendar from 'react-calendar';
import {useState} from 'react';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';

function Main () {
    const [value, onChange] = useState(new Date());
    console.log(Calendar);
    return (
        <>
        <div>
            <Calendar 
            onChange={onChange}
            value={value}
            minDetail="year"
            />
            <div>{moment(value).format("YYYY년 MM월 DD일")} </div>
        </div>
        </>
    )
}

export default Main ;

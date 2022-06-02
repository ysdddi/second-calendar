import {Outlet} from 'react-router-dom';
import '../css/calendar.css';

//util imp
import AppBar from '../util/appBar';

function Main() {

  return (
    <>
    <AppBar />
    <>
    <Outlet />
    </>
    </>
  );
}

export default Main;

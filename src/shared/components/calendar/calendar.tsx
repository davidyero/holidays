import './calendar.scss';

interface CalendarModel {
    day: string;
    month: string;
    numberDay: number;
}

export const Calendar = ({day, month, numberDay} : CalendarModel) => {
    return(
        <div className="calendar">
            <div className="calendar-container">
                <div className="calendar__header">
                    <label>{month}</label>
                    <div className="calendar__line"/>
                </div>
                <div className="calendar__body">
                    <div className="calendar__body--number">
                        <label>{numberDay}</label>
                    </div>
                    <div className="calendar__body--day">
                        <label>{day}</label>
                    </div>
                </div>
                <div className="calendar__first-footer"/>
                <div className="calendar__second-footer"/>
            </div>
        </div>
    )
}

import React, {useEffect, useState} from 'react';
import './App.scss';
import {Constants} from "./shared/constants/constants";
import {Calendar} from "./shared/components/calendar/calendar";

function App() {
  const {LABELS, EMOJIS, HOLIDAY_LIST, DAYS, MONTHS} = Constants;
  const [emoji, setEmoji] = useState('');
  const [isHoliday, setIsHoliday] = useState(false);
  const [messageToShow, setMessageToShow] = useState('');
  const [day, setDay] = useState('');
  const [numberDay, setNumberDay] = useState(0);
  const [month, setMonth] = useState('');

  useEffect(() => {initialValidation()}, []);

  const initialValidation = () => {
    console.log('Por qué estas revisando esto? 🤔')
    const today = new Date();
    const day = `0${today.getDate()}`.slice(-2);
    const month = `0${today.getMonth() + 1}`.slice(-2);
    const year = today.getFullYear();
    const stringDate = `${month}/${day}/${year}`;
    const isHoliday = HOLIDAY_LIST.includes(stringDate);
    isHoliday ? setMessageToShow('') : calculateNextHoliday();
    setIsHoliday(isHoliday);
    setNumberDay(Number(day));
    setDay(DAYS[today.getDay()])
    setMonth(MONTHS[today.getMonth()])
    updateEmoji(isHoliday);
  }

  const calculateNextHoliday = () => {
    const nextHolidayString = HOLIDAY_LIST.find(date => (new Date(date) > new Date())) as string;
    const today = (new Date()).setHours(0);
    const nextHoliday = (new Date(nextHolidayString)).setHours(0);
    // @ts-ignore
    const remainingDays = Math.round(Math.abs((nextHoliday - today) / 86400000));
    modifyMessage(remainingDays);
  }

  const modifyMessage = (days: number) => {
    (days === 1)
        ? setMessageToShow(LABELS.MESSAGE_ONE_DAY)
        : setMessageToShow(LABELS.MESSAGE.replace('##', String(days)));
  }

  const updateEmoji = (todayIsHoliday: boolean) => {
    const emojiArray = todayIsHoliday ? EMOJIS.GOD_EMOJIS : EMOJIS.BAD_EMOJIS;
    const maxNumber = emojiArray.length;
    const selectedEmoji = Math.floor(Math.random() * maxNumber);
    setEmoji(emojiArray[selectedEmoji]);
  }

  return (
    <div className="holidays">
      <div className="holidays__container">
        <div className="holidays__container--title">
          <label>{isHoliday ? LABELS.GOOD_TITLE : LABELS.SAD_TITLE}</label>
        </div>
        <div className="holidays__container--image">
          <Calendar day={day} month={month} numberDay={numberDay}/>
        </div>
        <div className="holidays__container--message">
          {messageToShow}
        </div>
        <div className="holidays__container--emoji">
          {emoji}
        </div>
      </div>
    </div>
  );
}

export default App;

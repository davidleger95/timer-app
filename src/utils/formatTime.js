const leadingZero = num => num.toLocaleString({}, { minimumIntegerDigits: 2 });

export default function (t = 0) {
  const msec = leadingZero(t%100),               // 1/100 sec
        sec  = leadingZero(parseInt(t/100)%60),  // seconds
        min  = leadingZero(parseInt(t/6000)%60), // minutes
        hour = leadingZero(parseInt(t/360000));  // hours

  return `${hour}:${min}:${sec}.${msec}`;
}

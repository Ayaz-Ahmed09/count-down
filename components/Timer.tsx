"use client"
import React, { useEffect, useState } from 'react'
interface TimeCount{
    days:string;
    hours:string;
    minutes:string;
    seconds:string;
}
const getTimeLeft =(expiry:string):TimeCount=>{
let days='0'
let hours='0'
let minutes='0'
let seconds='0'

const difference = new Date(expiry).getTime() - new Date().getTime();
if(difference <= 0){
    return{
        days,
        hours,
        minutes,
        seconds,
    }
}
const dys= Math.floor(difference/(1000 * 60 * 60 * 24))
const hrs = Math.floor((difference / (1000 * 60 * 60)) % 24)
const min = Math.floor((difference / (1000 * 60)) % 60)
const sec = Math.floor((difference / 1000) % 60)
days = dys <10 ? `0${dys}`:dys.toString()
hours = hrs <10 ? `0${hrs}`:hrs.toString()
minutes = min <10 ? `0${min}`:min.toString()
seconds = sec <10 ? `0${sec}`:sec.toString()
return{
    days,
    hours,
    minutes,
    seconds,
}
}
const Timer = ({launchDate}:{launchDate:string}) => {
    const [timeLeft  ,  setTimeLeft] = useState<TimeCount>(getTimeLeft(launchDate))
    useEffect(()=>{
        const intervalId=setInterval(()=>{
        setTimeLeft(getTimeLeft(launchDate))

        },1000)
    },[launchDate])
  return (
    <div className="flex justify-start mt-10 gap-3 ml-20  ">
      <span className="flex flex-col justify-center items-center bg-yellow-500 text-black text-5xl w-36 py-3 shadow-lg rounded-lg space-y-8">{timeLeft.days}<small className="text-sm uppercase font-semibold">Days</small></span>
      <span className="flex flex-col justify-center items-center bg-yellow-500 text-black text-5xl w-36 py-3 shadow-lg rounded-lg space-y-8">{timeLeft.hours}<small className="text-sm uppercase font-semibold">Hours</small> </span>
      <span className="flex flex-col justify-center items-center bg-yellow-500 text-black text-5xl w-36 py-3 shadow-lg rounded-lg space-y-8">{timeLeft.minutes}<small className="text-sm uppercase font-semibold">Minutes</small></span>
      <span className="flex flex-col justify-center items-center bg-yellow-500 text-black text-5xl w-36 py-3 shadow-lg rounded-lg space-y-8">{timeLeft.seconds}<small className="text-sm uppercase font-semibold">Seconds</small></span>
    </div>
  )
}

export default Timer
import"./main.scss";class CountdownTimer{constructor(t){let{selector:e,targetDate:o}=t;this.selector=e,this.targetDate=o,this.timerIntervalId=null}start(){this.timerIntervalId=setInterval((()=>{const t=Date.now(),e=document.querySelector(this.selector),o=document.querySelector('[data-value="days"]'),r=document.querySelector('[data-value="hours"]'),a=document.querySelector('[data-value="mins"]'),n=document.querySelector('[data-value="secs"]'),s=this.targetDate-t,l=Math.floor(s/864e5),c=Math.floor(s%864e5/36e5),u=Math.floor(s%36e5/6e4),d=Math.floor(s%6e4/1e3);o.textContent=l,r.textContent=c,a.textContent=u,n.textContent=d,e||console.error(`Element with selector ${this.selector} not found`)}),1e3)}}const blackFriday=new CountdownTimer({selector:"#timer-1",targetDate:Date.parse("Mon, 16 May 2023 00:00:00")}),refs={startButton:document.querySelector(".button__start"),stopButton:document.querySelector(".button__stop")};refs.startButton.addEventListener("click",blackFriday.start);
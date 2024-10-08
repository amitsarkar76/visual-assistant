let btn=document.querySelector("#btn")
let content=document.querySelector("#content")
let voice=document.querySelector("#voice")
function restartVoiceRecognition() {
    recognition.stop();
    recognition.start();
  }


function speak(text){
    let text_speak= new SpeechSynthesisUtterance(text)

    text_speak.rate=1
    text_speak.pitch= 1
    text_speak.volume=4
    text_speak.lang="hi-GB"
    window.speechSynthesis.speak(text_speak)
}
window.addEventListener('load', ()=>{
    speak(" ");
    wishMe();
});

function wishMe(){
    let day=new Date()
    let hours=day.getHours()
    if(hours>=0 && hours<12){
        speak("Good Morning Sir or Mam")
    }
    else if(hours>=12 && hours <16){
        speak("Good afternoon Sir or Mam")
    }else{
        speak("Good Evening Sir or Mam")
    }
}
// window.addEventListener('load',()=>{
//     wishMe()
// })
let speechRecognition= window.SpeechRecognition || window.webkitSpeechRecognition 
let recognition =new speechRecognition()
recognition.onresult = (event) => {
    console.log('Speech recognition result:', event);
    let currentIndex=event.resultIndex
    let transcript=event.results[currentIndex][0].transcript
    content.innerText=transcript
    takeCommand(transcript.toLowerCase())
  }
  recognition.onerror = (event) => {
  console.log('Error occurred during speech recognition:', event);
  speak('I didn\'t understand that. Can you please repeat?');
}

  btn.addEventListener("click", ()=>{
    console.log('Button clicked!');
    recognition.start();
    voice.style.display="block";
    btn.style.display="none";
    console.log('Speech recognition started...');
  })
  
function takeCommand(message){
   voice.style.display="none"
    btn.style.display="flex"
    if(message.includes("hello")||message.includes("hey")){
        speak("hello sir,what can i help you?")
    }
    if(message.includes("who i am ")||message.includes("i am")){
        speak("You are breathtakingly beautiful, a light that brightens my world. Your smile ignites joy, and your laughter is a sweet melody that fills my heart. In every moment with you, I find magic and inspiration. You are my greatest treasure, and I am so grateful to share this journey with you. ")
    }
    else if(message.includes("who are you")){
        speak("your visual assistant, and I take things seriously... like a clown at a business meeting.  ,created by Amit sarkar")
    }else if(message.includes("open youtube")){
        speak("opening youtube...")
        window.open("https://youtube.com/","_blank")
    }
    else if(message.includes("open google")){
        speak("opening google...")
        window.open("https://google.com/","_blank")
    }
    else if(message.includes("open facebook")){
        speak("opening facebook...")
        window.open("https://facebook.com/","_blank")
    }
    else if(message.includes("open instagram")){
        speak("opening instagram...")
        window.open("https://instagram.com/","_blank")
    }
    else if(message.includes("open calculator")){
        speak("opening calculator..")
        window.open("calculator://")
    }
    else if(message.includes("open whatsapp")){
        speak("opening whatsapp..")
        window.open("whatsapp://")
    }
    else if(message.includes("owner")){
        speak("opening Amit sarkar youtube channel ")
        window.open("https://www.youtube.com/@AmitSarkarrr","_blank")
    }
    else if(message.includes("time")){
      let time=new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
      speak(time)
    }
    else if(message.includes("date")){
        let date=new Date().toLocaleString(undefined,{day:"numeric",month:"short"})
        speak(date)
      }
    else{
        let finalText="this is what i found on internet regarding" + message.replace("Buddy","") || message.replace("Buddy","")
        speak(finalText)
        window.open(`https://www.google.com/search?q=${message.replace("Buddy","")}`,"_blank")
    }
}

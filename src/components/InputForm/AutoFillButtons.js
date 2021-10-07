import uniqid from 'uniqid';
import './Styles/InputForm.css';


// When clicked these buttons call setState with the provided to in order to render a sample resume or clear the current resume
function AutoFillButtons(props){
  return (
    <div className = 'autofillbuttons'>
      <button type = 'submit' onClick = {() => {      
        props.replaceState(
          {
            contactInfo: {firstName: 'Jonathan',lastName: 'Lui',phoneNumber: '(000)000-0000',email: 'sample@email.com',address: '82 Lorem Ipsum Drive, Foobartown, NY, 99823', id: uniqid(),},
            projects: [{projectName: 'Battleship',languages: '(Javascript, HTML, CSS, Jest)',projectLink: 'https://github.com/jonslui/battleship',description: 'A recreation of the classic oceanic strategy game developed with the goal of practicing Test Driven Development using Jest.\nFocused on keeping functions pure and modularizing code.',id: uniqid(),},{projectName: 'Weather App',languages: '(Javascript, APIs, HTML, CSS)',projectLink: 'https://github.com/jonslui/weather_app',description: 'A weather application created to practice integrating APIs and Async/Await functions.\nIt utilizes two APIs, Nomanatim and OpenWeatherMap, to get location data and weather data corresponding to user input. It saves the user’s last searched location in localStorage for faster lookup on its next open.',id: uniqid(),},{projectName: 'CV Builder',languages: ' (Javascript, React, CSS, HTML)',projectLink: 'https://github.com/jonslui/cv_builder',description: 'An Javascript application built using React. It updates state as the user inputs data and renders it on the preview page.\nThe resulting CV can be saved as a PDF for application purposes.',id: uniqid(),}],
            workExperience: [{jobTitle: 'Language Lead at',companyName: 'Translation Company;',location: 'Remote',datesEmployed: 'July 2020 – Current',responsibilities: "Provide translation and proofreading services for multiple projects/companies including Tencent's Player Unknown's Battlegrounds and Arena of Valor.\nMaintain quick and effective communication between companies to meet tight deadlines and provide accurate translations and localizations.",id: uniqid(),},{jobTitle: 'Translation/Localization at',companyName: 'Translation Company;',location: 'Beijing, China',datesEmployed: 'July 2018 – May 2020',responsibilities: "Organized and maintained multiple projects with Localization Companies to make sure content was translated into 15+ languages before deadlines.\nTranslated/Localized all needed documentation from Chinese to English, e.g. Law Documentation, Game Updates, All in- game language, messages to Players, new position openings etc.\nCrafted in-game language to provoke the intended response in players, e.g. marketing/advertising campaigns to entice players to spend time and money in the game.\nHelped plan new content, stories, and machines for the casinos and solitaire games.",id: uniqid(),}],
            education: [{university: 'The Pennsylvania State University',graduationDate: '08/2013 - 12/2016',degree: "Bachelor's degrees in",major: 'English and Comparative Literature',gpa: 'GPA: 3.91',id: uniqid(),}],
            websites: [{ website: "www.github.com/jonslui", id: uniqid() },{ website: "www.linkedin.com/jonslui", id: uniqid() }],
            skills: [{ skill: '• Javascript', id: uniqid() },{ skill: '• React', id: uniqid() },{ skill: '• Jest', id: uniqid() },{ skill: '• CSS', id: uniqid() },{ skill: '• HTML', id: uniqid() },{ skill: '• Git', id: uniqid() },{ skill: '• Mandarin (Fluent)', id: uniqid() },],
          }
      )}}>Load Sample Resume</button>

      <button type = 'submit' onClick = {() => {props.replaceState(
        {
          contactInfo: {firstName: '',lastName: '',phoneNumber: '',email: '',address: '', id: uniqid(),},
          projects: [],
          workExperience: [],
          education: [],
          websites: [],
          skills: [],      
        }
      )}}>Clear Resume</button>
    </div>
    
  )  
}

export default AutoFillButtons;
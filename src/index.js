import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const NavHead = () =>{
  return(
    <React.Fragment>
      <div id = "bar">
        <h1 id = "profilechoice">프로필 선택</h1>
        <hr/>
      </div>
    </React.Fragment>
  )
}

const Profiles = () =>{
  return(
    <React.Fragment>
      <p id="teamName">Easy Do Track</p>
      <h2 id = "phrase"> 누가 사용하나요?</h2>
      <div className = "profiles">
        <Profile name = "스페셜 위크"></Profile>
        <Profile name = "킹헤일로"></Profile>
        <Profile name = "킹헤일로"></Profile>
        <Profile name = "empty"></Profile>

      </div>
    </React.Fragment>
  )
}

const Profile = (props) =>{
 
  return(
    <React.Fragment>
      <div className='profile'>{
        props.name === "empty" 
        ?  <h3 className="plusicon"><span uk-icon="icon: plus; ratio: 2"></span></h3>
        :  <a href='Device.html'><h3 className='profiletitle'>{props.name}</h3></a>

      }
        
      </div>
    </React.Fragment>
  )
  
}

const entire = ReactDOM.createRoot(document.getElementById('entire'));
entire.render(
  <React.Fragment>
    <NavHead></NavHead>
    <Profiles></Profiles>
  </React.Fragment>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

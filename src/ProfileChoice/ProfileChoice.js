import React from 'react';
import ReactDOM from 'react-dom/client';
import './ProfileChoice.css';
import { Link } from 'react-router-dom';

const saveJson = (name,valuelist) => {

  let userObj = {};

  //default값 설정하는곳
  if(valuelist === '0'){
    userObj = {
      name : name,
      setting : {
        "wrist-shoulder" : "1",
        "shoulder-length" : "2",
        "chest-pelvis" : "3",
        "pelvis-length" : "4",
        "pelvis-thigh" : "5",
        "thigh-ankle" : "9",
        "ankle-foot" : "7"
      } 
    }
  }

  else{
    userObj = {
      name : name,
      setting : {
        "wrist-shoulder" : valuelist[0],
        "shoulder-length" : valuelist[1],
        "chest-pelvis" : valuelist[2],
        "pelvis-length" : valuelist[3],
        "pelvis-thigh" : valuelist[4],
        "thigh-ankle" : valuelist[5],
        "ankle-foot" : valuelist[6]
      } 
    }
  }


  //check
  const userString = JSON.stringify(userObj);
  window.localStorage.setItem(name, userString);

  const checkuser = window.localStorage.getItem(name);
  //console.log(""checkuser);

  const userJson = JSON.parse(checkuser)
  console.log("Json" ,userJson)

}

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


  //check
  const names = []
  for(let i = 0; i<window.localStorage.length;i++){
    const name = window.localStorage.key(i)
    names.push(name)
  }

  names.reverse()

  const profiles = names.map((v) => (<Profile name ={v}></Profile>))

  return(
    <React.Fragment>
      <p id="teamName">Easy Do Track</p>
      <h2 id = "phrase"> 누가 사용하나요?</h2>
      <div className = "profiles">
        {profiles}
        <Profile name = "empty"></Profile>

      </div>
    </React.Fragment>
  )
}

const Profile = (props) =>{
  const data = {
    name : props.name
  };

  return(
    <React.Fragment>
      <div className='profile' >{
        props.name === "empty" 
        ?  <h3 className="plusicon"><span uk-icon="icon: plus; ratio: 2"></span></h3>
        :  <Link to ='/Device' state ={{data}}><h3 className='profiletitle'>{props.name}</h3></Link>

      }
        
      </div>
    </React.Fragment>
  )
}


const ProfileChoice = () =>{

  //확인용 data들 
  //check saveJson method 사용법
  const list = [20,20,20,20,20,44,20]
  saveJson("이석희",list)

  const list2 = [10,20,30,40,50,60,70]
  saveJson("제로콜라",list2)
  
  saveJson("treesrt",'0')
  return(
    <React.Fragment>
      <NavHead></NavHead>
      <Profiles></Profiles>
    </React.Fragment>
  )
}
export default ProfileChoice;
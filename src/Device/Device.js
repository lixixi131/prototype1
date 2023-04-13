import React from 'react';
import ReactDOM from 'react-dom/client';
import './Device.css';
import { Link, useLocation } from "react-router-dom";
import image from '../assets/a.png'


const NavHead = (props) =>{

    return(
        <React.Fragment>
        <div id = "bar">
            <h1 id ="title">기기 관리</h1>
            <hr/>
            <p id = "username">{props.name}</p>
        </div>
        </React.Fragment>
    )

}

const SettingContainer = (props) =>{
    return(
        <React.Fragment>
            <div id ='settingcontainer'>
                
                <AddressContainer name = {props.name}></AddressContainer>
                <ImageContainer></ImageContainer>

            </div>
        </React.Fragment>
    )

}

const AddressContainer = (props) =>{
    return(
        <React.Fragment>
        <div className = 'addresscontainer'>
            
            <PhysicalAddress number = "1" address = "ㅁㅁ-ㅁㅁ-ㅁㅁ-ㅁㅁ-ㅁ ㅁ" connect = "True"></PhysicalAddress>
            <PhysicalAddress number = "2" address = "AA-bb-cc-dd-ee" connect = "True"></PhysicalAddress>
            <PhysicalAddress number = "3" address = "AA-bb-cc-dd-ee" connect = "false"></PhysicalAddress>

            <CrudContainer name = {props.name}></CrudContainer>


        </div>
    </React.Fragment>

    )
}

const PhysicalAddress = (props) =>{
    const connect = props.connect
    const color = connect == "True" ? 'green' : 'red' 


    return(
        <div className='physicaladdress'>
            <span style={{"background-color":color ,"color":"white"}}>{connect == "True"?'연결됨':'연결해제'}
            </span> {props.number}. {props.address}    
            <button id = "deletebutton">[삭제]</button>
        </div>
    )

}

const CrudContainer = (props) =>{
    const data = {
        name : props.name
    };


    return(
        <React.Fragment>
        <div id = "crudcontainer">
            <button>[기기추가]</button>
            <Link to = '/Setting' state={{data}} ><button>[수동설정]</button></Link>
            <button>[자동설정]</button>
        </div>
        </React.Fragment>
    )

}

const ImageContainer = () =>{
    return(
        <React.Fragment>
            <div id = 'imagecontainer'>
                <img src = {image} alt = 'status'></img>
                
            </div>
        </React.Fragment>
    )
}

const Device = () =>{
    const location = useLocation();
    const data = location.state.data;
    return(
        <React.Fragment>
            <NavHead name = {data.name}></NavHead>
            <SettingContainer name = {data.name}></SettingContainer>
        </React.Fragment>
    )

}

export default Device;
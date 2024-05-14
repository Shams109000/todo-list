import React from 'react'
import { useState } from 'react'
import {StudentApi} from './data'
function About() {
    const[data,setData]=useState(StudentApi)
    
    function changedata(title){
        const newData=StudentApi.filter((v)=>{return v.title==title})
        setData(newData)
        console.log(newData,"new");

    }
  return (
    <div>
        <h1>About</h1>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Logo
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  onClick={()=>changedata("Fruit")}
                >
                  Fruit
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  onClick={()=>changedata("WallPapers")}
                  
                >
                  WallPapers
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  onClick={()=>changedata("Animal")}
    
                >
                  Animal
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link"  onClick={()=>setData(StudentApi)} >
                  All
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
         <div className="container">
            <div className="row">
                { data.map((v,i)=>{
                return <div className="col-md-4" key={i}>
                         <div className="card">
                            <img src={v.img} height={200} alt="" srcSet="" />
                            <div className="card-body">
                                <h1>{v.title}</h1>
                                <p>{v.description}</p>
                                <button>{v.button}</button>
                            </div>
                        </div>
                </div>
            })}
            </div>
        </div>

    </div>
  )
}

export default About
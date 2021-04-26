import React from 'react'

export default function nav(props) {
  let i = 2;
    return (
<center>
            <nav width="100%" class="navbar navbar-expand-md  navbar-dark sticky-top" style={{"background-color":"indigo"}}>

  <a class="navbar-brand" href="#">{props.data[0].title}</a>

  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="collapsibleNavbar">
    <ul class="navbar-nav">
    <li class="nav-item">
                <a class="nav-link active" href="javascript:void(0)" onClick={()=>{props.s("0")}} >Home</a>
              </li>
        {
               
            props.data[1].link.map((e)=>{
           
               return(
                 
                        <li class="nav-item">
        <a class="nav-link" href="#" href="javascript:void(0)" onClick={()=>{props.s(e)}}>{e}</a>
      </li>
      
                
               )
              
            })
        }
     
    </ul>
  </div>
</nav>
</center>
    )
}

import React from 'react'

export default function contactme() {
    return (
        <div  style={{"background-color":"#000"}}>
                 <b className="display-4 text-white"> Contact me</b><br></br>
<p className="text-white" style={{"font-size":"18px"}}>If you are interested talking with me, please call me or send me mail.I will definitely give you answer ASAP.</p>
            <div className="card container" >
                
               
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-6">
                        <form>
          <input className="form-control" placeholder="Enter Name"/><br></br>
          <input className="form-control" type="email" placeholder="Enter Email"/><br></br>
          <input className="form-control" type="text" placeholder="Enter Subject"/><br></br>
          <textarea className="form-control" placeholder="Enter Message"/><br></br>
          <button className="btn btn-primary"><i class="far fa-paper-plane"></i> SEND</button>
          </form>

                        </div>
                        <div className="col-md-6" >
                            <center style={{"margin-top":"50px"}}>
                        <i class="fas fa-map-marker-alt " style={{"font-size":"36px","color":"indigo"}}></i><br></br>
                        Salkia, Howrah - 711106
                        <br></br>
                        <br></br>
                        <i class="fas fa-phone"  style={{"font-size":"36px","color":"indigo"}}></i><br></br>
                        (+ 91) 8013-272-368
                        <br></br>
                        <br></br>
                        <i class="fas fa-envelope"  style={{"font-size":"36px","color":"indigo"}}></i><br></br>
                        contact.rjtechsol@gmail.com
                        </center>
                        </div>
                    </div>
        
                </div>

            </div>
        </div>
    )
}

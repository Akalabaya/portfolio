import React from 'react'

export default function opt() {
    return (
        <div>
            <div className="row">
   
                <div className="col-md-4">
                <i class="fas fa-tachometer-alt" style={{"font-size":"48px",color:"indianred"}}></i>
                <p style={{"font-size":"28px"}}>Design</p>
                <p style={{"color":"gray","font-size":"18px"}}>Designing is the #1 need for any website to attract the visitors. A poor visual experience in a website can disappoint visitors.</p>
                </div>
                <div className="col-md-4">
                <i class="fas fa-plane text-info" style={{"font-size":"48px"}}></i>
                <p style={{"font-size":"28px"}}>Performance</p>
                <p style={{"color":"gray","font-size":"18px"}}>Performance is the most important measure which decides how fast an application will get loaded thus better user experience.</p>
                </div>
                <div className="col-md-4">
                <i class="fas fa-cubes text-danger" style={{"font-size":"48px"}}></i>
                <p style={{"font-size":"28px"}}>Execution</p>
                <p style={{"color":"gray","font-size":"18px"}}>A planning has no existance without execution. Execution is the most relevant work which gives the final output.</p>
                </div>
            </div>
        </div>
    )
}

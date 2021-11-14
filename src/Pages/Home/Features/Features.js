import React from 'react';
import './Features.css';
import img1 from "../../../Images/img1.png";
import img2 from "../../../Images/img2.png";

const Features = () => {
    return (
        <div>
            <div className="container py-5">


                <div className="row">
                    <div className="col-md-5 text">
                        <h2 className="fw-bold">In Pursuit of Adventure</h2>
                        <p>Experience the all-new Pan America adventure touring motorcycle.A Harley-Davidson like no other, it is built to nbsp;push boundaries and carve paths wherever you can find them</p>
                        <button className="btn btn-primary mb-2">EXPLORE ADVENTURE</button>
                    </div>
                     <div className="col-md-7">
                        <img className="img-fluid" src={img1} alt=""/>
                     </div>
                </div>
                   <div className="row mt-3">
                   <div className="col-md-7">
                        <img className="img-fluid" src={img2} alt=""/>
                    </div>
                    <div className="col-md-5 text">
                        <h2 className="fw-bold">2021 Sportster</h2>
                        <p>A new chapter opens in H-D’s longest running family, powered by the all-new Revolution™ Max 1250T. To call it the ultimate Sportster™ is an understatement.</p>
                        <button className="btn btn-primary">CHEAK OUT THE BIKE</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;
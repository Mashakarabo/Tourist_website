import React, { Component } from 'react';
import './home.css';
import SimpleImageSlider from "react-simple-image-slider";
import pic1 from '../images/kirstenbosch_crop.jpg';
import pic2 from '../images/breakfast_in_the_lodge_delaire.jpg';
import pic3 from '../images/ashin.jpg';
import pic4 from '../images/waterfront.jpg';
import pic5 from '../images/campsbay.jpeg';
import pic6 from '../images/table-mountain.jpg';






export class Home extends Component {
    static displayName = Home.name;

    render() {

        return (

            <div>
            <h1>Cape Town</h1>
            <p>Looking For What To Do In Cape Town And Places To Visit?</p>
            <p>You Came To The Right Place Explores This Fun Activities Today!</p>
            

            <div className="Widget">
                <div className="contect_first" style={{ backgroundImage: `url(${pic1})`, backgroundSize: 'cover',  }}>
                        <p1>Kirstenbosch National Botanical Garden</p1>
                </div>


                <div className="contect_second" style={{ backgroundImage: `url(${pic2})`, backgroundSize: 'cover', }}>
                    <p1>Delaire Graff Wine Estate in Stellenbosch</p1>
                </div>


                <div className="contect_third" style={{ backgroundImage: `url(${pic3})`, backgroundSize: 'cover', }}>
                    <p1>Table Mountain Aerial Cableway station</p1>
                </div>


                <div className="contect_fourth" style={{ backgroundImage: `url(${pic4})`, backgroundSize: 'cover', }}>
                    <p1>Cape Town's V&A Waterfront</p1>
                </div>


                </div>
                <hr/>

                <div className="Sub-content">
                    
                    <div className="Sub-content-picture"><img src={pic5} alt="" width={700} id="subpicture"/></div>
                    <div className="description">
                        <p>
                            
                            In the 19th and early 20th centuries, day-trippers came to Camps Bay to picnic,
                            swim in the tidal pools and admire the breathtaking scenery.
                            Today, the village-like suburb is famous for its beautiful
                            white sand beaches and its location between the azure Atlantic and
                            the Twelve Apostles mountain range.It's also a popular hangout for celebrities
                            
                        </p>
                    </div>
                </div>
                <div className="Last-content" style={{ backgroundImage: `url(${pic6})`, backgroundPosition: 'center', backgroundSize: 'cover', }}>
                    <h2>Table Mountain</h2>
                    <p>Aerial Cableway</p>
                    <a href="https://www.webtickets.co.za/v2/event.aspx?itemid=681080" id="buytickets">Buy Tickets</a>

                </div>
                <div className="booking">
                    vv
                </div>
                


      </div>
    );
  }
}

import React, { Component } from 'react';
import './counter.css';
import pic7 from '../images/mypicture.jpg';


export class Counter extends Component {
  static displayName = Counter.name;


  render() {
    return (
        <div>

            <section class="about-us">
                <div class="about">
                    <img src={pic7} alt="" class="pic" />
                        <div class="text">
                            <h2>About Us</h2>
                            <h5>Front-end Developer & <span>Designer</span></h5>
                        <p>
                            As a Software developer, i have gained comprehensive knoweledge of several programming languages like HTML,CSS,JavaScript,Bootstrap,PHP,Python and Java.Throug my experience, i have become skilled in designing and developing front-end and back-end functionality for web applications. My expertise in these technologies has allowed me to create sophisticated user interfaces, intergrate databases, and streamline server-side coding to develop robust and unique web applications
                        </p>
                            
                        </div>
                </div>
            </section>
            
       
      </div>
    );
  }
}

import React, {useState} from "react";
import hero from "../hero.svg";
import { Link, useHistory } from "react-router-dom";
import logo from "../logo.svg";

const Main = () => {

    const [joined, setJoined] = useState("");
    const history = useHistory();


    const join = (e) =>{
        e.preventDefault();
        if(joined !== ""){
            let today = new Date();
            let date = today.getFullYear()+ '-' +(today.getMonth()+1) + '-' + today.getDate();
            history.push(`/thanks/${joined}`, date );
        }

    }



    return(
        <React.Fragment>
            <header>
            <div className="two1" height="400px" width="400px"></div>
            <div class="carousel-caption">
                <h3 class="h3-responsive">Enabling Data Analytics Product Experience</h3>
                <h4 class="content"> Plug - Play Data Analytics platforms to get a Better insight on data </h4>
                <button class="seeMore" type="submit">See More</button>
            </div>
                <img src={hero} />
                <div>
                    <h1>We build &amp; design <br/> web applications.</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin luctus congue dignissim. Vestibulum et ex nisl. Vestibulum eu luctus nisi. Fusce sit amet vehicula nisl. </p>
                    <Link to="/contact">Get in touch</Link>
                </div>
          
            </header>


            <main>
                {/* <section className="testimonials">
                    <div className="column1"></div>
                    <div className="column2">
                    <img src="designAssests/Assets/blueline.png" width="30%"/>
                    <h2 id="trust" class="cutEdge">Trusted by 1 Millon+ Developers </h2>
                    <div style={{marginTop : 2 + 'em'}}></div>
                    <p id="p07" class="cutEdge1">Plug-in Play AI SDK to validate and deploy your Analytics use cases.</p>
                    <p id="p07" class="cutEdge1">Head start to your use cases with Softnerve AI Platform.</p>
                    </div>
                    <Link to="/contact">Get in touch</Link>
                </section> */}
                <section className="services">
                     <h2>Why we should work together?</h2>

                     <div className="service-container">
                         <div className="services-card service-one"></div>
                         <div className="service-description">

                            <h3>SEO Friendly Apps.</h3>
                            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt massa sem. Vestibulum quis augue ac orci bibendum pellentesque ut nec dolor. Quisque metus ipsum, pulvinar quis ipsum quis, consequat cursus leo. Suspendisse fermentum, nisl et ultricies blandit, mauris metus accumsan mauris, sit amet vulputate elit nunc id libero. Vivamus porta lacus libero, et ullamcorper est volutpat ac. Maecenas eros urna, interdum in lectus nec, tristique semper mauris. Duis finibus nunc sed nulla bibendum, ut ornare tellus finibus. Donec id magna risus.</div>

                         </div>
                    </div>



                    <div className="service-container">
                      
                      <div className="services-card service-two"></div>
                      <div className="service-description">
                          <h3>Clear &amp; Optimized Code.</h3>
                          <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt massa sem. Vestibulum quis augue ac orci bibendum pellentesque ut nec dolor. Quisque metus ipsum, pulvinar quis ipsum quis, consequat cursus leo. Suspendisse fermentum, nisl et ultricies blandit, mauris metus accumsan mauris, sit amet vulputate elit nunc id libero. Vivamus porta lacus libero, et ullamcorper est volutpat ac. Maecenas eros urna, interdum in lectus nec, tristique semper mauris. Duis finibus nunc sed nulla bibendum, ut ornare tellus finibus. Donec id magna risus.</div>
                      </div>
                    </div>



                    <div className="service-container">
                        <div className="services-card service-three"></div>
                        <div className="service-description">
                            <h3>Support 24 hours.</h3>
                            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt massa sem. Vestibulum quis augue ac orci bibendum pellentesque ut nec dolor. Quisque metus ipsum, pulvinar quis ipsum quis, consequat cursus leo. Suspendisse fermentum, nisl et ultricies blandit, mauris metus accumsan mauris, sit amet vulputate elit nunc id libero. Vivamus porta lacus libero, et ullamcorper est volutpat ac. Maecenas eros urna, interdum in lectus nec, tristique semper mauris. Duis finibus nunc sed nulla bibendum, ut ornare tellus finibus. Donec id magna risus.</div>
                        </div>
                      
                    </div>
                </section>

                <section>
                    <h2>Join our newsletter to get the latest trends.</h2>

                    <form className="newsletter" onSubmit={join}>
                        <input type="email" placeholder="Your email goes here" onChange={(e) => setJoined(e.target.value)} />
                        <input type="submit"  value="Join Now!"/>
                    </form>

                </section>
               
            </main>
            <section className="container1">
                    <div style={{marginTop: 3 + 'em'}}></div>
                    <div className="row">
                    <div className="column">
                        <img src={logo} height="61px"/>
                    </div>
                    <div className="column">
                        <ul >
                            <li>Terms and Condition</li>
                            <li>Privacy</li>
                            <li>Contact</li>
                            </ul>
                            
                    </div>
                    </div>
                    <div>
                        <p className="footer_text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
                    </div>
            </section>
        </React.Fragment>
    )
}


export default Main;
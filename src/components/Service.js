import React from "react";
import Project from "./assets/project.png"
import Code from "./assets/code.png"
import Design from "./assets/paint-roller.png"

export default function Service() {
    return (
        <div className="wrapper" id="service">
            <div className="header">
                <h1>Service</h1>
            </div>
            <div className="box_wrapper">
                <div className="box_row">
                    <div className="box_col box_col_1">
                        <div className="box_img">
                            <img src={Project} alt="Project" />
                        </div>
                        <div className="box_title">
                            <p>Project Management</p>
                        </div>
                        <div className="box_des">
                            We have a specialize team of project managers that handle every
                            aspect of your projects from initial phase to completion and we also have,
                            a maintenace team that are solely dedicated to ensuring that your projects are delivered 
                            on time just as planned and expected.
                            WrapUP have the best backup self styled personalized and customisable Project template which are
                            available on demand or expected. We also have a 24/7 standby customer care support for any challenges
                            or emergencies while your projects are being deployed or integerated.
                        </div>
                    </div>
                    <div className="box_col box_col_2">
                        <div className="box_img">
                            <img src={Code} alt="code" />
                        </div>
                        <div className="box_title">
                            <p>Web Development</p>
                        </div>
                        <div className="box_des">
                            We want to see you win, thats why at WrapUP we provide you with state of the art 
                            web development that covers, every aspect of your company or organisations need. from 
                            websites,  to web apps, software development, mobile apps, APIs and any aspect of web or software
                            development requirement.

                            We have a deicated team commited to surpassing your expectations and delivering a satisfactory result in any 
                            area of demand. You can trust us to handle your business with the highest level of efficiency and professionalism.
                        </div>
                    </div>
                    <div className="box_col box_col_3">
                        <div className="box_img">
                            <img src={Design} alt="UiUx" />
                        </div>
                        <div className="box_title">
                            <p>UI/UX</p>
                        </div>
                        <div className="box_des">
                            Our UI/UX design aims to develop an innovative concept that will be 
                            consistent throughout every detail of the brand's product. Everything from color choice,
                             to illustrations, videos and sound can be used to evoke sensations and communicate a 
                             specific vibe. When it comes to visual design, there are infinite ways to conjure up emotional 
                            connections with users. The aim here is to spark a connection with the user, creating something that 
                            they can really understand and relate with. By basing a website or app's structure on a mental model (or in other words,
                             something that we're familiar with from our everyday lives and experiences), the user is more likely to
                              feel a cultural or emotional connection.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

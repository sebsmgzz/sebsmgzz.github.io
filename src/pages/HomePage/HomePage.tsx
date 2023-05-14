import { Fragment } from "react";

import myself from "resources/images/myself.png";

import { HomePageProps } from "./HomePage.d";
import "./HomePage.scss";
import { Carousel, CarouselItem } from "components";

export const HomePage = function(props: HomePageProps) {
    return (
        <Fragment>
            <section className="container col-xxl-8 px-4 py-5">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">

                    <div className="col-10 col-sm-8 col-lg-6 m-auto">
                        <img src={myself} 
                            className="d-block mx-lg-auto img-fluid m-auto" 
                            alt="Bootstrap Themes" 
                            loading="lazy" />
                    </div>
                    <div className="col-lg-6">
                        <h1 className="display-5 fw-bold lh-1 mb-3 text-center">Sebastián M. Gzz.</h1>
                        <p className="lead text-center">Cloud architect</p>
                        <p className="lead text-center">Technical consultor</p>
                        <p className="lead text-center">Full stack developer</p>
                        <p className="lead text-center">Electric engineer</p>
                    </div>
                    
                </div>
            </section>
        </Fragment>
    );
}

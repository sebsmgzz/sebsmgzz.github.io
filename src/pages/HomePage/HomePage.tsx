
import myself from "resources/images/myself.png";

import { HomePageProps } from "./HomePage.d";
import "./HomePage.scss";

export const HomePage = function(props: HomePageProps) {
    return (
        <section className="HomePageSection container-fluid col-xxl-8 px-4 py-5">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">

                <div className="col-10 col-sm-8 col-lg-6 m-auto">
                    <img src={myself} 
                        className="d-block mx-lg-auto img-fluid m-auto" 
                        alt="Bootstrap Themes" 
                        loading="lazy" />
                </div>
                <div className="col-lg-6 d-flex flex-column align-items-center">
                    <h1 className="display-5 fw-bold lh-1 mb-3 text-center">Sebastián M. Gzz.</h1>
                    <p className="lead text-center">Cloud architect</p>
                    <p className="lead text-center">Technical consultor</p>
                    <p className="lead text-center">Full stack developer</p>
                    <p className="lead text-center">Electric engineer</p>

                    <div className="d-flex flex-row justify-content-evenly w-100">
                        <button className="btn btn-outline-primary" type="button" >
                            <span className="px-2">Download CV</span>
                            <i className="bi bi-file-earmark-arrow-down-fill"></i>
                        </button>
                        <button className="btn btn-outline-success" type="button" >
                            <span className="px-2">Hire me</span>
                            <i className="bi bi-arrow-up-right-square"></i>
                        </button>
                    </div>
                    
                </div>
                
            </div>
        </section>
    );

}

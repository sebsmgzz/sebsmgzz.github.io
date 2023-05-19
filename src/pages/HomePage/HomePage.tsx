
import { docs } from "global/public";
import { my, urls } from "global/constants";
import { HomePageProps } from "./HomePage.d";
import "./HomePage.scss";

const TitleDisplay = function({ name, name2 }) {
    return (
        <p className="mb-5 lead text-center d-flex flex-md-row flex-column align-items-md-end">
            <span className="d-block fs-4 px-2 lh-1">{name}</span>
            <small className="text-muted my-3 my-md-0 fs-6 lh-1">{name2}</small>
        </p>
    );
}

export const HomePage = function(props: HomePageProps) {
    return (
        <section className="HomePageSection container-fluid col-xxl-8 px-4 py-5">
            <div className="row flex-lg-row-reverse align-items-center justify-content-center g-5 py-5">

                <div className="col-lg-6 col-sm-8 m-auto">
                    <img src="/imgs/myself.png" 
                        className="d-block mx-lg-auto img-fluid m-auto" 
                        alt="Bootstrap Themes" 
                        loading="lazy" />
                </div>
                <div className="col-lg-6 col-10 d-flex flex-column align-items-center">

                    <h1 className="display-5 fw-bold lh-1 mb-5 text-center">
                        {my.shortName}
                    </h1>
                    
                    <TitleDisplay 
                        name="Cloud architect" 
                        name2="with feet on the ground" />
                    <TitleDisplay 
                        name="Technical consultor" 
                        name2="the handyman type" />
                    <TitleDisplay 
                        name="Full stack developer" 
                        name2="sensible to frontend" />
                    <TitleDisplay 
                        name="Electric engineer" 
                        name2="I do hardware as well" />

                    <div className="d-flex flex-column flex-md-row justify-content-evenly align-items-center w-100">
                        <a className="btn btn-outline-primary my-2" type="button" target="_blank" href={docs.cv} >
                            <span className="px-2">Download CV</span>
                            <i className="bi bi-file-earmark-arrow-down-fill"></i>
                        </a>
                        <a className="btn btn-outline-success my-2" type="button" href={`mailto:${my.email}`} >
                            <span className="px-2">Hire me</span>
                            <i className="bi bi-arrow-up-right-square"></i>
                        </a>
                    </div>
                    
                </div>
                
            </div>
        </section>
    );

}

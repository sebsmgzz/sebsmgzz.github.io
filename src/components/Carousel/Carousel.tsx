
import { v4 } from "uuid";

import { CarouselItem } from "components/CarouselItem/CarouselItem";

import { CarouselProps } from "./Carousel.d";
import "./Carousel.scss";

export const Carousel = function(props: CarouselProps) {
    return (
        <div id={props.id} className="carousel slide" data-bs-ride="carousel">
            
            <div className="carousel-indicators">
            {
                props.children.map((child, index) => {
                    return (
                        <button type="button" 
                            data-bs-target={`#${props.id}`} 
                            data-bs-slide-to={index} 
                            className={index === 0 ? "active" : ""}
                            aria-current={index === 0 ? "true" : "false"} 
                            aria-label={`Slide ${index}`} />
                    );
                })
            }
            </div>

            <div className="carousel-inner">
            {props.children}
            </div>

            <button 
                className="carousel-control-prev" 
                type="button" 
                data-bs-target={`#${props.id}`} 
                data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button 
                className="carousel-control-next" 
                type="button" 
                data-bs-target={`#${props.id}`} 
                data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>

        </div>
    );
}

Carousel.defaultProps = {
    id: `${Carousel.name}-${v4()}`
}

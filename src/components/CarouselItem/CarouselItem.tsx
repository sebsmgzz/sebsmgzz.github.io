
import { CarouselItemProps } from "./CarouselItem.d";

export const CarouselItem = function(props: CarouselItemProps) {
    return (
        <div className={`carousel-item ${props.isActive ? "active" : ""}`}>
            <img 
                className="d-block w-100" 
                src={props.src} 
                alt={props.title} />
            <div className="carousel-caption d-none d-md-block">
                <h5>{props.title}</h5>
                {
                    props.description &&
                    <p>{props.description}</p>
                }
            </div>
        </div>
    );
}

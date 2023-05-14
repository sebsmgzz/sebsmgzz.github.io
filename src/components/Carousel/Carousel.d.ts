import { CarouselItemProps } from "components/CarouselItem/CarouselItem"

export type CarouselProps = {
    id: string,
    useIndicators: boolean,
    children: Array<CarouselItemProps>
}

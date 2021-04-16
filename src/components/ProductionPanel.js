import { CarouselProvider, Slide, Slider } from "pure-react-carousel";
import { Embed, Segment } from "semantic-ui-react";

export default function ProductionPanel() {

    return <Segment raised>
        <h1 className="header">Production</h1>
        <CarouselProvider
            isPlaying
            naturalSlideWidth={ 13 }
            naturalSlideHeight={ 7 }
            totalSlides={ 5 }
        >
            <Slider>
                <Slide index={ 0 }>
                    <Embed
                        id="L8TZv_p8Gdo"
                        placeholder="http://i3.ytimg.com/vi/GzrlXU9z5aE/hqdefault.jpg"
                        source="youtube"
                    />
                </Slide>
                <Slide index={ 1 }>
                    <Embed
                        id="IXgqyO68phA"
                        placeholder="http://i3.ytimg.com/vi/IXgqyO68phA/hqdefault.jpg"
                        source="youtube"
                    />
                </Slide>
                <Slide index={ 2 }>
                    <Embed
                        id="0_dyo5rbAZ0"
                        placeholder="http://i3.ytimg.com/vi/0_dyo5rbAZ0/hqdefault.jpg"
                        source="youtube"
                    />
                </Slide>
                <Slide index={ 3 }>
                    <Embed
                        id="X4KgDsW8FM8"
                        placeholder="http://i3.ytimg.com/vi/X4KgDsW8FM8/hqdefault.jpg"
                        source="youtube"
                    />
                </Slide>
                <Slide index={ 4 }>
                    <Embed
                        id="GzrlXU9z5aE"
                        placeholder="http://i3.ytimg.com/vi/GzrlXU9z5aE/hqdefault.jpg"
                        source="youtube"
                    />
                </Slide>
            </Slider>
        </CarouselProvider>
    </Segment>;

}

import { ButtonBack, ButtonNext, CarouselProvider, Slide, Slider } from "pure-react-carousel";
import { useState } from "react";
import { Button, Icon, Image, Modal, Segment } from "semantic-ui-react";

export default function DesignPanel() {

    const [ currentImage, setCurrentImage ] = useState( { open: false, url: "" } );

    const imageStyle = { height: "400px", width: "auto" };
    const images = [
        "design/design1.png",
        "design/design2.png",
        "design/design3.png",
        "design/design4.png",
        "design/design5.png",
        "design/design6.png",
        "design/design7.png",
        "design/design8.png",
        "design/design9.jpg",
        "design/design10.png",
        "design/design11.png",
        "design/design12.png",
        "design/design13.png",
        "design/design14.png",
        "design/design15.png"
    ];

    return <Segment raised>
        <Modal
            basic
            open={ currentImage.open }
            dimmer={ { onClick: () => setCurrentImage( { open: false, url: currentImage.url } ) } }
        >
            <Image centered src={ currentImage.url } style={ { height: "90vh" } }/>
        </Modal>
        <h1 className="header">Design</h1>
        <CarouselProvider
            // isIntrinsicHeight
            naturalSlideWidth={ 9 }
            naturalSlideHeight={ 10 }
            visibleSlides={ 3 }
            totalSlides={ 15 }
        >
            <Slider>
                { images.map( ( image, index ) => {
                    return <Slide key={ index } index={ index }>
                        <Image
                            src={ image }
                            alt=""
                            style={ imageStyle }
                            tag="div"
                            onClick={ () => setCurrentImage( { open: true, url: image } ) }
                        />
                    </Slide>;
                } ) }
            </Slider>
            <div style={ { marginLeft: "40%", marginRight: "40%" } }>
                <Button as={ ButtonBack }><Icon name="backward" /></Button>
                <Button as={ ButtonNext }><Icon name="forward" /></Button>
            </div>
        </CarouselProvider>
    </Segment>;

}
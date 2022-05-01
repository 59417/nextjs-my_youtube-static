import Image from 'next/image';


function VideoImage (props) {
    return (
            <Image
                unoptimized={true}
                src={props.images.image}
                alt={props.images.title}
                width={'300%'}
                height={'200%'}
                layout={"responsive"}
            />
    )
};

export default VideoImage;



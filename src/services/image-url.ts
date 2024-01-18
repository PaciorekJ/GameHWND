import noImage from '../assets/no-image-placeholder.webp';

const getCroppedImageUrl = (url: string) => {
    const target = 'media/'

    if (!url) return noImage;

    const index = url.indexOf(target);

    const height = 600
    const width  = 400

    return url.substring(0, index) + `${target}crop/${height}/${width}` + url.substring(index + (target.length-1))
}

export default getCroppedImageUrl

interface videos {
    480: string;
    max: string;
};

export default interface Trailer {
    id: number;
    name: string;
    preview: string; // URL
    data: videos;
}
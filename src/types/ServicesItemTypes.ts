interface PathItem {
    label: string;
    path: string;
}

interface ServicesItem {
    name: string;
    links: PathItem[];
    imgKey: string;
}

export default ServicesItem;

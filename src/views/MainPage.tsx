import Hero from '../components/Hero';

import COVER_PHOTO from '../assets/cover.jpg';
import Bestsellers from '../components/Bestsellers';

const products = [
    {
        id: 1,
        gender: 'men',
        category: 'clothing',
        subcategory: 't-shirts',
        productName: 'T-Shirt',
        brand: 'Top Brand',
        pricePLN: 49,
        priceUSD: 10,
        photos: [
            '/product-photos/man-t-shirt-1.jpg',
            '/product-photos/man-t-shirt-4.jpg',
            '/product-photos/man-t-shirt-3.jpg',
        ],
        description:
            'Crafted for comfort and durability, this T-Shirt from Top Brand features a classic cut and soft fabric that adapts seamlessly to your lifestyle. Ideal for casual outings or as a staple piece for your laid-back days.',
        maintenanceInfo:
            'For lasting use, machine wash on a gentle cycle and hang to dry. Avoid bleach and iron on low heat.',
    },
    {
        id: 2,
        gender: 'men',
        category: 'clothing',
        subcategory: 't-shirts',
        productName: 'T-Shirt',
        brand: 'Top Brand',
        pricePLN: 49,
        priceUSD: 10,
        photos: [
            '/product-photos/man-t-shirt-1.jpg',
            '/product-photos/man-t-shirt-4.jpg',
            '/product-photos/man-t-shirt-3.jpg',
        ],
        description:
            "This classic T-Shirt from Top Brand offers unmatched versatility and comfort. Designed to fit seamlessly into any wardrobe, it's perfect for daily wear or special occasions.",
        maintenanceInfo: 'To ensure long-lasting wear, wash cold and line dry. Iron on a low setting if necessary.',
    },
    {
        id: 3,
        gender: 'men',
        category: 'clothing',
        subcategory: 't-shirts',
        productName: 'T-shirt 2',
        brand: 'Sun Tzu',
        pricePLN: 199,
        priceUSD: 49,
        photos: [
            '/product-photos/man-t-shirt-4.jpg',
            '/product-photos/man-t-shirt-3.jpg',
            '/product-photos/man-t-shirt-4.jpg',
        ],
        description:
            "Sun Tzu's T-shirt 2 is all about comfort and style. Its lightweight fabric and sleek design make it an excellent choice for both leisure and active wear.",
        maintenanceInfo:
            "Avoid hot water, bleach, and high-temperature drying to maintain the shirt's shape and color over time.",
    },
    {
        id: 4,
        gender: 'men',
        category: 'clothing',
        subcategory: 't-shirts',
        productName: 'T-shirt 3',
        brand: 'Sun Tzu',
        pricePLN: 199,
        priceUSD: 49,
        photos: [
            '/product-photos/man-t-shirt-3.jpg',
            '/product-photos/man-t-shirt-4.jpg',
            '/product-photos/man-t-shirt-1.jpg',
        ],
        description:
            'T-shirt 3 from Sun Tzu blends innovative fabric technology with modern design to provide optimum durability and a stylish look suitable for various occasions.',
        maintenanceInfo: 'Machine wash on gentle cycle and hang to dry for best results. Do not use bleach.',
    },
];

function MainPage() {
    return (
        <>
            <Hero heroImage={COVER_PHOTO} />
            <Bestsellers products={products} />
        </>
    );
}

export default MainPage;

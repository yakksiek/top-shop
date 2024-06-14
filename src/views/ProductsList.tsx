import Products from '../components/Products';
import Breadcrumbs from '../components/Breadcrumbs';
import Pagination from '../components/Pagination';

const products = [
    {
        id: 10,
        gender: 'men',
        category: 'clothing',
        subcategory: 't-shirts',
        productName: 'T-Shirt',
        brand: 'Top Brand',
        pricePLN: 49,
        priceUSD: 10,
        photos: [
            '/product-photos/man-t-shirt-3.jpg',
            '/product-photos/man-t-shirt-1.jpg',
            '/product-photos/man-t-shirt-4.jpg',
        ],
        description:
            'This classic T-Shirt by Top Brand is designed for ultimate comfort and durability, perfect for everyday wear or casual outings.',
        maintenanceInfo:
            'For best results, wash this t-shirt in cold water and line dry to maintain its shape and color.',
    },
    {
        id: 11,
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
            'T-shirt 2 from Sun Tzu features innovative fabric technology that offers enhanced breathability and moisture-wicking properties for active or leisure use.',
        maintenanceInfo: 'Machine wash on a gentle cycle and tumble dry on low. Avoid ironing directly on the print.',
    },
    {
        id: 12,
        gender: 'men',
        category: 'clothing',
        subcategory: 't-shirts',
        productName: 'T-shirt 3',
        brand: 'Sun Tzu',
        pricePLN: 199,
        priceUSD: 49,
        photos: [
            '/product-photos/man-t-shirt-4.jpg',
            '/product-photos/man-t-shirt-4.jpg',
            '/product-photos/man-t-shirt-1.jpg',
        ],
        description:
            'T-shirt 3 by Sun Tzu is crafted for comfort and style, combining traditional design with modern fabric enhancements for superior fit and feel.',
        maintenanceInfo: 'Wash this garment inside out to protect the fabric surface and print. Do not bleach.',
    },
    {
        id: 13,
        gender: 'men',
        category: 'clothing',
        subcategory: 't-shirts',
        productName: 'T-shirt 4',
        brand: 'Sun Tzu',
        pricePLN: 129,
        priceUSD: 39,
        photos: [
            '/product-photos/man-t-shirt-4.jpg',
            '/product-photos/man-t-shirt-3.jpg',
            '/product-photos/man-t-shirt-4.jpg',
        ],
        description:
            "This fashion-forward T-shirt 4 from Sun Tzu is designed with an eye for detail, featuring a sleek, minimalist look that doesn't compromise on comfort.",
        maintenanceInfo:
            'To maintain the pristine condition of this t-shirt, avoid high heat in washing or drying. Iron on the reverse side.',
    },
    {
        id: 14,
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
            'Enhance your wardrobe with the Top Brand T-Shirt, blending a contemporary fit with the softness and resilience needed for both active days and relaxation.',
        maintenanceInfo: 'Cold wash and gentle cycle recommended. Dry at low temperatures and iron gently if needed.',
    },
    {
        id: 15,
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
            "Return to the essentials with Sun Tzu's T-shirt 2, designed for optimal comfort and long-lasting wear. Perfect for those who value quality and simplicity.",
        maintenanceInfo: 'For lasting use, avoid using bleach and do not dry clean. Iron on low heat if necessary.',
    },
    {
        id: 16,
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
            "Sun Tzu's T-shirt 3 is the perfect blend of classic style and modern performance, ideal for both sport and casual wear.",
        maintenanceInfo: 'Machine washable at 30°C, tumble dry on a low setting. Avoid direct ironing on print.',
    },
    {
        id: 17,
        gender: 'men',
        category: 'clothing',
        subcategory: 't-shirts',
        productName: 'T-shirt 4',
        brand: 'Sun Tzu',
        pricePLN: 129,
        priceUSD: 39,
        photos: [
            '/product-photos/man-t-shirt-4.jpg',
            '/product-photos/man-t-shirt-3.jpg',
            '/product-photos/man-t-shirt-4.jpg',
        ],
        description:
            'T-shirt 4 from Sun Tzu offers an advanced design with a focus on mobility and comfort, making it a top choice for daily activities.',
        maintenanceInfo: 'Use a mild detergent and cool water for washing. Dry flat for best results.',
    },
    {
        id: 18,
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
            'Crafted for simplicity and comfort, the Top Brand T-Shirt is your go-to option for a relaxed yet refined look.',
        maintenanceInfo:
            'Simple care is best: wash in cool water, avoid high heat drying, and iron on a low setting only when necessary.',
    },
    {
        id: 19,
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
            'Opt for T-shirt 2 from Sun Tzu for its superior durability and sophisticated styling that doesn’t sacrifice comfort.',
        maintenanceInfo: 'Machine wash cold with similar colors. Do not bleach. Hang dry for best results.',
    },
    {
        id: 21,
        gender: 'men',
        category: 'clothing',
        subcategory: 't-shirts',
        productName: 'T-shirt 4',
        brand: 'Sun Tzu',
        pricePLN: 129,
        priceUSD: 39,
        photos: [
            '/product-photos/man-t-shirt-4.jpg',
            '/product-photos/man-t-shirt-3.jpg',
            '/product-photos/man-t-shirt-4.jpg',
        ],
        description:
            "Experience unparalleled comfort and style with our men's T-shirt, featuring high-quality fabric and a classic cut. Perfect for both casual and formal occasions.",
        maintenanceInfo: 'For best care, machine wash in warm water, avoid using bleach, and tumble dry on low.',
    },
    {
        id: 22,
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
            "Crafted for comfort and durability, our essential T-shirt is a must-have in every wardrobe. It's versatile for both everyday wear and layering.",
        maintenanceInfo: 'Machine wash cold with like colors, tumble dry low. Do not iron the print.',
    },
    {
        id: 23,
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
            'Our premium T-shirt blends style with practicality, making it an excellent choice for any activity. Features a soft texture and resilient fabric.',
        maintenanceInfo: 'Wash separately in cold water, hang dry, avoid bleach to maintain color integrity.',
    },
    {
        id: 24,
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
            'Strike the perfect balance between casual and stylish with our soft, breathable T-shirt, designed for all-day comfort and lasting wear.',
        maintenanceInfo: 'Gentle cycle in washing machine, use non-chlorine bleach if needed, line dry in shade.',
    },
    {
        id: 25,
        gender: 'men',
        category: 'clothing',
        subcategory: 't-shirts',
        productName: 'T-shirt 4',
        brand: 'Sun Tzu',
        pricePLN: 129,
        priceUSD: 39,
        photos: [
            '/product-photos/man-t-shirt-4.jpg',
            '/product-photos/man-t-shirt-3.jpg',
            '/product-photos/man-t-shirt-4.jpg',
        ],
        description:
            'Step up your style with our designer T-shirt, featuring exclusive prints and a tailored fit. Ideal for a sharp, modern look.',
        maintenanceInfo: 'Wash in mild detergent, avoid high heat, dry flat away from direct sunlight.',
    },
    {
        id: 26,
        gender: 'women',
        category: 'footwear',
        subcategory: 'elegant',
        productName: 'Heels',
        brand: 'Test Manufacturer',
        pricePLN: 49,
        priceUSD: 10,
        photos: ['/product-photos/women-shoes-1.jpg', '/product-photos/women-shoes-2.jpg'],
        description:
            'Elevate your evening look with our elegant heels, designed for sophistication and comfort. Perfect for special occasions.',
        maintenanceInfo: 'Keep in a dry place, use shoe polish for leather care, avoid water exposure.',
    },
];

function ProductsList() {
    return (
        <div>
            <Breadcrumbs />
            <Products products={products} heading='Sweaters' />
            <Pagination numOfPages={5} />
        </div>
    );
}

export default ProductsList;

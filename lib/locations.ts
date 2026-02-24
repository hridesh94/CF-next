export interface BranchInfo {
    id: string;
    slug: string;
    name: string;
    shortName: string;
    address: string;
    city: string;
    phone: string[];
    email: string;
    status: 'Open Now' | 'Opens at 10AM';
    mapEmbedUrl: string;
    googleMapsUrl: string;
    latitude: number;
    longitude: number;
    featuredImage: string;
    sellingPoints: string[];
}

export const locations: Record<string, BranchInfo> = {
    hattigauda: {
        id: 'hattigauda',
        slug: 'hattigauda',
        name: 'Caffeine Factory Hattigauda',
        shortName: 'Hattigauda',
        address: 'Near Budhanilkantha School, Hattigauda',
        city: 'Kathmandu',
        phone: ['+977 1-4423456', '+977-9818339553'],
        email: 'hello@caffeinefactory.np',
        status: 'Open Now',
        // Replace with actual Google Maps Embed iframe src from Google Maps → Share → Embed a map
        mapEmbedUrl:
            'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3530.0!2d85.35240!3d27.75830!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDQ1JzMwLjAiTiA4NcKwMjEnMDguNiJF!5e0!3m2!1sen!2snp!4v1234567890',
        // Replace with actual verified Google Business Profile URL
        googleMapsUrl: 'https://maps.app.goo.gl/PLACEHOLDER_HATTIGAUDA',
        latitude: 27.7583,
        longitude: 85.3524,
        featuredImage: '/images/branches/hattigauda-og.jpg',
        sellingPoints: [
            'Accessible location near Budhanilkantha School',
            'Quiet, focused training environment ideal for beginners',
            'Advanced manual brewing stations on-site',
        ],
    },
    bhaktapur: {
        id: 'bhaktapur',
        slug: 'bhaktapur',
        name: 'Caffeine Factory Bhaktapur',
        shortName: 'Bhaktapur',
        address: 'Suryabinayak Chowk, Bhaktapur',
        city: 'Bhaktapur',
        phone: ['+977 1-4423456', '+977-9818339553'],
        email: 'hello@caffeinefactory.np',
        status: 'Open Now',
        mapEmbedUrl:
            'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.0!2d85.42980!3d27.67100!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDQwJzE1LjYiTiA4NcKwMjUnNDcuMyJF!5e0!3m2!1sen!2snp!4v1234567890',
        googleMapsUrl: 'https://maps.app.goo.gl/PLACEHOLDER_BHAKTAPUR',
        latitude: 27.671,
        longitude: 85.4298,
        featuredImage: '/images/branches/bhaktapur-og.jpg',
        sellingPoints: [
            'Authentic coffee roasting seminars in a heritage setting',
            'Specialized latte art and espresso workshops',
            'Conveniently located at Suryabinayak Chowk',
        ],
    },
    chabahil: {
        id: 'chabahil',
        slug: 'chabahil',
        name: 'Caffeine Factory Chabahil',
        shortName: 'Chabahil',
        address: 'Near Chabahil Stupa, Kathmandu',
        city: 'Kathmandu',
        phone: ['+977 1-4423456', '+977-9818339553'],
        email: 'hello@caffeinefactory.np',
        status: 'Opens at 10AM',
        mapEmbedUrl:
            'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.0!2d85.34650!3d27.71720!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDQzJzAyLjAiTiA4NcKwMjAnNDcuNCJF!5e0!3m2!1sen!2snp!4v1234567890',
        googleMapsUrl: 'https://maps.app.goo.gl/PLACEHOLDER_CHABAHIL',
        latitude: 27.7172,
        longitude: 85.3465,
        featuredImage: '/images/branches/chabahil-og.jpg',
        sellingPoints: [
            'Centrally located for easy access from all parts of Kathmandu',
            'Intensive weekend crash courses available',
            'Career placement assistance for graduates',
        ],
    },
    kalanki: {
        id: 'kalanki',
        slug: 'kalanki',
        name: 'Caffeine Factory Kalanki',
        shortName: 'Kalanki',
        address: 'Near Makalu Petrol Pump, Kalanki',
        city: 'Kathmandu',
        phone: ['+977 1-4423456', '+977-9818339553'],
        email: 'hello@caffeinefactory.np',
        status: 'Open Now',
        mapEmbedUrl:
            'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.5!2d85.28180!3d27.69460!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDQxJzM1LjYiTiA4NcKwMTYnNTQuNSJF!5e0!3m2!1sen!2snp!4v1234567890',
        googleMapsUrl: 'https://maps.app.goo.gl/PLACEHOLDER_KALANKI',
        latitude: 27.6946,
        longitude: 85.2818,
        featuredImage: '/images/branches/kalanki-og.jpg',
        sellingPoints: [
            'Large, spacious practical labs with industry-standard machines',
            'Advanced Brewing Science equipment',
            'Flexible morning and evening scheduling',
        ],
    },
};

export const getAllBranches = (): BranchInfo[] => Object.values(locations);
export const getBranchBySlug = (slug: string): BranchInfo | undefined =>
    locations[slug.toLowerCase()];

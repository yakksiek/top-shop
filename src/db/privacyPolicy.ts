// privacyPolicy.js
export interface PrivacyPolicySection {
    title: string;
    description: string;
    list: string[];
    footer?: string;
}

export interface PrivacyPolicy {
    [key: string]: PrivacyPolicySection;
}

const privacyPolicy: PrivacyPolicy = {
    section1: {
        title: '1. Personal Information We Collect',
        description: 'We may collect the following types of personal information:',
        list: [
            'Identification & Contact Information: Name, address, phone number, and email.',
            'Payment Information: Credit card details, bank account numbers, and other payment methods.',
            'Demographic Information: Gender, birthday.',
            'Preferences: Preferences you share with our client advisors.',
            'Purchase History: Details of purchases online or in-store.',
            'Website/App Usage: Information on your browsing behavior and GPS location (with consent).',
            'Images/Recordings: CCTV footage in stores and recorded customer service calls.',
            'Social Media Posts: Public information posted on social platforms about our products.',
        ],
    },
    section2: {
        title: '2. How We Use Your Information',
        description: 'We use your personal information to:',
        list: [
            'Improve products and services, customize your experience, and tailor marketing.',
            'Process orders, respond to inquiries, and manage complaints.',
            'Ensure security and protect against fraud.',
            'Comply with legal obligations and for anti-counterfeiting purposes.',
            'Conduct marketing activities (with your consent).',
            'Analyze our campaigns and customer feedback.',
            'Maintain business records and comply with legal and audit requirements.',
        ],
    },
    section3: {
        title: '3. Sharing Your Information',
        description: 'We may share your information with:',
        list: [
            'Affiliated Companies: For internal audit, billing, and providing global services.',
            'Service Providers: For operational support, such as email delivery.',
            'Payment Services: For processing transactions.',
            'Business Partners: With your consent, for joint promotions or events.',
            'Third Parties: In case of business restructuring or when required by law.',
        ],
    },
    section4: {
        title: '4. Cookies and Tracking',
        description: 'We use cookies to:',
        list: [
            'Improve browsing experience (e.g., remembering login details, preferences).',
            'Track user behavior to enhance content and personalize communications.',
            'Measure website performance and ensure transaction security.',
            'Provide third-party integrations (e.g., social media buttons).',
        ],
        footer: 'You can manage cookie settings on your device, but this may limit access to certain services.',
    },
};

export default privacyPolicy;

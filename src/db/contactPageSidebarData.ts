import { TfiEmail } from 'react-icons/tfi';
import { MdWhatsapp } from 'react-icons/md';
import { SiImessage } from 'react-icons/si';
import { PiMessengerLogo } from 'react-icons/pi';

export const callUs = [
    { icon: TfiEmail, label: 'Send an Email', link: '/email-us' },
    { icon: MdWhatsapp, label: 'WhatsApp', link: 'https://wa.me/1234567' },
    { icon: SiImessage, label: 'Apple Message', link: 'sms:1-408-555-1212' },
    { icon: PiMessengerLogo, label: 'Facebook Messanger', link: 'http://m.me/<FACEBOOK_PAGE_USERNAME>' },
];

export const needHelp = [
    {
        label: 'FAQ',
        link: '/faq',
    },
    {
        label: 'Care Service',
        link: '/care-service',
    },
    {
        label: 'Find a Store',
        link: '/stores',
    },
];

interface Size {
    mobile: string;
    tablet: string;
    desktop: string;
}

const size: Size = {
    mobile: '600px',
    tablet: '900px',
    desktop: '1040px',
};

export const device = {
    mobile: `(max-width: ${size.mobile})`,
    tablet: `(max-width: ${size.tablet})`,
    desktop: `(min-width: ${size.desktop})`,
};

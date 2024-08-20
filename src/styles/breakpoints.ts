interface Size {
    mobile: string;
    tablet: string;
    desktop: string;
}

export const size: Size = {
    mobile: '768px',
    tablet: '769px',
    desktop: '1024px',
};

export const device = {
    mobile: `(max-width: ${size.mobile})`,
    tablet: `(min-width: ${size.tablet})`,
    desktop: `(min-width: ${size.desktop})`,
};

import { createGlobalStyle } from 'styled-components';

import FuturaLight from './Futura45Light.ttf';
import FuturaRegular from './Futura55Regular.ttf';
import FuturaMedium from './Futura65Medium.ttf';

interface FontFile {
    family: string;
    src: string;
    style?: string;
    weight?: string;
}

const fontFiles: FontFile[] = [
    {
        family: 'Futura',
        src: FuturaLight,
        style: 'normal',
        weight: '300', // Light
    },
    {
        family: 'Futura',
        src: FuturaRegular,
        style: 'normal',
        weight: '400', // Regular
    },
    {
        family: 'Futura',
        src: FuturaMedium,
        style: 'normal',
        weight: '500', // Medium
    },
];

const createFontFace = ({ family, src, style = 'normal', weight = 'normal' }: FontFile) => `
@font-face {
  font-family: '${family}';
  src: url(${src}) format('opentype');
  font-style: ${style};
  font-weight: ${weight};
}
`;

export default createGlobalStyle`
${fontFiles.map(createFontFace).join('\n')}
`;

// This is a way to make reusable data

import Img1 from '../../images/svg-1.svg';
import Img2 from '../../images/svg-2.svg';
import Img3 from '../../images/svg-3.svg';

export const homeObjOne = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Premium Bank',
    headline: 'Unlimited Transactions with Zero fees',
    description: 'Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees.',
    buttonLabel: 'Get started',
    imgStart: false,
    img: `${Img1}`,
    // img: `require('../../images/svg-1.svg')`,
    alt: 'Car',
    dark: true,
    primary: true,
    // darkText: false
}



export const homeObjTwo = {
    id: 'discover',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Unlimited Access',
    headline: 'Unlimited Transactions with zero fees',
    description: 'Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees.',
    buttonLabel: 'Learn More',
    imgStart: true,
    img: `${Img2}`,
    // img: require('../../images/svg-2.svg'),
    alt: 'Car',
    dark: false,
    primary: false,
    // darkText: true
}




export const homeObjThree = {
    id: 'signup',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Join Our Team',
    headline: 'Creating an account is extrmely easy',
    description: 'Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees.',
    buttonLabel: 'Start Now',
    imgStart: true,
    img: `${Img3}`,
    // img: require('../../images/svg-3.svg'),
    alt: 'Paper',
    dark: false,
    primary: false,
    // darkText: true
}


/*  require()

One of the major differences between require() and import() is that require() can be called from anywhere inside the program whereas import() cannot be called conditionally, it always runs at the beginning of the file.

To use the require() statement, a module must be saved with .js extension as opposed to .mjs when the import() statement is used.

ES modules can be loaded dynamically via the import() function unlike require().

-----------------------------------------

https://www.freecodecamp.org/news/require-module-in-node-js-everything-about-module-require-ccccd3ad383/

If you have a module x in which you are exporting some constructs using the module.exports object and you want to import these exported constructs in module y, you then need to require the module x in the module y using the require function. The value returned by the require function in module y is equal to the module.exports object in the module x.
 */

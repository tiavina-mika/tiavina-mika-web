export const isProd = process.env.NODE_ENV === 'production';
export const API_ENDPOINT = 'https://tiavina-mika-api.herokuapp.com';
export const PRODUCT_API = `${API_ENDPOINT}/products`;
export const xss = 370;
export const xs = 420;
export const sm = 768;
export const md = 992;
export const mdx = 1080;
export const lg = 1200;
export const xl = 1600;
export const media = {
    xssDown: `@media (max-width: ${xss}px)`,
    mdxDown: `@media (max-width: ${mdx}px)`,
    xsDown: `@media (max-width: ${xs}px)`,
    smDown: `@media (max-width: ${sm}px)`,
    mdDown: `@media (max-width: ${md}px)`,
    lgDown: `@media (max-width: ${lg}px)`,
    xlDown: `@media (max-width: ${xl}px)`,
    xssUp: `@media (min-width: ${xss}px)`,
    xsUp: `@media (min-width: ${xs}px)`,
    smUp: `@media (min-width: ${sm}px)`,
    mdxUp: `@media (min-width: ${mdx}px)`,
    mdUp: `@media (min-width: ${md}px)`,
    lgUp: `@media (min-width: ${lg}px)`,
    xlUp: `@media (min-width: ${xl}px)`,
    xssXs: `@media (min-width: ${xss}px) and (max-width: ${xs}px)`,
    xssSm: `@media (min-width: ${xss}px) and (max-width: ${sm}px)`,
    xsSm: `@media (min-width: ${xs}px) and (max-width: ${sm}px)`,
    xsMd: `@media (min-width: ${xs}px) and (max-width: ${md}px)`,
    xsLg: `@media (min-width: ${xs}px) and (max-width: ${lg}px)`,
    smMd: `@media (min-width: ${sm}px) and (max-width: ${md}px)`,
    smLg: `@media (min-width: ${sm}px) and (max-width: ${lg}px)`,
    smXl: `@media (min-width: ${sm}px) and (max-width: ${xl}px)`,
    mdLg: `@media (min-width: ${md}px) and (max-width: ${lg}px)`,
    mdxLg: `@media (min-width: ${mdx}px) and (max-width: ${lg}px)`,
    mdXl: `@media (min-width: ${md}px) and (max-width: ${xl}px)`,
    lgXl: `@media (min-width: ${lg}px) and (max-width: ${xl}px)`,
};

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
    mount: {
        public: {url: '/', static: true},
        src: {url: '/dist'},
    },
    plugins: [
        '@snowpack/plugin-react-refresh',
        '@snowpack/plugin-postcss',
        '@snowpack/plugin-dotenv',
        'snowpack-plugin-relative-css-urls',
        [
            '@snowpack/plugin-typescript',
            {
                /* Yarn PnP workaround: see https://www.npmjs.com/package/@snowpack/plugin-typescript */
                ...(process.versions.pnp ? {tsc: 'yarn pnpify tsc'} : {}),
            },
        ],
    ],
    routes: [
        /* Enable an SPA Fallback in development: */
        // {"match": "routes", "src": ".*", "dest": "/index.html"},
    ],
    optimize: {
        bundle: true,
        minify: true,
        target: 'es2020',
    },
    packageOptions: {
        /* ... */
    },
    devOptions: {
        /* ... */
    },
    buildOptions: {
        /* ... */
    },
};

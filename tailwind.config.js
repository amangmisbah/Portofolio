// tailwind.config.js
module.exports = {
    purge: ['./public/**/*.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                Poppins: ['Poppins']
            },
            animation: {
                'spin-slow': 'spin 3s linear infinite',
                'bounce': 'bounce 8s height2',
            },
            opacity: {
                '0': '0',
                '25': '.25',
                '50': '.5',
                '75': '.75',
                '10': '.1',
                '20': '.2',
                '30': '.3',
                '40': '.4',
                '50': '.5',
                '60': '.6',
                '70': '.7',
                '80': '.8',
                '90': '.9',
                '100': '1',
            },
        },
    },
    variants: {},
    plugins: [],
};
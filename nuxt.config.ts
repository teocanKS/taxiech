// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },

    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxt/image',
        'nuxt-security',
        '@nuxtjs/seo'
    ],

    app: {
        head: {
            htmlAttrs: {
                lang: 'de-CH'
            },
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
            ]
        }
    },

    typescript: {
        strict: true
    },

    // Security Configuration
    security: {
        headers: {
            crossOriginEmbedderPolicy: 'unsafe-none', // Allow images from external sources if needed
            contentSecurityPolicy: {
                'img-src': ["'self'", "data:", "blob:", "https://maps.googleapis.com", "*"], // Allow images
            }
        },
        sri: false, // Fix: integrity attribute ignored warning
    },

    // Image Configuration
    image: {
        // Options
    },

    // Site Config for SEO
    site: {
        url: 'https://taxie.ch',
        name: 'Taxie',
        description: 'Pünktlich, Sicher, Zuverlässig - Ihr Taxi in der Schweiz.',
        defaultLocale: 'de-CH',
    },

    compatibilityDate: '2025-12-17'
})
export const useZone = () => {
    const route = useRoute()

    // Default State
    const zone = useState('zone', () => ({
        name: 'Taxie',
        locality: 'Waltenschwil',
        schemaAddress: 'Büelisackerstrasse 34, 5622 Waltenschwil'
    }))

    const updateZone = () => {
        // Check query param first
        const queryZone = route.query.zone as string | undefined

        // Check host for production/simulation
        let host = ''
        if (import.meta.client) {
            host = window.location.hostname
        } else {
            const event = useRequestEvent()
            host = event?.node.req.headers.host || ''
        }

        if (queryZone === 'wohlen' || host.includes('wohlen-taxi.ch')) {
            zone.value = {
                name: 'Taxi Wohlen',
                locality: 'Wohlen',
                schemaAddress: 'Bahnhofstrasse 1, 5610 Wohlen' // Example address for schema
            }
        } else if (queryZone === 'muri' || host.includes('muri-taxi.ch')) {
            zone.value = {
                name: 'Taxi Muri',
                locality: 'Muri AG',
                schemaAddress: 'Bahnhofstrasse 1, 5630 Muri AG'
            }
        } else if (queryZone === 'bremgarten') {
            zone.value = {
                name: 'Taxi Bremgarten',
                locality: 'Bremgarten',
                schemaAddress: 'Bahnhofstrasse 1, 5620 Bremgarten'
            }
        } else {
            // Default / Reset
            zone.value = {
                name: 'Taxie',
                locality: 'Waltenschwil',
                schemaAddress: 'Büelisackerstrasse 34, 5622 Waltenschwil'
            }
        }
    }

    // Watch for route changes
    if (import.meta.client) {
        watch(() => route.query, () => {
            updateZone()
        }, { immediate: true })
    } else {
        // Initial server-side check
        updateZone()
    }

    return {
        zone
    }
}

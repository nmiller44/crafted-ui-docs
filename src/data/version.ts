const FALLBACK_VERSION = '0.4.0';
const REGISTRY_URL = 'https://registry.npmjs.org/crafted-ui/latest';

/**
 * Resolves the published crafted-ui version at build time.
 * Falls back to a pinned constant when the registry is unreachable so that
 * offline or network-restricted builds still succeed.
 */
export const getCraftedUiVersion = async (): Promise<string> => {
    try {
        const response = await fetch(REGISTRY_URL, {
            signal: AbortSignal.timeout(5000),
        });

        if (!response.ok) return FALLBACK_VERSION;

        const { version } = await response.json();
        return typeof version === 'string' && version ? version : FALLBACK_VERSION;
    } catch {
        return FALLBACK_VERSION;
    }
};

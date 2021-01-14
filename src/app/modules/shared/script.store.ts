interface Scripts {
    name: string;
    src: string;
}

/**
 * Repository of static scripts that we want to load
 */
export const ScriptStore: Scripts[] = [
    {
        name: 'splash', src: '../../../assets/js/splash.js'
    }
];
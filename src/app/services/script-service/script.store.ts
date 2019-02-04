interface Scripts {
    name: string;
    src: string;
}

/**
 * Repository of static scripts that we want to load
 */
export const ScriptStore: Scripts[] = [
    {
        name: 'bubble', src: '../../../assets/bubble.js'
    }
];

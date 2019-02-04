import { Injectable } from '@angular/core';
import { ScriptStore } from './script.store';

declare var document: any;

@Injectable()
export class ScriptService {
    private scripts: any = {};

    constructor() {
        // For each script, update entry to see if the script has loaded or not
        ScriptStore.forEach(script => {
            this.scripts[script.name] = {
                loaded: false,
                src: script.src
            };
        });
    }

    /**
     * Load given scripts from library by name
     * 
     * @param {...string[]} scripts - list of strings of scripts by name
     * @returns 
     * @memberof ScriptService
     */
    load(...scripts: string[]) {
        let promises: any[] = [];
        scripts.forEach((script) => promises.push(this.loadScript(script)));
        return Promise.all(promises);
    }

    /**
     * Helper function for resolving or rejecting promises for loading scripts
     * 
     * @param {string} name 
     * @returns 
     * @memberof ScriptService
     */
    loadScript(name: string) {
        return new Promise((resolve, reject) => {
            //resolve if already loaded
            if (this.scripts[name].loaded) {
                resolve({script: name, loaded: true, status: 'Already Loaded'});
            }
            else {
                //load script
                let script = document.createElement('script');
                script.type = 'text/javascript';
                script.src = this.scripts[name].src;
                if (script.readyState) {  //IE
                    script.onreadystatechange = () => {
                        if (script.readyState === "loaded" || script.readyState === "complete") {
                            script.onreadystatechange = null;
                            this.scripts[name].loaded = true;
                            resolve({script: name, loaded: true, status: 'Loaded'});
                        }
                    };
                } else {  //Others
                    script.onload = () => {
                        this.scripts[name].loaded = true;
                        resolve({script: name, loaded: true, status: 'Loaded'});
                    };
                }
                script.onerror = (error: any) => resolve({script: name, loaded: false, status: 'Loaded'});
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        });
    }
}
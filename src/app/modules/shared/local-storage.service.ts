import { Injectable } from '@angular/core';

/**
 * Service for managing local storage data.
 *
 * @export
 * @class LocalStorageService
 */
@Injectable()
export class LocalStorageService {
    constructor() {}

    /**
     * Sets item into local storage.
     *
     * @param {string} key - key to store object with.
     * @param {*} value - value to store in local storage.
     * @memberof LocalStorageService
     */
    setItem(key: string, value: any): void {
        localStorage.setItem(key, JSON.stringify({ value }));
    }

    /**
     * Overloaded function to fetch item from local storage.
     * Supports returning a default parameter.
     *
     * @template T - expected return type of object in storage.
     * @param {string} key - key of item stored in local storage.
     * @returns {(T | null)} - returns stored object with expected type.
     * @memberof LocalStorageService
     */
    getItem<T>(key: string): T | null;
    getItem<T>(key: string, otherwise: T): T;
    getItem<T>(key: string, otherwise?: T): T | null {
        const data: string | null = localStorage.getItem(key);

        if (data !== null) {
            return JSON.parse(data).value;
        }

        if (otherwise) {
            return otherwise;
        }

        return null;
    }
}
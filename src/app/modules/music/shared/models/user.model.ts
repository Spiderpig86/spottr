import { Followers, Image, StringObject } from './shared.model';

export interface User {
    birthday: string;
    country: string;
    display_name: string;
    explicit_content: any;
    externals_urls: StringObject;
    follwers: Followers;
    href: string;
    id: string;
    images: Image[];
    product: string;
    type: string;
    uri: string;
}
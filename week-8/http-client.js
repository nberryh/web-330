/*
===========================================
; Title:  http-client.js
; Author: Nolan Berryhill
; Date:   16 July 2023
; Description: Applying strings to list in html
;==========================================
*/

//Creates and export HttpClient

export class HttpClient {
    async get(url, params) {
        url = new URL(url);
        url.search = new URLSearchParams(params);

        const res = await fetch(url.toString(), {
            method: 'GET',
        });

        const data = await res.json();
        return data;
    }
}
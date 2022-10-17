---
layout: '../layouts/AboutLayout.astro'
title: 'About | Markdown Page'
---

# About

Situs ini ditulis menggunakan **Astro** Framework, yang kelihatannya
didominasi oleh gaya pemrograman **Typescript**, dengan data-data dan
fungsi yang sangat _strict_.

Halaman ini sendiri saya tulis dalam format _markdown_, yang dimasukkan begitu saja
ke dalam folder *pages* dalam project ini. Nantinya secara internal astro akan
melakukan konversi menjadi HTML, lengkap dengan map ke _route_ yang kita gunakan
sebagai link dalam ulasan ini.

Misalnya kalau kita memasukkan [People](/people), saya ingin tahu bagaimana nantinya
link tersebut akan dikonversikan oleh astro, karena dalam hal ini mengacu ke dokumen HTML
itu sendiri, dan bukan sebuah skrip.

## Pewarnaan Sintaks

Kita juga ingin tahu apakah potongan kode program seperti contoh berikut mendapat pewarnaan
secara otomatis.

```javascript

    async function doTest() {
        console.log("This is a test);
    }
    
```




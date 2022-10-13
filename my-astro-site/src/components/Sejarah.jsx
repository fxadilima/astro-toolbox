import React from 'react';

const Sejarah = () => {
    return (
        <div className="w3-container">
            <h1>Sejarah</h1>
            <p>
                Halaman Sejarah yang ditulis menggunakan JSX.
            </p>
            <div className="w3-panel w3-card-4 w3-round">
                <h2>W3CSS Card</h2>
                <p>
                    Ini sungguh-sungguh menggunakan W3CSS Card, dan mengandung sebuah <code>Button</code>&nbsp;
                    untuk kembali ke halaman <a href="/">Home</a>.
                    Perhatikan bahwa bagian ini juga dimuat oleh Home, tetapi dengan style yang sangat berbeda.
                </p>
                <p>
                    Di halaman Home card ini sendiri hanya sebuah paragraf biasa, karena tidak ada styling yang mewakili w3-card-4.
                </p>
            </div>
        </div>
    );
}

export default Sejarah;

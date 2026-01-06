import React, { useState } from 'react';
import {pembayaranData} from "../data";

const PembayaranComponent = () => {

    const [namaPasien, setNamaPasien] = useState("");
    const [rmPasien, setRmPasien] = useState("");
    const [dataPasien, setDataPasien] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [metodeBayar, setMetodeBayar] = useState("");

    const handleCari = () => {
        const result = pembayaranData.find(item =>
            item.namaPasien.toLowerCase() === namaPasien.toLowerCase() &&
            item.noRm === rmPasien
        );

        setDataPasien(result || null);
    };

    const hitungTotal = () => {
        if (!dataPasien) return 0;

        const totalLayanan = dataPasien.layanan.reduce((s, l) => s + l.harga, 0);
        const totalResep = dataPasien.resep.reduce(
            (s, r) => s + (r.jumlah * r.harga), 0
        );

        return totalLayanan + totalResep;
    };

    const handleBayar = () => {
        alert(`Pembayaran berhasil menggunakan ${metodeBayar}`);
        setShowModal(false);
    };


    return (
        <div className="d-flex flex-column gap-3">

            {/* SEARCH PASIEN */}
            <div className="card">
                <div className="card-header fw-bold">
                    Cari Pasien
                </div>
                <div className="card-body">
                    <div className="d-flex gap-3">
                        <input
                            type="text"
                            className="form-control w-25"
                            placeholder="Nama Pasien"
                            list="listNamaPasien"
                            value={namaPasien}
                            onChange={(e) => setNamaPasien(e.target.value)}
                        />

                        <datalist id="listNamaPasien">
                            {pembayaranData.map((p, i) => (
                                <option key={i} value={p.namaPasien}/>
                            ))}
                        </datalist>

                        <input
                            type="text"
                            className="form-control w-25"
                            placeholder="No Rekam Medis"
                            list="listRm"
                            value={rmPasien}
                            onChange={(e) => setRmPasien(e.target.value)}
                        />

                        <datalist id="listRm">
                            {pembayaranData.map((p, i) => (
                                <option key={i} value={p.noRm}/>
                            ))}
                        </datalist>

                        <button className="btn btn-primary" onClick={handleCari}>
                            Cari
                        </button>
                    </div>
                </div>
            </div>

            {/* HASIL TAGIHAN */}
            {dataPasien && (
                <div className="card">
                    <div className="card-header fw-bold">
                        Detail Tagihan
                    </div>
                    <div className="card-body">

                    <p><b>Nama:</b> {dataPasien.namaPasien}</p>
                        <p><b>No RM:</b> {dataPasien.noRm}</p>
                        <p><b>Dokter:</b> {dataPasien.dokter}</p>

                        <hr/>

                        <h6>Layanan</h6>
                        <ul>
                            {dataPasien.layanan.map((l, i) => (
                                <li key={i}>
                                    {l.jenis} - Rp {l.harga.toLocaleString("id-ID")}
                                </li>
                            ))}
                        </ul>

                        <h6>Resep Obat</h6>
                        <ul>
                            {dataPasien.resep.map((r, i) => (
                                <li key={i}>
                                    {r.namaObat} ({r.jumlah}) - Rp {(r.jumlah * r.harga).toLocaleString("id-ID")}
                                </li>
                            ))}
                        </ul>

                        <hr/>

                        <div className="fw-bold mb-3">
                            Total: Rp {hitungTotal().toLocaleString("id-ID")}
                        </div>

                        <button
                            className="btn btn-success"
                            onClick={() => setShowModal(true)}
                        >
                            Bayar
                        </button>
                    </div>
                </div>
            )}

            {/* MODAL PEMBAYARAN */}
            {showModal && (
                <div className="modal fade show d-block" tabIndex="-1">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Pilih Metode Pembayaran</h5>
                                <button
                                    className="btn-close"
                                    onClick={() => setShowModal(false)}
                                />
                            </div>

                            <div className="modal-body">
                                <select
                                    className="form-select"
                                    value={metodeBayar}
                                    onChange={(e) => setMetodeBayar(e.target.value)}
                                >
                                    <option value="">-- Pilih --</option>
                                    <option value="Tunai">Tunai</option>
                                    <option value="Debit">Debit</option>
                                    <option value="QRIS">QRIS</option>
                                </select>
                            </div>

                            <div className="modal-footer">
                                <button
                                    className="btn btn-secondary"
                                    onClick={() => setShowModal(false)}
                                >
                                    Batal
                                </button>
                                <button
                                    className="btn btn-success"
                                    disabled={!metodeBayar}
                                    onClick={handleBayar}
                                >
                                    Konfirmasi Bayar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
};

export default PembayaranComponent;

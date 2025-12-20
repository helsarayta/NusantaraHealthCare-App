import React, {useEffect, useState} from 'react';
import UploadComponent from "./upload-component";
import BootstrapDatePickerComponent from "./bootstrap-date-picker-component";
import Api from "../Api"
import {
    pekerjaanOptions,
    statusPernikahanOptions,
    golonganDarahOptions,
    agamaOptions,
    pendidikanOptions,
    genderOptions
} from "../data";

const PendaftaranComponent = () => {
    const[provinces, setProvinces] = useState([])
    const[kabKota, setKabKota] = useState([])
    const[kecamatan, setKecamatan] = useState([])
    const[kelurahan, setKelurahan] = useState([])

    const [query, setQuery] = useState("");
    const[queryKabKota, setQueryKabKota] = useState("")
    const[queryKecamatan, setQueryKecamatan] = useState("")
    const[queryKelurahan, setQueryKelurahan] = useState("")

    const [suggestions, setSuggestions] = useState([]);
    const[suggestionKabKota, setSuggestionKabKota] = useState([])
    const[suggestionKecamatan, setSuggestionKecamatan] = useState([])
    const[suggestionKelurahan, setSuggestionKelurahan] = useState([])

    const [selectedProvinceId, setSelectedProvinceId] = useState(null);
    const[selectedKabKotaId, setSelectedKabKotaId] = useState(null)
    const[selectedKecamatanId, setSelectedKecamatanId] = useState(null)
    const[selectedKelurahanId, setSelectedKelurahanId] = useState(null)

    const [pekerjaan, setPekerjaan] = useState("");
    const [statusPernikahan, setStatusPernikahan] = useState("");
    const [golonganDarah, setGolonganDarah] = useState("");
    const [agama, setAgama] = useState("");
    const [pendidikan, setPendidikan] = useState("");
    const [gender, setGender] = useState("");

    const getProvince = () => {
        Api.getProvinsi().then(resp => {
            setProvinces(resp.data)
        }).catch(e => {
            console.log(e)
        })
    }

    const getKabKota = () => {
        Api.getKabKota(selectedProvinceId).then(resp => {
            setKabKota(resp.data)
        }).catch(e => {
            console.log(e)
        })
    }

    const getKecamatan = () => {
        Api.getKecamatan(selectedKabKotaId).then(resp => {
            setKecamatan(resp.data)
        }).catch(e => {
            console.log(e)
        })
    }

    const getKelurahan = () => {
        Api.getKelurahan(selectedKecamatanId).then(resp => {
            setKelurahan(resp.data)
        }).catch(e => {
            console.log(e)
        })
    }


    const handleChange = (e) => {
        const value = e.target.value;
        setQuery(value);
        setSelectedProvinceId(null); // reset when typing

        if (value.length === 0) {
            setSuggestions([]);
        } else {
            const filtered = provinces.filter(p =>
                p.name.toLowerCase().includes(value.toLowerCase())
            );
            setSuggestions(filtered);
        }
    };

    const handleChangeKabKota = (e) => {
        const value = e.target.value;
        setQueryKabKota(value);
        setSelectedKabKotaId(null); // reset when typing

        if (!value) {
            setSuggestionKabKota([]);
        } else {
            const filtered = kabKota.filter(k =>
                k.name.toLowerCase().includes(value.toLowerCase())
            );
            setSuggestionKabKota(filtered);
        }
    };

    const handleChangeKecamatan = (e) => {
        const value = e.target.value;
        setQueryKecamatan(value);
        setSelectedKecamatanId(null); // reset when typing

        if (!value) {
            setSuggestionKecamatan([]);
        } else {
            const filtered = kecamatan.filter(k =>
                k.name.toLowerCase().includes(value.toLowerCase())
            );
            setSuggestionKecamatan(filtered);
        }
    };

    const handleChangeKelurahan = (e) => {
        const value = e.target.value;
        setQueryKelurahan(value);
        setSelectedKelurahanId(null); // reset when typing

        if (!value) {
            setSuggestionKelurahan([]);
        } else {
            const filtered = kelurahan.filter(k =>
                k.name.toLowerCase().includes(value.toLowerCase())
            );
            setSuggestionKelurahan(filtered);
        }
    };


    const handleSelectProvince = (province) => {
        setQuery(province.name);
        setSelectedProvinceId(province.id);
        setSuggestions([]);
    };

    const handleSelectKabKota = (item) => {
        setQueryKabKota(item.name);
        setSelectedKabKotaId(item.id);
        setSuggestionKabKota([]);
    };

    const handleSelectKecamatan = (item) => {
        setQueryKecamatan(item.name);
        setSelectedKecamatanId(item.id);
        setSuggestionKecamatan([]);
    };

    const handleSelectKelurahan = (item) => {
        setQueryKelurahan(item.name);
        setSelectedKelurahanId(item.id);
        setSuggestionKelurahan([]);
    };


    useEffect(() => {
        getProvince()
        if (selectedProvinceId != null) {
            getKabKota();
        }

        if(selectedKabKotaId != null) {
            getKecamatan();
        }

        if(selectedKecamatanId != null) {
            getKelurahan();
        }
    }, [
        selectedProvinceId,
        selectedKabKotaId,
        selectedKecamatanId
    ]);

    return (
        <div>


                <div className="d-flex flex-row gap-3">
                    <div className="card w-100">
                        <div className="card-header fw-bold">
                            Biodata Pasien Baru
                        </div>
                        <div className="card-body">
                            <div className={'d-flex flex-row gap-2'}>
                                <div className={'d-flex flex-column w-100 align-items-center'}>
                                    <UploadComponent/>
                                </div>
                                <div className={'d-flex flex-column w-100'}>
                                    <div className="mb-3">

                                        <input type="text" className="form-control" id="namaLengkap"
                                               aria-describedby="nama lengkap" placeholder={'Nama Lengkap'}/>
                                    </div>
                                    <div className="mb-3">
                                        <input type="text" className="form-control" id="tempat"
                                               aria-describedby="nama lengkap" placeholder="Tempat"/>
                                    </div>
                                        <BootstrapDatePickerComponent/>

                                </div>
                            </div>
                            <div className={'d-flex flex-row justify-content-center gap-2'}>
                                <div className={'d-flex flex-column w-100'}>
                                    <div className="mb-3">
                                        <input type="number" className="form-control w-100" id="nik"
                                               aria-describedby="nik" placeholder={'Nik'}/>
                                    </div>

                                    <select
                                        className="form-select mb-3"
                                        aria-label="Default select example"
                                        value={pekerjaan}
                                        onChange={(e) => setPekerjaan(e.target.value)}
                                    >
                                        <option value="">--Pilih Pekerjaan--</option>
                                        {pekerjaanOptions.map(opt => (
                                            <option key={opt.id} value={opt.id}>{opt.name}</option>
                                        ))}
                                    </select>

                                    <select
                                        className="form-select mb-3"
                                        aria-label="Default select example"
                                        value={statusPernikahan}
                                        onChange={(e) => setStatusPernikahan(e.target.value)}
                                    >
                                        <option value="">--Status Pernikahan--</option>
                                        {statusPernikahanOptions.map(opt => (
                                            <option key={opt.id} value={opt.id}>{opt.name}</option>
                                        ))}
                                    </select>

                                    <select
                                        className="form-select mb-3"
                                        aria-label="Default select example"
                                        value={golonganDarah}
                                        onChange={(e) => setGolonganDarah(e.target.value)}
                                    >
                                        <option value="">--Pilih Golongan Darah--</option>
                                        {golonganDarahOptions.map(opt => (
                                            <option key={opt.id} value={opt.id}>{opt.name}</option>
                                        ))}
                                    </select>

                                    <div className="mb-3">
                                        <input type="text" className="form-control" id="email"
                                               aria-describedby="email" placeholder={'Email'}/>
                                    </div>
                                </div>
                                {/*Kanan*/}
                                <div className={'d-flex flex-column w-100'}>
                                    <div className="mb-3">
                                        <input type="number" className="form-control" id="nomorKK"
                                               aria-describedby="nomor KK" placeholder={'Nomor KK'}/>
                                    </div>

                                    <select
                                        className="form-select mb-3"
                                        value={agama}
                                        onChange={(e) => setAgama(e.target.value)}
                                    >
                                        <option value="">--Pilih Agama--</option>
                                        {agamaOptions.map(opt => (
                                            <option key={opt.id} value={opt.id}>{opt.name}</option>
                                        ))}
                                    </select>

                                    <select
                                        className="form-select mb-3"
                                        value={pendidikan}
                                        onChange={(e) => setPendidikan(e.target.value)}
                                    >
                                        <option value="">--Pilih Pendidikan--</option>
                                        {pendidikanOptions.map(opt => (
                                            <option key={opt.id} value={opt.id}>{opt.name}</option>
                                        ))}
                                    </select>

                                    <select
                                        className="form-select mb-3"
                                        value={gender}
                                        onChange={(e) => setGender(e.target.value)}
                                    >
                                        <option value="">--Pilih Gender--</option>
                                        {genderOptions.map(opt => (
                                            <option key={opt.id} value={opt.id}>{opt.name}</option>
                                        ))}
                                    </select>

                                    <div className="mb-3">
                                        <input type="text" className="form-control" id="nomorHP"
                                               aria-describedby="nomor HP" placeholder={'Nomor Hp'}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card w-100">
                        <div className="card-header fw-bold">
                            Alamat Pasien Baru
                        </div>
                        <div className="card-body d-flex flex-column w-100 gap-3">
                            <div className="form-floating">
                                <textarea className="form-control" placeholder="Leave a comment here"
                                          id="floatingTextarea2" style={{height: "100px"}} maxLength={100}></textarea>
                                <label htmlFor="floatingTextarea2">max 100 karakter, Contoh: Jl Imam Bonjol No.24</label>
                            </div>
                            <div className={'d-flex flex-row gap-2'}>
                                <div className={'d-flex flex-column w-100'}>
                                    <div className="mb-3 position-relative">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Provinsi"
                                            value={query.toUpperCase()}
                                            onChange={handleChange}
                                        />

                                        {suggestions.length > 0 && (
                                            <ul className="list-group position-absolute w-100 z-3">
                                                {suggestions.map((item, index) => (
                                                    <li
                                                        key={index}
                                                        className="list-group-item list-group-item-action"
                                                        onClick={() => handleSelectProvince(item)}
                                                    >
                                                        {item.name}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                    <div className="mb-3">
                                        <input type="text"
                                               className="form-control"
                                               id="kecamatan"
                                               aria-describedby="kecamatan"
                                               placeholder={'Kecamatan'}
                                               value={queryKecamatan}
                                               onChange={handleChangeKecamatan}
                                               disabled={!selectedKabKotaId} // disable if province not selected
                                        />

                                        {suggestionKecamatan.length > 0 && (
                                            <ul className="list-group position-absolute w-100 z-3">
                                                {suggestionKecamatan.map((item, index) => (
                                                    <li
                                                        key={index}
                                                        className="list-group-item list-group-item-action"
                                                        onClick={() => handleSelectKecamatan(item)}
                                                    >
                                                        {item.name}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>

                                    <div className="mb-3">
                                        <input type="text" className="form-control" id="kodepos"
                                               aria-describedby="kodepos" placeholder={'Kodepos'}/>
                                    </div>
                                </div>

                                <div className={'d-flex flex-column w-100'}>
                                    <div className="mb-3  position-relative">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Kabupaten/Kota"
                                            value={queryKabKota}
                                            onChange={handleChangeKabKota}
                                            disabled={!selectedProvinceId} // disable if province not selected
                                        />

                                        {suggestionKabKota.length > 0 && (
                                            <ul className="list-group position-absolute w-100 z-3">
                                                {suggestionKabKota.map((item, index) => (
                                                    <li
                                                        key={index}
                                                        className="list-group-item list-group-item-action"
                                                        onClick={() => handleSelectKabKota(item)}
                                                    >
                                                        {item.name}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>

                                    <div className="mb-3 position-relative">
                                        <input type="text"
                                               className="form-control"
                                               id="kelurahan"
                                               value={queryKelurahan.toUpperCase()}
                                               onChange={handleChangeKelurahan}
                                               disabled={!selectedKecamatanId} // disable if province not selected
                                               aria-describedby="kelurahan"
                                               placeholder={'Kelurahan'}/>

                                        {suggestionKelurahan.length > 0 && (
                                            <ul className="list-group position-absolute w-100 z-3">
                                                {suggestionKelurahan.map((item, index) => (
                                                    <li
                                                        key={index}
                                                        className="list-group-item list-group-item-action"
                                                        onClick={() => handleSelectKelurahan(item)}
                                                    >
                                                        {item.name}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}

                                    </div>

                                    <div className={'d-flex flex-row gap-2'}>
                                        <div className="mb-3">
                                            <input type="number" className="form-control" id="rt"
                                                   aria-describedby="rt" placeholder={'Rt'}/>
                                        </div>
                                        <div className="mb-3">
                                            <input type="number" className="form-control" id="rw"
                                                   aria-describedby="rw" placeholder={'Rw'}/>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <select className="form-select mb-3" aria-label="Default select example">
                                <option selected>--Pilih Tipe--</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                            <div className={'d-flex flex-row w-100 gap-3'}>
                                <button type="button" className="btn btn-danger w-100"><i class="bi bi-arrow-counterclockwise"></i> Reset
                                </button>
                                <button type="button" className="btn btn-dark w-100"><i class="bi bi-floppy"></i> Daftar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>


        </div>

    );
};

export default PendaftaranComponent;
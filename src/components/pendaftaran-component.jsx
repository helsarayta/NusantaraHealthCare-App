import React, {useEffect, useState} from 'react';
import UploadComponent from "./upload-component";
import BootstrapDatePickerComponent from "./bootstrap-date-picker-component";
import Api from "../Api"

const PendaftaranComponent = () => {
    const[provinces, setProvinces] = useState([])
    const[kabKota, setKabKota] = useState([])
    const [query, setQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [selectedProvinceId, setSelectedProvinceId] = useState(null);
    const[selectedKabKotaId, setSelectedKabKotaId] = useState(null)

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

    }

    const getKelurahan = () => {

    }


    const handleChangeProvince = (e) => {
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

    const handleSelectProvince = (province) => {
        setQuery(province.name);          // display name in input
        setSelectedProvinceId(province.id); // save id
        setSuggestions([]);               // hide suggestions
    };

    useEffect(() => {
        getProvince()
        if(selectedProvinceId != null) {
            getKabKota()
        }
    }, [selectedProvinceId]);

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

                                    <select className="form-select mb-3" aria-label="Default select example">
                                        <option selected>--Pilih Pekerjaan--</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>

                                    <select className="form-select mb-3" aria-label="Default select example">
                                        <option selected>--Status Pernikahan--</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                    <select className="form-select mb-3" aria-label="Default select example">
                                        <option selected>--Pilih Golongan Darah--</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
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
                                    <select className="form-select mb-3" aria-label="Default select example">
                                        <option selected>--Pilih Agama--</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                    <select className="form-select mb-3" aria-label="Default select example">
                                        <option selected>--Pilih Pendidikan--</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                    <select className="form-select mb-3" aria-label="Default select example">
                                        <option selected>--Pilih Gender--</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
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
                                          id="floatingTextarea2" style={{height: "100px"}}></textarea>
                                <label htmlFor="floatingTextarea2">max 100 karakter, Contoh: Jl Imam Bonjol No.24</label>
                            </div>
                            <div className={'d-flex flex-row gap-2'}>
                                <div className={'d-flex flex-column w-100'}>
                                    <div className="mb-3 position-relative">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Provinsi"
                                            value={query}
                                            onChange={handleChangeProvince}
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
                                        <input type="text" className="form-control" id="kelurahan"
                                               aria-describedby="kelurahan" placeholder={'Kelurahan'}/>
                                    </div>

                                    <div className="mb-3">
                                        <input type="text" className="form-control" id="kodepos"
                                               aria-describedby="kodepos" placeholder={'Kodepos'}/>
                                    </div>
                                </div>

                                <div className={'d-flex flex-column w-100'}>
                                    <div className="mb-3">
                                        <input type="text" className="form-control" id="kecamatan"
                                               aria-describedby="kecamatan" placeholder={'Kecamatan'}/>
                                    </div>
                                    <div className="mb-3">
                                        <input type="text" className="form-control" id="kabupatenkota"
                                               aria-describedby="kabupaten/kota" placeholder={'Kabupaten/kota'}/>
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
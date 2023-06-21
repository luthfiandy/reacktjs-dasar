//mengimpor modul axios untuk manipulasi API
import axios from "axios"
//import modul axios

//bikin function get/fetch yg akan diexport/panggil/pake
export const getProduct = (callback) => {
    axios
    .get ("https://fakestoreapi.com/products") //pake method get buat ngambil data di API
    .then((res) => { //mengirimkan response data jika sukses
        console.log(res);
        callback(res.data);
    })
    .catch((err) => {
    //nampilin error jika tidak benar
        console.log(err);
    });
};
import AuthLayout from '../components/template/AuthLayout';
import Login from '../components/organism/Login';
import { Link } from 'react-router-dom';
import Navbar from '../components/template/Navbar';
import Footer from '../components/template/Footer';
import Button from '../components/atom/Button';
import CardProduct from '../components/organism/CardProduct';


export default function LoginPage() {
    const data = [{
        id: 1,
        image: "public/image/ml.jpg",
        title: "Online Competition",
        desc: "Dilengkapi dengan sistem pendukung untuk melakukan tournamen eSports online secara massal",
    },
    {
        id: 2,
        image: "public/image/ml.jpg",
        title: "Esports Profile",
        desc: "Pendapatan para user eSports baik atlet amatir, semi-pro, dan professional maupun user pendukung seperti streamer, caster, wasit, dsb.",
    },
    {
        id: 3,
        image: "public/image/ml.jpg",
        title: "Social Feed",
        desc: "Jalur Komunikasi, Informasi dan engangment dari seluruh pengguna platform GarudaKu.",
    },
        {
        id: 4,
        image: "public/image/ff.jpg",
        title: "Hub Komunitas",
        desc: "Halaman tempat berkumpul komunitas esports Indonesia. Contoh komunikasi seperti organisasi, media berita, event organizer, tim professional, dsb.",
    },
    {
        id: 5,
        image: "public/image/ff.jpg",
        title: "eSports Center",
        desc: "Database tempat mencari user, organisasi, perusahaan, ataupun komunitas esports yang ada di Indonesia.",
    },
    {
        id: 6,
        image: "public/image/ff.jpg",
        title: "Akademi",
        desc: "Sebagai wadah bagi pelajar untuk menyalurkan hobby, bakat, dan minat di bidang esports (ekstrakulikuler).",
    },
    ];
    return (
        <>
            <Navbar type="auth" />
            <div className="w-full justify-center items-center">
                <img src="/image/bg-login.jpeg" className="w-full h-auto" />
                <div className="absolute top-32 right-52" >
                    <AuthLayout title="Login" desc="Silahkan Masuk" type="login">
                        <Login />
                        <div className="mt-2 bg-gradient-to-r from-red-700 via-red-400 to-red-700 border rounded-lg">
                        <Button color="bg-white border border-red-500">
                            <Link className="text-black" to="/register">
                                Buat Akun Baru
                            </Link>
                        </Button>
                        </div>
                        {/* <p className="text-sm m-2 text-center">
                            Do you have an account?{" "}
                            {/* <a className="font-bold text-blue-500" href="/register">Register</a> */}
                            {/* cara menggunakan routing pake Link buat pindah antar komponen/halaman */}
                        {/* </p> */}
                        <div className="form-control ml-2">
                            <label className="cursor-pointer label">
                                <input type="checkbox" id="check" name="check" value="true" />
                                <span className="ml-3">Remember me</span>
                            </label>
                        </div>
                    </AuthLayout>
                </div>
            </div>
            <div className="w-full justify-center m-1">
                <img src="/image/info-esport.jpg" className="w-full h-auto" />
            </div>
            <div className="w-full justify-center m-1">
                <div className='absolute w-full py-10 text-center'>
                    <h1 className='text-white font-bold text-3xl'>Selamat Datang Gamers Indonesia</h1>
                    <p className='text-white font-bold text-1xl'>Platform eSports karya anak bangsa dengan fitur lengkap</p>
                </div>
                <div>
                <div className="w-full mt-40 p-44 absolute flex flex-row justify-center bg-center items-center py-1 gap-6">
                        {data.map((product) => (
                            <CardProduct type="login" key={product.id}>
                                {/* <CardProduct.Header image={product.image} /> */}
                                <CardProduct.Body title={product.title}>{product.desc}</CardProduct.Body>
                            </CardProduct>
                        ))}
                    </div>
                </div>
                <img src="/image/sc1.jpg" className="w-full h-auto" />
            </div>
            <div className="w-full justify-center m-1">
                <img src="/image/sc2.jpg" className="w-full h-auto" />
            </div>
            <div className="w-full justify-center m-1">
                <img src="/image/sc3.jpg" className="w-full h-auto" />
            </div>
            <div className="w-full justify-center m-1">
                <img src="/image/sc4.jpg" className="w-full h-auto" />
            </div>
            <div className="w-full justify-center m-1">
                <img src="/image/sc5.jpg" className="w-full h-auto" />
            </div>
            <div className="w-full justify-center m-1">
                <img src="/image/tour.jpeg" className="w-full h-auto" />
            </div>
            <Footer />
        </>
    )
}

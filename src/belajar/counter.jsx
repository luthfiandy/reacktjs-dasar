import { useEffect, useState } from "react"


const Counter =() => {
    const [count, setCount] = useState (0);

    useEffect(() => {
        console.log("Componen mounted");
    }, [] )
    
useEffect(() => {
    console.log("Count update:", count);
}, [count]);

useEffect(() => {
    return () => {
        console.log("Component unmounted");
    };
},[]);

const increment = () => {
    setCount((prevCount) => prevCount +1);
};

const decrement =() => {
    if (count>0) {
    setCount((prevCount) => prevCount -1)};
};

return (
    <div className="container mx-auto p-4">
        <h1 className="text-3xl font bold mb-4 text-center"> Jumlah </h1>
        <div className=" flex justify-center items-center gap-x-5">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={decrement}>
                -
            </button>
            <span>{count}</span>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={increment}>
                +
            </button>
        </div>
    </div>
);
};

export default Counter;
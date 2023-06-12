import React from 'react'
import ComponentProps from "./belajar/componentProps"

function App() {
  return (
    // simbol <></> = fragment sebagai parent dari suatu komponen
    <>
      <div className="flex flex-col justify-center items-center min-h-screen">
        {/* cara menambahkan style yang tidak ada di tailwind menggunkan arbitari atau 
        kurung siku seperti contoh textcolor dibawah ini */}
        <ComponentProps textColor="text-[#111827]" />
      </div>
    </>
  );
}

export default App;

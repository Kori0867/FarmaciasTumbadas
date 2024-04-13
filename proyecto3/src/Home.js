import React from 'react';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div>
   <header className="bg-black dark:bg-gray-600">
  <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
    <div className="flex h-16 items-center justify-between">
      <div className="md:flex md:items-center md:gap-12">
        <span className="block text-teal-600 dark:text-teal-600 cursor-pointer">
          <span className="sr-only">Home</span>
          <svg className="h-8" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Icono */}
          </svg>
        </span>
      </div>
      <div className="hidden md:block">
        <nav aria-label="Global">
          <ul className="flex items-center gap-4 text-sm justify-end"> {/* Cambiado a justify-end */}
            <li>
              <Link to="/Home" className="select-none rounded-lg bg-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/Sobrenosotros" className="select-none rounded-lg bg-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                Sobre Nosotros
              </Link>
            </li>
            <li>
              <Link to="/contacto" className="select-none rounded-lg bg-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                Contacto
              </Link>
            </li>
            <li>
              <Link to="/ubicacion" className="select-none rounded-lg bg-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                Ubicacion
              </Link>
            </li>
            <li>
              <Link to="/Inventario" className="select-none rounded-lg bg-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                Inventario
              </Link>
            </li>
            <li>
              <button
                onClick={() => {
                  const menu = document.getElementById("menu");
                  menu.classList.toggle("hidden");
                }}
                className="select-none rounded-lg bg-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              >
                Configuración
              </button>
              <ul
                id="menu"
                className="hidden absolute z-10 min-w-[180px] overflow-auto rounded-md border border-blue-gray-50 bg-white p-3 font-sans text-sm font-normal text-blue-gray-500 shadow-lg shadow-blue-gray-500/10 focus:outline-none"
              >
                <li
                  onClick={() => {
                    window.location.href = "/Configuracion";
                  }}
                  className="block w-full cursor-pointer select-none rounded-md px-3 pt-[9px] pb-2 text-start leading-tight transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
                >
                  Cuenta
                </li>
                <li
                  onClick={() => {
                    window.location.href = "/Contacto";
                  }}
                  className="block w-full cursor-pointer select-none rounded-md px-3 pt-[9px] pb-2 text-start leading-tight transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
                >
                  Ayuda
                </li>
                <li
                  onClick={() => {
                    window.location.href = "/";
                  }}
                  className="block w-full cursor-pointer select-none rounded-md px-3 pt-[9px] pb-2 text-start leading-tight transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
                >
                  Cerrar Sesión
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>   
    </div>
  </div>
</header>
<span class="flex items-center">
  <span class="h-px flex-1 bg-black"></span>
  <span class="shrink-0 px-6"><div className="mt-8">
        <p className="text-sm text-gray-500"> <h2 className="text-sm font-semibold uppercase tracking-widest">¡Bienvenidos Clientes!</h2></p>
      </div></span>
  <span class="h-px flex-1 bg-black"></span>
</span>

<section class="overflow-hidden rounded-lg shadow-2xl md:grid md:grid-cols-3">
  <img
    alt=""
    src="https://assets1.farmaciasanpablo.com.mx/landings/HardSell/EstacionOfertas2023/02-Medicinal/02-BBY-Medicinal-EDO-Sem07-v1@2x.jpg"
    class="h-32 w-full object-cover md:h-full"
  />

  <div class="p-4 text-center sm:p-6 md:col-span-2 lg:p-8">
    <p class="text-sm font-semibold uppercase tracking-widest">Aprovecha ya</p>

    <h2 class="mt-6 font-black uppercase">
      <span class="text-4xl font-black sm:text-5xl lg:text-6xl"> Obten 20% Descuento </span>

      <span class="mt-2 block text-sm">Adquiere el tuyo ya!!</span>
    </h2>

    <Link to="/Inventario">
  <button
    className="mt-8 inline-block w-full bg-black py-4 text-sm font-bold uppercase tracking-widest text-white"
    onClick={() => {
      // Add your discount logic here
    }}
  >
    Obtener descuento
  </button>
</Link>


    <p class="mt-8 text-xs font-medium uppercase text-gray-400">
      Oferta valida hasta 14 de abril, 2024 *
    </p>
  </div>
</section>

      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-2 sm:px-6 sm:py-12 lg:px-8">
          <header>
          <span class="flex items-center">
  <span class="h-px flex-1 bg-black"></span>
  <span class="shrink-0 px-6"><div className="mt-8">
        <p className="text-sm text-gray-500"> <h2 className="text-4xl font-black  text-red-600 sm:text-5xl lg:text-6xl">OFERTAS!!</h2></p>
      </div></span>
  <span class="h-px flex-1 bg-black"></span>
</span>
           
            <h6 className="text-xl font-bold text-gray-900 sm:text-1xl">Disfruta de nuestros productos de calidad.</h6>
          
          </header>
          <div className="grid grid-cols-3 gap-4 mt-8">
            <div>
              <img
                src="https://www.fahorro.com/media/catalog/product/cache/3fba745dcec88e97bfe808bedc471260/7/5/7503006569906_3.jpg"
                alt=""
                className="h-[350px] w-full object-cover transition duration-500 hover:scale-105 sm:h-[450px]"
              />
              <div className="mt-4">
                <h3 className="text-lg font-semibold">Paracetamol</h3>
                <p className="text-sm text-gray-700">
                  Es un analgésico y antipirético eficaz para el dolor moderado causado por las articulares, otalgias, cefaleas, dolor odontogénico, neuralgias, etc.
                </p>
                <p className="mt-2 text-xl font-bold text-red-600">$94.00</p>
              </div>
            </div>
            <div>
              <img
                src="https://www.fahorro.com/media/catalog/product/cache/3fba745dcec88e97bfe808bedc471260/7/5/7502223709829.png"
                alt=""
                className="h-[350px] w-full object-cover transition duration-500 hover:scale-105 sm:h-[450px]"
              />
              <div className="mt-4">
                <h3 className="text-lg font-semibold">Naproxeno</h3>
                <p className="text-sm text-gray-700">
                El naproxeno de venta libre se usa para reducir la fiebre y aliviar los dolores leves por cefaleas, dolores musculares, artritis, periodos menstruales, resfriado común; dolor de muelas y dolor de espalda.
                </p>
                <p className="mt-2 text-xl font-bold text-red-600">$114.00</p>
              </div>
             
            </div>
            <div>
              <img
                src="https://chedrauimx.vtexassets.com/arquivos/ids/28781185/7502216793415_00.jpg?v=638481000071030000"
                alt=""
                className="h-[350px] w-full object-cover transition duration-500 hover:scale-105 sm:h-[450px]"
              />
               <div className="mt-4">
                <h3 className="text-lg font-semibold">Loratadina</h3>
                <p className="text-sm text-gray-700">
                La loratadina es un antihistamínic,trata síntomas de resfriados y reacciones alérgicas: estornudos, picazón, congestión nasal, ojos llorosos, enrojecimiento ocular y/o sarpullidos con erupción o urticaria.
                </p>
                <p className="mt-2 text-xl font-bold text-red-600">$98.00</p>
              </div>
             
            </div>
          </div>
        </div>
        <footer class="bg-white lg:grid lg:grid-cols-5">
  <div class="relative block h-32 lg:col-span-2 lg:h-full">
    <img
      src="https://m.media-amazon.com/images/I/612quMCPpXL.jpg"
      alt=""
      class="absolute inset-0 h-full w-full object-cover"
    />
  </div>

  <div class="px-4 py-16 sm:px-6 lg:col-span-3 lg:px-8">
    <div class="grid grid-cols-1 gap-8 sm:grid-cols-2">
      <div>
        <p>
          <span class="text-xs uppercase tracking-wide text-gray-500"> Llamanos </span>

          <button
          type="button"
           className="block text-2xl font-medium text-gray-900 hover:opacity-75 sm:text-3xl"
            onClick={() => {  }}
           >
           </button>

            614-531-65-36
        </p>

        <ul class="mt-8 space-y-1 text-sm text-gray-700">
          <li>Lunes - Viernes 9:30am - 6pm</li>
          <li>Sabado-Domingo: 11am - 6pm</li>
        </ul>

        <ul class="mt-8 flex gap-6">
          <li>
          <button
             type="button"
              onClick={() => {  }}
               class="text-gray-700 transition hover:opacity-75"
          >
 
          </button>

              <span class="sr-only">Facebook</span>

              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill-rule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clip-rule="evenodd"
                />
              </svg>
            
          </li>

          <li>
          <button
             type="button"
              onClick={() => { }}
               class="text-gray-700 transition hover:opacity-75"
          >
 
          </button>
              <span class="sr-only">Instagram</span>

              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill-rule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clip-rule="evenodd"
                />
              </svg>
            
          </li>

          <li>
          <button
             type="button"
              onClick={() => { /* Manejar el clic aquí */ }}
               class="text-gray-700 transition hover:opacity-75"
          >
 
          </button>
              <span class="sr-only">Twitter</span>

              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                />
              </svg>
            
          </li>

          <li>
          <button
             type="button"
              onClick={() => { }}
               class="text-gray-700 transition hover:opacity-75"
          >
 
          </button>
              <span class="sr-only">GitHub</span>

              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill-rule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clip-rule="evenodd"
                />
              </svg>
          
          </li>
                      
          
        </ul>
      </div>

      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <p class="font-medium text-gray-900">Servicios</p>

          <ul class="mt-6 space-y-4 text-sm">
 

  <li>
    <button class="text-gray-700 transition hover:opacity-75"> Venta de Farmacologia </button>
  </li>

  <li>
    <button class="text-gray-700 transition hover:opacity-75"> Revision de Calidad </button>
  </li>

  <li>
    <button class="text-gray-700 transition hover:opacity-75"> RH</button>
  </li>

 
</ul>

        </div>

        <div>
          <p class="font-medium text-gray-900">Company</p>

          <ul class="mt-6 space-y-4 text-sm">
  <li>
    <button class="text-gray-700 transition hover:opacity-75"> Sobre Nosotros</button>
  </li>

  <li>
    <button class="text-gray-700 transition hover:opacity-75"> Team </button>
  </li>

 
</ul>

        </div>
      </div>
    </div>

    <div class="mt-12 border-t border-gray-100 pt-12">
      <div class="sm:flex sm:items-center sm:justify-between">
      <ul class="flex flex-wrap gap-4 text-xs">
  <li>
    <button class="text-gray-500 transition hover:opacity-75"> Terminos y Condiciones </button>
  </li>

  <li>
    <button class="text-gray-500 transition hover:opacity-75"> Privacidad y politica</button>
  </li>

  <li>
    <button class="text-gray-500 transition hover:opacity-75"> Cookies </button>
  </li>
</ul>


        <p class="mt-8 text-xs text-gray-500 sm:mt-0">
          &copy; 2022. Farmacias Tumbadas All rights reserved.
        </p>
      </div>
    </div>
  </div>
</footer>
      </section>
    </div>
  );
};

export default Home;

"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const SlidePricing = () => {
  const [selected, setSelected] = useState("M");

  return (
    <>
      <section className="w-full text-black bg-white  px-4 lg:px-8 py-24 relative overflow-hidden">
        <Heading selected={selected} setSelected={setSelected} />
        <PriceCards selected={selected} />
        <TopLeftCircle />
        <BottomRightCircle />
      </section>
    </>
  );
};

const SELECTED_STYLES = "text-white font-medium rounded-lg py-3 w-28 relative";
const DESELECTED_STYLES =
  "font-medium rounded-lg py-3 w-28 hover:bg-slate-100 transition-colors relative";

const Heading = ({ selected, setSelected }) => {
  return (
    <div className="mb-12 lg:mb-24 relative z-10">
      <h3 className="font-semibold text-5xl lg:text-7xl text-center mb-6">
        Planes y Precios
      </h3>
      <p className="text-center mx-auto max-w-lg mb-8">
        Elige el plan que mejor se adapte a las necesidades de tu empresa y
        empieza a mejorar tu presencia online.
      </p>
      <p className="text-center mx-auto max-w-lg mb-8">
        Con nusetro planes te ayudamos a crear y posicionar tu página web usando prácticas de SEO y desarrollo web únicas
      </p>
    
      <div className="flex items-center justify-center gap-3">
        <button
          onClick={() => setSelected("M")}
          className={selected === "M" ? SELECTED_STYLES : DESELECTED_STYLES}
        >
          Mensual
          {selected === "M" && <BackgroundShift />}
        </button>
        <div className="relative">
          <button
            onClick={() => setSelected("A")}
            className={selected === "A" ? SELECTED_STYLES : DESELECTED_STYLES}
          >
            Anual
            {selected === "A" && <BackgroundShift />}
          </button>
          <CTAArrow />
        </div>
      </div>
    </div>
  );
};

const BackgroundShift = () => (
  <motion.span
    layoutId="bg-shift"
    className="absolute inset-0 bg-black rounded-lg -z-10"
  />
);

const CTAArrow = () => (
  <div className="absolute -right-[100px] top-2 sm:top-0">
    <motion.svg
      width="95"
      height="62"
      viewBox="0 0 95 62"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="scale-50 sm:scale-75"
      initial={{ scale: 0.7, rotate: 5 }}
      animate={{ scale: 0.75, rotate: 0 }}
      transition={{
        repeat: Infinity,
        repeatType: "mirror",
        duration: 1,
        ease: "easeOut",
      }}
    >
      <path
        d="M14.7705 15.8619C33.2146 15.2843 72.0772 22.1597 79.9754 54.2825"
        stroke="#007BFF" // Color azul
        strokeWidth="3"
      />
      <path
        d="M17.7987 7.81217C18.0393 11.5987 16.4421 15.8467 15.5055 19.282C15.2179 20.3369 14.9203 21.3791 14.5871 22.4078C14.4728 22.7608 14.074 22.8153 13.9187 23.136C13.5641 23.8683 12.0906 22.7958 11.7114 22.5416C8.63713 20.4812 5.49156 18.3863 2.58664 15.9321C1.05261 14.6361 2.32549 14.1125 3.42136 13.0646C4.37585 12.152 5.13317 11.3811 6.22467 10.7447C8.97946 9.13838 12.7454 8.32946 15.8379 8.01289"
        stroke="#007BFF" // Color azul
        strokeWidth="3"
        strokeLinecap="round"
      />
    </motion.svg>
    <span className="hidden md:block text-xs w-fit bg-blue-500 text-white shadow px-1.5 py-0.5 rounded -mt-1 ml-8 -rotate-2 font-light italic">
      Ahorra $$$
    </span>
  </div>
);

const PriceCards = ({ selected }) => {
  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-4 w-full max-w-7xl mx-auto relative z-10">
      {/* Básico */}
      <div className="w-full bg-white p-6 border-[1px] border-slate-300 rounded-xl">
        <p className="text-2xl font-bold mb-2">Básico</p>
        <p className="text-lg mb-6">
          Ideal para una presencia en línea efectiva y rápida.
        </p>
        <p className="text-6xl font-bold mb-8">
          {selected === "M" ? (
            <>
              Q450<span className="font-normal text-xl">/mes</span>
            </>
          ) : (
            <>
              Q5,000<span className="font-normal text-xl">/año</span>
            </>
          )}
        </p>
        <ul className="mb-8 space-y-2">
          <li className="flex items-center gap-2">
            <CheckIcon />
            <span>
              Plantilla de página web básica personalizada con información de tu
              empresa
            </span>
          </li>
          <li className="flex items-center gap-2">
            <CheckIcon />
            <span>Manejo de hosting y dominio incluidos</span>
          </li>
          <li className="flex items-center gap-2">
            <CheckIcon />
            <span>Optimizada para Google</span>
          </li>
          <li className="flex items-center gap-2">
            <CheckIcon />
            <span>
              Diseño Responsive (adaptado para cualquier tamaño de pantalla)
            </span>
          </li>
          <li className="flex items-center gap-2">
            <CheckIcon />
            <span>Certificado SSL para tu página</span>
          </li>
          <li className="flex items-center gap-2">
            <CheckIcon />
            <span>1 cambio de contenido cada 3 meses</span>
          </li>
          <li className="flex items-center gap-2">
            <CheckIcon />
            <span>
              Mantenimiento básico (backups, monitoreo, actualizaciones de
              seguridad)
            </span>
          </li>
          <li className="flex items-center gap-2">
            <CheckIcon />
            <span>
              Reportes básicos de tráfico web (número de visitas, fuentes de
              tráfico)
            </span>
          </li>
        </ul>
      </div>

      {/* Intermedio */}
      <div className="w-full bg-white p-6 border-[1px] border-slate-300 rounded-xl">
        <p className="text-2xl font-bold mb-2 text-blue-500">Intermedio</p>
        <p className="text-lg mb-6">
         Plantilla básica con información de tu empresa + secciones adicioales personalizadas
        </p>
        <div className="overflow-hidden mb-8">
          <AnimatePresence mode="wait">
            {selected === "M" ? (
              <motion.p
                key="monthly1"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                transition={{ ease: "linear", duration: 0.25 }}
                className="text-6xl font-bold text-blue-500"
              >
                <span>Q700</span>
                <span className="font-normal text-xl">/mes</span>
              </motion.p>
            ) : (
              <motion.p
                key="monthly2"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                transition={{ ease: "linear", duration: 0.25 }}
                className="text-6xl font-bold text-blue-500"
              >
                <span>Q5,000</span>
                <span className="font-normal text-xl">/año</span>
              </motion.p>
            )}
          </AnimatePresence>
        </div>
        <ul className="mb-8 space-y-2">
          <li className="flex items-center gap-2">
            <CheckIcon />
            <span>
              Página básica +{" "}
              <span className="text-blue-600">3 secciones </span>
              personalizadas a tu gusto
            </span>
          </li>
          <li className="flex items-center gap-2">
            <CheckIcon />
            <span>Todo lo que incluye el plan básico</span>
          </li>
          <li className="flex items-center gap-2">
            <CheckIcon />
            <span>Hasta 1 cambio de contenido al mes</span>
          </li>
          <li className="flex items-center gap-2">
            <CheckIcon />
            <span>
              Mantenimiento estándar (Actualizaciones de seguridad, optimización
              de rendimiento y backups)
            </span>
          </li>
          <li className="flex items-center gap-2">
            <CheckIcon />
            <span>Procesamiento de pagos en tu página (PayPal, Stripe)</span>
          </li>{" "}
          <li className="flex items-center gap-2">
            <CheckIcon />
            <span>Integración para tiendas e-commerce</span>
          </li>
          <li className="flex items-center gap-2">
            <CheckIcon />
            <span>SEO optimizado</span>
          </li>
        </ul>
      </div>

      {/* Avanzado */}
      <div className="w-full bg-white p-6 border-[1px] border-slate-300 rounded-xl">
        <p className="text-2xl font-bold mb-2">Personalizado</p>
        <p className="text-lg mb-6">
          Para las empresas que buscan una opción mas personalizada.
        </p>
        <span className="text-2xl font-semibold">
          Desde: <br></br>
        </span>
        <span className="text-6xl font-bold"> Q5,000</span>
        <span className="font-normal text-xl">/pagas solo una vez</span>
        {/* <div className="overflow-hidden mb-8">
          <AnimatePresence mode="wait">
            {selected === "M" ? (
              <motion.p
                key="yearly1"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                transition={{ ease: "linear", duration: 0.25 }}
                className="text-6xl font-bold"
              >
               
              </motion.p>
            ) : (
              <motion.p
                key="yearly2"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                transition={{ ease: "linear", duration: 0.25 }}
                className="text-6xl font-bold"
              >
                <span>$4100</span>
                <span className="font-normal text-xl">/año</span>
              </motion.p>
            )}
          </AnimatePresence>
        </div> */}
        <ul className="mb-8 space-y-2 mt-5">
          <li className="flex items-center gap-2">
            <CheckIcon />
            <span>El precio cambia depende de la complejidad de la página</span>
          </li>
          <li className="flex items-center gap-2">
            <CheckIcon />
            <span>
              Página web
              <span className="text-blue-500"> 100% personalizada </span>
            </span>
          </li>

          <li className="flex items-center gap-2">
            <CheckIcon />
            <span>Integraciones e-commerce</span>
          </li>
          <li className="flex items-center gap-2">
            <CheckIcon />
            <span>Mantenimiento avanzado</span>
          </li>
          <li className="flex items-center gap-2">
            <CheckIcon />
            <span>Funcionalidades especiales (APIs)</span>
          </li>
          <li className="flex items-center gap-2">
            <CheckIcon />
            <span>SEO avanzado</span>
          </li>
          <li className="flex items-center gap-2">
            <CheckIcon />
            <span>
              <span className="font-bold">Puedes agregar por $70/mes:</span>{" "}
              manejo hosting y dominio, mantenimiento, manejo de contenido
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

// Icono de check
const CheckIcon = () => (
  <svg
    width="20"
    height="15"
    viewBox="0 0 20 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="shrink-0"
  >
    <path
      d="M6.35588 11.8345L1.61455 7.17002L0 8.7472L6.35588 15L20 1.57718L18.3968 0L6.35588 11.8345Z"
      fill="black"
    />
  </svg>
);

const TopLeftCircle = () => {
  return (
    <motion.div
      initial={{ rotate: "0deg" }}
      animate={{ rotate: "360deg" }}
      transition={{ duration: 100, ease: "linear", repeat: Infinity }}
      className="w-[100px] h-[100px] md:w-[450px] md:h-[450px] rounded-full border-2 border-slate-500 border-dotted absolute z-0 -left-[250px] -top-[200px]"
    />
  );
};

const BottomRightCircle = () => {
  return (
    <motion.div
      initial={{ rotate: "0deg" }}
      animate={{ rotate: "-360deg" }}
      transition={{ duration: 100, ease: "linear", repeat: Infinity }}
      className="w-[350px] h-[350px] rounded-full border-2 border-slate-500 border-dotted absolute z-0 -right-[250px] -bottom-[200px]"
    />
  );
};

export default SlidePricing;

"use client";
import React, { useEffect, useRef } from "react";
import { Briefcase, TrendingUp, Code } from "lucide-react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Registra ScrollTrigger en GSAP
gsap.registerPlugin(ScrollTrigger);

// Componente principal About
const AboutSection = () => {
  const cardsRef = useRef([]); // Creamos un array de referencias para las tarjetas

  useEffect(() => {
    // Creamos animaciones para cada tarjeta cuando se hace scroll
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 }, // Estado inicial de la animación
        {
          opacity: 1,
          y: 0, // Estado final de la animación
          scrollTrigger: {
            trigger: card,
            start: "top 80%", // Empieza la animación cuando el card está en 80% de la viewport
            end: "top 50%",
            scrub: true,
            toggleActions: "play none none reverse", // Control de acciones
          },
          duration: 0.8 + index * 0.2, // Diferente duración para cada card
          ease: "power2.out",
        }
      );
    });
  }, []);

  return (
    <section className="relative mx-auto py-16 md:py-24 bg-white">
      <div className="text-center mb-12 px-4">
        <motion.h2
          className="text-4xl md:text-6xl font-extrabold text-black"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          style={{
            letterSpacing: "2px",
          }}
        >
          ¿Quiénes somos?
        </motion.h2>
        <motion.p
          className="mt-4 text-lg md:text-2xl font-semibold max-w-3xl text-gray-700 mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut" }}
        >
          Somos un equipo apasionado por ayudar a pequeñas y medianas empresas a
          crecer online. Ofrecemos soluciones accesibles que se adaptan a las
          necesidades de cada negocio, con un enfoque en flexibilidad,
          optimización y crecimiento continuo.
        </motion.p>
      </div>

      <div className="grid gap-8 px-4 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        <AboutCard
          ref={(el) => (cardsRef.current[2] = el)} // Asigna ref al tercer card
          Icon={Briefcase}
          title="Acceso para Todos"
          description={
            <>
              Nuestras{" "}
              <span className="text-indigo-600 font-semibold">
                soluciones digitales
              </span>{" "}
              están diseñadas para ser{" "}
              <span className="text-indigo-600 font-semibold">accesibles</span>{" "}
              para pequeños y medianos negocios, con{" "}
              <span className="text-indigo-600 font-semibold">
                precios flexibles
              </span>{" "}
              que se ajustan a tu crecimiento.
            </>
          }
        />
        <AboutCard
          ref={(el) => (cardsRef.current[1] = el)} // Asigna ref al segundo card
          Icon={TrendingUp}
          title="Crecimiento Escalable y Soporte"
          description={
            <>
              Con nuestros{" "}
              <span className="text-indigo-600 font-semibold">
                planes escalables
              </span>
              , puedes empezar con lo básico y{" "}
              <span className="text-indigo-600 font-semibold">expandir</span> tu
              sitio a medida que creces. Además, te brindamos{" "}
              <span className="text-indigo-600 font-semibold">
                soporte continuo
              </span>{" "}
              para que siempre estés optimizado y listo para captar más
              clientes.
            </>
          }
        />
        <AboutCard
          ref={(el) => (cardsRef.current[0] = el)} // Asigna ref al primer card
          Icon={Code}
          title="Desarrollo con Código Personalizado"
          description={
            <>
              Creamos sitios con{" "}
              <span className="text-indigo-600 font-semibold">
                código personalizado
              </span>
              , lo que garantiza{" "}
              <span className="text-indigo-600 font-semibold">
                mayor control,
              </span>{" "}
              <span className="text-indigo-600 font-semibold">
                escalabilidad,{" "}
              </span>
              y{" "}
              <span className="text-indigo-600 font-semibold">
                optimización
              </span>{" "}
              en comparación con otras plataformas de desarrollo donde no tienes
              el control total
            </>
          }
        />
      </div>
    </section>
  );
};

// Componente individual de AboutCard
const AboutCard = ({ Icon, title, description }, ref) => {
  return (
    <motion.div
      ref={ref} // Asigna la referencia pasada desde el componente padre
      className="p-6 md:p-8 bg-white border-2 border-black rounded-lg shadow-lg"
      whileHover={{ translateY: -10, scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
    >
      <Icon className="w-10 h-10 md:w-12 md:h-12 text-indigo-600 mb-4" />
      <h3 className="text-xl md:text-2xl font-semibold text-black mb-4">
        {title}
      </h3>
      <p className="text-base md:text-lg text-gray-600">{description}</p>
    </motion.div>
  );
};

export default AboutSection;

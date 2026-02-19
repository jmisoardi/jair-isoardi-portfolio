export type Category = "Retratos" | "Pre 15" | "Embarazos" | "Artísticos"

export interface GalleryItem {
  id: number
  title: string
  category: Category
  location: string
  description: string
  imageUrl: string
  aspect: "portrait" | "square"
}

export interface Testimonial {
  id: number
  name: string
  session: string
  text: string
  avatar: string
}

export const categories: Category[] = [
  "Retratos",
  "Pre 15",
  "Embarazos",
  "Artísticos",
]

export const galleryItems: GalleryItem[] = [
  // Retratos
  {
    id: 1,
    title: "Luz natural en estudio",
    category: "Retratos",
    location: "Estudio, Santa Rosa",
    description:
      "Retrato íntimo con luz natural lateral. Capturando la esencia y personalidad del modelo en un ambiente controlado.",
    imageUrl: "/portfolio/retratos/jeni.jpg",/* "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&h=750&fit=crop" */
    aspect: "portrait",
  },
  {
    id: 2,
    title: "Retrato al aire libre",
    category: "Retratos",
    location: "Parque Don Tomas, Santa Rosa",
    description:
      "Sesión en exteriores con luz dorada de atardecer. El entorno natural complementa la calidez del retrato.",
    imageUrl: "/portfolio/retratos/Pauli_MG_1823.jpg",/* https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&h=600&fit=crop */
    aspect: "square",
  },
  {
    id: 3,
    title: "Expresión artística",
    category: "Retratos",
    location: "Estudio, Santa Rosa",
    description:
      "Retrato expresivo con iluminación dramática. Cada gesto cuenta una historia única.",
    imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&h=750&fit=crop",
    aspect: "portrait",
  },
  {
    id: 4,
    title: "Mirada profunda",
    category: "Retratos",
    location: "Estudio, Santa Rosa",
    description:
      "Close-up con enfoque en la mirada. La conexión entre fotógrafo y modelo se refleja en cada detalle.",
    imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&h=600&fit=crop",
    aspect: "square",
  },
  // Pre 15
  {
    id: 5,
    title: "Quinceañera en campo",
    category: "Pre 15",
    location: "Campo pampeano, Toay",
    description:
      "Celebrando la llegada de los 15 con un fondo natural impresionante. La magia de la adolescencia capturada al aire libre.",
    imageUrl: "https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?w=600&h=750&fit=crop",
    aspect: "portrait",
  },
  {
    id: 6,
    title: "Vestido de ensueño",
    category: "Pre 15",
    location: "Casco histórico, Santa Rosa",
    description:
      "Cada vestido cuenta una historia. Sesión elegante en el casco histórico de la ciudad.",
    imageUrl: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&h=600&fit=crop",
    aspect: "square",
  },
  {
    id: 7,
    title: "Atardecer dorado",
    category: "Pre 15",
    location: "Laguna Don Tomás, Santa Rosa",
    description:
      "La hora dorada en la laguna crea el escenario perfecto para una sesión de pre 15 inolvidable.",
    imageUrl: "https://images.unsplash.com/photo-1516726817505-f5ed825624d8?w=600&h=750&fit=crop",
    aspect: "portrait",
  },
  {
    id: 8,
    title: "Flores y risas",
    category: "Pre 15",
    location: "Jardín Botánico, Santa Rosa",
    description:
      "Sesión fresca y divertida entre flores silvestres. La alegría de los 15 reflejada en cada foto.",
    imageUrl: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&h=600&fit=crop",
    aspect: "square",
  },
  // Embarazos
  {
    id: 9,
    title: "Espera dulce",
    category: "Embarazos",
    location: "Estudio, Santa Rosa",
    description:
      "Capturando la belleza de la espera. Iluminación suave que resalta la dulzura del momento.",
    imageUrl: "https://images.unsplash.com/photo-1493894473891-10fc1e5dbd22?w=600&h=750&fit=crop",
    aspect: "portrait",
  },
  {
    id: 10,
    title: "Conexión familiar",
    category: "Embarazos",
    location: "Hogar, Santa Rosa",
    description:
      "Sesión en el hogar capturando la conexión entre la pareja y la llegada del nuevo integrante.",
    imageUrl: "https://images.unsplash.com/photo-1544126592-807ade215a0b?w=600&h=600&fit=crop",
    aspect: "square",
  },
  {
    id: 11,
    title: "Silueta materna",
    category: "Embarazos",
    location: "Estudio, Santa Rosa",
    description:
      "Silueta artística que resalta la forma más hermosa de la naturaleza. Contraluz creativo.",
    imageUrl: "https://images.unsplash.com/photo-1509027572446-af8401acfdc3?w=600&h=750&fit=crop",
    aspect: "portrait",
  },
  {
    id: 12,
    title: "Naturaleza y vida",
    category: "Embarazos",
    location: "Parque, Santa Rosa",
    description:
      "La naturaleza como telón de fondo para celebrar la nueva vida que llega.",
    imageUrl: "https://images.unsplash.com/photo-1519689680058-324335c77eba?w=600&h=600&fit=crop",
    aspect: "square",
  },
  // Artísticos
  {
    id: 13,
    title: "Humo y sombras",
    category: "Artísticos",
    location: "Estudio, Santa Rosa",
    description:
      "Experimentación con humo e iluminación. Arte visual que trasciende la fotografía convencional.",
    imageUrl: "https://images.unsplash.com/photo-1504703395950-b89145a5425b?w=600&h=750&fit=crop",
    aspect: "portrait",
  },
  {
    id: 14,
    title: "Doble exposición",
    category: "Artísticos",
    location: "Estudio, Santa Rosa",
    description:
      "Técnica de doble exposición creando universos visuales únicos e irrepetibles.",
    imageUrl: "https://images.unsplash.com/photo-1496440737103-cd596325d314?w=600&h=600&fit=crop",
    aspect: "square",
  },
  {
    id: 15,
    title: "Movimiento etéreo",
    category: "Artísticos",
    location: "Exterior, General Pico",
    description:
      "Capturando el movimiento con velocidades lentas de obturación. Cada imagen es única.",
    imageUrl: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=600&h=750&fit=crop",
    aspect: "portrait",
  },
  {
    id: 16,
    title: "Conceptual urbano",
    category: "Artísticos",
    location: "Centro, Santa Rosa",
    description:
      "Fotografía conceptual en entorno urbano. Contrastes y texturas que cuentan historias.",
    imageUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&h=600&fit=crop",
    aspect: "square",
  },
]

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Valentina Rodríguez",
    session: "Pre 15",
    text: "Jair logró capturar toda la emoción de mis 15 de una manera increíble. Cada foto es un recuerdo que voy a atesorar para siempre. ¡Super recomendado!",
    avatar: "VR",
  },
  {
    id: 2,
    name: "Luciana y Martín Pérez",
    session: "Embarazo",
    text: "Fue una experiencia hermosa. Jair nos hizo sentir súper cómodos y las fotos quedaron espectaculares. Capturó la emoción de la espera de nuestro primer hijo perfectamente.",
    avatar: "LP",
  },
  {
    id: 3,
    name: "Carolina Suárez",
    session: "Retrato",
    text: "Necesitaba fotos profesionales para mi perfil laboral y Jair superó todas mis expectativas. Tiene un ojo increíble para la luz y los ángulos. 100% profesional.",
    avatar: "CS",
  },
]

export const faqItems = [
  {
    question: "¿Cuánto tiempo tardan en estar listas las fotos?",
    answer:
      "El tiempo de entrega varía según el paquete elegido. El plan Básico tiene un tiempo de entrega de 10 días hábiles, el Estándar de 7 días y el Premium de 5 días hábiles. Siempre recibirás un adelanto dentro de las 48 horas posteriores a la sesión.",
  },
  {
    question: "¿Cuántos cambios de vestuario puedo llevar?",
    answer:
      "Recomiendo entre 2 y 4 cambios de vestuario dependiendo del tipo de sesión. Para Pre 15 sugiero al menos 3 looks diferentes. Te envío una guía de vestuario personalizada antes de la sesión.",
  },
  {
    question: "¿Dónde se realizan las sesiones?",
    answer:
      "Cuento con un estudio profesional en Santa Rosa, La Pampa. También realizo sesiones en exteriores en ubicaciones acordadas: parques, campo pampeano, lagunas y locaciones urbanas. Podemos coordinar la locación que mejor se adapte a tu visión.",
  },
  {
    question: "¿Qué pasa si llueve el día de la sesión?",
    answer:
      "Si el clima no acompaña, reprogramamos la sesión sin costo adicional. Siempre tenemos una fecha de respaldo acordada previamente. En caso de sesiones en estudio, el clima no afecta la sesión.",
  },
  {
    question: "¿Cuáles son las formas de pago?",
    answer:
      "Acepto transferencia bancaria, efectivo y Mercado Pago (con tarjeta o QR). Se requiere una seña del 30% para confirmar la reserva y el resto se abona el día de la sesión.",
  },
  {
    question: "¿Puedo reprogramar mi sesión?",
    answer:
      "Sí, podés reprogramar tu sesión con al menos 48 horas de anticipación sin costo adicional. Las cancelaciones con menos de 24 horas pueden tener un cargo del 50% de la seña.",
  },
  {
    question: "¿Puedo compartir las fotos en redes sociales?",
    answer:
      "¡Por supuesto! Todas las fotos entregadas son tuyas para compartir. Solo te pido que me etiquetes (@jairisoardi) cuando las publiques. Las fotos sin editar no se entregan por políticas de calidad.",
  },
]

export const services = [
  {
    id: "retratos",
    title: "Retratos",
    description:
      "Sesiones de retrato profesional en estudio o exterior. Ideal para perfiles profesionales, redes sociales o simplemente para tener una foto que capture tu esencia. Trabajo con luz natural y artificial para lograr el mejor resultado.",
    includes: [
      "Sesión de 1 a 2 horas",
      "Asesoramiento de vestuario",
      "Iluminación profesional",
      "Edición profesional en alta resolución",
      "Entrega digital en galería privada",
    ],
  },
  {
    id: "pre15",
    title: "Pre 15",
    description:
      "Celebrá tus 15 con una sesión fotográfica que capture toda la emoción de este momento tan especial. Sesiones en estudio, exteriores o ambos. Cada sesión es única y personalizada.",
    includes: [
      "Sesión de 2 a 3 horas",
      "Hasta 3 locaciones",
      "Guía de vestuario personalizada",
      "Maquillaje profesional (plan Premium)",
      "Galería online para compartir con familia",
    ],
  },
  {
    id: "embarazos",
    title: "Embarazos",
    description:
      "Documentá la etapa más hermosa con fotos profesionales que vas a atesorar para siempre. Sesiones delicadas y cuidadas que celebran la maternidad con arte y sensibilidad.",
    includes: [
      "Sesión de 1 a 2 horas",
      "Ambientación especial en estudio",
      "Inclusión de pareja e hijos",
      "Props y accesorios temáticos",
      "Edición delicada y cuidada",
    ],
  },
  {
    id: "artisticos",
    title: "Artísticos",
    description:
      "Sesiones creativas donde exploramos técnicas como doble exposición, larga exposición, humo, contraluces y más. Para quienes buscan algo fuera de lo convencional y quieren arte visual.",
    includes: [
      "Sesión de 2 a 3 horas",
      "Planificación creativa conjunta",
      "Efectos especiales (humo, luces, etc.)",
      "Edición artística avanzada",
      "Impresiones fine art disponibles",
    ],
  },
]

export const pricingPlans = [
  {
    name: "Básico",
    price: "$25.000",
    description: "Ideal para una primera sesión o retrato profesional.",
    features: [
      "Sesión de 1 hora",
      "1 locación",
      "10 fotos editadas",
      "Entrega en 10 días hábiles",
      "Galería digital privada",
    ],
    addOns: ["Foto extra: $1.500 c/u", "Impresión 20x30: $3.000"],
    highlighted: false,
  },
  {
    name: "Estándar",
    price: "$45.000",
    description: "La opción más elegida. Perfecto para Pre 15 y Embarazos.",
    features: [
      "Sesión de 2 horas",
      "Hasta 2 locaciones",
      "25 fotos editadas",
      "Entrega en 7 días hábiles",
      "Galería digital + 5 impresiones 13x18",
    ],
    addOns: ["Foto extra: $1.200 c/u", "Álbum 20x20: $15.000"],
    highlighted: true,
  },
  {
    name: "Premium",
    price: "$70.000",
    description: "La experiencia completa. Sesiones artísticas y eventos especiales.",
    features: [
      "Sesión de 3 horas",
      "Hasta 3 locaciones",
      "40 fotos editadas",
      "Entrega en 5 días hábiles",
      "Galería digital + álbum impreso 25x25",
      "Maquillaje profesional incluido",
    ],
    addOns: ["Foto extra: $1.000 c/u", "Video backstage: $10.000"],
    highlighted: false,
  },
]

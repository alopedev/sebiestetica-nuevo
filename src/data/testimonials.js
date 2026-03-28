const AVATAR_COLORS = ['#e9cea5', '#be9b7b', '#d4af37']

const testimonials = [
  {
    id: 1,
    name: 'Helena Gil Castillo',
    time: 'Hace un año',
    text: 'Soy clienta habitual y no puedo estar más contenta con el servicio que da Sebi. Profesional y cercana. Siempre quiero volver.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Esther Gispert',
    time: 'Hace un año',
    text: 'Excelente profesional. Tratamientos de belleza con resultados fabulosos. Trato cercano y cariñoso, te hace sentir como en casa. Recomiento 100X100. Gracias Sebi.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Sheila Díez Cano',
    time: 'Hace 11 meses',
    text: 'Mi chico y yo llevamos años haciéndonos las cejas con sebi y nunca he tenido de mejores. Se lo recomiendo a todo el mundo. No podría vivir sin ella, te cambia la cara.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Lorena Navarro',
    time: 'Hace 3 meses',
    text: 'Es la primera vez que vengo y sin duda no será la última. Trato genial, simpática y sincera. Me ha transmitido confianza y profesionalidad. Sin duda volveré!!!!!!',
    rating: 5,
  },
  {
    id: 5,
    name: 'Aina Gomez',
    time: 'Hace 3 meses',
    text: 'Increíble como siempre, trato excepcional. Super cómoda en todo momento y resultado inmejorable, siempre será mi clínica de confianza.',
    rating: 5,
  },
].map((t, i) => ({
  ...t,
  avatarInitial: t.name.charAt(0),
  avatarColor: AVATAR_COLORS[i % AVATAR_COLORS.length],
}))

export default testimonials

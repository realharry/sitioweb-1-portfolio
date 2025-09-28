import { Palette, Music, Code2, Brain, Megaphone, Monitor } from "lucide-react"

const skills = [
  {
    icon: Palette,
    title: "Arte Digital",
    description: "Ilustración digital, diseño gráfico y arte conceptual con técnicas tradicionales y digitales.",
    color: "from-pink-500 to-rose-500"
  },
  {
    icon: Music,
    title: "Producción Musical",
    description: "Composición, producción y mezcla de música independiente con enfoque en géneros alternativos.",
    color: "from-purple-500 to-violet-500"
  },
  {
    icon: Monitor,
    title: "Diseño Web",
    description: "Diseño UX/UI responsivo y moderno para páginas web y aplicaciones móviles.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Code2,
    title: "Desarrollo Web",
    description: "Desarrollo full-stack con tecnologías modernas como React, Next.js, Node.js y bases de datos.",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Brain,
    title: "Ingeniería IA",
    description: "Desarrollo de soluciones de inteligencia artificial y machine learning para problemas complejos.",
    color: "from-orange-500 to-amber-500"
  },
  {
    icon: Megaphone,
    title: "Marketing Digital",
    description: "Estrategias de marketing digital, SEO, content marketing y gestión de redes sociales.",
    color: "from-red-500 to-pink-500"
  },
]

export function AboutSection() {
  return (
    <section id="acerca" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Acerca de Mí</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Soy un profesional creativo multidisciplinario basado en la Ciudad de México, 
              donde la tradición se encuentra con la innovación. Mi pasión es crear experiencias 
              digitales que no solo funcionen perfectamente, sino que también cuenten historias 
              memorables.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-6">Mi Historia</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Nacido y criado en la vibrante Ciudad de México, siempre he estado rodeado 
                  de arte, música y cultura. Esta rica experiencia cultural se refleja en todo 
                  mi trabajo, desde el desarrollo web hasta la producción musical.
                </p>
                <p>
                  Mi journey comenzó con el arte tradicional en la universidad, pero pronto 
                  descubrí mi pasión por la tecnología. Esta combinación única me permite 
                  crear soluciones que son tanto técnicamente sólidas como visualmente impactantes.
                </p>
                <p>
                  Hoy trabajo con clientes de todo el mundo, ayudándoles a dar vida a sus 
                  visiones creativas a través de la tecnología y el diseño innovador.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Mi Filosofía</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Creo firmemente que la mejor tecnología es aquella que se siente natural 
                  e intuitiva. Mi objetivo es crear experiencias que las personas disfruten 
                  usar, no solo toleren.
                </p>
                <p>
                  Cada proyecto es una oportunidad para aprender algo nuevo y empujar los 
                  límites de lo que es posible. Me especializo en encontrar soluciones 
                  creativas a problemas complejos.
                </p>
                <p>
                  La colaboración está en el corazón de todo lo que hago. Trabajo de cerca 
                  con mis clientes para entender no solo lo que quieren, sino por qué lo quieren.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-12">Mis Especialidades</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skills.map((skill, index) => (
                <div key={index} className="group">
                  <div className="bg-card border rounded-xl p-6 h-full hover:shadow-lg transition-shadow duration-300">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${skill.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <skill.icon className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="text-xl font-bold mb-3">{skill.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">{skill.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold mb-8">¿Listo para crear algo increíble juntos?</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                Comenzar un Proyecto
              </button>
              <button className="border border-border px-8 py-3 rounded-lg font-semibold hover:bg-accent transition-colors">
                Ver Mi Trabajo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
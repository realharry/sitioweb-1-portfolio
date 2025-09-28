import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Award, Users, Calendar } from "lucide-react"

const portfolioItems = [
  {
    id: 1,
    title: "Identidad Visual para Cervecería Artesanal",
    category: "Diseño Gráfico",
    description: "Desarrollo completo de identidad visual para una cervecería artesanal mexicana, incluyendo logo, packaging y materiales promocionales.",
    image: "/api/placeholder/500/400",
    technologies: ["Adobe Illustrator", "Photoshop", "Branding"],
    year: "2023",
    client: "Cerveza del Valle",
    awards: ["Premio Nacional de Diseño 2023"],
    link: "#"
  },
  {
    id: 2,
    title: "Plataforma de Streaming Musical",
    category: "Desarrollo Web",
    description: "Aplicación web completa para streaming de música independiente mexicana con sistema de suscripciones y analytics para artistas.",
    image: "/api/placeholder/500/400",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    year: "2023",
    client: "MusicaMX",
    stats: "50k+ usuarios activos",
    link: "#"
  },
  {
    id: 3,
    title: "Campaña Digital para Festival de Arte",
    category: "Marketing Digital",
    description: "Estrategia completa de marketing digital para el Festival Internacional de Arte Contemporáneo, aumentando la asistencia en 300%.",
    image: "/api/placeholder/500/400",
    technologies: ["Google Ads", "Social Media", "Analytics", "SEO"],
    year: "2024",
    client: "Festival Artístico CDMX",
    stats: "300% aumento en asistencia",
    link: "#"
  },
  {
    id: 4,
    title: "Album 'Sonidos de la Ciudad'",
    category: "Producción Musical",
    description: "Producción, mezcla y masterización de album conceptual que captura los sonidos únicos de la Ciudad de México.",
    image: "/api/placeholder/500/400",
    technologies: ["Pro Tools", "Logic Pro X", "Mixing", "Mastering"],
    year: "2023",
    client: "Los Urbanos Collective",
    awards: ["Mejor Producción Independiente 2023"],
    link: "#"
  },
  {
    id: 5,
    title: "Sistema de Recomendación IA para E-commerce",
    category: "Inteligencia Artificial",
    description: "Algoritmo de machine learning que personaliza recomendaciones de productos, aumentando las conversiones en 45%.",
    image: "/api/placeholder/500/400",
    technologies: ["Python", "TensorFlow", "FastAPI", "PostgreSQL"],
    year: "2024",
    client: "TiendaOnline MX",
    stats: "45% aumento en conversiones",
    link: "#"
  },
  {
    id: 6,
    title: "Instalación Artística Interactiva",
    category: "Arte Digital",
    description: "Instalación multimedia interactiva que responde al movimiento de los visitantes, exhibida en el Museo de Arte Moderno.",
    image: "/api/placeholder/500/400",
    technologies: ["Processing", "Arduino", "Sensors", "Projection Mapping"],
    year: "2024",
    client: "Museo de Arte Moderno",
    awards: ["Premio Arte + Tecnología 2024"],
    link: "#"
  },
]

const categories = ["Todos", "Diseño Gráfico", "Desarrollo Web", "Marketing Digital", "Producción Musical", "Inteligencia Artificial", "Arte Digital"]

export function PortfolioSection() {
  return (
    <section id="portafolios" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Portafolios Destacados</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Una selección de mis trabajos más significativos que demuestran la versatilidad 
              y calidad de mis servicios creativos y técnicos.
            </p>
          </div>

          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button key={category} variant="outline" size="sm">
                {category}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <div key={item.id} className="group">
                <div className="bg-card border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                  {/* Image */}
                  <div className="relative h-64 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/80 via-pink-600/80 to-orange-600/80 flex items-center justify-center">
                      <div className="text-white text-4xl font-bold opacity-30">
                        {String(item.id).padStart(2, '0')}
                      </div>
                    </div>
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary">{item.category}</Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge variant="outline" className="bg-white/90 text-black">
                        {item.year}
                      </Badge>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {item.description}
                    </p>

                    <div className="mb-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <Users className="h-4 w-4" />
                        Cliente: {item.client}
                      </div>
                      {item.awards && (
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                          <Award className="h-4 w-4" />
                          {item.awards[0]}
                        </div>
                      )}
                      {item.stats && (
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                          <Calendar className="h-4 w-4" />
                          Resultado: {item.stats}
                        </div>
                      )}
                    </div>

                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1">
                        {item.technologies.slice(0, 3).map((tech, techIndex) => (
                          <Badge key={techIndex} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                        {item.technologies.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{item.technologies.length - 3}
                          </Badge>
                        )}
                      </div>
                    </div>

                    <Button className="w-full" variant="outline">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Ver Proyecto
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="bg-muted rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold mb-4">¿Te gusta lo que ves?</h3>
              <p className="text-muted-foreground mb-6">
                Estos son solo algunos ejemplos de mi trabajo. Cada proyecto es único y se adapta 
                completamente a las necesidades específicas del cliente.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">
                  Ver Portafolio Completo
                </Button>
                <Button variant="outline" size="lg">
                  Solicitar Cotización
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, ExternalLink, Github } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Plataforma de E-commerce para Artistas Mexicanos",
    description: "Una plataforma completa que conecta a artistas locales con compradores internacionales, incluyendo sistema de pagos, gestión de inventario y analytics avanzados.",
    image: "/api/placeholder/600/400",
    technologies: ["Next.js", "TypeScript", "Stripe", "Prisma", "PostgreSQL"],
    status: "En Desarrollo",
    progress: 75,
    demoLink: "#",
    githubLink: "#",
    startDate: "Enero 2024"
  },
  {
    id: 2,
    title: "App de Producción Musical Colaborativa",
    description: "Aplicación web que permite a músicos independientes colaborar en tiempo real, compartir pistas y recibir feedback de la comunidad.",
    image: "/api/placeholder/600/400",
    technologies: ["React", "Node.js", "WebRTC", "MongoDB", "Socket.io"],
    status: "Beta",
    progress: 90,
    demoLink: "#",
    githubLink: "#",
    startDate: "Noviembre 2023"
  },
  {
    id: 3,
    title: "Sistema de IA para Análisis de Marketing",
    description: "Herramienta de inteligencia artificial que analiza tendencias de mercado y proporciona insights accionables para estrategias de marketing digital.",
    image: "/api/placeholder/600/400",
    technologies: ["Python", "TensorFlow", "FastAPI", "React", "Docker"],
    status: "Investigación",
    progress: 40,
    demoLink: "#",
    githubLink: "#",
    startDate: "Marzo 2024"
  },
]

const statusColors = {
  "En Desarrollo": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
  "Beta": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  "Investigación": "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
}

export function CurrentProjectsSection() {
  return (
    <section id="proyectos" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Proyectos Actuales</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Una mirada a los proyectos innovadores en los que estoy trabajando actualmente. 
              Desde aplicaciones web hasta soluciones de IA, cada proyecto refleja mi pasión 
              por la tecnología y la creatividad.
            </p>
          </div>

          <div className="grid lg:grid-cols-1 gap-8">
            {projects.map((project, index) => (
              <div key={project.id} className="bg-background border rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Image */}
                  <div className={`relative h-64 lg:h-auto bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/80 via-pink-600/80 to-red-600/80 flex items-center justify-center">
                      <div className="text-white text-6xl font-bold opacity-20">
                        {String(project.id).padStart(2, '0')}
                      </div>
                    </div>
                    <div className="absolute top-4 left-4">
                      <Badge className={statusColors[project.status as keyof typeof statusColors]}>
                        {project.status}
                      </Badge>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                      <Calendar className="h-4 w-4" />
                      Iniciado en {project.startDate}
                    </div>

                    <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="mb-6">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">Progreso</span>
                        <span className="text-sm text-muted-foreground">{project.progress}%</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-primary to-primary/80 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${project.progress}%` }}
                        ></div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="outline">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Button size="sm" className="flex-1">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Ver Demo
                      </Button>
                      <Button variant="outline" size="sm">
                        <Github className="h-4 w-4 mr-2" />
                        Código
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-6">
              ¿Tienes una idea interesante? Me encantaría escuchar sobre tu próximo proyecto.
            </p>
            <Button size="lg">
              Proponer un Proyecto
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
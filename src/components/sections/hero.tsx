import { Button } from "@/components/ui/button"
import { ArrowRight, Download } from "lucide-react"

export function HeroSection() {
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center gradient-bg relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-pink-600/20 to-blue-600/20"></div>
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <div className="w-24 h-24 rounded-full bg-gradient-to-r from-pink-500 to-violet-500"></div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="block">¡Hola!</span>
            <span className="block text-4xl md:text-5xl mt-2 text-yellow-300">
              Soy tu Creativo Digital
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Artista, músico, diseñador web y programador con sede en la vibrante Ciudad de México. 
            Transformo ideas en experiencias digitales extraordinarias.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-white text-purple-600 hover:bg-white/90 font-semibold px-8 py-3"
            >
              Ver Mi Trabajo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-purple-600 font-semibold px-8 py-3"
            >
              <Download className="mr-2 h-5 w-5" />
              Descargar CV
            </Button>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "5+", label: "Años de Experiencia" },
              { number: "50+", label: "Proyectos Completados" },
              { number: "30+", label: "Clientes Satisfechos" },
              { number: "10+", label: "Premios Obtenidos" },
            ].map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold text-yellow-300 mb-2">{stat.number}</div>
                <div className="text-sm text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  )
}
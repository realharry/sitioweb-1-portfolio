import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, Linkedin, Github, Instagram, Twitter } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contacto" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Hablemos</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              ¿Tienes un proyecto en mente? Me encantaría escuchar tu idea y ayudarte 
              a convertirla en realidad. Estoy siempre abierto a nuevas colaboraciones 
              y oportunidades emocionantes.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Información de Contacto</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-muted-foreground">hola@miportafolio.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">Teléfono</p>
                      <p className="text-muted-foreground">+52 55 1234 5678</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">Ubicación</p>
                      <p className="text-muted-foreground">Ciudad de México, México</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Sígueme en Redes Sociales</h4>
                <div className="flex gap-4">
                  <Button variant="outline" size="icon">
                    <Linkedin className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Github className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Instagram className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Twitter className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              <div className="bg-card p-6 rounded-lg border">
                <h4 className="text-lg font-semibold mb-3">¿Prefieres una llamada?</h4>
                <p className="text-muted-foreground mb-4">
                  Agenda una videollamada gratuita de 30 minutos para discutir tu proyecto sin compromiso.
                </p>
                <Button className="w-full">
                  Agendar Llamada Gratuita
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-card p-8 rounded-lg border">
                <h3 className="text-2xl font-bold mb-6">Envíame un Mensaje</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Nombre *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        required
                        placeholder="Tu nombre completo"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="tu@email.com"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Asunto *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      required
                      placeholder="¿En qué puedo ayudarte?"
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Mensaje *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      placeholder="Cuéntame sobre tu proyecto o idea..."
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    <Send className="h-5 w-5 mr-2" />
                    Enviar Mensaje
                  </Button>
                </form>

                <div className="mt-6 pt-6 border-t text-center text-sm text-muted-foreground">
                  <p>Normalmente respondo dentro de 24 horas</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">¿Listo para empezar tu proyecto?</h3>
              <p className="mb-6 opacity-90">
                Cada gran proyecto comienza con una conversación. Hablemos sobre cómo 
                puedo ayudarte a alcanzar tus objetivos.
              </p>
              <Button size="lg" className="bg-white text-purple-600 hover:bg-white/90">
                Comenzar Ahora
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
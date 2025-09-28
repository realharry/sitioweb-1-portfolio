import Link from "next/link"
import { Heart, Linkedin, Github, Instagram, Twitter, Mail, Phone } from "lucide-react"

const footerLinks = {
  navigation: [
    { name: "Inicio", href: "#inicio" },
    { name: "Acerca de Mí", href: "#acerca" },
    { name: "Proyectos", href: "#proyectos" },
    { name: "Portafolios", href: "#portafolios" },
    { name: "Contacto", href: "#contacto" },
  ],
  services: [
    { name: "Arte Digital", href: "#arte" },
    { name: "Desarrollo Web", href: "#desarrollo" },
    { name: "Producción Musical", href: "#musica" },
    { name: "Marketing Digital", href: "#marketing" },
    { name: "Ingeniería IA", href: "#ai" },
    { name: "Consultoría", href: "#consultoria" },
  ],
  contact: [
    { name: "hola@miportafolio.com", href: "mailto:hola@miportafolio.com", icon: Mail },
    { name: "+52 55 1234 5678", href: "tel:+5255123456778", icon: Phone },
  ]
}

const socialLinks = [
  { name: "LinkedIn", href: "#", icon: Linkedin },
  { name: "GitHub", href: "#", icon: Github },
  { name: "Instagram", href: "#", icon: Instagram },
  { name: "Twitter", href: "#", icon: Twitter },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div className="lg:col-span-2">
              <Link href="/" className="text-2xl font-bold gradient-text mb-4 block">
                Mi Portafolio
              </Link>
              <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
                Creativo digital multidisciplinario basado en Ciudad de México. 
                Especializado en arte, música, desarrollo web, IA y marketing digital.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label={link.name}
                  >
                    <link.icon className="h-5 w-5" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="font-semibold mb-4">Navegación</h3>
              <ul className="space-y-3">
                {footerLinks.navigation.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold mb-4">Servicios</h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div className="border-t pt-8 mb-8">
            <h3 className="font-semibold mb-4">Contacto Directo</h3>
            <div className="flex flex-col sm:flex-row gap-4">
              {footerLinks.contact.map((contact) => (
                <Link
                  key={contact.name}
                  href={contact.href}
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <contact.icon className="h-4 w-4" />
                  {contact.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Mi Portafolio. Todos los derechos reservados.
            </p>
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              Hecho con <Heart className="h-4 w-4 text-red-500" /> en Ciudad de México
            </p>
          </div>

          {/* Call to Action */}
          <div className="mt-12 text-center">
            <div className="bg-muted rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-3">¿Tienes un proyecto en mente?</h3>
              <p className="text-muted-foreground mb-6">
                No dudes en contactarme. Siempre estoy emocionado por trabajar en nuevos proyectos creativos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="#contacto"
                  className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  Iniciar Proyecto
                </Link>
                <Link
                  href="mailto:hola@miportafolio.com"
                  className="border border-border px-6 py-3 rounded-lg font-semibold hover:bg-accent transition-colors"
                >
                  Enviar Email
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
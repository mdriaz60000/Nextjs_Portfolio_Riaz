import Link from "next/link"
import { Button } from "../../ui/button"
import { Input } from "../../ui/input"
import { Separator } from "../../ui/separator"
import { 
  Twitter, 
  Github, 
  Linkedin, 
  MessageCircle,
  Mail
} from "lucide-react"
import Container from "../Container/Container"

export function SiteFooter() {
  return (
    <footer className="w-full border-t bg-background">
      <Container>
      <div className=" py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">My Protfolio</h3>
            <p className="text-sm text-muted-foreground">
              Building the future, one component at a time.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Github className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <MessageCircle className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Links</h3>
            <nav className="space-y-2">
              <FooterLink href="/docs">Documentation</FooterLink>
              <FooterLink href="/blog">Blog</FooterLink>
              <FooterLink href="/pricing">Pricing</FooterLink>
              <FooterLink href="/about">About Us</FooterLink>
            </nav>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Legal</h3>
            <nav className="space-y-2">
              <FooterLink href="/privacy">Privacy Policy</FooterLink>
              <FooterLink href="/terms">Terms of Service</FooterLink>
              <FooterLink href="/cookies">Cookie Policy</FooterLink>
            </nav>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Stay Updated</h3>
            <p className="text-sm text-muted-foreground">
              Subscribe to our newsletter for the latest updates.
            </p>
            <div className="flex space-x-2">
              <Input type="email" placeholder="Your email" />
              <Button variant="default">
                <Mail className="mr-2 h-4 w-4" /> Subscribe
              </Button>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Riaz. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <FooterLink href="/sitemap">Sitemap</FooterLink>
            <FooterLink href="/status">Status</FooterLink>
            <FooterLink href="/contact">Contact</FooterLink>
          </div>
        </div>
      </div>
      </Container>

    </footer>
  )
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
    >
      {children}
    </Link>
  )
}
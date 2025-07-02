"use client"
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "../../ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";
import Container from "../Container/Container";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Project", href: "/project" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container>
    <div className=" flex h-14 items-center justify-between">
        {/* Logo/Brand */}
        <Link href="/" className="flex items-center ">
          <span className="inline-block font-bold text-2xl md:text-3xl bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent ">
            Mohammad Riaz
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Button
              key={item.name}
              variant="ghost"
              className="text-sm  font-medium text-foreground/70 hover:text-foreground hover:bg-transparent hover:underline"
              asChild
            >
              <Link href={item.href}>{item.name}</Link>
            </Button>
          ))}
          <Link href="https://drive.google.com/file/d/1fIISoS-_n7Wr-mv702OzIhmcf7df85Bd/view">
           <Button variant="default" size="sm" className="ml-2">
            Resume
          </Button>
          </Link>

        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
           size="lg"
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-9 w-9" /> : <Menu className="h-9 w-9" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "md:hidden absolute w-full bg-background border-b shadow-lg transition-all duration-300 overflow-hidden",
          isOpen ? "max-h-96" : "max-h-0"
        )}
      >
        <div className="container py-2 pb-4 space-y-2">
          {navItems.map((item) => (
            <Button
              key={item.name}
              variant="ghost"
              className="w-full justify-start"
              asChild
              onClick={() => setIsOpen(false)}
            >
              <Link href={item.href}>{item.name}</Link>
            </Button>
          ))}
          <Link href="https://drive.google.com/file/d/1fIISoS-_n7Wr-mv702OzIhmcf7df85Bd/view">
           <Button variant="default" className="w-full mt-2">
            Resume
          </Button>
          </Link>

        </div>
      </div>
      </Container>

  
    </header>
  );
}
"use client";
import { Mail, Phone, Send } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Linkedin, Github } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { FaSquareFacebook, FaXTwitter } from "react-icons/fa6";
import Container from "../Container/Container";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const socialLinks = [
  {
    icon: <FaWhatsapp className="h-5 w-5" />,
    name: "WhatsApp",
    url: "https://wa.me/01610595684",
    color: "hover:bg-green-500/20 text-green-600",
  },
  {
    icon: <FaSquareFacebook className="h-5 w-5" />,
    name: "Facebook",
    url: "https://www.facebook.com/riaz60000",
    color: "hover:bg-blue-500/20 text-blue-600",
  },
  {
    icon: <Linkedin className="h-5 w-5" />,
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/mohammad-riaz-56z84/",
    color: "hover:bg-blue-700/20 text-blue-700",
  },
  {
    icon: <Github className="h-5 w-5" />,
    name: "GitHub",
    url: "https://github.com/mdriaz60000",
    color: "hover:bg-gray-800/20 text-gray-800 dark:text-gray-200",
  },
  {
    icon: <FaXTwitter className="h-5 w-5" />,
    name: "Twitter",
    url: "#",
    color: "hover:bg-black/20 text-black dark:text-white",
  },
];

const contactInfo = [
  {
    icon: <Mail className="h-5 w-5 text-primary" />,
    title: "Email",
    content: "mohammadriaz60000@gmail.com",
    href: "mailto:mohammadriaz60000@gmail.com",
  },
  {
    icon: <Phone className="h-5 w-5 text-primary" />,
    title: "Phone",
    content: "+8801601595684",
    href: "#",
  },
];

export function ContactPage() {
  return (
    <Container>
    <section className="py-4 md:py-6 lg:py-10 bg-gradient-to-b from-background to-muted/10">
      <div className="">
        <motion.div
          className=""
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.2 }}
        >
          <motion.div 
            className="space-y-4 text-center mb-12" 
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Let is Connect
            </h2>
            <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
              Have a project in mind or want to collaborate? Drop me a message and I will get back to you as soon as possible.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Contact Form */}
            <motion.div variants={fadeInUp}>
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl">Send a message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Input
                          id="name"
                          placeholder="Your name"
                          className="bg-muted/50 hover:bg-muted/70 transition-colors"
                        />
                      </div>
                      <div className="space-y-2">
                        <Input
                          id="email"
                          placeholder="Email address"
                          type="email"
                          className="bg-muted/50 hover:bg-muted/70 transition-colors"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Input
                        id="subject"
                        placeholder="Subject"
                        className="bg-muted/50 hover:bg-muted/70 transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <Textarea
                        id="message"
                        placeholder="Your message"
                        rows={5}
                        className="bg-muted/50 hover:bg-muted/70 transition-colors min-h-[120px]"
                      />
                    </div>
                    <Button type="submit" className="w-full group">
                      <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={fadeInUp}>
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow h-full">
                <CardHeader>
                  <CardTitle className="text-2xl">Contact Info</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    {contactInfo.map((info, idx) => (
                      <motion.a
                        key={idx}
                        href={info.href}
                        className="flex items-start gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                        variants={fadeInUp}
                        transition={{ delay: 0.1 * idx }}
                        whileHover={{ x: 5 }}
                      >
                        <div className="bg-primary/10 p-3 rounded-full">
                          {info.icon}
                        </div>
                        <div>
                          <h3 className="font-medium">{info.title}</h3>
                          <p className="text-muted-foreground">{info.content}</p>
                        </div>
                      </motion.a>
                    ))}
                  </div>

                  <motion.div 
                    className="pt-4"
                    variants={fadeInUp}
                    transition={{ delay: 0.3 }}
                  >
                    <h3 className="font-medium mb-4 text-lg">Find me on</h3>
                    <div className="flex flex-wrap gap-3">
                      {socialLinks.map((social, idx) => (
                        <motion.a
                          key={idx}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`${social.color} p-3 rounded-full transition-all border border-muted hover:border-primary/30`}
                          whileHover={{ y: -3 }}
                          whileTap={{ scale: 0.95 }}
                          title={social.name}
                          aria-label={social.name}
                        >
                          {social.icon}
                        </motion.a>
                      ))}
                    </div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
    </Container>

  );
}
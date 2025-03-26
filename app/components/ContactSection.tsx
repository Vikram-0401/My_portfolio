"use client"
import { motion } from "framer-motion"
import { Github, Linkedin, Twitter, Mail, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useForm } from "react-hook-form"
import { useToast } from "@/hooks/use-toast"

export default function ContactSection() {
  const { toast } = useToast()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()

  const onSubmit = (data: any) => {
    // Email functionality
    const subject = encodeURIComponent(data.subject)
    const body = encodeURIComponent(`Name: ${data.name}\nEmail: ${data.email}\n\n${data.message}`)
    window.location.href = `mailto:vikram@example.com?subject=${subject}&body=${body}`

    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    })
    reset()
  }

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Ready to start a project or want to discuss opportunities? 
            I'm always open to new ideas and collaborations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 p-8 rounded-lg border border-gray-700"
          >
            <h3 className="text-2xl font-bold mb-6 text-blue-400">Let's Connect</h3>
            <div className="flex gap-4 mb-8">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full text-gray-100 border-gray-600 hover:bg-blue-500/20 hover:text-blue-400 hover:border-blue-400 transition-all duration-300"
                asChild
              >
                <a href="https://github.com/Vikram-0401" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full text-gray-100 border-gray-600 hover:bg-blue-500/20 hover:text-blue-400 hover:border-blue-400 transition-all duration-300"
                asChild
              >
                <a href="https://linkedin.com/in/vikram" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full text-gray-100 border-gray-600 hover:bg-blue-500/20 hover:text-blue-400 hover:border-blue-400 transition-all duration-300"
                asChild
              >
                <a href="https://twitter.com/vikram" target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full text-gray-100 border-gray-600 hover:bg-blue-500/20 hover:text-blue-400 hover:border-blue-400 transition-all duration-300"
                asChild
              >
                <a href="mailto:vikram@example.com">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </a>
              </Button>
            </div>
            <div className="space-y-4 text-gray-300">
              <p className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-blue-400" />
                vikram@example.com
              </p>
              <p className="flex items-center gap-2">
                <Github className="h-5 w-5 text-blue-400" />
                github.com/Vikram-0401
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="border border-gray-700 shadow-lg overflow-hidden bg-gray-800/50">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-6 text-blue-400">Send Me a Message</h3>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div>
                    <Input
                      placeholder="Your Name"
                      {...register("name", { required: "Name is required" })}
                      className={`bg-gray-900/50 border-gray-700 text-gray-100 placeholder:text-gray-500 focus:border-blue-400 ${
                        errors.name ? "border-red-500" : ""
                      }`}
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message as string}</p>}
                  </div>

                  <div>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address",
                        },
                      })}
                      className={`bg-gray-900/50 border-gray-700 text-gray-100 placeholder:text-gray-500 focus:border-blue-400 ${
                        errors.email ? "border-red-500" : ""
                      }`}
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message as string}</p>}
                  </div>

                  <div>
                    <Input
                      placeholder="Subject"
                      {...register("subject", { required: "Subject is required" })}
                      className={`bg-gray-900/50 border-gray-700 text-gray-100 placeholder:text-gray-500 focus:border-blue-400 ${
                        errors.subject ? "border-red-500" : ""
                      }`}
                    />
                    {errors.subject && (
                      <p className="text-red-500 text-sm mt-1">{errors.subject.message as string}</p>
                    )}
                  </div>

                  <div>
                    <Textarea
                      placeholder="Your Message"
                      rows={5}
                      {...register("message", { required: "Message is required" })}
                      className={`bg-gray-900/50 border-gray-700 text-gray-100 placeholder:text-gray-500 focus:border-blue-400 ${
                        errors.message ? "border-red-500" : ""
                      }`}
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">{errors.message.message as string}</p>
                    )}
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
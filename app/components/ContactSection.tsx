"use client"
import { motion } from "framer-motion"
import { 
  GithubIcon, 
  LinkedinIcon, 
  TwitterIcon, 
  Twitter, 
  MailIcon, 
  ExternalLinkIcon, 
  SendIcon, 
  Github, 
  Linkedin, 
  MailIcon as Mail,
  Send
} from "lucide-react"
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
    <section id="contact" className="py-32 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_-100%,rgba(37,38,44,0.7),transparent)]" />
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-violet-400 to-purple-500 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Have a project in mind? I'm always open to discussing new opportunities and ideas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800/50 shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              Connect With Me
            </h3>
            <div className="flex gap-4 mb-10">
              {[
                { icon: Github, href: "https://github.com/Vikram-0401", label: "GitHub" },
                { icon: Linkedin, href: "htthttps://www.linkedin.com/in/vikram-shetty-6827b3259/ps://linkedin.com/in/vikram", label: "LinkedIn" },
                { icon: Twitter, href: "https://twitter.cohttps://x.com/VikramS87249739?mx=2m/vikram", label: "Twitter" },
                { icon: Mail, href: "mailto:vikramshettyr4@gmail.com", label: "Email" }
              ].map((social) => (
                <Button
                  key={social.label}
                  variant="outline"
                  size="icon"
                  className="rounded-full text-gray-100 border-gray-700 hover:scale-110 hover:bg-blue-500/20 hover:text-blue-400 hover:border-blue-400 transition-all duration-300"
                  asChild
                >
                  <a href={social.href} target="_blank" rel="noopener noreferrer">
                    <social.icon className="h-5 w-5" />
                    <span className="sr-only">{social.label}</span>
                  </a>
                </Button>
              ))}
            </div>
            <div className="space-y-6">
              <motion.div 
                className="flex items-center gap-4 p-4 rounded-lg bg-gray-800/50 border border-gray-700/50 hover:border-blue-500/50 transition-colors duration-300"
                whileHover={{ x: 5 }}
              >
                <Mail className="h-5 w-5 text-blue-400" />
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="text-gray-200">vikramshettyr4@gmail.com</p>
                </div>
              </motion.div>
              <motion.div 
                className="flex items-center gap-4 p-4 rounded-lg bg-gray-800/50 border border-gray-700/50 hover:border-blue-500/50 transition-colors duration-300"
                whileHover={{ x: 5 }}
              >
                <Github className="h-5 w-5 text-blue-400" />
                <div>
                  <p className="text-sm text-gray-400">GitHub</p>
                  <p className="text-gray-200">github.com/Vikram-0401</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <Card className="border border-gray-800/50 shadow-xl bg-gray-900/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                  Send a Message
                </h3>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Input
                        placeholder="Your Name"
                        {...register("name", { required: "Name is required" })}
                        className="bg-gray-800/50 border-gray-700/50 text-gray-100 placeholder:text-gray-500 focus:border-blue-400 transition-colors duration-300"
                      />
                      {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name.message as string}</p>}
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
                        className="bg-gray-800/50 border-gray-700/50 text-gray-100 placeholder:text-gray-500 focus:border-blue-400 transition-colors duration-300"
                      />
                      {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email.message as string}</p>}
                    </div>
                  </div>

                  <div>
                    <Input
                      placeholder="Subject"
                      {...register("subject", { required: "Subject is required" })}
                      className="bg-gray-800/50 border-gray-700/50 text-gray-100 placeholder:text-gray-500 focus:border-blue-400 transition-colors duration-300"
                    />
                    {errors.subject && <p className="text-red-400 text-sm mt-1">{errors.subject.message as string}</p>}
                  </div>

                  <div>
                    <Textarea
                      placeholder="Your Message"
                      rows={5}
                      {...register("message", { required: "Message is required" })}
                      className="bg-gray-800/50 border-gray-700/50 text-gray-100 placeholder:text-gray-500 focus:border-blue-400 transition-colors duration-300"
                    />
                    {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message.message as string}</p>}
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-600 hover:to-violet-600 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 group"
                  >
                    Send Message
                    <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
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
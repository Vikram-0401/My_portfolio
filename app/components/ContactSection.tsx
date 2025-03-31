"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail,
  Send,
  CheckCircle,
  Loader2
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useForm } from "react-hook-form"
import { useToast } from "@/hooks/use-toast"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" })
})

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

export default function ContactSection() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    }
  })

  const onSubmit = async (data: any) => {
    setIsSubmitting(true)
    
    try {
      // Email functionality
      const subject = encodeURIComponent(data.subject)
      const body = encodeURIComponent(`Name: ${data.name}\nEmail: ${data.email}\n\n${data.message}`)
      window.location.href = `mailto:vikramshettyr4@gmail.com?subject=${subject}&body=${body}`
      
      // Simulate API call with a slight delay for better UX
      await new Promise(resolve => setTimeout(resolve, 800))
      
      setIsSuccess(true)
      toast({
        title: "Message sent successfully!",
        description: "Thanks for reaching out. I'll get back to you soon.",
        variant: "default"
      })
      
      // Reset success state after 2 seconds
      setTimeout(() => setIsSuccess(false), 2000)
      reset()
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive"
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const socialLinks = [
    { icon: Github, href: "https://github.com/Vikram-0401", label: "GitHub", hover: "hover:bg-gray-700/40" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/vikram-shetty-6827b3259/", label: "LinkedIn", hover: "hover:bg-blue-600/20" },
    { icon: Twitter, href: "https://x.com/VikramS87249739", label: "Twitter", hover: "hover:bg-blue-400/20" },
    { icon: Mail, href: "mailto:vikramshettyr4@gmail.com", label: "Email", hover: "hover:bg-purple-500/20" }
  ]

  const contactInfo = [
    { icon: Mail, text: "vikramshettyr4@gmail.com", label: "Email", color: "text-blue-400" },
    { icon: Github, text: "github.com/Vikram-0401", label: "GitHub", color: "text-violet-400" },
    { icon: Linkedin, text: "linkedin.com/in/vikram-shetty-6827b3259", label: "LinkedIn", color: "text-indigo-400" }
  ]
 
  return (
    <section id="contact" className="py-32 relative">
      {/* Enhanced gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.15),transparent_50%),radial-gradient(ellipse_at_bottom,rgba(139,92,246,0.15),transparent_70%)]" />
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <span className="text-sm font-medium text-blue-400 tracking-wider uppercase mb-3 block">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-violet-400 to-purple-500 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Have a project in mind? I'm always open to discussing new opportunities and ideas.
            Let's create something amazing together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800/50 shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              Connect With Me
            </h3>
            
            {/* Enhanced social links section */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex gap-4 mb-10"
            >
              {socialLinks.map((social) => (
                <motion.div key={social.label} variants={itemVariants}>
                  <Button
                    variant="outline"
                    size="icon"
                    className={`rounded-full text-gray-100 border-gray-700 hover:scale-110 hover:text-blue-400 hover:border-blue-400 transition-all duration-300 ${social.hover}`}
                    asChild
                  >
                    <a 
                      href={social.href} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label={social.label}
                    >
                      <social.icon className="h-5 w-5" />
                      <span className="sr-only">{social.label}</span>
                    </a>
                  </Button>
                </motion.div>
              ))}
            </motion.div>
            
            {/* Enhanced contact info cards */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              {contactInfo.map((item, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className="flex items-center gap-4 p-4 rounded-lg bg-gray-800/50 border border-gray-700/50 hover:border-blue-500/50 transition-colors duration-300 group"
                  whileHover={{ x: 5, transition: { type: "spring", stiffness: 300 } }}
                >
                  <div className={`p-2 rounded-md bg-gray-700/30 ${item.color} group-hover:bg-blue-500/20 transition-colors duration-300`}>
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">{item.label}</p>
                    <p className="text-gray-200 group-hover:text-blue-300 transition-colors duration-300">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            {/* Availability indicator */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-10 p-4 rounded-lg bg-gradient-to-r from-blue-500/10 to-violet-500/10 border border-blue-500/20"
            >
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="h-3 w-3 bg-green-400 rounded-full"></div>
                  <div className="h-3 w-3 bg-green-400 rounded-full absolute top-0 left-0 animate-ping opacity-75"></div>
                </div>
                <p className="text-gray-200">Currently available for freelance projects</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <Card className="border border-gray-800/50 shadow-xl bg-gray-900/50 backdrop-blur-sm overflow-hidden">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                  Send a Message
                </h3>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Input
                        placeholder="Your Name"
                        {...register("name")}
                        className="bg-gray-800/50 border-gray-700/50 text-gray-100 placeholder:text-gray-500 focus:border-blue-400 transition-colors duration-300"
                      />
                      {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>}
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder="Your Email"
                        {...register("email")}
                        className="bg-gray-800/50 border-gray-700/50 text-gray-100 placeholder:text-gray-500 focus:border-blue-400 transition-colors duration-300"
                      />
                      {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>}
                    </div>
                  </div>

                  <div>
                    <Input
                      placeholder="Subject"
                      {...register("subject")}
                      className="bg-gray-800/50 border-gray-700/50 text-gray-100 placeholder:text-gray-500 focus:border-blue-400 transition-colors duration-300"
                    />
                    {errors.subject && <p className="text-red-400 text-sm mt-1">{errors.subject.message}</p>}
                  </div>

                  <div>
                    <Textarea
                      placeholder="Your Message"
                      rows={5}
                      {...register("message")}
                      className="bg-gray-800/50 border-gray-700/50 text-gray-100 placeholder:text-gray-500 focus:border-blue-400 transition-colors duration-300 resize-none"
                    />
                    {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>}
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting || isSuccess}
                    className="w-full bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-600 hover:to-violet-600 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 group relative overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : isSuccess ? (
                        <>
                          <CheckCircle className="mr-2 h-4 w-4" />
                          Sent Successfully
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </>
                      )}
                    </span>
                    <span className="absolute inset-0 h-full w-full scale-x-0 transform origin-left bg-gradient-to-r from-blue-600 to-violet-600 transition-transform duration-500 group-hover:scale-x-100 -z-0"></span>
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
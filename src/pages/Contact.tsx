import { useState } from 'react'
import { Layout } from '@/components/layout/Layout'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Mail, MapPin, Github, Globe, Linkedin, Send, Clock, CheckCircle } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 3000)
  }

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'm.sobri@ui.ac.id',
      href: 'mailto:m.sobri@ui.ac.id',
      description: 'For professional inquiries and collaboration'
    },
    {
      icon: Globe,
      label: 'Blog',
      value: 'pegasus-hacker.netlify.app',
      href: 'https://pegasus-hacker.netlify.app',
      description: 'Personal blog and security research'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'sobri3195',
      href: 'https://github.com/sobri3195',
      description: 'Open source projects and contributions'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'muhammad-sobri-maulana',
      href: 'https://linkedin.com/in/muhammad-sobri-maulana',
      description: 'Professional network and updates'
    }
  ]

  const collaborationAreas = [
    'Medical Technology Research',
    'Cybersecurity Consulting',
    'Health Data Analysis',
    'Academic Collaboration',
    'Speaking Engagements',
    'Technical Consultation'
  ]

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Let's Connect
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Interested in collaboration, research, or just want to chat about medicine, technology, or cybersecurity? 
            I'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Get In Touch
              </h2>
              
              <div className="space-y-4">
                {contactMethods.map((method) => {
                  const Icon = method.icon
                  return (
                    <Card key={method.label} hover>
                      <CardContent className="p-4">
                        <div className="flex items-start gap-4">
                          <div className="p-2 bg-primary-100 rounded-lg">
                            <Icon className="w-5 h-5 text-primary-600" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-gray-900">{method.label}</h3>
                            <a
                              href={method.href}
                              target={method.href.startsWith('http') ? '_blank' : undefined}
                              rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                              className="text-primary-600 hover:text-primary-800 font-medium"
                            >
                              {method.value}
                            </a>
                            <p className="text-sm text-gray-600 mt-1">
                              {method.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>

            {/* Location & Availability */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2" />
                  Location & Availability
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-700">Jakarta, Indonesia</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-700">UTC+7 (WIB)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-gray-700">Available for collaboration</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Collaboration Areas */}
            <Card>
              <CardHeader>
                <CardTitle>Collaboration Areas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {collaborationAreas.map((area) => (
                    <Badge key={area} variant="outline">
                      {area}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-gray-600">
                      Thank you for reaching out. I'll get back to you soon!
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      >
                        <option value="">Select a subject</option>
                        <option value="collaboration">Collaboration Opportunity</option>
                        <option value="research">Research Inquiry</option>
                        <option value="speaking">Speaking Engagement</option>
                        <option value="consultation">Consultation Request</option>
                        <option value="media">Media Interview</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Tell me about your project, inquiry, or how we can collaborate..."
                      />
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center px-6 py-3 bg-primary-600 text-white rounded-md hover:bg-primary-700 focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </CardContent>
            </Card>

            {/* Response Time */}
            <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="text-sm font-medium text-blue-900">
                    Typical Response Time
                  </p>
                  <p className="text-sm text-blue-700">
                    I usually respond within 24-48 hours. For urgent matters, please mention it in your message.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-primary-500 to-medical-500 rounded-lg p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">
            Ready to Make an Impact Together?
          </h2>
          <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
            Whether it's pioneering medical technology, advancing cybersecurity research, or fostering community health, 
            I'm excited to explore how we can create meaningful change together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:m.sobri@ui.ac.id"
              className="inline-flex items-center px-6 py-3 bg-white text-primary-600 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              <Mail className="w-4 h-4 mr-2" />
              Send Direct Email
            </a>
            <a
              href="/files/cv-muhammad-sobri-maulana.pdf"
              download
              className="inline-flex items-center px-6 py-3 border border-white text-white rounded-lg font-medium hover:bg-white hover:text-primary-600 transition-colors"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}
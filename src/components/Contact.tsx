
import { useState } from 'react';
import { Mail, Github } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Initialize EmailJS with your public key
      emailjs.init('aAP3WMpVjuTKS1aEj');

      // Send email using your service ID and template ID
      await emailjs.send(
        'service_rfe8g77', // Your service ID
        'template_zpef3ar', // Your template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Portfolio Owner', // You can customize this
        }
      );

      // Success toast
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });

      // Reset form
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      
      // Error toast
      toast({
        title: "Failed to send message",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEmailClick = () => {
    window.open('mailto:bt075590@gmail.com', '_blank');
  };

  const handleGitHubClick = () => {
    window.open('https://github.com/yourusername', '_blank'); // Replace with your actual GitHub URL
  };

  return (
    <section id="contact" className="py-20 bg-slate-800 transform-gpu">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-red-500 mx-auto mb-6"></div>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            Let's collaborate and build something amazing together
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Let's Connect</h3>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <button 
                  onClick={handleEmailClick}
                  className="bg-red-500 rounded-lg p-3 mr-4 hover:bg-red-600 transition-colors duration-300 transform hover:scale-105"
                >
                  <Mail className="text-white" size={24} />
                </button>
                <div>
                  <h4 className="text-white font-semibold">Email</h4>
                  <p className="text-slate-400">bt075590@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-red-500 rounded-lg p-3 mr-4">
                  <span className="text-white text-xl">📱</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold">Phone</h4>
                  <p className="text-slate-400">9301545353</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <button 
                  onClick={handleGitHubClick}
                  className="bg-red-500 rounded-lg p-3 mr-4 hover:bg-red-600 transition-colors duration-300 transform hover:scale-105"
                >
                  <Github className="text-white" size={24} />
                </button>
                <div>
                  <h4 className="text-white font-semibold">GitHub</h4>
                  <p className="text-slate-400">GitHub Profile Link</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-slate-700 rounded-lg">
              <h4 className="text-white font-semibold mb-4">Currently Available For</h4>
              <ul className="text-slate-300 space-y-2">
                <li>• Full-time opportunities</li>
                <li>• Freelance projects</li>
                <li>• Collaboration on open source</li>
                <li>• Mentoring and consulting</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Send Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full bg-slate-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300 disabled:opacity-50"
                />
              </div>
              
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full bg-slate-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300 disabled:opacity-50"
                />
              </div>
              
              <div>
                <textarea
                  name="message"
                  rows={6}
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full bg-slate-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300 resize-none disabled:opacity-50"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:transform-none disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

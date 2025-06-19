
import { useState } from 'react';
import { Mail, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { useToast } from '@/hooks/use-toast';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    try {
      emailjs.init('aAP3WMpVjuTKS1aEj');

      await emailjs.send(
        'service_rfe8g77',
        'template_zpef3ar',
        {
          from_name: data.name,
          from_email: data.email,
          message: data.message,
          to_name: 'Portfolio Owner',
        }
      );

      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });

      reset();
    } catch (error) {
      console.error('EmailJS Error:', error);
      
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
    window.open('https://github.com/Shanuthakur01', '_blank');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-800 transform-gpu transition-colors duration-300">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-red-500 mx-auto mb-6"></div>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-3xl mx-auto">
            Let's collaborate and build something amazing together
          </p>
        </motion.div>

        <motion.div 
          className="grid lg:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Let's Connect</h3>
            
            <div className="space-y-6">
              <motion.div 
                className="flex items-center group"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.2 }}
              >
                <motion.button 
                  onClick={handleEmailClick}
                  className="bg-gradient-to-r from-red-500 to-red-600 rounded-lg p-3 mr-4 hover:from-red-600 hover:to-red-700 transition-all duration-300 shadow-lg"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Mail className="text-white" size={24} />
                </motion.button>
                <div>
                  <h4 className="text-slate-900 dark:text-white font-semibold group-hover:text-red-500 transition-colors duration-300">Email</h4>
                  <p className="text-slate-600 dark:text-slate-400">bt075590@gmail.com</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-center group"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.2 }}
              >
                <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-lg p-3 mr-4 shadow-lg">
                  <span className="text-white text-xl">📱</span>
                </div>
                <div>
                  <h4 className="text-slate-900 dark:text-white font-semibold group-hover:text-red-500 transition-colors duration-300">Phone</h4>
                  <p className="text-slate-600 dark:text-slate-400">9301545353</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-center group"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.2 }}
              >
                <motion.button 
                  onClick={handleGitHubClick}
                  className="bg-gradient-to-r from-red-500 to-red-600 rounded-lg p-3 mr-4 hover:from-red-600 hover:to-red-700 transition-all duration-300 shadow-lg"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Github className="text-white" size={24} />
                </motion.button>
                <div>
                  <h4 className="text-slate-900 dark:text-white font-semibold group-hover:text-red-500 transition-colors duration-300">GitHub</h4>
                  <p className="text-slate-600 dark:text-slate-400">github.com/Shanuthakur01</p>
                </div>
              </motion.div>
            </div>

            <motion.div 
              className="mt-8 p-6 bg-white dark:bg-slate-700 rounded-lg shadow-lg"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <h4 className="text-slate-900 dark:text-white font-semibold mb-4">Currently Available For</h4>
              <ul className="text-slate-600 dark:text-slate-300 space-y-2">
                <li>• Full-time opportunities</li>
                <li>• Freelance projects</li>
                <li>• Collaboration on open source</li>
                <li>• Mentoring and consulting</li>
              </ul>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Send Message</h3>
            
            <motion.form 
              onSubmit={handleSubmit(onSubmit)} 
              className="space-y-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <input
                  {...register("name", { required: "Name is required" })}
                  type="text"
                  placeholder="Your Name"
                  disabled={isSubmitting}
                  className="w-full bg-white dark:bg-slate-700 text-slate-900 dark:text-white rounded-lg px-4 py-3 border border-slate-200 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 disabled:opacity-50"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                )}
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <input
                  {...register("email", { 
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Invalid email address"
                    }
                  })}
                  type="email"
                  placeholder="Your Email"
                  disabled={isSubmitting}
                  className="w-full bg-white dark:bg-slate-700 text-slate-900 dark:text-white rounded-lg px-4 py-3 border border-slate-200 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 disabled:opacity-50"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              >
                <textarea
                  {...register("message", { required: "Message is required" })}
                  rows={6}
                  placeholder="Your Message"
                  disabled={isSubmitting}
                  className="w-full bg-white dark:bg-slate-700 text-slate-900 dark:text-white rounded-lg px-4 py-3 border border-slate-200 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 resize-none disabled:opacity-50"
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                )}
              </motion.div>
              
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </motion.form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

// src/components/ContactForm.jsx
import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' }); // Clear error on input change
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000); // Clear success message after 3 seconds
    }
  };

  return (
    <section id= "contact" className="p-6 text-gray-800 dark:text-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Me</h2>
        <form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto space-y-4"
        >
          <div>
            <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 border-b border-gray-400 outline-none bg-transparent focus:border-gray-800 dark:focus:border-gray-100"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>
          <div>
            <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 border-b border-gray-400 outline-none bg-transparent focus:border-gray-800 dark:focus:border-gray-100"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>
          <div>
            <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Subject</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full p-2 border-b border-gray-400 outline-none bg-transparent focus:border-gray-800 dark:focus:border-gray-100"
            />
            {errors.subject && <p className="text-red-500 text-sm">{errors.subject}</p>}
          </div>
          <div>
            <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-2 border-b border-gray-400 outline-none bg-transparent focus:border-gray-800 dark:focus:border-gray-100"
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-gray-700 text-white font-bold uppercase tracking-wider rounded-md transition duration-300 hover:bg-gray-800"
          >
            Send
          </button>
          {isSubmitted && <p className="text-green-500 text-center mt-4">Message sent successfully!</p>}
        </form>
      </div>
    </section>
  );
};

export default ContactForm;

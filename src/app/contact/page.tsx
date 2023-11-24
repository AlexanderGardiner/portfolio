"use client"

import { FormEvent, useState } from "react"

import { useGoogleReCaptcha } from "react-google-recaptcha-v3"
import { verifyCaptchaAction } from "@/app/_actions/Captcha"


const ContactForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    body: '',
  });

  const { executeRecaptcha } = useGoogleReCaptcha()

  async function onSubmit() {
    if (!executeRecaptcha) {
      return
    }
    const token = await executeRecaptcha("onSubmit")
    const verified = await verifyCaptchaAction(token)

    if (verified) {
        const form = new FormData();
        form.append('email', formData.email);
        form.append('subject', formData.subject);
        form.append('body', formData.body);
        const response = await fetch('/api/submit', {
            method: 'POST',
            body: form,
          })
    }

  }
  return (
        
    <div className="flex flex-col items-center justify-center mt-16">
      <div className="w-4/5 flex flex-col items-center justify-center mx-auto">
        <div className="w-full md:w-full text-center items-center flex flex-col justify-center ">
          <div className="w-4/5 mx-auto">
          <div className="flex items-center text-center ">
            <h1 className="mb-4 md:text-6xl text-5xl font-bold text-center text-gray-900 dark:text-white mx-auto">Contact me</h1>
          </div>
          
          <div className="flex grid md:grid-cols-2 gap-4">
            <div className="flex items-center md:mx-10 justify-center mx-auto md:mr-20">
              <section className="">
                <div className="py-8 md:py-16 md:px-4 mx-auto items-center max-w-md md:w-xl md:max-w-xl">
                    <h2 className="mb-4 lg:text-4xl md:text-5xl text-center text-4xl font-bold text-center text-gray-900 dark:text-white pb-5 md:w-96">Get In Touch</h2>
                    <form action={onSubmit} className="space-y-8">
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300">Your email</label>
                            <input type="email" id="email" onChange={(e) => setFormData({ ...formData, email: e.target.value })} value={formData.email} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light max-w-xs mx-auto" placeholder="example@example.com" required/>
                        </div>
                        <div>
                            <label htmlFor="subject" className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300">Subject</label>
                            <input type="text" id="subject" onChange={(e) => setFormData({ ...formData, subject: e.target.value })} value={formData.subject} className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light max-w-xs mx-auto" placeholder="Subject of your message" required/>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="message" className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-400">Your message</label>
                            <textarea id="message" onChange={(e) => setFormData({ ...formData, body: e.target.value })} value={formData.body} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 max-w-xs mx-auto" placeholder="Put your message here"></textarea>
                        </div>
                        <button type="submit" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-5 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-highlight dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-darkHighlight dark:focus:ring-gray-700">Send message</button>
                    </form>
                </div>
              </section>
            </div>
          
            <div className="flex flex-col items-center text-center justify-center md:ml-20">
              <div className="py-5">
                <h1 className="text-4xl font-bold pb-5">Email</h1>
                <a href="mailto:contact@alexandergardiner.com" className="lg:text-4xl md:text-3xl vtext-lg font-bold text-highlight max-w-sm">contact@alexandergardiner.com</a>
              </div>

              <div className="py-5">
                <h1 className="text-4xl font-bold pb-5">Phone</h1>
                <a href="tel:+1000000000" className="lg:text-4xl md:text-3xl text-lg font-bold text-highlight">(000)-000-000</a>
              </div>
            </div>

          </div>
          </div>

          
        </div>
      </div>
      </div>
  )
}

export default ContactForm
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
  // initialises the powerful hook that is in charge of executing the
  // reCAPTCHA behind the scenes.
  const { executeRecaptcha } = useGoogleReCaptcha()

  async function onSubmit() {
    // if the component is not mounted yet
    if (!executeRecaptcha) {
      return
    }
    // receive a token
    const token = await executeRecaptcha("onSubmit")
    // validate the token via the server action we've created previously
    const verified = await verifyCaptchaAction(token)

    if (verified) {
        const form = new FormData();
        form.append('username', formData.email);
        form.append('subject', formData.subject);
        form.append('body', formData.body);
        const response = await fetch('/api/submit', {
            method: 'POST',
            body: form,
          })
    }
    // here you would give an error message or just ignore
    // the form submission
  }
  return (
        
    <div className="flex flex-col items-left justify-center mt-16">
      <div className="w-4/5 flex flex-col items-left justify-left mx-auto">
        <div className="w-full md:w-full text-center flex flex-col justify-center">
          <div className="w-4/5 mx-auto">
          <div className="flex items-center text-center ">
            <h1 className="mb-4 text-7xl font-bold text-center text-gray-900 dark:text-white mx-auto">Contact me</h1>
          </div>
          
          <div className="flex grid grid-cols-2 gap-4">
            <div className="flex items-center px-20 justify-center">
              <section className="">
                <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                    <h2 className="mb-4 text-4xl font-bold text-center text-gray-900 dark:text-white w-96 pb-5">Get In Touch</h2>
                    <form action={onSubmit} className="space-y-8">
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300">Your email</label>
                            <input type="email" id="email" onChange={(e) => setFormData({ ...formData, email: e.target.value })} value={formData.email} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="example@example.com" required/>
                        </div>
                        <div>
                            <label htmlFor="subject" className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300">Subject</label>
                            <input type="text" id="subject" onChange={(e) => setFormData({ ...formData, subject: e.target.value })} value={formData.subject} className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Subject of your message" required/>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="message" className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-400">Your message</label>
                            <textarea id="message" onChange={(e) => setFormData({ ...formData, body: e.target.value })} value={formData.body} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Put your message here"></textarea>
                        </div>
                        <button type="submit" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-5 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-highlight dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-darkHighlight dark:focus:ring-gray-700">Send message</button>
                    </form>
                </div>
              </section>
            </div>
          
            <div className="flex flex-col items-center text-center justify-center">
              <div className="py-5">
                <h1 className="text-5xl font-bold pb-5">Email</h1>
                <a href="mailto:example@example.com" className="text-3xl font-bold text-highlight">example@example.com</a>
              </div>

              <div className="py-5">
                <h1 className="text-5xl font-bold pb-5">Phone</h1>
                <a href="tel:+1000000000" className="text-3xl font-bold text-highlight">(000)-000-000</a>
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
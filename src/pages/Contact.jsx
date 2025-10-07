import { Header, Footer } from "../components";

export default function Contact() {
  return (
    <>
      <Header />
      <div className="container mx-auto py-24 px-4 sm:px-6 md:px-10 lg:px-32 lg:py-32">
        <div className="max-w-3xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary text-center">
              Hubungi Kami
            </h2>
            <p className="mt-4 text-lg text-gray-600">We're here to help. Reach out to us with any questions or inquiries about our properties and services.</p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-bold text-gray-900 ">Our Office</h3>
                <p className="mt-2 text-gray-600">Jl. Teuku Umar No. 123, Banda Aceh, Aceh, Indonesia</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 ">Get in Touch</h3>
                <p className="mt-2 text-gray-600">info@joeraganproperti.com</p>
                <p className="mt-1 text-gray-600">+62 123 456 7890</p>
              </div>
            </div>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700" for="name">Name</label>
                <div className="mt-1">
                  <input className="form-input py-4 px-2 w-full rounded-lg border-gray-300 bg-background-light focus:border-primary focus:ring-primary placeholder-gray-400" id="name" name="name" placeholder="Your Name" type="text" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700" for="email">Email</label>
                <div className="mt-1">
                  <input className="form-input py-2 px-2 w-full rounded-lg border-gray-300 bg-background-light focus:border-primary focus:ring-primary placeholder-gray-400" id="email" name="email" placeholder="your@email.com" type="email" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700" for="phone">Phone</label>
                <div className="mt-1">
                  <input className="form-input py-2 px-2 w-full rounded-lg border-gray-300 bg-background-light focus:border-primary focus:ring-primary placeholder-gray-400" id="phone" name="phone" placeholder="Your Phone Number" type="tel" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700" for="message">Message</label>
                <div className="mt-1">
                  <textarea className="form-textarea y-4 px-2 w-full rounded-lg border-gray-300 bg-background-light focus:border-primary focus:ring-primary placeholder-gray-400" id="message" name="message" placeholder="Your Message" rows="4"></textarea>
                </div>
              </div>
              <div>
                <button className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-bold text-white bg-primary hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-opacity" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
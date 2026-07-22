import { ContactForm } from "@/components/contact-form"

export const metadata = { title: "Contact Ajay Readymade Store – Location, Phone, Hours | Ellenabad" }

export default function ContactPage() {
  return (
    <div className="max-w-[1440px] mx-auto px-6 lg:px-8 py-12">
      <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10">
        <div>
          <h1 className="text-[36px] font-bold text-[#0B1D3A]">Visit Us on Gurudwara Road, Ellenabad</h1>
          <p className="mt-3 text-slate-600">Same-day alteration, try & buy, friendly staff. We&apos;re located Near Singla Hospital.</p>
          <div className="mt-8 grid gap-4">
            <div className="rounded-[20px] border bg-white p-6"><p className="font-semibold">Store Address (NAP)</p><p className="text-sm text-slate-600 mt-2">Ajay Readymade Store, Gurudwara Road, Near Singla Hospital, Ellenabad, Sirsa, Haryana 125102</p></div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-[20px] border bg-white p-6"><p className="font-semibold">Call / WhatsApp</p><p className="text-sm mt-2">+91 98120-XXXXX<br/>+91 94160-XXXXX</p><a href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919812000000"}`} className="mt-3 inline-flex h-9 px-4 rounded-full bg-[#25D366] text-white text-sm">WhatsApp</a></div>
              <div className="rounded-[20px] border bg-white p-6"><p className="font-semibold">Hours</p><p className="text-sm mt-2">Mon-Sun 10AM-9PM<br/>Festival 9AM-10PM<br/><span className="text-green-600">Open Now • Ellenabad</span></p></div>
            </div>
            <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1!2d74.657!3d29.451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0!2zMjnCsDI3JzAwLjAiTiA3NMKwMzAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1" className="w-full h-[320px] rounded-[20px] border" loading="lazy" />
          </div>
        </div>
        <div className="rounded-[24px] bg-[#F8F9FB] border p-8">
          <h2 className="text-xl font-bold text-[#0B1D3A]">Send Enquiry – Get Callback in 10 mins</h2>
          <p className="text-sm text-slate-500 mt-2 mb-6">Best for wedding shopping, bulk school orders, price enquiry.</p>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}

"use client"
import { useState } from "react"
import { Send, CheckCircle2, Loader2 } from "lucide-react"

export function ContactForm() {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [interest, setInterest] = useState("Men's Wear")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name || !phone) {
      setError("Please fill in your name and phone number.")
      return
    }
    setError("")
    setLoading(true)

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          productInterest: interest,
          message,
          source: "website_contact_form"
        })
      })

      if (res.ok) {
        setSubmitted(true)
        setName("")
        setPhone("")
        setMessage("")
      } else {
        const data = await res.json()
        setError(data.error || "Failed to submit enquiry. Please try again.")
      }
    } catch (err) {
      setError("Something went wrong. Please check your connection.")
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-10 px-4 text-center rounded-[24px] bg-white border border-slate-100 shadow-soft">
        <CheckCircle2 className="w-16 h-16 text-green-500 animate-bounce" />
        <h3 className="text-2xl font-bold text-[#0B1D3A] mt-4">Enquiry Submitted!</h3>
        <p className="text-slate-500 mt-2 max-w-[320px]">
          We have received your enquiry for <strong>{interest}</strong>. Our team will call or message you on WhatsApp within 10 minutes.
        </p>
        <button 
          onClick={() => setSubmitted(false)}
          className="mt-6 h-11 px-6 rounded-full bg-[#0B1D3A] text-white text-sm font-semibold hover:bg-[#122954] transition"
        >
          Send Another Enquiry
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <div className="p-3.5 text-xs text-red-700 bg-red-50 border border-red-100 rounded-2xl">
          {error}
        </div>
      )}
      
      <div>
        <input 
          type="text"
          placeholder="Your Name" 
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full h-12 px-5 rounded-full border bg-white outline-none focus:border-[#0B1D3A] focus:ring-1 focus:ring-[#0B1D3A] text-sm text-[#0B1D3A] transition" 
        />
      </div>
      
      <div>
        <input 
          type="tel"
          placeholder="Phone / WhatsApp Number" 
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          className="w-full h-12 px-5 rounded-full border bg-white outline-none focus:border-[#0B1D3A] focus:ring-1 focus:ring-[#0B1D3A] text-sm text-[#0B1D3A] transition" 
        />
      </div>
      
      <div>
        <select 
          value={interest}
          onChange={(e) => setInterest(e.target.value)}
          className="w-full h-12 px-5 rounded-full border bg-white outline-none focus:border-[#0B1D3A] text-sm text-slate-700 cursor-pointer"
        >
          <option value="Men's Wear">Interested in: Men&apos;s Wear</option>
          <option value="Kids Wear">Interested in: Kids Wear</option>
          <option value="Women's Wear">Interested in: Women&apos;s Wear</option>
          <option value="Wedding Collection">Interested in: Wedding Collection</option>
        </select>
      </div>
      
      <div>
        <textarea 
          placeholder="Message – e.g. Need 2 blazers for wedding next week" 
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full min-h-[120px] p-4 rounded-[20px] border bg-white outline-none focus:border-[#0B1D3A] focus:ring-1 focus:ring-[#0B1D3A] text-sm text-[#0B1D3A] transition" 
        />
      </div>
      
      <button 
        type="submit" 
        disabled={loading}
        className="w-full h-12 rounded-full bg-[#0B1D3A] text-white font-semibold flex items-center justify-center gap-2 hover:bg-[#122954] transition disabled:opacity-75 disabled:cursor-not-allowed"
      >
        {loading ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" /> Submitting...
          </>
        ) : (
          <>
            Send Enquiry <Send className="w-3.5 h-3.5" />
          </>
        )}
      </button>
      <p className="text-xs text-slate-400 text-center">We reply on WhatsApp fastest • No spam • Ellenabad store only</p>
    </form>
  )
}

"use client"
import { useState, useEffect } from "react"
import { 
  Home, Package, Folder, Mail, Image as ImageIcon, User, 
  Search, Plus, Edit2, Trash2, CheckCircle2, AlertTriangle, 
  TrendingUp, RefreshCw, X, Save, ShieldAlert, ExternalLink,
  Lock, Eye, Power
} from "lucide-react"
import { WhatsappIcon } from "@/components/social-icons"

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<"dashboard" | "products" | "categories" | "contacts" | "media" | "profile">("dashboard")
  
  // Auth States
  const [authenticated, setAuthenticated] = useState<boolean | null>(null)
  const [loginPassword, setLoginPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [loginError, setLoginError] = useState("")
  const [loginLoading, setLoginLoading] = useState(false)

  // Password Manager States
  const [currPassword, setCurrPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [passError, setPassError] = useState("")
  const [passSuccess, setPassSuccess] = useState("")
  const [passLoading, setPassLoading] = useState(false)

  // Data States
  const [products, setProducts] = useState<any[]>([])
  const [categories, setCategories] = useState<any[]>([])
  const [inquiries, setInquiries] = useState<any[]>([])
  const [mediaItems, setMediaItems] = useState<any[]>([])
  
  // UI Loading/Status States
  const [loading, setLoading] = useState(true)
  const [actionLoading, setActionLoading] = useState(false)
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null)
  
  // Quick Edit States
  const [editingProdId, setEditingProdId] = useState<number | null>(null)
  const [quickStock, setQuickStock] = useState<number>(0)
  const [quickPrice, setQuickPrice] = useState<number>(0)

  // Search & Filter States
  const [prodSearch, setProdSearch] = useState("")
  const [prodCatFilter, setProdCatFilter] = useState("all")

  // Modal States
  const [showProductModal, setShowProductModal] = useState(false)
  const [editingProduct, setEditingProduct] = useState<any | null>(null)
  const [productForm, setProductForm] = useState({
    name: "",
    price: "",
    comparePrice: "",
    categoryId: "",
    brandId: "1",
    fabric: "",
    stock: "100",
    gender: "men",
    collectionType: "casual",
    shortDescription: "",
    description: "",
    sizes: "S, M, L, XL",
    images: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&q=80"
  })

  const [showCategoryModal, setShowCategoryModal] = useState(false)
  const [editingCategory, setEditingCategory] = useState<any | null>(null)
  const [categoryForm, setCategoryForm] = useState({
    name: "",
    slug: "",
    description: "",
    priority: "0",
    gender: "men",
    image: ""
  })

  const [showMediaModal, setShowMediaModal] = useState(false)
  const [editingMedia, setEditingMedia] = useState<any | null>(null)
  const [mediaForm, setMediaForm] = useState({
    section: "banner",
    key: "",
    image: "",
    altText: "",
    sortOrder: "0",
    isActive: true
  })

  // Fetch Data on Load
  const loadData = async () => {
    setLoading(true)
    try {
      const [prodsRes, catsRes, inqsRes, mediaRes] = await Promise.all([
        fetch("/api/products"),
        fetch("/api/categories"),
        fetch("/api/enquiry"),
        fetch("/api/media")
      ])
      
      const prodsData = await prodsRes.json()
      const catsData = await catsRes.json()
      const inqsData = await inqsRes.json()
      const mediaData = await mediaRes.json()
      
      setProducts(prodsData.products || [])
      setCategories(catsData.categories || [])
      setInquiries(inqsData.inquiries || [])
      setMediaItems(mediaData.items || [])
    } catch (e) {
      showToast("Failed to load dashboard data.", "error")
    } finally {
      setLoading(false)
    }
  }

  // Check auth state on mount
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch("/api/admin/check")
        const data = await res.json()
        if (data.authenticated) {
          setAuthenticated(true)
          loadData()
        } else {
          setAuthenticated(false)
        }
      } catch {
        setAuthenticated(false)
      }
    }
    checkAuth()
  }, [])

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!loginPassword) return
    setLoginError("")
    setLoginLoading(true)
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: loginPassword })
      })
      const data = await res.json()
      if (res.ok && data.success) {
        setAuthenticated(true)
        setLoginPassword("")
        loadData()
      } else {
        setLoginError(data.error || "Incorrect password.")
      }
    } catch {
      setLoginError("Failed to authenticate. Try again.")
    } finally {
      setLoginLoading(false)
    }
  }

  const handleLogout = async () => {
    try {
      const res = await fetch("/api/admin/logout", { method: "POST" })
      if (res.ok) {
        setAuthenticated(false)
        showToast("Logged out successfully.")
      }
    } catch {
      showToast("Failed to logout.", "error")
    }
  }

  const handleUpdatePassword = async (e: React.FormEvent) => {
    e.preventDefault()
    setPassError("")
    setPassSuccess("")

    if (!currPassword || !newPassword || !confirmPassword) {
      setPassError("All fields are required.")
      return
    }

    if (newPassword !== confirmPassword) {
      setPassError("New password and confirm password do not match.")
      return
    }

    if (newPassword.length < 4) {
      setPassError("Password must be at least 4 characters long.")
      return
    }

    setPassLoading(true)
    try {
      const res = await fetch("/api/admin/update-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          currentPassword: currPassword,
          newPassword: newPassword
        })
      })

      const data = await res.json()
      if (res.ok) {
        setPassSuccess("Password changed successfully in environment configuration!")
        setCurrPassword("")
        setNewPassword("")
        setConfirmPassword("")
        showToast("Password updated successfully.")
      } else {
        setPassError(data.error || "Failed to update password.")
      }
    } catch {
      setPassError("Network error. Please try again.")
    } finally {
      setPassLoading(false)
    }
  }

  const showToast = (message: string, type: "success" | "error" = "success") => {
    setToast({ message, type })
    setTimeout(() => setToast(null), 3000)
  }

  // --- CRUD ACTIONS ---

  // Products
  const handleSaveProduct = async (e: React.FormEvent) => {
    e.preventDefault()
    setActionLoading(true)
    try {
      const payload = {
        ...productForm,
        categoryId: parseInt(productForm.categoryId),
        brandId: parseInt(productForm.brandId),
        price: parseInt(productForm.price),
        comparePrice: productForm.comparePrice ? parseInt(productForm.comparePrice) : null,
        stock: parseInt(productForm.stock),
        sizes: productForm.sizes.split(",").map(s => s.trim()),
        collectionType: productForm.collectionType.split(",").map(c => c.trim()),
        images: productForm.images.split(",").map(img => img.trim())
      }

      let res;
      if (editingProduct) {
        res = await fetch("/api/products", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id: editingProduct.id, ...payload })
        })
      } else {
        res = await fetch("/api/products", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload)
        })
      }

      if (res.ok) {
        showToast(editingProduct ? "Product updated!" : "Product created!")
        setShowProductModal(false)
        setEditingProduct(null)
        loadData()
      } else {
        const errorData = await res.json()
        showToast(errorData.error || "Failed to save product", "error")
      }
    } catch (e) {
      showToast("Error processing request", "error")
    } finally {
      setActionLoading(false)
    }
  }

  const handleDeleteProduct = async (id: number) => {
    if (!confirm("Are you sure you want to delete this product?")) return
    try {
      const res = await fetch(`/api/products?id=${id}`, { method: "DELETE" })
      if (res.ok) {
        showToast("Product deleted successfully.")
        loadData()
      } else {
        showToast("Failed to delete product.", "error")
      }
    } catch (e) {
      showToast("Error deleting product.", "error")
    }
  }

  const handleQuickUpdate = async (id: number) => {
    try {
      const res = await fetch("/api/products", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, stock: quickStock, price: quickPrice })
      })
      if (res.ok) {
        showToast("Product stock & price updated.")
        setEditingProdId(null)
        loadData()
      } else {
        showToast("Failed to quick update product.", "error")
      }
    } catch (e) {
      showToast("Error updating product.", "error")
    }
  }

  const toggleProductActive = async (id: number, currentActive: boolean) => {
    try {
      const res = await fetch("/api/products", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, isActive: !currentActive })
      })
      if (res.ok) {
        showToast(`Product set to ${!currentActive ? "Active" : "Inactive"}`)
        loadData()
      }
    } catch (e) {
      showToast("Error toggling product status.", "error")
    }
  }

  // Categories
  const handleSaveCategory = async (e: React.FormEvent) => {
    e.preventDefault()
    setActionLoading(true)
    try {
      const payload = {
        ...categoryForm,
        priority: parseInt(categoryForm.priority) || 0
      }

      let res;
      if (editingCategory) {
        res = await fetch("/api/categories", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id: editingCategory.id, ...payload })
        })
      } else {
        res = await fetch("/api/categories", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload)
        })
      }

      if (res.ok) {
        showToast(editingCategory ? "Category updated!" : "Category created!")
        setShowCategoryModal(false)
        setEditingCategory(null)
        loadData()
      } else {
        showToast("Failed to save category.", "error")
      }
    } catch (e) {
      showToast("Error saving category.", "error")
    } finally {
      setActionLoading(false)
    }
  }

  const handleDeleteCategory = async (id: number) => {
    if (!confirm("Are you sure you want to delete this category? All products under it will lose their category association.")) return
    try {
      const res = await fetch(`/api/categories?id=${id}`, { method: "DELETE" })
      if (res.ok) {
        showToast("Category deleted.")
        loadData()
      } else {
        showToast("Failed to delete category.", "error")
      }
    } catch (e) {
      showToast("Error deleting category.", "error")
    }
  }

  // Leads
  const handleDeleteInquiry = async (id: number) => {
    if (!confirm("Delete this lead submission?")) return
    try {
      const res = await fetch(`/api/enquiry?id=${id}`, { method: "DELETE" })
      if (res.ok) {
        showToast("Enquiry deleted.")
        loadData()
      }
    } catch (e) {
      showToast("Error deleting lead.", "error")
    }
  }

  // Media
  const handleSaveMedia = async (e: React.FormEvent) => {
    e.preventDefault()
    setActionLoading(true)
    try {
      const payload = {
        ...mediaForm,
        sortOrder: parseInt(mediaForm.sortOrder) || 0
      }
      
      let res;
      if (editingMedia) {
        res = await fetch("/api/media", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id: editingMedia.id, ...payload })
        })
      } else {
        res = await fetch("/api/media", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload)
        })
      }

      if (res.ok) {
        showToast(editingMedia ? "Media item updated!" : "Media item created!")
        setShowMediaModal(false)
        setEditingMedia(null)
        loadData()
      } else {
        const errorData = await res.json()
        showToast(errorData.error || "Failed to save media.", "error")
      }
    } catch (e) {
      showToast("Error saving media.", "error")
    } finally {
      setActionLoading(false)
    }
  }

  const handleDeleteMedia = async (id: number) => {
    if (!confirm("Are you sure you want to delete this media item?")) return
    try {
      const res = await fetch(`/api/media?id=${id}`, { method: "DELETE" })
      if (res.ok) {
        showToast("Media item deleted.")
        loadData()
      }
    } catch (e) {
      showToast("Error deleting media.", "error")
    }
  }

  const toggleMediaActive = async (media: any) => {
    try {
      const res = await fetch("/api/media", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: media.id, isActive: !media.isActive })
      })
      if (res.ok) {
        showToast(`Media item status changed.`)
        loadData()
      }
    } catch (e) {
      showToast("Error updating media status.", "error")
    }
  }

  // Helpers
  const formatRupees = (amount: number) => {
    return new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(amount)
  }

  const getLowStockCount = () => {
    return products.filter(p => p.stock < 15).length
  }

  // Filtered Products
  const filteredProducts = products.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(prodSearch.toLowerCase()) || 
                          p.category.toLowerCase().includes(prodSearch.toLowerCase()) ||
                          p.fabric.toLowerCase().includes(prodSearch.toLowerCase())
    
    const matchesCat = prodCatFilter === "all" || p.categoryId.toString() === prodCatFilter
    return matchesSearch && matchesCat
  })

  if (authenticated === null) {
    return (
      <div className="min-h-screen bg-[#F8F9FB] flex flex-col items-center justify-center text-slate-500 gap-3">
        <LoaderIcon />
        <p className="text-sm font-semibold">Checking administrator session...</p>
      </div>
    )
  }

  if (authenticated === false) {
    return (
      <div className="min-h-screen bg-[#070F23] flex items-center justify-center p-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C8A951]/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#0B1D3A]/50 rounded-full blur-[140px] pointer-events-none" />
        <div className="bg-white rounded-[28px] max-w-md w-full p-8 lg:p-10 border border-slate-100 shadow-premium relative overflow-hidden text-center animate-in fade-in zoom-in-95 duration-300 z-10">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-[#C8A951] to-[#E9D09A] flex items-center justify-center text-[#0B1D3A] font-bold text-2xl shadow-gold mb-6">
            AR
          </div>
          <h2 className="text-2xl font-bold text-[#0B1D3A] tracking-tight">Ajay Readymade Store</h2>
          <p className="text-xs font-semibold text-[#C8A951] tracking-wider uppercase mt-1">Management Portal</p>
          <p className="text-slate-500 text-sm mt-3">Please enter the administrator credentials to manage stock, categories, leads, and banners.</p>
          <form onSubmit={handleLogin} className="mt-8 space-y-4 text-left">
            {loginError && (
              <div className="p-3.5 text-xs text-red-700 bg-red-50 border border-red-100 rounded-2xl flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 flex-shrink-0" />
                <span>{loginError}</span>
              </div>
            )}
            <div className="space-y-1.5">
              <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wide">Admin Access Password</label>
              <div className="relative">
                <input 
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter administrator password" 
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  required
                  className="w-full h-12 pl-4 pr-11 rounded-full border bg-slate-50 border-slate-200 outline-none focus:border-[#0B1D3A] focus:bg-white text-sm text-[#0B1D3A] transition font-medium" 
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-3.5 text-slate-400 hover:text-[#0B1D3A] cursor-pointer"
                >
                  {showPassword ? <X className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>
            <button 
              type="submit" 
              disabled={loginLoading}
              className="w-full h-12 rounded-full bg-[#0B1D3A] text-white font-semibold flex items-center justify-center gap-2 hover:bg-[#122954] transition shadow-soft disabled:opacity-75 cursor-pointer"
            >
              {loginLoading ? "Authenticating..." : "Login to Workspace"}
            </button>
          </form>
          <p className="text-[10px] text-slate-400 mt-8">Secure system session • Powered by Drizzle & Supabase</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#F8F9FB] flex">
      {/* Toast Alert */}
      {toast && (
        <div className={`fixed top-5 right-5 z-[100] flex items-center gap-3 px-5 py-4 rounded-[16px] shadow-premium transition duration-500 border ${
          toast.type === "success" ? "bg-green-50 border-green-200 text-green-800" : "bg-red-50 border-red-200 text-red-800"
        }`}>
          <CheckCircle2 className="w-5 h-5" />
          <span className="text-sm font-semibold">{toast.message}</span>
        </div>
      )}

      {/* Sidebar - Matching Silk Spells Admin visual style with Navy & Gold theme */}
      <aside className="w-[260px] bg-[#0B1D3A] text-white flex-shrink-0 flex flex-col justify-between border-r border-slate-800">
        <div>
          {/* Brand Header */}
          <div className="p-6 border-b border-slate-800/60 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#C8A951] to-[#E9D09A] flex items-center justify-center text-[#0B1D3A] font-bold text-lg shadow-gold">
              AR
            </div>
            <div>
              <h2 className="font-bold text-[15px] tracking-tight leading-tight text-white">Ajay Readymade</h2>
              <span className="text-[10px] font-bold tracking-wider text-[#C8A951] uppercase">Store Admin</span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="p-4 space-y-1.5">
            {[
              { id: "dashboard", label: "Dashboard", Icon: Home },
              { id: "products", label: "Products", Icon: Package },
              { id: "categories", label: "Categories", Icon: Folder },
              { id: "contacts", label: "Contacts (Leads)", Icon: Mail },
              { id: "media", label: "Media Manager", Icon: ImageIcon },
              { id: "profile", label: "Profile & Security", Icon: User },
            ].map(item => {
              const IconComp = item.Icon
              const isActive = activeTab === item.id
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id as any)}
                  className={`w-full flex items-center gap-3.5 px-4 h-12 rounded-[14px] text-[13.5px] font-semibold transition ${
                    isActive 
                      ? "bg-[#C8A951] text-[#0B1D3A] shadow-gold-sm" 
                      : "text-white/60 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <IconComp className="w-[18px] h-[18px] flex-shrink-0" />
                  <span>{item.label}</span>
                  {item.id === "contacts" && inquiries.length > 0 && (
                    <span className={`ml-auto text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      isActive ? "bg-[#0B1D3A] text-white" : "bg-[#C8A951] text-[#0B1D3A]"
                    }`}>
                      {inquiries.length}
                    </span>
                  )}
                  {item.id === "products" && getLowStockCount() > 0 && (
                    <span className="ml-auto text-[10px] font-bold bg-red-500 text-white px-2 py-0.5 rounded-full">
                      {getLowStockCount()}!
                    </span>
                  )}
                </button>
              )
            })}
          </nav>
        </div>

        {/* Sidebar Footer */}
        <div className="p-4 border-t border-slate-800/60 space-y-2">
          <div className="flex items-center gap-3 p-3 rounded-[16px] bg-white/5 border border-white/5">
            <div className="w-9 h-9 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold text-white uppercase">
              AK
            </div>
            <div>
              <p className="text-xs font-bold text-white leading-tight">Ajay Kumar</p>
              <p className="text-[10px] text-white/50">Store Director</p>
            </div>
          </div>
          <button 
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 h-10 rounded-[12px] text-xs font-bold text-red-400 hover:text-red-300 hover:bg-red-500/10 transition cursor-pointer"
          >
            <Power className="w-4 h-4 animate-pulse" />
            <span>Log Out</span>
          </button>
        </div>
      </aside>

      {/* Main Canvas */}
      <main className="flex-1 flex flex-col min-w-0">
        {/* Header bar */}
        <header className="h-[76px] bg-white border-b border-slate-100 px-8 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold text-[#0B1D3A] capitalize">
              {activeTab === "contacts" ? "Contact submissions" : activeTab === "media" ? "Media Management" : activeTab}
            </h1>
            {loading && <RefreshCw className="w-4 h-4 text-slate-400 animate-spin ml-2" />}
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={loadData}
              className="p-2 h-10 rounded-full border border-slate-200 text-slate-500 hover:bg-slate-50 transition"
              title="Refresh Data"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
            <div className="h-4 w-px bg-slate-200" />
            <div className="text-right">
              <span className="text-xs font-bold text-green-600 px-2.5 py-1 rounded-full bg-green-50 border border-green-100 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" /> Live Server
              </span>
            </div>
          </div>
        </header>

        {/* Content Body */}
        <div className="flex-1 p-8 overflow-y-auto">
          {loading ? (
            <div className="h-[400px] flex flex-col items-center justify-center text-slate-500 gap-3">
              <LoaderIcon />
              <p className="text-sm font-semibold">Syncing database and loading dashboard...</p>
            </div>
          ) : (
            <>
              {/* --- 1. DASHBOARD VIEW --- */}
              {activeTab === "dashboard" && (
                <div className="space-y-8">
                  {/* Dashboard Metrics Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                      { label: "Total Products", value: products.length, icon: Package, color: "text-[#0B1D3A] bg-blue-50 border-blue-100" },
                      { label: "Total Categories", value: categories.length, icon: Folder, color: "text-amber-800 bg-amber-50 border-amber-100" },
                      { label: "Contact Enquiries", value: inquiries.length, icon: Mail, color: "text-purple-800 bg-purple-50 border-purple-100" },
                      { label: "Low Stock Items", value: getLowStockCount(), icon: AlertTriangle, color: getLowStockCount() > 0 ? "text-red-800 bg-red-50 border-red-100 animate-pulse" : "text-green-800 bg-green-50 border-green-100" },
                    ].map(card => {
                      const Icon = card.icon
                      return (
                        <div key={card.label} className={`p-6 rounded-[24px] border bg-white shadow-soft flex items-center justify-between`}>
                          <div>
                            <p className="text-xs font-bold uppercase tracking-wider text-slate-400">{card.label}</p>
                            <p className="text-[32px] font-bold text-[#0B1D3A] mt-2 tracking-tight">{card.value}</p>
                          </div>
                          <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${card.color}`}>
                            <Icon className="w-[22px] h-[22px]" />
                          </div>
                        </div>
                      )
                    })}
                  </div>

                  {/* Two-Column Detail View */}
                  <div className="grid lg:grid-cols-12 gap-8">
                    {/* Recent Leads */}
                    <div className="lg:col-span-7 bg-white rounded-[28px] border border-slate-100 shadow-soft p-6">
                      <div className="flex items-center justify-between mb-5">
                        <h3 className="font-bold text-[#0B1D3A] text-lg">Recent Customer Leads (WhatsApp/Inquiry)</h3>
                        <button onClick={() => setActiveTab("contacts")} className="text-xs font-bold text-[#C8A951] hover:underline flex items-center gap-1">
                          View All Leads <ExternalLink className="w-3 h-3" />
                        </button>
                      </div>
                      
                      {inquiries.length === 0 ? (
                        <div className="py-12 text-center text-slate-400 text-sm">
                          No recent enquiries received.
                        </div>
                      ) : (
                        <div className="space-y-3">
                          {inquiries.slice(0, 5).map(inq => (
                            <div key={inq.id} className="p-4 rounded-[20px] bg-[#F8F9FB] border border-slate-100 flex items-center justify-between">
                              <div className="min-w-0 flex-1 pr-4">
                                <div className="flex items-center gap-2">
                                  <p className="font-bold text-[#0B1D3A] text-sm truncate">{inq.name}</p>
                                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-200 text-slate-600">{inq.productInterest}</span>
                                </div>
                                <p className="text-xs text-slate-500 mt-1 italic line-clamp-1">"{inq.message || 'No message provided.'}"</p>
                              </div>
                              <div className="flex items-center gap-2 flex-shrink-0">
                                <a 
                                  href={`https://wa.me/${inq.phone.replace(/[^0-9]/g, "")}`} 
                                  target="_blank" 
                                  rel="noopener noreferrer" 
                                  className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center hover:bg-green-600 transition"
                                  title="Chat on WhatsApp"
                                >
                                  <WhatsappIcon className="w-4 h-4" />
                                </a>
                                <span className="text-[10px] text-slate-400 font-semibold">{new Date(inq.createdAt).toLocaleDateString("en-IN")}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Low Stock Alerts */}
                    <div className="lg:col-span-5 bg-white rounded-[28px] border border-slate-100 shadow-soft p-6">
                      <div className="flex items-center justify-between mb-5">
                        <h3 className="font-bold text-[#0B1D3A] text-lg">Low Stock Alerts</h3>
                        <button onClick={() => setActiveTab("products")} className="text-xs font-bold text-[#C8A951] hover:underline flex items-center gap-1">
                          Manage Stock <ExternalLink className="w-3 h-3" />
                        </button>
                      </div>

                      {products.filter(p => p.stock < 15).length === 0 ? (
                        <div className="py-12 text-center text-slate-400 text-sm">
                          ✅ All products are well stocked.
                        </div>
                      ) : (
                        <div className="space-y-3">
                          {products.filter(p => p.stock < 15).slice(0, 5).map(prod => (
                            <div key={prod.id} className="p-3.5 rounded-[20px] bg-red-50/50 border border-red-100 flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <img src={prod.images[0]} className="w-10 h-10 rounded-lg object-cover bg-slate-100 border" />
                                <div>
                                  <p className="font-bold text-[#0B1D3A] text-xs max-w-[200px] truncate">{prod.name}</p>
                                  <p className="text-[10px] text-slate-500 mt-0.5">{prod.category} • {prod.gender.toUpperCase()}</p>
                                </div>
                              </div>
                              <div className="text-right">
                                <span className="px-2.5 py-1 rounded-full bg-red-100 text-red-800 text-[11px] font-bold">
                                  {prod.stock} Left
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* --- 2. PRODUCTS VIEW --- */}
              {activeTab === "products" && (
                <div className="space-y-6">
                  {/* Controls Header */}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-5 rounded-[24px] border border-slate-100 shadow-soft">
                    <div className="flex items-center gap-3 w-full sm:w-auto">
                      <div className="relative flex-1 sm:w-72">
                        <Search className="absolute left-3.5 top-3.5 w-4.5 h-4.5 text-slate-400" />
                        <input 
                          placeholder="Search product name, category..." 
                          value={prodSearch}
                          onChange={(e) => setProdSearch(e.target.value)}
                          className="w-full h-11 pl-11 pr-4 rounded-full border border-slate-200 outline-none text-sm focus:border-[#0B1D3A] text-[#0B1D3A]"
                        />
                      </div>
                      
                      <select 
                        value={prodCatFilter} 
                        onChange={(e) => setProdCatFilter(e.target.value)}
                        className="h-11 px-4 rounded-full border border-slate-200 outline-none text-sm text-slate-600 bg-white cursor-pointer"
                      >
                        <option value="all">All Categories</option>
                        {categories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                      </select>
                    </div>

                    <button 
                      onClick={() => {
                        setEditingProduct(null)
                        setProductForm({
                          name: "", price: "", comparePrice: "", categoryId: categories[0]?.id?.toString() || "1",
                          brandId: "1", fabric: "", stock: "100", gender: "men", collectionType: "casual",
                          shortDescription: "", description: "", sizes: "S, M, L, XL",
                          images: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&q=80"
                        })
                        setShowProductModal(true)
                      }}
                      className="h-11 px-6 rounded-full bg-[#0B1D3A] text-white text-sm font-semibold flex items-center gap-2 hover:bg-[#122954] transition shadow-soft w-full sm:w-auto justify-center"
                    >
                      <Plus className="w-4 h-4" /> Add Product
                    </button>
                  </div>

                  {/* Products Table */}
                  <div className="bg-white rounded-[28px] border border-slate-100 shadow-soft overflow-hidden">
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="bg-slate-50/70 border-b border-slate-100 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                            <th className="py-4.5 px-6">Product</th>
                            <th className="py-4.5 px-6">Category</th>
                            <th className="py-4.5 px-6">Fabric</th>
                            <th className="py-4.5 px-6 w-32">Price (₹)</th>
                            <th className="py-4.5 px-6 w-32">Stock</th>
                            <th className="py-4.5 px-6">Status</th>
                            <th className="py-4.5 px-6 text-right">Actions</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 text-[13.5px]">
                          {filteredProducts.map(prod => {
                            const isEditing = editingProdId === prod.id
                            return (
                              <tr key={prod.id} className="hover:bg-slate-50/50 transition">
                                <td className="py-4 px-6">
                                  <div className="flex items-center gap-4">
                                    <img src={prod.images[0]} className="w-12 h-15 rounded-lg object-cover bg-slate-50 border" />
                                    <div>
                                      <p className="font-bold text-[#0B1D3A] leading-snug line-clamp-2 max-w-[240px]">{prod.name}</p>
                                      <span className={`text-[10px] font-bold tracking-wide px-2 py-0.5 rounded-full uppercase mt-1 inline-block ${
                                        prod.gender === "men" ? "bg-[#0B1D3A]/10 text-[#0B1D3A]" : prod.gender === "kids" ? "bg-amber-100 text-amber-800" : "bg-pink-100 text-pink-800"
                                      }`}>
                                        {prod.gender}
                                      </span>
                                    </div>
                                  </div>
                                </td>
                                <td className="py-4 px-6 text-slate-600 font-semibold">
                                  {prod.category}
                                </td>
                                <td className="py-4 px-6 text-slate-500 font-medium">{prod.fabric}</td>
                                
                                <td className="py-4 px-6">
                                  {isEditing ? (
                                    <input 
                                      type="number"
                                      value={quickPrice}
                                      onChange={(e) => setQuickPrice(parseInt(e.target.value) || 0)}
                                      className="w-20 h-9 px-2 rounded-lg border outline-none font-bold"
                                    />
                                  ) : (
                                    <div>
                                      <span className="font-bold text-[#0B1D3A]">{formatRupees(prod.price)}</span>
                                      {prod.comparePrice && <span className="block text-[11px] line-through text-slate-400">{formatRupees(prod.comparePrice)}</span>}
                                    </div>
                                  )}
                                </td>
                                
                                <td className="py-4 px-6">
                                  {isEditing ? (
                                    <input 
                                      type="number"
                                      value={quickStock}
                                      onChange={(e) => setQuickStock(parseInt(e.target.value) || 0)}
                                      className="w-16 h-9 px-2 rounded-lg border outline-none font-semibold"
                                    />
                                  ) : (
                                    <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                                      prod.stock < 15 ? "bg-red-50 text-red-700" : "bg-slate-100 text-slate-700"
                                    }`}>
                                      {prod.stock} Units
                                    </span>
                                  )}
                                </td>
                                
                                <td className="py-4 px-6">
                                  <button 
                                    onClick={() => toggleProductActive(prod.id, prod.isActive)}
                                    className={`px-3 py-1 rounded-full text-[11px] font-bold border transition ${
                                      prod.isActive 
                                        ? "bg-green-50 border-green-200 text-green-700 hover:bg-green-100" 
                                        : "bg-slate-100 border-slate-200 text-slate-400 hover:bg-slate-200"
                                    }`}
                                  >
                                    {prod.isActive ? "Active" : "Inactive"}
                                  </button>
                                </td>
                                
                                <td className="py-4 px-6 text-right">
                                  <div className="flex items-center justify-end gap-1.5">
                                    {isEditing ? (
                                      <>
                                        <button 
                                          onClick={() => handleQuickUpdate(prod.id)}
                                          className="p-2 bg-green-500 text-white rounded-full hover:bg-green-600"
                                          title="Save Stock & Price"
                                        >
                                          <Save className="w-3.5 h-3.5" />
                                        </button>
                                        <button 
                                          onClick={() => setEditingProdId(null)}
                                          className="p-2 bg-slate-100 text-slate-500 rounded-full hover:bg-slate-200"
                                          title="Cancel"
                                        >
                                          <X className="w-3.5 h-3.5" />
                                        </button>
                                      </>
                                    ) : (
                                      <>
                                        <button 
                                          onClick={() => {
                                            setEditingProdId(prod.id)
                                            setQuickStock(prod.stock)
                                            setQuickPrice(prod.price)
                                          }}
                                          className="p-2 border border-slate-200 rounded-full text-slate-500 hover:bg-slate-50"
                                          title="Quick Edit Stock/Price"
                                        >
                                          <RefreshCw className="w-3.5 h-3.5" />
                                        </button>
                                        <button 
                                          onClick={() => {
                                            setEditingProduct(prod)
                                            setProductForm({
                                              name: prod.name,
                                              price: prod.price.toString(),
                                              comparePrice: prod.comparePrice ? prod.comparePrice.toString() : "",
                                              categoryId: prod.categoryId.toString(),
                                              brandId: prod.brandId.toString(),
                                              fabric: prod.fabric,
                                              stock: prod.stock.toString(),
                                              gender: prod.gender,
                                              collectionType: prod.collectionType ? prod.collectionType.join(", ") : "casual",
                                              shortDescription: prod.shortDescription || "",
                                              description: prod.description || "",
                                              sizes: prod.sizes ? prod.sizes.join(", ") : "S, M, L, XL",
                                              images: prod.images ? prod.images.join(", ") : ""
                                            })
                                            setShowProductModal(true)
                                          }}
                                          className="p-2 border border-slate-200 rounded-full text-slate-500 hover:bg-slate-50"
                                          title="Edit All Details"
                                        >
                                          <Edit2 className="w-3.5 h-3.5" />
                                        </button>
                                        <button 
                                          onClick={() => handleDeleteProduct(prod.id)}
                                          className="p-2 border border-red-100 rounded-full text-red-500 hover:bg-red-50"
                                          title="Delete Product"
                                        >
                                          <Trash2 className="w-3.5 h-3.5" />
                                        </button>
                                      </>
                                    )}
                                  </div>
                                </td>
                              </tr>
                            )
                          })}
                          
                          {filteredProducts.length === 0 && (
                            <tr>
                              <td colSpan={7} className="py-12 text-center text-slate-400 font-semibold">
                                No products found matching your filters.
                              </td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {/* --- 3. CATEGORIES VIEW --- */}
              {activeTab === "categories" && (
                <div className="space-y-6">
                  {/* Category Action Bar */}
                  <div className="flex justify-end bg-white p-5 rounded-[24px] border border-slate-100 shadow-soft">
                    <button 
                      onClick={() => {
                        setEditingCategory(null)
                        setCategoryForm({ name: "", slug: "", description: "", priority: "0", gender: "men", image: "" })
                        setShowCategoryModal(true)
                      }}
                      className="h-11 px-6 rounded-full bg-[#0B1D3A] text-white text-sm font-semibold flex items-center gap-2 hover:bg-[#122954] transition shadow-soft"
                    >
                      <Plus className="w-4 h-4" /> Add Category
                    </button>
                  </div>

                  {/* Categories Table */}
                  <div className="bg-white rounded-[28px] border border-slate-100 shadow-soft overflow-hidden">
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="bg-slate-50/70 border-b border-slate-100 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                            <th className="py-4.5 px-6">Category Detail</th>
                            <th className="py-4.5 px-6">SEO Slug</th>
                            <th className="py-4.5 px-6">SEO Description</th>
                            <th className="py-4.5 px-6">Gender target</th>
                            <th className="py-4.5 px-6">SEO Priority</th>
                            <th className="py-4.5 px-6 text-right">Actions</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 text-[13.5px]">
                          {categories.map(cat => (
                            <tr key={cat.id} className="hover:bg-slate-50/50 transition">
                              <td className="py-4.5 px-6">
                                <div className="flex items-center gap-4">
                                  <img src={cat.image || "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=800&q=80"} className="w-12 h-12 rounded-xl object-cover bg-slate-50 border shadow-soft" />
                                  <span className="font-bold text-[#0B1D3A]">{cat.name}</span>
                                </div>
                              </td>
                              <td className="py-4.5 px-6 font-mono text-xs text-slate-600 bg-slate-50/40">{cat.slug}</td>
                              <td className="py-4.5 px-6 text-slate-500 max-w-[280px] truncate" title={cat.description}>{cat.description || '-'}</td>
                              <td className="py-4.5 px-6 capitalize font-semibold text-slate-600">{cat.gender}</td>
                              <td className="py-4.5 px-6 font-bold text-[#0B1D3A]">{cat.priority}</td>
                              <td className="py-4.5 px-6 text-right">
                                <div className="flex items-center justify-end gap-1.5">
                                  <button 
                                    onClick={() => {
                                      setEditingCategory(cat)
                                      setCategoryForm({
                                        name: cat.name,
                                        slug: cat.slug,
                                        description: cat.description || "",
                                        priority: cat.priority.toString(),
                                        gender: cat.gender,
                                        image: cat.image || ""
                                      })
                                      setShowCategoryModal(true)
                                    }}
                                    className="p-2 border border-slate-200 rounded-full text-slate-500 hover:bg-slate-50"
                                    title="Edit SEO Category Details"
                                  >
                                    <Edit2 className="w-3.5 h-3.5" />
                                  </button>
                                  <button 
                                    onClick={() => handleDeleteCategory(cat.id)}
                                    className="p-2 border border-red-100 rounded-full text-red-500 hover:bg-red-50"
                                    title="Delete Category"
                                  >
                                    <Trash2 className="w-3.5 h-3.5" />
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {/* --- 4. CONTACTS (LEADS) VIEW --- */}
              {activeTab === "contacts" && (
                <div className="space-y-6">
                  {/* Leads Table */}
                  <div className="bg-white rounded-[28px] border border-slate-100 shadow-soft overflow-hidden">
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="bg-slate-50/70 border-b border-slate-100 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                            <th className="py-4.5 px-6">Name</th>
                            <th className="py-4.5 px-6">Phone / Contact</th>
                            <th className="py-4.5 px-6">Interest</th>
                            <th className="py-4.5 px-6">Message / Detail</th>
                            <th className="py-4.5 px-6">Submission Date</th>
                            <th className="py-4.5 px-6 text-right">Actions</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 text-[13.5px]">
                          {inquiries.map(inq => (
                            <tr key={inq.id} className="hover:bg-slate-50/50 transition">
                              <td className="py-4.5 px-6 font-bold text-[#0B1D3A]">{inq.name}</td>
                              <td className="py-4.5 px-6">
                                <div className="flex items-center gap-2">
                                  <span className="font-semibold text-slate-600">{inq.phone}</span>
                                  {inq.email && <span className="block text-[10px] text-slate-400">{inq.email}</span>}
                                </div>
                              </td>
                              <td className="py-4.5 px-6">
                                <span className="px-2.5 py-0.5 text-[11px] font-bold rounded-full bg-[#0B1D3A]/10 text-[#0B1D3A]">
                                  {inq.productInterest}
                                </span>
                              </td>
                              <td className="py-4.5 px-6 text-slate-600 italic">"{inq.message || '-'}"</td>
                              <td className="py-4.5 px-6 text-slate-500 font-semibold">
                                {new Date(inq.createdAt).toLocaleString("en-IN", { dateStyle: "medium", timeStyle: "short" })}
                              </td>
                              <td className="py-4.5 px-6 text-right">
                                <div className="flex items-center justify-end gap-1.5">
                                  <a 
                                    href={`https://wa.me/${inq.phone.replace(/[^0-9]/g, "")}?text=Hi%20${encodeURIComponent(inq.name)}%2C%20thank%20you%20for%20contacting%20Ajay%20Readymade%20Store%20about%20${encodeURIComponent(inq.productInterest)}.%20How%20can%20we%20help%20you%3F`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 bg-green-500 text-white rounded-full hover:bg-green-600 flex items-center justify-center transition"
                                    title="Contact on WhatsApp"
                                  >
                                    <WhatsappIcon className="w-3.5 h-3.5" />
                                  </a>
                                  <button 
                                    onClick={() => handleDeleteInquiry(inq.id)}
                                    className="p-2 border border-red-100 rounded-full text-red-500 hover:bg-red-50"
                                    title="Remove Lead"
                                  >
                                    <Trash2 className="w-3.5 h-3.5" />
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))}
                          
                          {inquiries.length === 0 && (
                            <tr>
                              <td colSpan={6} className="py-12 text-center text-slate-400 font-semibold">
                                No contact submissions found.
                              </td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {/* --- 5. MEDIA MANAGER VIEW (MATCHING THE SCREENSHOT EXACTLY) --- */}
              {activeTab === "media" && (
                <div className="space-y-8">
                  {/* Media Manager Header bar */}
                  <div className="flex items-center justify-between bg-white p-5 rounded-[24px] border border-slate-100 shadow-soft">
                    <div>
                      <h2 className="text-xl font-bold text-[#0B1D3A] font-serif">Media Management</h2>
                      <p className="text-xs text-slate-500 mt-1">Manage frontend images and banners</p>
                    </div>
                    <button 
                      onClick={() => {
                        setEditingMedia(null)
                        setMediaForm({ section: "about", key: "", image: "", altText: "", sortOrder: "1", isActive: true })
                        setShowMediaModal(true)
                      }}
                      className="h-11 px-6 rounded-[10px] bg-slate-50 border border-slate-200 text-slate-700 text-xs font-bold tracking-wider uppercase flex items-center gap-2 hover:bg-slate-100 hover:text-black transition"
                    >
                      <Plus className="w-4 h-4" /> UPLOAD MEDIA
                    </button>
                  </div>

                  {/* Section 1: About */}
                  <div className="bg-white rounded-[24px] border border-slate-100 shadow-soft p-6 space-y-4">
                    <h3 className="font-serif font-bold text-lg text-[#0B1D3A] border-b pb-2">About</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="border-b text-[10.5px] font-bold text-slate-400 uppercase tracking-widest">
                            <th className="py-3 px-4 w-32">IMAGE</th>
                            <th className="py-3 px-4">KEY</th>
                            <th className="py-3 px-4">ALT TEXT</th>
                            <th className="py-3 px-4">SORT ORDER</th>
                            <th className="py-3 px-4">STATUS</th>
                            <th className="py-3 px-4 text-right">ACTIONS</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y text-slate-700 text-[13px]">
                          {mediaItems.filter(m => m.section === "about").map(media => (
                            <tr key={media.id} className="hover:bg-slate-50/50 transition">
                              <td className="py-4 px-4">
                                <img src={media.image} className="w-16 h-10 object-cover bg-slate-100 border rounded" />
                              </td>
                              <td className="py-4 px-4 font-mono font-bold text-slate-600 text-xs">{media.key}</td>
                              <td className="py-4 px-4 text-slate-500">{media.altText || '-'}</td>
                              <td className="py-4 px-4 font-semibold text-slate-500">D: #{media.sortOrder}</td>
                              <td className="py-4 px-4">
                                <button 
                                  onClick={() => toggleMediaActive(media)}
                                  className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase transition ${
                                    media.isActive ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                                  }`}
                                >
                                  {media.isActive ? "Active" : "Inactive"}
                                </button>
                              </td>
                              <td className="py-4 px-4 text-right">
                                <div className="flex items-center justify-end gap-1.5">
                                  <button 
                                    onClick={() => {
                                      setEditingMedia(media)
                                      setMediaForm({
                                        section: media.section,
                                        key: media.key,
                                        image: media.image,
                                        altText: media.altText || "",
                                        sortOrder: media.sortOrder.toString(),
                                        isActive: media.isActive
                                      })
                                      setShowMediaModal(true)
                                    }}
                                    className="p-1.5 border rounded hover:bg-slate-50 text-slate-500 hover:text-black"
                                  >
                                    <Edit2 className="w-3.5 h-3.5" />
                                  </button>
                                  <button 
                                    onClick={() => handleDeleteMedia(media.id)}
                                    className="p-1.5 border rounded hover:bg-red-50 text-red-500 hover:text-red-700"
                                  >
                                    <Trash2 className="w-3.5 h-3.5" />
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Section 2: Banner */}
                  <div className="bg-white rounded-[24px] border border-slate-100 shadow-soft p-6 space-y-4">
                    <h3 className="font-serif font-bold text-lg text-[#0B1D3A] border-b pb-2">Banner</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="border-b text-[10.5px] font-bold text-slate-400 uppercase tracking-widest">
                            <th className="py-3 px-4 w-32">IMAGE</th>
                            <th className="py-3 px-4">KEY</th>
                            <th className="py-3 px-4">ALT TEXT</th>
                            <th className="py-3 px-4">SORT ORDER</th>
                            <th className="py-3 px-4">STATUS</th>
                            <th className="py-3 px-4 text-right">ACTIONS</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y text-slate-700 text-[13px]">
                          {mediaItems.filter(m => m.section === "banner").map(media => (
                            <tr key={media.id} className="hover:bg-slate-50/50 transition">
                              <td className="py-4 px-4">
                                <img src={media.image} className="w-16 h-10 object-cover bg-slate-100 border rounded" />
                              </td>
                              <td className="py-4 px-4 font-mono font-bold text-slate-600 text-xs">{media.key}</td>
                              <td className="py-4 px-4 text-slate-500">{media.altText || '-'}</td>
                              <td className="py-4 px-4 font-semibold text-slate-500">
                                D: #{media.sortOrder} / M: #{media.sortOrder}
                              </td>
                              <td className="py-4 px-4">
                                <button 
                                  onClick={() => toggleMediaActive(media)}
                                  className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase transition ${
                                    media.isActive ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                                  }`}
                                >
                                  {media.isActive ? "Active" : "Inactive"}
                                </button>
                              </td>
                              <td className="py-4 px-4 text-right">
                                <div className="flex items-center justify-end gap-1.5">
                                  <button 
                                    onClick={() => {
                                      setEditingMedia(media)
                                      setMediaForm({
                                        section: media.section,
                                        key: media.key,
                                        image: media.image,
                                        altText: media.altText || "",
                                        sortOrder: media.sortOrder.toString(),
                                        isActive: media.isActive
                                      })
                                      setShowMediaModal(true)
                                    }}
                                    className="p-1.5 border rounded hover:bg-slate-50 text-slate-500 hover:text-black"
                                  >
                                    <Edit2 className="w-3.5 h-3.5" />
                                  </button>
                                  <button 
                                    onClick={() => handleDeleteMedia(media.id)}
                                    className="p-1.5 border rounded hover:bg-red-50 text-red-500 hover:text-red-700"
                                  >
                                    <Trash2 className="w-3.5 h-3.5" />
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {/* --- 6. PROFILE / SECURITY VIEW --- */}
              {activeTab === "profile" && (
                <div className="max-w-xl mx-auto space-y-6">
                  {/* Profile info card */}
                  <div className="bg-white rounded-[28px] border border-slate-100 shadow-soft p-8 text-center relative overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#0B1D3A] via-[#C8A951] to-[#0B1D3A]" />
                    <div className="w-20 h-20 mx-auto rounded-full bg-slate-100 flex items-center justify-center border text-[#0B1D3A] font-bold text-2xl uppercase mt-4">
                      AK
                    </div>
                    <h3 className="text-xl font-bold text-[#0B1D3A] mt-4">Ajay Kumar</h3>
                    <p className="text-xs font-bold text-[#C8A951] uppercase tracking-wide">Store Director & Admin</p>
                    <p className="text-slate-500 text-xs mt-2">Manage settings, variables, and security parameters of Ajay Readymade Store family fashion web portal.</p>
                  </div>

                  {/* Password Manager Form */}
                  <div className="bg-white rounded-[28px] border border-slate-100 shadow-soft p-8">
                    <div className="flex items-center gap-3 border-b pb-4 mb-6">
                      <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#C8A951] flex items-center justify-center border border-amber-100">
                        <Lock className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-[#0B1D3A] text-[16px]">Admin Password Manager</h4>
                        <p className="text-xs text-slate-500">Change password credentials stored in the backend config</p>
                      </div>
                    </div>

                    <form onSubmit={handleUpdatePassword} className="space-y-4 text-sm">
                      {passError && (
                        <div className="p-3.5 text-xs text-red-700 bg-red-50 border border-red-100 rounded-2xl animate-pulse">
                          {passError}
                        </div>
                      )}
                      {passSuccess && (
                        <div className="p-3.5 text-xs text-green-700 bg-green-50 border border-green-100 rounded-2xl">
                          {passSuccess}
                        </div>
                      )}

                      <div className="space-y-1.5">
                        <label className="block text-xs font-bold text-slate-400 uppercase">Current Access Password</label>
                        <input 
                          type="password"
                          required
                          value={currPassword}
                          onChange={(e) => setCurrPassword(e.target.value)}
                          placeholder="••••••••"
                          className="w-full h-11 border rounded-xl px-4 outline-none text-[#0B1D3A] focus:border-[#0B1D3A] focus:ring-1 focus:ring-[#0B1D3A] transition"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="block text-xs font-bold text-slate-400 uppercase">New Password</label>
                        <input 
                          type="password"
                          required
                          value={newPassword}
                          onChange={(e) => setNewPassword(e.target.value)}
                          placeholder="Minimum 4 characters"
                          className="w-full h-11 border rounded-xl px-4 outline-none text-[#0B1D3A] focus:border-[#0B1D3A] focus:ring-1 focus:ring-[#0B1D3A] transition"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="block text-xs font-bold text-slate-400 uppercase">Confirm New Password</label>
                        <input 
                          type="password"
                          required
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          placeholder="Confirm new password"
                          className="w-full h-11 border rounded-xl px-4 outline-none text-[#0B1D3A] focus:border-[#0B1D3A] focus:ring-1 focus:ring-[#0B1D3A] transition"
                        />
                      </div>

                      <button 
                        type="submit"
                        disabled={passLoading}
                        className="w-full h-12 rounded-full bg-[#0B1D3A] text-white font-semibold flex items-center justify-center gap-2 hover:bg-[#122954] transition shadow-soft disabled:opacity-75 cursor-pointer mt-6"
                      >
                        {passLoading ? "Updating Config..." : "Change Password"}
                      </button>
                    </form>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </main>

      {/* --- MODALS --- */}

      {/* 1. Product Modal */}
      {showProductModal && (
        <div className="fixed inset-0 bg-[#0B1D3A]/40 backdrop-blur-sm z-[200] flex items-center justify-center p-4">
          <div className="bg-white rounded-[28px] max-w-2xl w-full max-h-[85vh] overflow-y-auto p-8 shadow-premium border border-slate-100 animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between border-b pb-4 mb-6">
              <h3 className="text-xl font-bold text-[#0B1D3A]">{editingProduct ? "Edit Product" : "Add New Product"}</h3>
              <button onClick={() => setShowProductModal(false)} className="p-1.5 rounded-full hover:bg-slate-100 text-slate-400 hover:text-black"><X className="w-5 h-5" /></button>
            </div>
            <form onSubmit={handleSaveProduct} className="space-y-4 text-sm">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase mb-1.5">Product Name</label>
                  <input required value={productForm.name} onChange={(e) => setProductForm({...productForm, name: e.target.value})} className="w-full h-11 border rounded-xl px-4 outline-none text-[#0B1D3A]" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase mb-1.5">Category</label>
                  <select value={productForm.categoryId} onChange={(e) => setProductForm({...productForm, categoryId: e.target.value})} className="w-full h-11 border rounded-xl px-4 bg-white text-slate-700 cursor-pointer">
                    {categories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase mb-1.5">Price (₹)</label>
                  <input type="number" required value={productForm.price} onChange={(e) => setProductForm({...productForm, price: e.target.value})} className="w-full h-11 border rounded-xl px-4 outline-none" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase mb-1.5">Compare Price (₹)</label>
                  <input type="number" value={productForm.comparePrice} onChange={(e) => setProductForm({...productForm, comparePrice: e.target.value})} className="w-full h-11 border rounded-xl px-4 outline-none" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase mb-1.5">Stock Count</label>
                  <input type="number" required value={productForm.stock} onChange={(e) => setProductForm({...productForm, stock: e.target.value})} className="w-full h-11 border rounded-xl px-4 outline-none" />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase mb-1.5">Fabric</label>
                  <input value={productForm.fabric} onChange={(e) => setProductForm({...productForm, fabric: e.target.value})} className="w-full h-11 border rounded-xl px-4 outline-none" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase mb-1.5">Gender Target</label>
                  <select value={productForm.gender} onChange={(e) => setProductForm({...productForm, gender: e.target.value})} className="w-full h-11 border rounded-xl px-4 bg-white">
                    <option value="men">Men</option>
                    <option value="kids">Kids</option>
                    <option value="women">Women</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase mb-1.5">Brand</label>
                  <select value={productForm.brandId} onChange={(e) => setProductForm({...productForm, brandId: e.target.value})} className="w-full h-11 border rounded-xl px-4 bg-white">
                    <option value="1">Louis Monarch (LM)</option>
                    <option value="2">Urban Edge (UE)</option>
                    <option value="3">Tiny Trends (TT)</option>
                    <option value="4">Royal Club (RC)</option>
                    <option value="5">Denim Co (DC)</option>
                    <option value="6">Kidzo (KZ)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase mb-1.5">Image URL</label>
                <input required value={productForm.images} onChange={(e) => setProductForm({...productForm, images: e.target.value})} className="w-full h-11 border rounded-xl px-4 outline-none" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase mb-1.5">Sizes (comma-separated)</label>
                  <input value={productForm.sizes} onChange={(e) => setProductForm({...productForm, sizes: e.target.value})} className="w-full h-11 border rounded-xl px-4 outline-none" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase mb-1.5">Collection (comma-separated)</label>
                  <input value={productForm.collectionType} onChange={(e) => setProductForm({...productForm, collectionType: e.target.value})} className="w-full h-11 border rounded-xl px-4 outline-none" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase mb-1.5">Short Description</label>
                <input value={productForm.shortDescription} onChange={(e) => setProductForm({...productForm, shortDescription: e.target.value})} className="w-full h-11 border rounded-xl px-4 outline-none" />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase mb-1.5">Full Description</label>
                <textarea rows={3} value={productForm.description} onChange={(e) => setProductForm({...productForm, description: e.target.value})} className="w-full border rounded-xl p-4 outline-none" />
              </div>

              <div className="flex gap-3 justify-end pt-4 border-t">
                <button type="button" onClick={() => setShowProductModal(false)} className="h-11 px-5 border rounded-full hover:bg-slate-50 font-semibold text-slate-500">Cancel</button>
                <button type="submit" disabled={actionLoading} className="h-11 px-7 bg-[#0B1D3A] text-white rounded-full font-semibold hover:bg-[#122954] flex items-center justify-center gap-2">
                  {actionLoading ? "Saving..." : "Save Product"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 2. Category Modal */}
      {showCategoryModal && (
        <div className="fixed inset-0 bg-[#0B1D3A]/40 backdrop-blur-sm z-[200] flex items-center justify-center p-4">
          <div className="bg-white rounded-[28px] max-w-md w-full p-8 shadow-premium border border-slate-100 animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between border-b pb-4 mb-6">
              <h3 className="text-xl font-bold text-[#0B1D3A]">{editingCategory ? "Edit SEO Category" : "Add SEO Category"}</h3>
              <button onClick={() => setShowCategoryModal(false)} className="p-1.5 rounded-full hover:bg-slate-100 text-slate-400 hover:text-black"><X className="w-5 h-5" /></button>
            </div>
            <form onSubmit={handleSaveCategory} className="space-y-4 text-sm">
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase mb-1.5">Category Name</label>
                <input required value={categoryForm.name} onChange={(e) => setCategoryForm({...categoryForm, name: e.target.value})} className="w-full h-11 border rounded-xl px-4 outline-none text-[#0B1D3A]" />
              </div>
              
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase mb-1.5">Slug (SEO Route Key)</label>
                <input required value={categoryForm.slug} onChange={(e) => setCategoryForm({...categoryForm, slug: e.target.value})} className="w-full h-11 border rounded-xl px-4 outline-none text-slate-500 font-mono text-xs" />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase mb-1.5">Target Gender</label>
                <select value={categoryForm.gender} onChange={(e) => setCategoryForm({...categoryForm, gender: e.target.value})} className="w-full h-11 border rounded-xl px-4 bg-white">
                  <option value="men">Men</option>
                  <option value="kids">Kids</option>
                  <option value="women">Women</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase mb-1.5">Priority Order</label>
                  <input type="number" value={categoryForm.priority} onChange={(e) => setCategoryForm({...categoryForm, priority: e.target.value})} className="w-full h-11 border rounded-xl px-4 outline-none" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase mb-1.5">Category Image URL</label>
                  <input value={categoryForm.image} onChange={(e) => setCategoryForm({...categoryForm, image: e.target.value})} className="w-full h-11 border rounded-xl px-4 outline-none" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase mb-1.5">SEO Description</label>
                <textarea rows={3} value={categoryForm.description} onChange={(e) => setCategoryForm({...categoryForm, description: e.target.value})} className="w-full border rounded-xl p-4 outline-none" />
              </div>

              <div className="flex gap-3 justify-end pt-4 border-t">
                <button type="button" onClick={() => setShowCategoryModal(false)} className="h-11 px-5 border rounded-full hover:bg-slate-50 font-semibold text-slate-500">Cancel</button>
                <button type="submit" disabled={actionLoading} className="h-11 px-7 bg-[#0B1D3A] text-white rounded-full font-semibold hover:bg-[#122954]">
                  {actionLoading ? "Saving..." : "Save Category"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 3. Media Modal */}
      {showMediaModal && (
        <div className="fixed inset-0 bg-[#0B1D3A]/40 backdrop-blur-sm z-[200] flex items-center justify-center p-4">
          <div className="bg-white rounded-[28px] max-w-md w-full p-8 shadow-premium border border-slate-100 animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between border-b pb-4 mb-6">
              <h3 className="text-xl font-bold text-[#0B1D3A] font-serif">{editingMedia ? "Edit Media File" : "Upload Frontend Media"}</h3>
              <button onClick={() => setShowMediaModal(false)} className="p-1.5 rounded-full hover:bg-slate-100 text-slate-400 hover:text-black"><X className="w-5 h-5" /></button>
            </div>
            <form onSubmit={handleSaveMedia} className="space-y-4 text-sm">
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase mb-1.5">Section Designation</label>
                <select value={mediaForm.section} onChange={(e) => setMediaForm({...mediaForm, section: e.target.value})} className="w-full h-11 border rounded-xl px-4 bg-white text-slate-700 cursor-pointer">
                  <option value="about">About (Section-wise About Images)</option>
                  <option value="banner">Banner (Homepage Carousel Banners)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase mb-1.5">Media Key (e.g. about-1, banner-2)</label>
                <input required placeholder="e.g. banner-1" value={mediaForm.key} onChange={(e) => setMediaForm({...mediaForm, key: e.target.value})} className="w-full h-11 border rounded-xl px-4 outline-none font-mono text-xs text-[#0B1D3A]" />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase mb-1.5">Image / Banner Asset URL</label>
                <input required placeholder="https://images.unsplash.com/..." value={mediaForm.image} onChange={(e) => setMediaForm({...mediaForm, image: e.target.value})} className="w-full h-11 border rounded-xl px-4 outline-none text-slate-600 text-xs" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase mb-1.5">Sort Order</label>
                  <input type="number" required value={mediaForm.sortOrder} onChange={(e) => setMediaForm({...mediaForm, sortOrder: e.target.value})} className="w-full h-11 border rounded-xl px-4 outline-none" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase mb-1.5">Active Status</label>
                  <select value={mediaForm.isActive ? "true" : "false"} onChange={(e) => setMediaForm({...mediaForm, isActive: e.target.value === "true"})} className="w-full h-11 border rounded-xl px-4 bg-white text-slate-700 cursor-pointer">
                    <option value="true">Active (Displaying on Site)</option>
                    <option value="false">Inactive (Hidden)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase mb-1.5">Alt Text / SEO Label</label>
                <input value={mediaForm.altText} onChange={(e) => setMediaForm({...mediaForm, altText: e.target.value})} className="w-full h-11 border rounded-xl px-4 outline-none" />
              </div>

              <div className="flex gap-3 justify-end pt-4 border-t">
                <button type="button" onClick={() => setShowMediaModal(false)} className="h-11 px-5 border rounded-full hover:bg-slate-50 font-semibold text-slate-500">Cancel</button>
                <button type="submit" disabled={actionLoading} className="h-11 px-7 bg-[#0B1D3A] text-white rounded-full font-semibold hover:bg-[#122954]">
                  {actionLoading ? "Uploading..." : "Save Media"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

function LoaderIcon() {
  return (
    <div className="relative flex items-center justify-center w-12 h-12">
      <div className="absolute w-12 h-12 border-4 border-slate-200 rounded-full" />
      <div className="absolute w-12 h-12 border-4 border-t-[#0B1D3A] border-l-[#C8A951] rounded-full animate-spin" />
    </div>
  )
}

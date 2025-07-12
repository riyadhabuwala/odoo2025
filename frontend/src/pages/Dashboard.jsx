import React, { useState } from 'react';
import {
  FaPlus,
  FaUser,
  FaChartLine,
  FaBoxOpen,
  FaShoppingBag,
  FaHeart
} from 'react-icons/fa';

const Dashboard = () => {
  const [showAddCloth, setShowAddCloth] = useState(false);

  const AddClothPage = () => {
    const [formData, setFormData] = useState({
      title: '',
      description: '',
      category: 'Other',
      type: '',
      size: '',
      condition: 'Good',
      tags: '',
      images: []
    });

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleImageUpload = (e) => {
      const files = Array.from(e.target.files);
      const imageUrls = files.map(file => URL.createObjectURL(file));
      setFormData(prev => ({ ...prev, images: [...prev.images, ...imageUrls] }));
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Form submitted:', formData);
      setFormData({
        title: '',
        description: '',
        category: 'Other',
        type: '',
        size: '',
        condition: 'Good',
        tags: '',
        images: []
      });
      setShowAddCloth(false);
    };

    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-100 p-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-gray-800">Add New Cloth</h1>
              <button onClick={() => setShowAddCloth(false)} className="text-xl font-semibold text-gray-500 hover:text-gray-700">×</button>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Form fields (same as your original, no change) */}
              {/* Title */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Title *</label>
                <input type="text" name="title" value={formData.title} onChange={handleInputChange} required maxLength={100}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500" placeholder="Enter item title" />
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description *</label>
                <textarea name="description" value={formData.description} onChange={handleInputChange} required rows={4} maxLength={1000}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500" placeholder="Describe your item..." />
              </div>

              {/* Category and Type */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category *</label>
                  <select name="category" value={formData.category} onChange={handleInputChange} required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500">
                    <option value="Tops">Tops</option>
                    <option value="Bottoms">Bottoms</option>
                    <option value="Outerwear">Outerwear</option>
                    <option value="Dresses">Dresses</option>
                    <option value="Accessories">Accessories</option>
                    <option value="Footwear">Footwear</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Type *</label>
                  <input type="text" name="type" value={formData.type} onChange={handleInputChange} required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500"
                    placeholder="e.g., T-Shirt, Jeans, Jacket" />
                </div>
              </div>

              {/* Size and Condition */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Size *</label>
                  <input type="text" name="size" value={formData.size} onChange={handleInputChange} required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500"
                    placeholder="e.g., M, L, XL, 30x32" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Condition *</label>
                  <select name="condition" value={formData.condition} onChange={handleInputChange} required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500">
                    <option value="New with tags">New with tags</option>
                    <option value="Excellent">Excellent</option>
                    <option value="Good">Good</option>
                    <option value="Fair">Fair</option>
                    <option value="Used">Used</option>
                  </select>
                </div>
              </div>

              {/* Tags */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Tags</label>
                <input type="text" name="tags" value={formData.tags} onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500"
                  placeholder="e.g., vintage, cotton, summer" />
              </div>

              {/* Images */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Images *</label>
                <input type="file" multiple accept="image/*" onChange={handleImageUpload}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500" />
                {formData.images.length > 0 && (
                  <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-4">
                    {formData.images.map((image, index) => (
                      <img key={index} src={image} alt={`Preview ${index + 1}`} className="w-full h-24 object-cover rounded-lg" />
                    ))}
                  </div>
                )}
              </div>

              <div className="flex gap-4">
                <button type="button" onClick={() => setShowAddCloth(false)} className="flex-1 border border-gray-300 text-gray-700 rounded-lg py-3">Cancel</button>
                <button type="submit" className="flex-1 bg-pink-500 hover:bg-pink-600 text-white rounded-lg py-3">Add Cloth</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };

  if (showAddCloth) return <AddClothPage />;

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-100">
      <header className="bg-white shadow-sm border-b border-pink-100">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">User Dashboard</h1>
          <button
            onClick={() => setShowAddCloth(true)}
            className="flex items-center gap-2 px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600"
          >
            <FaPlus />
            Add Cloth
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Stats */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 flex flex-col md:flex-row items-center gap-6">
          <div className="w-20 h-20 bg-pink-500 rounded-full flex items-center justify-center text-white text-2xl">
            <FaUser />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 flex-1">
            <StatCard icon={<FaChartLine />} label="Points" value="80" />
            <StatCard icon={<FaHeart />} label="Swaps" value="5" />
            <StatCard icon={<FaBoxOpen />} label="Listings" value="3" />
            <StatCard icon={<FaShoppingBag />} label="Purchases" value="2" />
          </div>

          <div className="text-center md:text-right">
            <h2 className="text-xl font-semibold text-gray-800 mb-1">Welcome back, Jigna!</h2>
            <p className="text-gray-600">Ready to explore more swaps?</p>
          </div>
        </div>

        {/* Listings and Purchases */}
        {["My Listings", "My Purchases"].map((section, idx) => (
          <div key={section} className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">{section}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition-shadow">
                  <div className="w-full h-32 bg-gradient-to-br from-pink-100 to-rose-100 rounded-lg mb-3 flex items-center justify-center">
                    <FaBoxOpen className="text-pink-400 text-xl" />
                  </div>
                  <h3 className="font-medium text-gray-800">Item {i}</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {section === "My Listings" ? "Available for swap" : "Recently purchased"}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </main>

      <footer className="bg-white border-t border-pink-100 mt-12 py-6">
        <p className="text-center text-gray-600">© 2025 SwapIt. All rights reserved.</p>
      </footer>
    </div>
  );
};

const StatCard = ({ icon, label, value }) => (
  <div className="bg-pink-50 p-4 rounded-lg border border-pink-200">
    <div className="flex items-center gap-2 text-pink-600 mb-1">
      {icon}
      <span className="text-sm font-medium">{label}</span>
    </div>
    <div className="text-2xl font-bold text-gray-800">{value}</div>
  </div>
);

export default Dashboard;

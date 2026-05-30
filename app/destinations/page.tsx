'use client';

import { useState, useEffect } from 'react';
import { Plus, Trash2, MapPin, Loader2 } from 'lucide-react';

export default function AdminDestinations() {
  const [destinations, setDestinations] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const fetchDestinations = async () => {
    setLoading(true);
    const res = await fetch('/api/admin/destinations');
    if (res.ok) setDestinations(await res.json());
    setLoading(false);
  };

  useEffect(() => { fetchDestinations(); }, []);

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    const res = await fetch('/api/admin/destinations', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, slug, description, image_url: imageUrl })
    });

    if (res.ok) {
      setName(''); setDescription(''); setImageUrl('');
      fetchDestinations();
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this destination?')) return;
    const res = await fetch(`/api/admin/destinations?id=${id}`, { method: 'DELETE' });
    if (res.ok) fetchDestinations();
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <div className="flex items-center gap-2 mb-6">
        <MapPin className="text-orange-600" />
        <h1 className="text-2xl font-bold text-slate-900">Manage Destinations</h1>
      </div>

      {/* Add New Form */}
      <form onSubmit={handleAdd} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm mb-8 space-y-4">
        <h2 className="text-sm font-bold uppercase text-slate-500">Add New Region</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" placeholder="Destination Name (e.g., Manali)" value={name} onChange={e => setName(e.target.value)} className="p-2 border rounded-md text-sm" required />
          <input type="text" placeholder="Image URL" value={imageUrl} onChange={e => setImageUrl(e.target.value)} className="p-2 border rounded-md text-sm" />
        </div>
        <textarea placeholder="Short Description..." value={description} onChange={e => setDescription(e.target.value)} className="w-full p-2 border rounded-md text-sm h-20" />
        <button type="submit" className="bg-slate-900 text-white text-xs font-bold px-4 py-2 rounded-md flex items-center gap-1 hover:bg-slate-800">
          <Plus size={14} /> Save Destination
        </button>
      </form>

      {/* List Grid */}
      {loading ? (
        <div className="flex justify-center p-12"><Loader2 className="animate-spin text-orange-600" /></div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {destinations.map(dest => (
            <div key={dest.id} className="bg-white p-4 rounded-lg border border-slate-200 flex justify-between items-center shadow-sm">
              <div>
                <h3 className="font-bold text-slate-800 text-sm">{dest.name}</h3>
                <p className="text-xs text-slate-500 max-w-sm truncate">{dest.description}</p>
              </div>
              <button onClick={() => handleDelete(dest.id)} className="text-red-500 hover:text-red-700 p-2">
                <Trash2 size={16} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
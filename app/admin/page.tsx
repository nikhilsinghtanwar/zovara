'use client';

import { useState, useEffect } from 'react';
import { 
  FileText, Package, MapPin, Image as ImageIcon, Layout, 
  Check, X, Loader2, Edit3, Trash2, Users, Shield, Plus, Upload, Save
} from 'lucide-react';

type TabType = 'blog_posts' | 'packages' | 'destinations' | 'media_gallery' | 'site_settings';
type RoleType = 'Master Admin' | 'Content Editor' | 'Moderator';

export default function PerfectAdminConsole() {
  const [activeTab, setActiveTab] = useState<TabType>('blog_posts');
  const [loading, setLoading] = useState(false);
  const [dataList, setDataList] = useState<any[]>([]);
  const [currentRole, setCurrentRole] = useState<RoleType>('Master Admin');
  
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editFormData, setEditFormData] = useState<Record<string, string>>({});

  // Future-Proof Mock / Fallback Data for Website Static Assets Management
  const initialStaticSettings = [
    { id: 'st_1', title: 'hero_image_url', content: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80' },
    { id: 'st_2', title: 'hero_title_text', content: 'Explore The Unexplored Mountains With Zovara' },
    { id: 'st_3', title: 'hero_subtitle_text', content: 'Premium Travel & Customized Trekking Experiences' },
    { id: 'st_4', title: 'about_section_image', content: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=600&q=80' },
    { id: 'st_5', title: 'contact_email_address', content: 'info@zovaratravels.com' }
  ];

  const fetchRecords = async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/admin/${activeTab}`);
      if (res.ok) {
        const data = await res.json();
        setDataList(Array.isArray(data) ? data : []);
      } else {
        // Fallback for Site Settings tab if API route is empty or not mapped
        if (activeTab === 'site_settings') {
          setDataList(initialStaticSettings);
        } else {
          setDataList([]);
        }
      }
    } catch (err) {
      if (activeTab === 'site_settings') {
        setDataList(initialStaticSettings);
      } else {
        setDataList([]);
      }
    }
    setLoading(false);
  };

  useEffect(() => {
    setFormData({});
    setEditingId(null);
    fetchRecords();
  }, [activeTab]);

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (currentRole === 'Moderator') {
      alert("Access Denied: Moderators cannot add rows.");
      return;
    }
    try {
      const res = await fetch(`/api/admin/${activeTab}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        setFormData({});
        fetchRecords();
        alert("Success: Record saved!");
      } else {
        // Local state update if running standalone
        setDataList([...dataList, { id: 'local_' + Date.now(), ...formData }]);
        setFormData({});
        alert("Local Action: Record added to panel monitor.");
      }
    } catch (err) {
      setDataList([...dataList, { id: 'local_' + Date.now(), ...formData }]);
      setFormData({});
    }
  };

  const handleUpdate = async (id: string) => {
    if (currentRole === 'Moderator') {
      alert("Access Denied: Action blocked.");
      return;
    }
    try {
      const res = await fetch(`/api/admin/${activeTab}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...editFormData, id })
      });
      if (res.ok) {
        setEditingId(null);
        fetchRecords();
        alert("Live change applied successfully!");
      } else {
        setDataList(dataList.map(item => item.id === id ? { ...item, ...editFormData } : item));
        setEditingId(null);
        alert("Success: Configuration updated on panel preview!");
      }
    } catch (err) {
      setDataList(dataList.map(item => item.id === id ? { ...item, ...editFormData } : item));
      setEditingId(null);
    }
  };

  const handleDelete = async (id: string) => {
    if (currentRole !== 'Master Admin') {
      alert("Access Denied: Only Master Admin can wipe data rows.");
      return;
    }
    if (!confirm("Delete this config option?")) return;
    try {
      const res = await fetch(`/api/admin/${activeTab}?id=${id}`, { method: 'DELETE' });
      if (res.ok) fetchRecords();
      else setDataList(dataList.filter(item => item.id !== id));
    } catch (err) {
      setDataList(dataList.filter(item => item.id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex relative font-sans antialiased">
      
      {/* SIDEBAR NAVIGATION CONTROL */}
      <div className="w-72 bg-slate-900 border-r border-slate-800 p-6 flex flex-col justify-between fixed h-screen top-0 left-0 z-50">
        <div className="space-y-6">
          <div>
            <h1 className="text-lg font-black uppercase tracking-wider font-mono text-orange-500">Zovara Console</h1>
            <p className="text-[10px] text-slate-500 uppercase tracking-widest font-mono mt-0.5">Control Panel v3.0</p>
          </div>

          <nav className="flex flex-col gap-1.5">
            {[
              { id: 'blog_posts', label: 'Blogs & Stories', icon: FileText },
              { id: 'packages', label: 'Trip Packages', icon: Package },
              { id: 'destinations', label: 'Destinations', icon: MapPin },
              { id: 'media_gallery', label: 'Media Gallery', icon: ImageIcon },
              { id: 'site_settings', label: 'Website Text Copy', icon: Layout }
            ].map(tab => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id as TabType)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-left transition-all ${activeTab === tab.id ? 'bg-orange-600 text-white shadow-lg' : 'text-slate-400 hover:bg-slate-800/60 hover:text-white'}`}
              >
                <tab.icon size={16} />
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* MEMBER CONTROLS SYSTEM */}
        <div className="bg-slate-950 border border-slate-800 rounded-xl p-3.5 space-y-2.5">
          <div className="flex items-center gap-2 text-[10px] uppercase font-mono tracking-wider text-slate-400 font-bold">
            <Users size={12} className="text-orange-500" /> Member Control
          </div>
          <div className="flex flex-col gap-1">
            {(['Master Admin', 'Content Editor', 'Moderator'] as RoleType[]).map(role => (
              <button
                key={role}
                type="button"
                onClick={() => setCurrentRole(role)}
                className={`w-full text-left px-2.5 py-1.5 rounded-md text-[11px] font-mono font-bold flex items-center justify-between transition-colors ${currentRole === role ? 'bg-slate-800 text-orange-400 border border-orange-500/20' : 'text-slate-500 hover:text-slate-300'}`}
              >
                <span>{role}</span>
                {currentRole === role && <Shield size={10} className="text-orange-400" />}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* WORKSPACE CONTENT AREA */}
      <div className="flex-1 pl-80 pr-8 py-8 min-h-screen">
        
        <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
          <div>
            <h2 className="text-xl font-mono font-black text-white uppercase tracking-tight">
              Workspace / <span className="text-orange-500">{activeTab.replace('_', ' ')}</span>
            </h2>
            <p className="text-xs text-slate-400 mt-1">Direct website image configuration override active.</p>
          </div>
          <div className="text-right">
            <span className="text-[10px] font-mono bg-orange-600/10 text-orange-400 border border-orange-500/20 px-3 py-1 rounded-full uppercase tracking-widest font-bold">
              Role: {currentRole}
            </span>
          </div>
        </div>

        {/* INPUT DATA BLOCK PANEL */}
        <form onSubmit={handleCreate} className="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-4 mb-6">
          <h3 className="text-xs uppercase font-mono tracking-wider font-bold text-slate-400 flex items-center gap-1.5">
            <Plus size={14} /> Add Dataset Entry Row
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {activeTab === 'blog_posts' && (
              <>
                <input type="text" placeholder="Article Headline Title" value={formData.title || ''} onChange={e => setFormData({...formData, title: e.target.value})} className="p-3 bg-slate-950 border border-slate-800 rounded-lg text-xs outline-none focus:border-orange-500 text-white" required />
                <input type="text" placeholder="Featured Image Asset URL" value={formData.image_url || ''} onChange={e => setFormData({...formData, image_url: e.target.value})} className="p-3 bg-slate-950 border border-slate-800 rounded-lg text-xs outline-none focus:border-orange-500 text-white" />
                <textarea placeholder="Write content narrative..." value={formData.content || ''} onChange={e => setFormData({...formData, content: e.target.value})} className="p-3 bg-slate-950 border border-slate-800 rounded-lg text-xs outline-none focus:border-orange-500 text-white h-24 md:col-span-2" required />
              </>
            )}
            {activeTab === 'packages' && (
              <>
                <input type="text" placeholder="Package Title / Route" value={formData.title || ''} onChange={e => setFormData({...formData, title: e.target.value})} className="p-3 bg-slate-950 border border-slate-800 rounded-lg text-xs text-white" required />
                <input type="text" placeholder="Price (eg. 15000)" value={formData.price || ''} onChange={e => setFormData({...formData, price: e.target.value})} className="p-3 bg-slate-950 border border-slate-800 rounded-lg text-xs text-white" required />
                <input type="text" placeholder="Cover Image URL Link" value={formData.image_url || ''} onChange={e => setFormData({...formData, image_url: e.target.value})} className="p-3 bg-slate-950 border border-slate-800 rounded-lg text-xs text-white md:col-span-2" />
              </>
            )}
            {activeTab === 'destinations' && (
              <>
                <input type="text" placeholder="Destination Name (eg. Ladakh)" value={formData.name || ''} onChange={e => setFormData({...formData, name: e.target.value})} className="p-3 bg-slate-950 border border-slate-800 rounded-lg text-xs text-white" required />
                <input type="text" placeholder="Background Photo URL" value={formData.image_url || ''} onChange={e => setFormData({...formData, image_url: e.target.value})} className="p-3 bg-slate-950 border border-slate-800 rounded-lg text-xs text-white" required />
                <textarea placeholder="Description text..." value={formData.description || ''} onChange={e => setFormData({...formData, description: e.target.value})} className="p-3 bg-slate-950 border border-slate-800 rounded-lg text-xs text-white h-20 md:col-span-2" required />
              </>
            )}
            {activeTab === 'media_gallery' && (
              <>
                <input type="text" placeholder="Photo Asset Title" value={formData.title || ''} onChange={e => setFormData({...formData, title: e.target.value})} className="p-3 bg-slate-950 border border-slate-800 rounded-lg text-xs text-white" required />
                <input type="text" placeholder="Direct CDN Image URL Link" value={formData.url || ''} onChange={e => setFormData({...formData, url: e.target.value})} className="p-3 bg-slate-950 border border-slate-800 rounded-lg text-xs text-white" required />
              </>
            )}
            {activeTab === 'site_settings' && (
              <>
                <input type="text" placeholder="Setting Configuration Key Name (eg. hero_image_url)" value={formData.title || ''} onChange={e => setFormData({...formData, title: e.target.value})} className="p-3 bg-slate-950 border border-slate-800 rounded-lg text-xs text-white" required />
                <textarea placeholder="Global Configuration Value / Link Address..." value={formData.content || ''} onChange={e => setFormData({...formData, content: e.target.value})} className="p-3 bg-slate-950 border border-slate-800 rounded-lg text-xs text-white h-20 md:col-span-2" required />
              </>
            )}
          </div>
          <button type="submit" className="bg-orange-600 text-white text-xs font-mono font-bold px-6 py-2.5 rounded-lg uppercase tracking-wider">Commit Entry Data</button>
        </form>

        {/* MONITOR DISPLAY ENGINE */}
        {loading ? (
          <div className="flex justify-center py-20"><Loader2 className="animate-spin text-orange-500 w-10 h-10" /></div>
        ) : (
          <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-2xl">
            <div className="bg-slate-800/40 px-5 py-3 border-b border-slate-800 flex justify-between items-center">
              <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-widest">Active Setup Options ({dataList.length})</span>
              {activeTab === 'site_settings' && <span className="text-[10px] text-orange-400 bg-orange-500/10 border border-orange-500/20 px-2 py-0.5 rounded font-mono">Live Configuration Injector Active</span>}
            </div>
            
            <div className="divide-y divide-slate-950">
              {dataList.map((item: any) => (
                <div key={item.id} className="p-5 flex flex-col hover:bg-slate-800/20 transition-all">
                  
                  {editingId === item.id ? (
                    <div className="w-full bg-slate-950 p-5 rounded-xl border border-orange-500/30 space-y-4">
                      <h4 className="text-[10px] font-mono font-bold text-orange-400 uppercase">Updating Global Config Fields</h4>
                      <div className="grid grid-cols-1 gap-3">
                        {(activeTab === 'blog_posts' || activeTab === 'packages' || activeTab === 'media_gallery' || activeTab === 'site_settings') && (
                          <input type="text" value={editFormData.title || ''} onChange={e => setEditFormData({...editFormData, title: e.target.value})} className="p-3 bg-slate-900 border border-slate-800 rounded-lg text-xs text-slate-400 font-mono" placeholder="Key ID" disabled={activeTab === 'site_settings'} />
                        )}
                        {activeTab === 'destinations' && (
                          <input type="text" value={editFormData.name || ''} onChange={e => setEditFormData({...editFormData, name: e.target.value})} className="p-3 bg-slate-900 border border-slate-800 rounded-lg text-xs text-white" placeholder="Destination Name" />
                        )}
                        {activeTab === 'packages' && (
                          <input type="text" value={editFormData.price || ''} onChange={e => setEditFormData({...editFormData, price: e.target.value})} className="p-3 bg-slate-900 border border-slate-800 rounded-lg text-xs text-white font-mono" placeholder="Price" />
                        )}
                        
                        {/* Dynamic URL Injection Field */}
                        {(activeTab === 'site_settings' || editFormData.image_url || editFormData.url) && (
                          <div className="space-y-1">
                            <label className="text-[10px] font-mono uppercase text-slate-400 font-bold flex items-center gap-1"><ImageIcon size={10}/> Image Link Asset Address / Configuration Value</label>
                            <input 
                              type="text" 
                              value={editFormData.content !== undefined && activeTab === 'site_settings' ? editFormData.content : (editFormData.image_url || editFormData.url || '')} 
                              onChange={e => {
                                if (activeTab === 'site_settings') {
                                  setEditFormData({...editFormData, content: e.target.value});
                                } else if (editFormData.url) {
                                  setEditFormData({...editFormData, url: e.target.value});
                                } else {
                                  setEditFormData({...editFormData, image_url: e.target.value});
                                }
                              }} 
                              className="w-full p-3 bg-slate-900 border border-orange-500/30 rounded-lg text-xs text-orange-400 font-mono outline-none" 
                              placeholder="Paste the new photo URL link address here..." 
                            />
                          </div>
                        )}
                      </div>

                      {(activeTab === 'blog_posts') && (
                        <textarea value={editFormData.content || ''} onChange={e => setEditFormData({...editFormData, content: e.target.value})} className="w-full p-3 bg-slate-900 border border-slate-800 rounded-lg text-xs text-white h-24" />
                      )}
                      {activeTab === 'destinations' && (
                        <textarea value={editFormData.description || ''} onChange={e => setEditFormData({...editFormData, description: e.target.value})} className="w-full p-3 bg-slate-900 border border-slate-800 rounded-lg text-xs text-white h-20" />
                      )}

                      <div className="flex gap-2 justify-end">
                        <button type="button" onClick={() => handleUpdate(item.id)} className="bg-emerald-600 text-white text-xs px-4 py-2 rounded-lg flex items-center gap-1.5 font-bold font-mono shadow-md"><Check size={14} /> Save & Apply Globally</button>
                        <button type="button" onClick={() => setEditingId(null)} className="bg-slate-800 text-slate-300 text-xs px-4 py-2 rounded-lg flex items-center gap-1.5 font-mono"><X size={14} /> Cancel</button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center justify-between gap-6 w-full">
                      <div className="flex items-center gap-4 min-w-0">
                        {/* Live Image Rendering Engine */}
                        {(item.image_url || item.url || (activeTab === 'site_settings' && String(item.content).startsWith('http'))) && (
                          <img 
                            src={item.image_url || item.url || item.content} 
                            alt="asset thumbnail" 
                            className="w-14 h-14 object-cover rounded-xl border-2 border-slate-800 shrink-0 bg-slate-950 shadow-md" 
                            onError={(e)=>{(e.target as any).src='https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=100&q=80'}} 
                          />
                        )}
                        <div className="min-w-0 space-y-1">
                          <h4 className="font-bold text-slate-100 text-xs font-mono uppercase tracking-wider">{item.title || item.name}</h4>
                          <p className="text-[11px] font-mono text-orange-400 break-all max-w-xl line-clamp-1">{item.content || item.description || item.url}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 shrink-0">
                        {item.price && <span className="text-xs font-mono font-bold text-orange-400 bg-orange-500/10 px-3 py-1 rounded-lg border border-orange-500/20">₹{item.price}</span>}
                        <button 
                          type="button" 
                          onClick={() => { setEditingId(item.id); setEditFormData({ ...item }); }} 
                          className="text-slate-400 hover:text-orange-400 border border-slate-800 bg-slate-950 p-2 rounded-xl transition-all font-mono text-[11px] flex items-center gap-1.5"
                        >
                          <Edit3 size={14} /> Change Photo / Data
                        </button>
                        {activeTab !== 'site_settings' && (
                          <button type="button" onClick={() => handleDelete(item.id)} className="text-slate-500 hover:text-red-400 border border-slate-800 bg-slate-950 p-2 rounded-xl transition-all"><Trash2 size={14} /></button>
                        )}
                      </div>
                    </div>
                  )}

                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
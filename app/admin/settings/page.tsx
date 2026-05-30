'use client';

import { useState } from 'react';
import { Settings, Save, Loader2 } from 'lucide-react';

export default function SettingsPage() {
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleSave = async () => {
    setSaving(true);
    await new Promise((r) => setTimeout(r, 800));
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-cormorant text-3xl font-bold text-charcoal">
          Site Settings
        </h1>
        <p className="font-inter text-sm text-charcoal/60 mt-1">
          Configure your website settings and preferences.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-mist/10 p-6 space-y-6">
        <div className="flex items-center gap-3 pb-4 border-b border-mist/10">
          <Settings size={20} className="text-saffron-mid" />
          <h2 className="font-cormorant text-xl font-bold text-charcoal">General</h2>
        </div>

        <div className="grid gap-5">
          <div>
            <label className="block font-inter text-sm font-medium text-charcoal mb-1.5">
              Site Name
            </label>
            <input
              type="text"
              defaultValue="Zovara Travel"
              className="w-full px-4 py-3 border border-mist/30 bg-ivory/50 font-inter text-sm focus:outline-none focus:border-saffron-mid transition-colors rounded-lg"
            />
          </div>

          <div>
            <label className="block font-inter text-sm font-medium text-charcoal mb-1.5">
              Contact Email
            </label>
            <input
              type="email"
              defaultValue="tanwarnikhil860@gmail.com"
              className="w-full px-4 py-3 border border-mist/30 bg-ivory/50 font-inter text-sm focus:outline-none focus:border-saffron-mid transition-colors rounded-lg"
            />
          </div>

          <div>
            <label className="block font-inter text-sm font-medium text-charcoal mb-1.5">
              WhatsApp Number
            </label>
            <input
              type="text"
              defaultValue="+91 6377434103"
              className="w-full px-4 py-3 border border-mist/30 bg-ivory/50 font-inter text-sm focus:outline-none focus:border-saffron-mid transition-colors rounded-lg"
            />
          </div>

          <div>
            <label className="block font-inter text-sm font-medium text-charcoal mb-1.5">
              Instagram Handle
            </label>
            <input
              type="text"
              defaultValue="@zovara.travel"
              className="w-full px-4 py-3 border border-mist/30 bg-ivory/50 font-inter text-sm focus:outline-none focus:border-saffron-mid transition-colors rounded-lg"
            />
          </div>
        </div>

        <div className="pt-4 border-t border-mist/10">
          <button
            onClick={handleSave}
            disabled={saving}
            className="inline-flex items-center gap-2 px-6 py-3 bg-saffron-mid text-white rounded-lg font-inter text-sm font-semibold hover:bg-saffron-light transition-colors disabled:opacity-50"
          >
            {saving ? (
              <Loader2 size={16} className="animate-spin" />
            ) : saved ? (
              <span className="text-green-200">Saved!</span>
            ) : (
              <Save size={16} />
            )}
            {saving ? 'Saving...' : saved ? 'Saved' : 'Save Settings'}
          </button>
        </div>
      </div>
    </div>
  );
}

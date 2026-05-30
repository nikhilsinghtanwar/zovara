import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL || '', process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '');

export async function GET() {
  const { data, error } = await supabase.from('media_gallery').select('*').order('created_at', { ascending: false });
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { data, error } = await supabase.from('media_gallery').upsert([body]).select();
    if (error) return NextResponse.json({ error: error.message }, { status: 400 });
    return NextResponse.json(data[0]);
  } catch (err) {
    return NextResponse.json({ error: 'Malformed JSON' }, { status: 400 });
  }
}

export async function DELETE(request: Request) {
  const id = new URL(request.url).searchParams.get('id');
  if (!id) return NextResponse.json({ error: 'Missing ID' }, { status: 400 });
  const { error } = await supabase.from('media_gallery').delete().eq('id', id);
  if (error) return NextResponse.json({ error: error.message }, { status: 400 });
  return NextResponse.json({ success: true });
}
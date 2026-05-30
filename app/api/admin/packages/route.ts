import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase'; // Apne supabase file ka sahi path check kar lena

export async function GET() {
  try {
    const { data, error } = await supabase
      .from('packages')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    return NextResponse.json(data || []);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { id, title, price, image_url } = body;

    if (id && !String(id).startsWith('local_')) {
      // UPDATE Existing Row
      const { data, error } = await supabase
        .from('packages')
        .update({ title, price, image_url })
        .eq('id', id)
        .select();

      if (error) throw error;
      return NextResponse.json(data[0]);
    } else {
      // INSERT New Row
      const { data, error } = await supabase
        .from('packages')
        .insert([{ title, price, image_url }])
        .select();

      if (error) throw error;
      return NextResponse.json(data[0]);
    }
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    if (!id) return NextResponse.json({ error: "ID required" }, { status: 400 });

    const { error } = await supabase.from('packages').delete().eq('id', id);
    if (error) throw error;
    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

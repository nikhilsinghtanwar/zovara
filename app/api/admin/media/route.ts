import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET() {
  try {
    // Packages ki saari photos nikal kar gallery me dikhane ke liye
    const { data, error } = await supabase
      .from('packages')
      .select('id, title, image_url');
      
    if (error) throw error;
    
    const formattedGallery = data?.map(item => ({
      id: item.id,
      title: item.title,
      url: item.image_url
    })) || [];
    
    return NextResponse.json(formattedGallery);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

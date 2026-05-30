import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email is required'),
  phone: z.string().min(10, 'Valid phone number is required'),
  destination: z.string().optional(),
  dates: z.string().optional(),
  groupSize: z.string().optional(),
  tripType: z.string().optional(),
  message: z.string().optional(),
  source: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: 'Validation failed', details: result.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    // TODO: Connect to email service (Resend/Nodemailer) — send to tanwarnikhil860@gmail.com
    console.log('Contact form submission:', result.data);

    return NextResponse.json({ success: true, message: 'Enquiry received. We will contact you shortly.' });
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}

import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { email, subject, message } = await request.json()

    // For now, just log the contact request
    // Later you can integrate with services like:
    // - SendGrid
    // - Mailgun
    // - Resend
    // - EmailJS
    
    console.log('Contact form submission:', {
      email,
      subject,
      message,
      timestamp: new Date().toISOString()
    })

    // You can integrate with a service like FormSubmit.co
    // or use a webhook to send to Discord/Slack
    
    return NextResponse.json({ 
      success: true, 
      message: 'Thank you for contacting us! We\'ll get back to you soon.' 
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Failed to send message' },
      { status: 500 }
    )
  }
}
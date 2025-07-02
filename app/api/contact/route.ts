import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Configure nodemailer (only if SMTP credentials are provided)
    if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
      const transporter = nodemailer.createTransporter({
        host: process.env.SMTP_HOST,
        port: 587,
        secure: false,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      })

      // Send email to Irsa team
      await transporter.sendMail({
        from: process.env.SMTP_USER,
        to: 'hello@irsa.ca',
        subject: `New Contact Form Submission from ${name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
          <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
        `,
      })

      // Send confirmation email to user
      await transporter.sendMail({
        from: process.env.SMTP_USER,
        to: email,
        subject: 'Thank you for contacting Irsa',
        html: `
          <h2>Thank you for reaching out!</h2>
          <p>Hi ${name},</p>
          <p>We've received your message and will get back to you within 24 hours.</p>
          <p>In the meantime, feel free to explore our platform or book a live demo call.</p>
          <p>Best regards,<br>The Irsa Team</p>
        `,
      })
    } else {
      // If no SMTP configured, just log the message
      console.log('Contact Form Submission:', {
        name,
        email,
        message,
        timestamp: new Date().toISOString(),
      })
    }

    return NextResponse.json({ 
      success: true,
      message: 'Message sent successfully'
    })

  } catch (error) {
    console.error('Contact API error:', error)
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    )
  }
}

// Handle GET requests
export async function GET() {
  return NextResponse.json(
    { message: 'Contact API endpoint. Use POST to submit contact forms.' },
    { status: 200 }
  )
} 
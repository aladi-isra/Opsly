import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone } = body

    // Validate required fields
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Log the demo request (in production, you'd save to database)
    console.log('Demo Call Request:', {
      name,
      email,
      phone,
      timestamp: new Date().toISOString(),
    })

    // TODO: Integrate with Twilio Programmable Voice to initiate outbound demo call
    // const twilioClient = require('twilio')(process.env.TWILIO_SID, process.env.TWILIO_AUTH)
    // await twilioClient.calls.create({
    //   to: phone,
    //   from: process.env.TWILIO_NUMBER,
    //   url: 'http://demo.twilio.com/docs/voice.xml', // TwiML for demo script
    // })

    // Send notification email to team (optional)
    // await sendNotificationEmail({ name, email, phone })

    return NextResponse.json({ 
      success: true,
      message: 'Demo request received successfully'
    })

  } catch (error) {
    console.error('Demo call API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// Handle GET requests
export async function GET() {
  return NextResponse.json(
    { message: 'Demo call API endpoint. Use POST to submit demo requests.' },
    { status: 200 }
  )
} 
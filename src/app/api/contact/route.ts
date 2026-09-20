import { NextResponse } from "next/server";

type ContactData = {
  name: string;
  email: string;
  contactNumber: string;
  organization?: string;
  subject: string;
  message: string;
};

export async function POST(request: Request) {
  try {
    const data: ContactData = await request.json();

    if (
      !data.name ||
      !data.email ||
      !data.contactNumber ||
      !data.subject ||
      !data.message
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Please fill in all required fields.",
        },
        { status: 400 }
      );
    }

    const appsScriptUrl = process.env.GOOGLE_APPS_SCRIPT_URL;

    if (!appsScriptUrl) {
      console.error("GOOGLE_APPS_SCRIPT_URL is not configured.");

      return NextResponse.json(
        {
          success: false,
          message: "Contact service is not configured.",
        },
        { status: 500 }
      );
    }

    const googleResponse = await fetch(appsScriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        type: "contact",
        name: data.name.trim(),
        email: data.email.trim(),
        contactNumber: data.contactNumber.trim(),
        organization: data.organization?.trim() || "",
        subject: data.subject.trim(),
        message: data.message.trim(),
      }),
      cache: "no-store",
    });

    const status = googleResponse.status;

    console.log("Google Apps Script contact response:", status);

    if (!googleResponse.ok) {
      const responseText = await googleResponse.text();

      console.error(
        "Google Apps Script contact error:",
        status,
        responseText
      );

      return NextResponse.json(
        {
          success: false,
          message: "Unable to send your message right now.",
        },
        { status: 502 }
      );
    }

    const responseText = await googleResponse.text();

    let googleResult: {
      success?: boolean;
      message?: string;
    };

    try {
      googleResult = JSON.parse(responseText);
    } catch {
      console.error(
        "Invalid response from Google Apps Script:",
        responseText
      );

      return NextResponse.json(
        {
          success: false,
          message: "Invalid response from contact service.",
        },
        { status: 502 }
      );
    }

    if (!googleResult.success) {
      return NextResponse.json(
        {
          success: false,
          message:
            googleResult.message ||
            "Your message could not be submitted.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Your message has been sent successfully.",
    });
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again.",
      },
      { status: 500 }
    );
  }
}
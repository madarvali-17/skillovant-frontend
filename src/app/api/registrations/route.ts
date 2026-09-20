import { NextResponse } from "next/server";

type RegistrationData = {
  name: string;
  email: string;
  contactNumber: string;
  college: string;
  branch: string;
  program: string;
};

export async function POST(request: Request) {
  try {
    const data: RegistrationData = await request.json();

    if (
      !data.name ||
      !data.email ||
      !data.contactNumber ||
      !data.college ||
      !data.branch ||
      !data.program
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Please fill in all required fields.",
        },
        { status: 400 }
      );
    }

    if (!["Python", "Java"].includes(data.program)) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid program selected.",
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
          message: "Registration service is not configured.",
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
        name: data.name.trim(),
        email: data.email.trim(),
        contactNumber: data.contactNumber.trim(),
        college: data.college.trim(),
        branch: data.branch.trim(),
        program: data.program,
      }),
      cache: "no-store",
    });

    const responseText = await googleResponse.text();

    console.log("Google Apps Script response:", googleResponse.status);
    console.log("Google Apps Script body:", responseText);

    if (!googleResponse.ok) {
      return NextResponse.json(
        {
          success: false,
          message: "Unable to submit registration right now.",
        },
        { status: 502 }
      );
    }

    let googleResult: {
      success?: boolean;
      message?: string;
    };

    try {
      googleResult = JSON.parse(responseText);
    } catch {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid response from registration service.",
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
            "Registration could not be completed.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Registration submitted successfully.",
    });

  } catch (error) {
    console.error("Registration API error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again.",
      },
      { status: 500 }
    );
  }
}
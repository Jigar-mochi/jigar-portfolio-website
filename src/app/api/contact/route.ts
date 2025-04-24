import { NextResponse } from "next/server";

import connectDB from "@/lib/mongodb";
import Contact from "@/models/Contact";

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    // Connect to MongoDB
    await connectDB();

    // Create new contact entry
    const contact = await Contact.create({
      name,
      email,
      subject,
      message,
    });

    return NextResponse.json(
      { message: "Contact form submitted successfully", contact },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return NextResponse.json({ error: "Error submitting contact form" }, { status: 500 });
  }
}

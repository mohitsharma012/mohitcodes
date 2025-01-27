import { NextResponse } from 'next/server';
import { db } from '@/lib/mongodb';
import User from '@/models/User';


// Connect to the database
async function connectToDatabase() {
    await db();
  }
  
  connectToDatabase();
  

// Handle POST request for user registration
export async function POST(request: Request) {
  try {
    // Parse the request body
    const { name, email, password } = await request.json();

    // Validate input
    if (!name || !email || !password) {
      return NextResponse.json({ message: 'Name, email, and password are required' }, { status: 400 });
    }

    // Check if the email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ message: 'Email is already registered' }, { status: 409 });
    }


    // Create a new user in the database
    const newUser = new User({
      name,
      email,
      password: password,
    });

    await newUser.save();

    

    // Return a success response
    return NextResponse.json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error during registration:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}

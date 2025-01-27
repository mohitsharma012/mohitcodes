import { NextResponse } from 'next/server';
import { db } from '@/lib/mongodb';
import User from '@/models/User';
import jwt from 'jsonwebtoken';

// Secret key for JWT (ensure this is stored securely)
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret_key';

// Connect to the database
async function connectToDatabase() {
  await db();
}

connectToDatabase();

// Handle GET request
export async function GET() {
  return NextResponse.json({ message: 'Hello, Next.js API with TypeScript and App Router!' });
}

// Handle POST request for login
export async function POST(request: Request) {
  try {
    // Parse the request body
    const { email, password } = await request.json();

    // Validate input
    if (!email || !password) {
      return NextResponse.json({ message: 'Email and password are required' }, { status: 400 });
    }

    // Query the database for the user
    const user = await User.findOne({ email });

    // Check if the user exists and validate the password
    if (!user || user.password !== password) {
      return NextResponse.json({ message: 'Invalid email or password' }, { status: 401 });
    }

    // Generate a JWT token
    const token = jwt.sign({ id: user._id, email: user.email }, JWT_SECRET, {
      expiresIn: '30d', // Token expires in 1 hour
    });

    // Successful response
    return NextResponse.json({
      message: 'Login successful',
      user: { id: user._id, name: user.name, email: user.email },
      token,
    });
  } catch (error) {
    console.error('Error during login:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}

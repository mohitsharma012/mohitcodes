import { NextResponse } from 'next/server';
import { db } from '@/lib/mongodb';
import User from '@/models/User';
import jwt from 'jsonwebtoken';
// import { request } from 'http';

// Secret key for JWT (ensure this is stored securely)
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret_key';

// Connect to the database
async function connectToDatabase() {
  await db();
}

connectToDatabase();

// Handle GET request
export async function GET(request: Request) {

  try {
    const token = request.headers.get('token');
    if (!token) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    console.log(token);

    // Verify the JWT token
    const decoded = jwt.verify(token, JWT_SECRET);
    if (!decoded) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    console.log(decoded);

    // Query the database for the user
    const userId = typeof decoded === 'string' ? decoded : decoded.id;
    const user = await User.findById(userId);
    if (!user) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    // Successful response
    return NextResponse.json({
      message: 'User authenticated',
      user: { id: user._id, name: user.name, email: user.email },
    });

  }
  catch (error) {
    console.error('Error during authentication:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
  

}


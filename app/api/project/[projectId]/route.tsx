import { NextResponse } from 'next/server';
import { db } from '@/lib/mongodb';
import Project from '@/models/Project';

// Connect to the database
async function connectToDatabase() {
  await db();
}

export async function GET(request: Request) {
  // Connect to the database
  await connectToDatabase();

  const url = new URL(request.url);
  const projectId = url.pathname.split('/').pop();
  
  console.log("ID:", projectId);

  if (projectId) {
    try {
      const project = await Project.findById(projectId);

      if (project) {
        return NextResponse.json(project);
      } else {
        return NextResponse.json({ message: 'Project not found' }, { status: 404 });
      }
    } catch (error) {
      console.error('Error fetching project:', error);
      return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
  }

  return NextResponse.json({ message: 'Project ID is required' }, { status: 400 });
}

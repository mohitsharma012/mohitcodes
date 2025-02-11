import { NextResponse } from 'next/server';
import { db } from '@/lib/mongodb';
import Project from '@/models/Project';
import { request } from 'http';

// Connect to the database
async function connectToDatabase() {
  await db();
}

export async function GET(request: Request) {
  const url = new URL(request.url);
  const id = url.searchParams.get('id'); 

  await connectToDatabase();
  
  if (id) {
    const project = await Project.findById(id);
    if (project) {
      return NextResponse.json(project);
    } else {
      return NextResponse.json({ message: 'Project not found' }, { status: 404 });
    }
  }
  
  const projects = await Project.find();
  return NextResponse.json(projects);
}

export async function POST(request: Request) {
  try {
    const { title, description, imageUrl, imageUrl_2, imageUrl_3, livelink,  } = await request.json();

    if (!(title && description && imageUrl )) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    await connectToDatabase();

    const project = new Project({
      title,
      description,
      imageUrl,
      imageUrl_2,
      imageUrl_3,
      livelink
    });

    await project.save();
    return NextResponse.json(project, { status: 201 });
  } catch (error) {
    console.error('Error during project creation:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}



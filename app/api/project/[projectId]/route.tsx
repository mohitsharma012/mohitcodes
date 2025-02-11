import { NextResponse } from 'next/server';
import { db } from '@/lib/mongodb';
import Project from '@/models/Project';

// Connect to the database
async function connectToDatabase() {
  await db();
}

export async function GET(request: Request) {
  await connectToDatabase();

  const url = new URL(request.url);
  const projectId = url.pathname.split('/').pop();
  
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


export async function DELETE(request: Request) {
  try {
    await connectToDatabase();

    const url = new URL(request.url);
    const projectId = url.pathname.split('/').pop();

    await Project.findByIdAndDelete(projectId);

    return NextResponse.json({ message: 'Project deleted' }, { status: 200 });
  }
  catch (error) {
    console.error('Error during project deletion:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}


export async function PUT(request: Request) {
  try {
    await connectToDatabase();

    const url = new URL(request.url);
    const id = url.pathname.split('/').pop();

    const { title, description, imageUrl, imageUrl_2, imageUrl_3, livelink } = await request.json();

    const project = await Project.findByIdAndUpdate(id, {
      title,
      description,
      imageUrl,
      imageUrl_2,
      imageUrl_3,
      livelink
    }, { new: true });

    if (project) {
      return NextResponse.json(project);
    } else {
      return NextResponse.json({ message: 'Project not found' }, { status: 404 });
    }
  } catch (error) {
    console.error('Error during project update:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
import { NextResponse } from 'next/server';
import { db } from '@/lib/mongodb';
import Project from '@/models/Project';
import { request } from 'http';

// Connect to the database
async function connectToDatabase() {
  await db();
}

connectToDatabase();


export async function GET(request: Request) {
  const url = new URL(request.url);
  const id = url.searchParams.get('id'); // Get the 'id' from query params
  
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
    const { title, description, imageUrl, livelink, gitlink, technologies } = await request.json();

    // Ensure 'technologies' is an array of strings
    const techArray = Array.isArray(technologies) ? technologies : [technologies];

    console.log('techArray:', techArray);
    console.log('imageUrl:', imageUrl);

    const project = new Project({
      title,
      description,
      imageUrl,
      livelink,
      gitlink,
      technologies: techArray, // Ensuring it's an array
    });

    await project.save();
    return NextResponse.json(project, { status: 201 });
  } catch (error) {
    console.error('Error during project creation:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}


export async function PUT(request: Request) {
  try {
    const { id, title, description, imageUrl, livelink, gitlink, technologies } = await request.json();

    // Ensure 'technologies' is an array of strings
    const techArray = Array.isArray(technologies) ? technologies : [technologies];

    const project = await Project.findByIdAndUpdate(id, {
      title,
      description,
      imageUrl,
      livelink,
      gitlink,
      technologies: techArray, // Ensuring it's an array
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

export async function DELETE(request: Request) {
  try {
    const { id } = await request.json();

    await Project.findByIdAndDelete(id);

    return NextResponse.json({ message: 'Project deleted' }, { status: 200 });
  }
  catch (error) {
    console.error('Error during project deletion:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}

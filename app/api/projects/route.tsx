import type { NextApiRequest, NextApiResponse } from "next";
import connectDB from "@/lib/connectDB";
import Project from "@/lib/models/Project";
import { NextResponse } from "next/server";


export async function POST(request: NextApiRequest){
    // Connect to the database
    await connectDB();

    // Create a new project
    const { title, description, imageUrl, link, livelink, gitlink, technologies } = request.body;

    // Create a new project
    const project = new Project({
        title,
        description,
        imageUrl,
        link,
        livelink,
        gitlink,
        technologies,
    });

    //Save the project to database
    await project.save();

    // Return the project
    return NextResponse.json(project);



}


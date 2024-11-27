import { NextResponse } from 'next/server';
import { getProjects, createProject } from '@/lib/projects';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const project = await createProject(data);
    return NextResponse.json(project);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create project' }, { status: 500 });
  }
}

export async function GET() {
  try {
    const projects = await getProjects();
    return NextResponse.json(projects);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch projects' }, { status: 500 });
  }
}
import { prisma } from './db';

export async function getProjects() {
  return prisma.project.findMany({
    include: {
      timeEntries: true,
    },
  });
}

export async function createProject(data: {
  name: string;
  description?: string;
}) {
  return prisma.project.create({
    data,
  });
}
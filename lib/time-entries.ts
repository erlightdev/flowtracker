import { prisma } from './db';

export async function createTimeEntry(data: {
  description: string;
  startTime: Date;
  endTime?: Date;
  duration?: number;
  projectId?: string;
}) {
  return prisma.timeEntry.create({
    data,
  });
}

export async function getTimeEntries() {
  return prisma.timeEntry.findMany({
    include: {
      project: true,
    },
    orderBy: {
      startTime: 'desc',
    },
  });
}

export async function getWeeklyActivity() {
  const startOfWeek = new Date();
  startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay());
  
  return prisma.timeEntry.groupBy({
    by: ['startTime'],
    _sum: {
      duration: true,
    },
    where: {
      startTime: {
        gte: startOfWeek,
      },
    },
  });
}
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Create some contacts
  const john = await prisma.contact.create({
    data: {
      firstName: 'John',
      lastName: 'Doe',
      jobs: {
        create: [
          {
            title: 'Software Engineer',
            description: 'Develop new features for the company\'s flagship product.',
          },
          {
            title: 'Project Manager',
            description: 'Lead a team of engineers to deliver a high-quality product on time and on budget.',
          },
        ],
      },
    },
    include: {
      jobs: true,
    },
  });

  const jane = await prisma.contact.create({
    data: {
      firstName: 'Jane',
      lastName: 'Smith',
      jobs: {
        create: [
          {
            title: 'Data Analyst',
            description: 'Analyze large datasets to identify trends and insights.',
          },
          {
            title: 'Marketing Manager',
            description: 'Develop and execute marketing campaigns to increase brand awareness and drive sales.',
          },
        ],
      },
    },
    include: {
      jobs: true,
    },
  });

  console.log({ john, jane });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

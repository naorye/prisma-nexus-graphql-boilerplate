import { makeSchema } from 'nexus';
import { join } from 'path';
import * as types from './types';

const schema = makeSchema({
  sourceTypes: {
    modules: [{ module: '.prisma/client', alias: 'PrismaClient' }],
  },
  contextType: {
    module: join(__dirname, '../src/context.ts'),
    export: 'Context',
  },
  outputs: {
    typegen: join(__dirname, 'generated/nexus-typegen/index.d.ts'),
    schema: join(__dirname, 'generated/schema.graphql'),
  },
  types
});

export { schema };

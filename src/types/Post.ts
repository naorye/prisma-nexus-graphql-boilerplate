import { objectType } from 'nexus';

const Post = objectType({
  name: 'Post',
  definition(t) {
    t.id('id');
    t.string('authorId');
    t.string('title');
    t.string('content');
    t.boolean('published');
    t.field('author', {
      type: 'User',
      async resolve(parent, _args, ctx) {
        const user = await ctx.prisma.user.findUnique({
          where: { id: parent.authorId },
        });
        return user;
      },
    });
  },
});

export { Post };

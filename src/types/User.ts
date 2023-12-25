import { nullable, objectType, queryType, stringArg } from 'nexus';

const User = objectType({
  name: 'User',
  definition(t) {
    t.id('id');
    t.string('email');
    t.string('name');
    t.list.field('posts', {
      type: 'Post',
      async resolve(parent, _args, ctx) {
        // console.log(parent.posts)

        // const posts = await ctx.prisma.post.findMany({
        //   where: { authorId: parent.id },
        // });
        // @ts-ignore
        return parent.posts;
      },
    });
  },
});

const usersQuery = queryType({
  definition(t) {
    t.list.field('users', {
      type: 'User',
      args: {
        name: nullable(stringArg()),
      },
      resolve(_root, args, ctx) {
        return ctx.prisma.user.findMany({
          where: { name: { contains: args.name ?? '' } },
        });
      },
    });
  },
});

const users2Query = queryType( {
  definition(t) {
    t.list.field('test', {
      type: 'User',
      args: {
        name: nullable(stringArg()),
      },
      resolve(_root, args, ctx) {
        return ctx.prisma.user.findMany({
          where: { name: { contains: args.name ?? '' } },
          include:{
            posts: true
          }
        });
      },
    });
  },
});

export { User, usersQuery , };

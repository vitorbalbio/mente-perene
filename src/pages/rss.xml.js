import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { withBase } from '../utils/withBase';

export async function GET(context) {
  const posts = await getCollection('posts');
  
  // Sort posts by date (most recent first)
  const sortedPosts = posts.sort((a, b) => 
    new Date(b.data.date).valueOf() - new Date(a.data.date).valueOf()
  );
  
  return rss({
    title: 'Mente Perene',
    description: 'Artigos e pensamentos de uma mente sempre em movimento.',
    site: context.site,
    items: sortedPosts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.excerpt,
      link: withBase(`/posts/${post.id}/`),
    })),
    customData: `<language>pt-br</language>`,
  });
}

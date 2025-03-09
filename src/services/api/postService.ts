export async function getPostBySlug(slug: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/post/slug/${slug}`,
    { cache: 'no-store' }
  );
  const { data } = await res.json();
  return data.post || null;
}

export async function getPosts() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/post/list`);
  const { data } = await res.json();
  return data.posts || [];
}

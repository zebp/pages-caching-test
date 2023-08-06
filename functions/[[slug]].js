export const onRequestGet = async ({ params }) =>
  new Response(`Hit a function ${params.slug}!`);

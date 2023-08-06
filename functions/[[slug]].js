/**
 * @param {{ request: Request, params: { slug: string }}}} param
 * @returns
 */
export const onRequestGet = async ({ request, params }) => {
  console.log(request.url);
  return new Response(`Hit a function ${params.slug}!`);
};

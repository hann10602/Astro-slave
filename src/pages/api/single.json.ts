export async function GET({ params, request }: any) {
  return new Response(
    JSON.stringify({
      name: "Astro",
      title: "title",
      url: "https://astro.build/",
    })
  );
}

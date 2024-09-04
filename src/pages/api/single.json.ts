export async function GET({}: any) {
  return new Response(
    JSON.stringify({
      name: "Astro",
      title: "title",
      url: "https://astro.build/",
    })
  );
}

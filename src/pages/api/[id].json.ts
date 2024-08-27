const usernames = ["Sarah", "Chris", "Yan", "Elian"];

export async function GET({ params, request }: any) {
  const id = params.id;
  return new Response(
    JSON.stringify({
      name: usernames[id],
    })
  );
}

export function getStaticPaths() {
  return [
    { params: { id: "0" } },
    { params: { id: "1" } },
    { params: { id: "2" } },
    { params: { id: "3" } },
  ];
}

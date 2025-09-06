import type { APIRoute } from "astro";
import { getPostgresConfig } from "../../../lib/config";
import { PGApiSchema } from "../../../lib/schema";

export const prerender = true;

export const GET: APIRoute = ({ params, request }) => {
  const url = new URL(request.url);
  console.log("Params from Astro", params);
  let searchParams: Record<string, string | number> = {};
  for (const [key, value] of url.searchParams.entries()) {
    const int = parseInt(value);
    if (!isNaN(int)) {
      searchParams[key] = int;
    } else {
      searchParams[key] = value;
    }
  }
  console.log("Params:", searchParams);
  const req = PGApiSchema.safeParse(searchParams);
  if (!req.success) {
    return new Response(
      JSON.stringify({ errors: JSON.parse(req.error.message) }),
      {
        status: 400,
        statusText: "Bad Request",
      },
    );
  }
  return new Response(JSON.stringify(getPostgresConfig(req.data)));
};

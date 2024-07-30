export async function GET(req: Request): Promise<Response> {
  return Response.json({ hello: 'world', url: req.url })
}

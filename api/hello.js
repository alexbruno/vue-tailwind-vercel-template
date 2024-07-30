// src/api/hello.ts
async function GET(req) {
  return Response.json({ hello: "world", url: req.url });
}
export {
  GET
};
//# sourceMappingURL=hello.js.map

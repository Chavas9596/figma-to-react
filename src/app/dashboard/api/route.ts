export const dynamic = 'force-static'

export async function GET() {
  const res = await fetch('https://fakestoreapi.com/products')
  const data = await res.json()
 
  return Response.json({ data })
}

export async function POST(request: Request) {
  const body = await request.json() // if you need to handle request body
  const res = await fetch('https://fakestoreapi.com/products')
  const data = await res.json()
 
  return Response.json({ data })
}
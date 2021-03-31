import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { slug } = req.query
  res.end(`Post: ${Array(slug).join(', ')}`) // slug.join(', ') → Array(slug).join(', ')
}
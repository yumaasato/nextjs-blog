import { NextApiRequest, NextApiResponse } from 'next'

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const { slug } = req.query
  res.end(`Post: ${Array(slug).join(', ')}`) // slug.join(', ') → Array(slug).join(', ')
}

export default handler
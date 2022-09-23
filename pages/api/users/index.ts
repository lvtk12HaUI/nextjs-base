import { connect } from '../../../config/db';

export default async function handler(req: any, res: any) {
  switch (req.method) {
    case 'GET':
      return await getUses(req, res);
    default:
      return res.status(400).json({ message: 'bad request' });
  }
}

const getUses = async (req: any, res: any) => {
  try {
    const result = await connect.query('SELECT id, first_name, last_name, email FROM users');
    
    return res.status(200).json(result);
  } catch (error) {
    console.log('error', error);
    
    return res.status(500).json({ message: error });
  }
};

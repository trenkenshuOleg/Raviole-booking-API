import * as express from 'express';
import {Request, Response, NextFunction} from 'express';

const headers = (req: Request, res: Response, next: NextFunction) => {
	console.log(req.headers);
    const origin = req.headers.origin ? req.headers.origin : ''
	res.setHeader('Access-Control-Allow-Origin', origin)
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
	res.setHeader('Access-Control-Allow-Credentials', 'true')
	next()
}

export default headers
import { NextFunction, Request, Response } from 'express'
import passport from 'passport'

import getUserWithToken from 'modules/user/utils/getUserWithToken'

const withOptionalUser = async (req: Request, res: Response, next: NextFunction) => {
	passport.authenticate('jwt', { session: false }, (err, databaseUser) => {
		if (err) return res.send({ message: err })

		if (databaseUser) {
			req.user = databaseUser
		}

		return next()
	})(req, res, next)
}

export default withOptionalUser

import to from 'await-to-js'
import { Request, Response } from 'express'

import api from 'core/api'
import { LocalType } from 'core/api/types'

import { BASE_EVENT_URL } from 'modules/event/constants'
import { EventDetail } from 'modules/event/types/event'
import { TatEventDetail } from 'modules/event/types/tatEvent'
import resolveEvent from 'modules/event/utils/resolveEvent'

const getEvent = async (req: Request, res: Response) => {
	const { eventId } = req.params
	const { locale } = req.query

	if (!eventId) {
		return res.status(400).send('require event id to get data')
	}

	const path = `${BASE_EVENT_URL}/${eventId}`

	const [error, data] = await to(
		api.fetch<{ result: TatEventDetail }>({ locale: locale as LocalType, path }),
	)

	if (error) {
		return res.status(502).send(error.message)
	}

	const tatEvent = data.result
	const event = resolveEvent(tatEvent)

	return res.send(event)
}

export default getEvent

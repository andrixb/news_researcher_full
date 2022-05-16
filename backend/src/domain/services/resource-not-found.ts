import { BaseObject } from '../../infrastructure/interfaces';
import { CustomError } from '../../infrastructure/middleware/error-handling-middleware';

export class ResourceNotFoundError extends CustomError {
	static defaultCode = 'RESOURCE_NOT_FOUND';

	constructor(resource: string, extraData: BaseObject = {}) {
		super({
			code: ResourceNotFoundError.defaultCode,
			statusCode: 404,
			message: `${resource} not found`,
			data: {
				...extraData,
				resource,
			},
		});
	}
}

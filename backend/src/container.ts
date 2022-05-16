import { AwilixContainer, createContainer, Lifetime } from 'awilix';
import { getInfrastructureContainer, InfrastructureDependencies } from './infrastructure/container';
import { ServerFactory } from './user-interface/server-factory';
import { getRouterContainer, RouterDependencies } from './user-interface/routers/container';
import { getServiceContainer, ServiceDependencies } from './domain/services/container';
import { getUseCaseContainer, UseCaseDependencies } from './domain/usescases/container';
import { ControllerDependencies, getControllerContainer } from './user-interface/controllers/container';

let container: AwilixContainer;

export function getMainContainer() {
	if (!container) {
		container = createContainer();
		container.loadModules([`${__dirname}/user-interface/server-factory!(*.spec)!(*.test)*.{ts,js}`], {
			formatName: 'camelCase',
			resolverOptions: {
				lifetime: Lifetime.SINGLETON,
			},
		});
		container.register(getInfrastructureContainer().registrations);
		container.register(getServiceContainer().registrations);
		container.register(getUseCaseContainer().registrations);
		container.register(getControllerContainer().registrations);
		container.register(getRouterContainer().registrations);
	}
	return container;
}

export type Dependencies = {
	serverFactory: ServerFactory;
} & InfrastructureDependencies &
	RouterDependencies &
	ServiceDependencies &
	UseCaseDependencies &
	ControllerDependencies;

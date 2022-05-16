import { AwilixContainer, createContainer, Lifetime } from 'awilix';
import { getServiceContainer, ServiceDependencies } from './Infrastructure/Services/container';
import { getUseCaseContainer, UseCaseDependencies } from './Domain/useCases/container';
import { getInfrastructureContainer, InfrastructureDependencies } from './Infrastructure/container';
import { ControllerDependencies, getControllerContainer } from './UserInterface/Controllers/container';
import { getRouterContainer, RouterDependencies } from './UserInterface/Routers/container';
import { ServerFactory } from './UserInterface/serverFactory';

let container: AwilixContainer;

export function getMainContainer() {
	if (!container) {
		container = createContainer();
		container.loadModules([`${__dirname}/UserInterface/ServerFactory!(*.spec)!(*.test)*.{ts,js}`], {
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

import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';


export class AzureSqlGeobackuppolicies implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Azure SQL Geobackuppolicies',
		name: 'N8nDevAzureSqlGeobackuppolicies',
		icon: { light: 'file:./azure-sql-geobackuppolicies.png', dark: 'file:./azure-sql-geobackuppolicies.dark.png' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'Manages Azure SQL Database geo backup policy read and update operations.',
		defaults: { name: 'Azure SQL Geobackuppolicies' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevAzureSqlGeobackuppoliciesApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [],
			"default": ""
		},
		
		],
	};
}

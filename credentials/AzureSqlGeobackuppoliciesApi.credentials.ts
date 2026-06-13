import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class AzureSqlGeobackuppoliciesApi implements ICredentialType {
        name = 'N8nDevAzureSqlGeobackuppoliciesApi';

        displayName = 'Azure SQL Geobackuppolicies API';

        icon: Icon = { light: 'file:../nodes/AzureSqlGeobackuppolicies/azure-sql-geobackuppolicies.png', dark: 'file:../nodes/AzureSqlGeobackuppolicies/azure-sql-geobackuppolicies.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: '',
                        required: true,
                        placeholder: 'https://api.example.com',
                        description: 'The base URL of your Azure SQL Geobackuppolicies API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}

# `config.json`

`config.json` is the configuration file used for deploying Airnode.
It is composed of five main sections:

1. `ois`: A list of [OIS](/airnode/ois.md) objects
1. `triggers`: A list of trigger objects, each mapping to an endpoint defined in an OIS in 1
1. `nodeSettings`: An object containing node configuration parameters
1. `environment`: A list of node environment variables
1. `id`: A UUID that specifies a `config.json` file

Contents of a `config.json` file:

```json
{
  "ois": [
    ...
  ],
  "triggers": {
    ...
  },
  "nodeSettings": {
    ...
  },
  "environment": [
    ...
  ],
  "id": "..."
}
```

## `ois`

`ois` is a list of OIS objects as described in [OIS](/airnode/ois.md).
Since each OIS defines the integration of a single API to an oracle, this means that a node can serve multiple APIs.
However, this does not mean that nodes can be shared between multiple providers.
Each node serves the APIs of a single provider.

## `triggers`

`triggers` are events that trigger an API call and an Ethereum transaction by Airnode.
Triggers of different types are kept in lists under their respective keys:

- `request` - When the node sees an event with its `providerId` and this trigger's `endpointId` emitted from the central Airnode contract, it responds to it with the respective endpoint defined in the OIS.
  - `endpointId`
  - `oisTitle`
  - `endpointName`


```json
{
  "request": [
    {
      "endpointId": "...",
      "oisTitle": "...",
      "endpointName": "..."
    },
    ...
  ],
  ...
}
```

## `nodeSettings`

An object containing the following configuration parameters:

- `providerIdShort` - The label used to identify this specific provider among the cloud deployments.
The deployer uses the first 7 characters of the full `providerId` by default.
For example, if the `providerId` is `0x9e5a89de5a7e780b9eb5a61425a3a656f0c891ac4c56c07037d257724af490c9`, `providerIdShort` would be `9e5a89d`.
**This field must not exist for the first deployment, and must exist for redeployments.**

- `nodeVersion` - The node version this `config.json` is supposed to be used with.
The deployer checks this and refuses to deploy if its node version does not agree with this field.

- `cloudProvider` - The cloud provider that will be used to deploy the node.
Can be `aws`.

- `region` - The cloud provider region that the node will be deployed at.

- `stage` - The label used to distinguish between multiple deployments of the same provider on a cloud provider.
For example, the provider may make multiple deployments with `stage`s set as `dev`, `ropsten`, `mainnet`, where each of these deployments would use the same private key and have the same `providerId`.

- `chains` - A list of blockchain configurations. See [chains](#nodesettingschains) below.

### `nodeSettings.chains`

Airnode can be configured to work with multiple blockchain providers, types and networks.
Configurations for each chain is represented with an object in this `chains` list.

**Required**

- `id` - the corresponding chain (or network) ID. A list of known Ethereum chain IDs can be found at [EIP-155](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-155.md#list-of-chain-ids), although this list is not exhaustive and the `id` does not necessarily need to be a popular or known value.

- `type` - the type of blockchain to connect to. Currently only `evm` is supported for Ethereum and other EVM-based blockchains, although other types are planned to be supported in the future.

- `chainProviders` - the names of blockchain providers serving the given chain ID and type.
Airnode will expect the URL of these providers in the environment variables as described in the [`environment`](#environment) section.

- `contracts` - An object that keeps the addresses of the contracts deployed on the respective chain.
It has to include the following contract addresses:

  1. `Airnode`

  2. `Convenience`

**Optional**

- `providerAdminForRecordCreation` - the master address that will be authorized to update the authorizers of the provider's endpoints (see the [protocol docs](/request-response-protocol/general-structure.md) for more information).
Note that the node only uses this while creating the provider record.
Changing this after the provider record is created will not have any effect.
This field is optional, but not having it means that the node will not be able to create a provider record on the respective chain.

- `blockHistoryLimit` - the number of blocks in the past that Airnode should use to search for requests or events. Defaults to `300` (roughly 1 hour for Ethereum).

- `minConfirmations` - the number of confirmations required for a request or event to be considered valid. Default to `0`.

- `ignoreBlockedRequestsAfterBlocks` - the number of blocks that needs to pass for the node to start ignoring blocked requests. Defaults to `20`.

An example object from the `chains` list:

```json
{
  "id": 1,
  "type": "evm",
  "chainProviders": [
    "my-infura-mainnet",
    "secondary-mainnet"
  ],
  "contracts": {
    "Airnode": "0xf1d4...0bd1",
    "Convenience": "0x12ab...de56"
  },
  "providerAdminForRecordCreation": "0x5e00...F410",
  "blockHistoryLimit": 300,
  "minConfirmations": 0,
  "ignoreBlockedRequestsAfterBlocks": 20,
}
```

### Example

A more complete example of a `nodeSettings` configuration:

```json
{
  "providerIdShort": "9e5a89d",
  "nodeVersion": "0.1.0",
  "cloudProvider": "aws",
  "region": "us-east-1",
  "stage": "testnet",
  "chains": [
    {
      "id": 1,
      "type": "evm",
      "chainProviders": [
        "infura-mainnet"
      ],
      "providerAdminForRecordCreation": "0x5e00...F410",
      "blockHistoryLimit": 300,
      "minConfirmations": 0,
      "ignoreBlockedRequestsAfterBlocks": 20
    },
    {
      "id": 3,
      "type": "evm",
      "chainProviders": [
        "infura-ropsten"
      ],
      "contracts": {
        "Airnode": "0xf1d4...0bd1",
        "Convenience": "0x12ab...de56"
      },
      "providerAdminForRecordCreation": "0x5e00...F410",
      "blockHistoryLimit": 300,
      "minConfirmations": 0,
      "ignoreBlockedRequestsAfterBlocks": 20
    }
  ]
}
```

## `environment`

Any entry in this list will be set as an environment variable at the node.
There are two potential ways these entries can be structured:

1. Only the name of the environment variable name is defined, and the application that will use the `config.json` file (e.g., the deployer) will look for the value of the variable in its own environment variables under the same name (the deployer is fed environment variables through a [`.env`](https://github.com/api3dao/airnode/blob/master/Docker.md#docker-instructions) file).
```json
{
  "name": "myEnvironmentVariableName"
}
```

2. Both the name and the value of the environment variable is defined.
The application that uses the `config.json` file passes the given value as the environment variable to the node.
```json
{
  "name": "myEnvironmentVariableName",
  "value": "myEnvironmentVariableValue"
}
```

Here are potential environment variable names:

- `SECURITYSCHEME_${OIS_TITLE}_${SECURITY_SCHEME_NAME}`: Used to define the security scheme values (e.g., an API key).
For example, the [OIS in the docs](/airnode/ois.md) would need to have `SECURITYSCHEME_myOisTitle_mySecurityScheme1` defined.

- `CHAINPROVIDER_${CHAIN_TYPE}_${CHAIN_ID}_${PROVIDER_NAME}`: Used to define the URL of a blockchain provider.
For example, the [example above](#example) would need to have `CHAINPROVIDER_evm_1_infura-mainnet` and `CHAINPROVIDER_evm_3_infura-ropsten` defined.

- `LOG_LEVEL`: The level that Airnode logs at.
Either `DEBUG`, `INFO`, `WARN` or `ERROR`.

- `LOG_FORMAT`: The format that Airnode should use to output logs.
Either `json` or `plain`.

- `MASTER_KEY_MNEMONIC` (YOU ARE NOT RECOMMENDED TO USE THIS): Normally, the deployer retrieves the master key mnemonic from AWS SSM.
You can use this field to override that functionality.

Example `environment` contents (the blockchain provider URLs will be expected to be provided in the environment variables):
```json
[
  {
    "name": "SECURITYSCHEME_myOisTitle_mySecurityScheme1",
    "value": "c2qiuFR5RVrMXmYhunll"
  },
  {
    "name": "CHAINPROVIDER_evm_1_infura-mainnet"
  },
  {
    "name": "CHAINPROVIDER_evm_3_infura-ropsten"
  },
  {
    "name": "LOG_LEVEL",
    "value": "DEBUG"
  },
  {
    "name": "LOG_FORMAT",
    "value": "json"
  }
]
```

## `id`

A UUID for the specific `config.json` file.

[Home](/README.md#airnode)

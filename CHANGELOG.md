## 2024-07-06

### Updated
- Updated various dependencies including `@aws-sdk/client-iam`, `@aws-sdk/client-sso-oidc`, `@aws-sdk/middleware-logger`, `@smithy/core`, `@smithy/middleware-retry`, `@smithy/middleware-serde`, `aws-cdk-lib`, `cdk-nag`, and others to their latest versions.
- Increased the project version to `0.2.6`.

## 2024-06-02

### Updated
- Updated various dependencies including `@aws-sdk/client-iam`, `@aws-sdk/client-sso-oidc`, `@aws-sdk/middleware-logger`, `@smithy/core`, `@smithy/middleware-retry`, `@smithy/middleware-serde`, `aws-cdk-lib`, and `cdk-nag` to their latest versions.
- Increased the project version to `0.2.5`.

## 2024-04-20

### Updated
- Updated the versions of "@aws-sdk/client-iam", "@aws-sdk/client-sso-oidc", "aws-cdk-lib", and "cdk-nag" in the package-lock.json and package.json files.
- Updated the version of "@aws-sdk/client-iam" from "3.554.0" to "3.556.0"
- Updated the version of "@aws-sdk/client-sso-oidc" from "3.554.0" to "3.556.0"
- Updated the version of "aws-cdk-lib" from "2.137.0" to "2.138.0"
- Updated the version of "cdk-nag" from "2.28.91" to "2.28.94"

## 2024-04-18

### Added
- Added import statement for `cdk-nag` and `AwsSolutionsChecks` aspect to check best practices based on AWS Solutions Security Matrix in `bin/aws-github-oidc-provider.ts`
- Added dependency on `cdk-nag` version 2.28.91 in `package-lock.json` and `package.json

## 2024-04-16

### Changed
- Updated stack naming in `AwsGithubOidcProviderStack` in `bin/aws-github-oidc-provider.ts

## 2024-04-16

### Changed
- Updated `APP_NAME` in `.env.example` from `sodx-aws-github-oidc-provider` to `sodas-aws-github-oidc-provider`
- Updated `OWNER` in `.env.example` from `sodx` to `sodas`
- Updated `version` in `package-lock.json` from `0.2.0` to `0.2.1`
- Updated `version` in `package.json` from `0.2.0` to `0.2.1

## 2024-04-16

### Added
- Imports for dotenv, Aspects, and checkEnvVariables
- dotenv.config() to load environment variables from .env file
- checkEnvVariables function to check if required environment variables are set
- appAspects to store Aspects of the app
- check for APP_NAME environment variable
- variables for deployRegion, deployEnvironment, appName, and owner
- ApplyTags aspect to apply tags to resources
- stackProps object to store stack properties
- provider variable to create GithubActionsIdentityProvider
- CfnOutput to export provider information
- dotenv as a dependency in package.json
- AwsGithubOidcProviderStackProps interface
- JSDoc comments to AwsGithubOidcProviderStack class
- ProcessEnv declaration for CDK_DEPLOY_REGION, ENVIRONMENT, and OWNER environment variables
- ApplyTags class to apply tags to resources
- visit method to ApplyTags class to apply tags to taggable resources
- applyTag method to ApplyTags class to apply a single tag to a resource
- example values for APP_NAME, CDK_DEPLOY_REGION, ENVIRONMENT, and OWNER environment variables
- dependencies for dotenv and aws-cdk-github-oidc

### Changed
- AwsGithubOidcProviderStack constructor to accept props of type AwsGithubOidcProviderStackProps
- dependencies for aws-cdk-lib, constructs, aws-cdk, and typescript
- dependencies for aws-cdk-lib, constructs, aws-cdk, and typescript in package-lock.json
- AwsGithubOidcProviderStack constructor to pass stackProps to super
- tsconfig.json to remove target, module, and lib compiler options, add extends and include compiler options, and update outDir compiler option
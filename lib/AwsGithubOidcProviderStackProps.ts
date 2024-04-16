import * as cdk from 'aws-cdk-lib';

/**
 * Interface representing the properties required to configure the AwsGithubOidcProviderStack.
 *
 * @property {string} resourcePrefix - A prefix used for naming AWS resources to ensure uniqueness.
 * @property {string} deployRegion - The AWS region where the resources will be deployed.
 * @property {string} deployEnvironment - The AWS environment, eg: development, staging, production,...
 * @property {string} appName - The name of the application.
 */
export interface AwsGithubOidcProviderStackProps extends cdk.StackProps {
    readonly resourcePrefix: string;
    readonly deployRegion: string | undefined;
    readonly deployEnvironment: string;
    readonly appName: string;
}

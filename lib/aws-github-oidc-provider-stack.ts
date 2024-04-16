import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { GithubActionsIdentityProvider } from "aws-cdk-github-oidc";
import { AwsGithubOidcProviderStackProps } from './AwsGithubOidcProviderStackProps';

/**
 * The `AwsGithubOidcProviderStack` class is responsible for setting up AWS resources necessary for integrating GitHub Actions with AWS via OpenID Connect (OIDC).
 * This integration allows for a secure way to deploy AWS resources using GitHub Actions without the need to store sensitive AWS credentials as secrets in GitHub.
 *
 * @param {Construct} scope - The scope in which to define this construct. Usually, this is an instance of a `cdk.App` or a `cdk.Stack`.
 * @param {string} id - The logical ID of this stack within the AWS CloudFormation template. This ID must be unique within the scope.
 * @param {AwsGithubOidcProviderStackProps} props - An object containing properties that configure the behavior of the `AwsGithubOidcProviderStack`. This includes:
 *   - `resourcePrefix`: A prefix used for naming AWS resources created by this stack. This helps in organizing resources and avoiding naming conflicts.
 *   - `deployRegion`: The AWS region where the resources will be deployed. If undefined, the default region of the AWS account is used.
 *   - `deployEnvironment`: A string indicating the deployment environment (e.g., "production", "development"). This affects the removal policy of the created resources.
 *   - `appName`: The name of the application. This is used for tagging resources and can help in identifying resources related to this application.
 */
export class AwsGithubOidcProviderStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: AwsGithubOidcProviderStackProps) {
    super(scope, id, props);

    const provider = new GithubActionsIdentityProvider(this, `${props.resourcePrefix}-GithubActionsIdentityProvider`);

    // export provider openIdConnectProviderArn
    new cdk.CfnOutput(this, 'openIdConnectProviderArn', {
      exportName: `${props.resourcePrefix}-openIdConnectProviderArn`,
      value: provider.openIdConnectProviderArn,
      description: 'The URL of the OIDC identity provider.',
    });

    // export provider openIdConnectProviderIssuer
    new cdk.CfnOutput(this, 'openIdConnectProviderIssuer', {
      exportName: `${props.resourcePrefix}-openIdConnectProviderIssuer`,
      value: provider.openIdConnectProviderIssuer,
      description: 'The URL of the OIDC identity provider.',
    });

    // export provider thumbprints
    new cdk.CfnOutput(this, 'openIdConnectProviderthumbprints', {
      exportName: `${props.resourcePrefix}-openIdConnectProviderthumbprints`,
      value: provider.openIdConnectProviderthumbprints,
      description: 'The thumbprints of the OIDC identity provider.',
    });
  }
}

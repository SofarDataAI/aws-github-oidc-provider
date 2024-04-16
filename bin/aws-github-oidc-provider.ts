#!/usr/bin/env node
import 'source-map-support/register';

import * as cdk from 'aws-cdk-lib';
import * as dotenv from 'dotenv';
import { Aspects } from 'aws-cdk-lib';
import { ApplyTags } from '../utils/apply-tag';
import { checkEnvVariables } from '../utils/check-environment-variable';
import { AwsGithubOidcProviderStack } from '../lib/aws-github-oidc-provider-stack';
import { AwsGithubOidcProviderStackProps } from '../lib/AwsGithubOidcProviderStackProps';

dotenv.config(); // Load environment variables from .env file
const app = new cdk.App();
const appAspects = Aspects.of(app);

// check APP_NAME variable
checkEnvVariables('APP_NAME','ENVIRONMENT','CDK_DEPLOY_REGION', 'OWNER');

const { CDK_DEFAULT_ACCOUNT: account, CDK_DEFAULT_REGION: region } = process.env;

const deployRegion = process.env.CDK_DEPLOY_REGION!;
const deployEnvironment = process.env.ENVIRONMENT!;
const appName = process.env.APP_NAME!;
const owner = process.env.OWNER!;

appAspects.add(new ApplyTags({
  environment: deployEnvironment as 'development' | 'staging' | 'production' | 'demonstration',
  project: appName,
  owner: owner,
}));

const stackProps: AwsGithubOidcProviderStackProps = {
  resourcePrefix: `${appName}-${deployEnvironment}`,
  env: {
      region: deployRegion,
      account,
  },
  deployRegion,
  deployEnvironment,
  appName,
};
new AwsGithubOidcProviderStack(app, `AwsGithubOidcProviderStack`, {
  ...stackProps,
  stackName: `${appName}-${deployEnvironment}-AwsGithubOidcProviderStack`,
  description: `AwsGithubOidcProviderStack for ${appName} in ${deployRegion} ${deployEnvironment}.`,
});

app.synth();

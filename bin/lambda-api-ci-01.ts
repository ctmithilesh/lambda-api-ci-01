#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { CIStack } from '../lib/ci-stack'

const app = new cdk.App();
new CIStack(app, 'LambdaApiCi01Stack',{
    repositoryName:'lambda-api-ci'
});

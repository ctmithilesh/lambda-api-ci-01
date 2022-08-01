#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { LambdaApiCi01Stack } from '../lib/lambda-api-ci-01-stack';

const app = new cdk.App();
new LambdaApiCi01Stack(app, 'LambdaApiCi01Stack');

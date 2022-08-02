#!/usr/bin/env node
import "source-map-support/register"
import cdk = require("aws-cdk-lib")
import { LambdaApiCi01Stack } from "../lib/lambda-api-ci-01-stack";

export const lambdaApiStackName = "CDKExampleLambdaApiStack"
export const lambdaFunctionName = "CDKExampleWidgetStoreFunction"

const app = new cdk.App()
new LambdaApiCi01Stack(app, lambdaApiStackName, {
    functionName: lambdaFunctionName,
})
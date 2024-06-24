import { awscdk } from "projen";
import { NodePackageManager } from "projen/lib/javascript";

const project = new awscdk.AwsCdkConstructLibrary({
  author: "Common Fate",
  authorAddress: "hello@commonfate.io",
  cdkVersion: "2.80.0",
  defaultReleaseBranch: "main",
  jsiiVersion: "~5.4.0",
  license: "MIT",
  name: "@common-fate/awscdk-aws-idc-iam-roles",
  projenrcTs: true,
  packageManager: NodePackageManager.PNPM,
  mergify: false,
  eslint: false,
  repositoryUrl:
    "https://github.com/common-fate/awscdk-aws-idc-integration.git",

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});

const npmrcFile = project.tryFindObjectFile(".npmrc");
npmrcFile?.addOverride("auto-install-peers", "true");

project.synth();

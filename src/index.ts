import { Construct } from "constructs";
import { Role } from "aws-cdk-lib/aws-iam";
import { aws_iam } from "aws-cdk-lib";

interface Props {
  externalId: string;
  /** The AWS account ID that Common Fate is deployed to. */
  commonFateAWSAccount: string;
}

export class IAMIdentityCenterIAMRoles extends Construct {
  constructor(parent: Construct, name: string, props: Props) {
    super(parent, name);

    new Role(this, "read", {
      assumedBy: new aws_iam.AccountPrincipal(props.commonFateAWSAccount),
      externalIds: [props.externalId],
    });
  }
}

# Terraform & Infrastructure as Code (IaC)

## What is Infrastructure as Code?

Infrastructure as Code (IaC) is the practice of managing and provisioning computing infrastructure through machine-readable configuration files rather than through manual processes or interactive configuration tools. Instead of clicking through a cloud console to spin up servers, databases, and networking, you write code that describes the desired state of your infrastructure and let tooling handle the actual provisioning.

The core idea is to treat infrastructure the same way developers treat application code: version-controlled, peer-reviewed, tested, and repeatable. When infrastructure is defined in code, you can store it in Git, track every change, roll back to a previous state, and spin up identical environments reliably. This eliminates the "it works on my machine" problem at the infrastructure level — staging and production environments can be defined by the exact same configuration.

IaC broadly falls into two styles. 
### **Declarative IaC** (used by Terraform, CloudFormation, and Pulumi) 
* You describe the end state you want — "I want 3 EC2 instances and a load balancer" — and the tool figures out how to get there. 
### **Imperative IaC** (used by tools like Ansible in some modes, or plain scripts) 
* You specify the exact steps to execute. Declarative approaches are generally preferred for infrastructure because they are idempotent: running the same configuration multiple times always produces the same result.

## What is Terraform?

Terraform is an open-source IaC tool created by HashiCorp and released in 2014. It is the most widely adopted IaC tool in the industry and is cloud-agnostic, meaning you can use it to manage infrastructure across AWS, Azure, GCP, and hundreds of other providers — all using the same language and workflow. Terraform uses its own configuration language called HCL (HashiCorp Configuration Language), which is designed to be both human-readable and machine-friendly.

At a high level, Terraform works in three steps. First, you write HCL configuration files that describe the resources you want. Then you run `terraform plan`, which shows you exactly what changes will be made without actually making them — a dry run. Finally, you run `terraform apply`, which provisions or modifies the real infrastructure to match your configuration. Terraform tracks what it has created in a state file, which is how it knows what already exists and what needs to change on subsequent runs.

> **Note:** In 2023 HashiCorp changed Terraform's license from open-source (MPL 2.0) to the Business Source License (BUSL). In response, the open-source community forked the project to create **OpenTofu**, which remains fully open-source and is largely compatible with Terraform. The two tools are currently very similar but are diverging over time.

## Core Concepts

### Providers

Providers are plugins that allow Terraform to interact with external APIs and platforms. There is a provider for AWS, Azure, GCP, Kubernetes, GitHub, Datadog, and hundreds of others. Each provider exposes a set of resource types that you can manage. Before you can use any resources, you declare which providers your configuration requires and Terraform downloads them automatically. Providers are versioned, so you can pin to a specific version to ensure consistent behaviour across your team.

A minimal provider declaration looks like this:

```hcl
terraform {
  required_providers {
    aws = { source = "hashicorp/aws", version = "~> 5.0" }
  }
}
```

### Resources

Resources are the fundamental building blocks of Terraform configuration. A resource block describes a single piece of infrastructure — an EC2 instance, an S3 bucket, a DNS record, a Kubernetes namespace. Each resource has a type (determined by the provider) and a local name you choose. Inside the block you set the configuration arguments specific to that resource type. Terraform is responsible for creating, updating, and destroying real infrastructure to match these declarations.

### State

Terraform keeps track of the infrastructure it manages in a state file (`terraform.tfstate`). This JSON file maps your configuration resources to the real-world objects they represent, including their current attributes and dependencies. State is what allows Terraform to calculate the diff between what exists and what your configuration describes — without it, Terraform would have no way of knowing that a resource already exists and would try to create a duplicate.

By default the state file is stored locally, which works fine for solo projects but becomes a problem for teams. For collaborative work, state should be stored remotely — typically in an S3 bucket (with DynamoDB for locking), Terraform Cloud, or another supported backend. Remote state ensures everyone on the team is working against the same source of truth and prevents two people from running `terraform apply` at the same time.

### Variables and Outputs

Input variables make Terraform configurations reusable and flexible. Rather than hard-coding values like region, instance size, or environment name, you declare variables and pass in different values for different deployments. Variables can have types, default values, and validation rules. Values are supplied via `.tfvars` files, environment variables, or directly on the command line.

Output values are the inverse — they expose information about your infrastructure after it is created. For example, after provisioning a load balancer you might output its DNS name so that it can be used by other configurations or displayed to the operator. Outputs are also the mechanism for passing data between modules.

### Modules

Modules are reusable, self-contained packages of Terraform configuration. A module groups related resources together into a logical unit — for example, a "vpc" module might create a VPC, subnets, route tables, and security groups together. You can then call that module multiple times with different input variables to create multiple VPCs without duplicating code.

Every Terraform configuration is technically a module — the root module. Child modules can come from local directories, the Terraform Registry (a public catalogue of community and official modules), or private registries. Using well-maintained public modules for common patterns (e.g., the official AWS VPC module) can save significant time and incorporate best practices that have been battle-tested across many organisations.

### The Terraform Workflow: Plan, Apply, Destroy

The core Terraform workflow revolves around three commands:

- **`terraform plan`** — Compares your configuration against the current state and shows a diff of what will be created, changed, or destroyed. This is a read-only operation and is safe to run at any time. Reviewing the plan before applying is a critical safety step in any production workflow.
- **`terraform apply`** — Executes the planned changes, provisioning or modifying real infrastructure. By default it shows the plan again and asks for confirmation before proceeding. In CI/CD pipelines you can pass `-auto-approve` to skip the prompt.
- **`terraform destroy`** — Tears down all infrastructure managed by the current configuration. Useful for ephemeral environments (e.g., temporary dev environments) but should be used with extreme caution in production.

## Terraform vs. Other IaC Tools

Each major cloud provider offers its own native IaC tool: AWS has CloudFormation, Azure has ARM Templates (and the newer Bicep), and GCP has Deployment Manager. These tools integrate deeply with their respective platforms but are not portable — a CloudFormation template only works on AWS. Terraform's key advantage is that a single tool and workflow covers all your cloud providers and many third-party services.

Pulumi is a more recent IaC tool that takes a different approach: rather than a custom language like HCL, Pulumi lets you write infrastructure configuration in general-purpose languages like TypeScript, Python, Go, or C#. This appeals to teams who prefer not to learn a DSL and want to leverage existing language features like loops, conditionals, and testing frameworks natively.

Ansible, Chef, and Puppet occupy a slightly different space — they are primarily configuration management tools focused on what runs inside servers (installing packages, managing files, configuring services) rather than provisioning the servers themselves. In practice, Terraform and Ansible are often used together: Terraform provisions the infrastructure, and Ansible configures it.

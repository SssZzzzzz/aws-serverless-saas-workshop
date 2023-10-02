if using EE
sam build  && sam package  --output-template-file packaged.yaml --s3-bucket aws-sam-cli-managed-default-samclisourcebucket-8tf6bmi4rdcx --region us-east-2
sam deploy --template-file packaged.yaml --config-file samconfig.toml


Normally
sam build -t template.yaml 
sam deploy --config-file samconfig.toml


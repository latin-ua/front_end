#! /bin/bash
set -ue


ASSUME_ROLE="$(aws sts assume-role --role-arn arn:aws:iam::991225504892:role/tf-pipeline-role --role-session-name pipeline-session)"
export AWS_ACCESS_KEY_ID="$(echo $ASSUME_ROLE | jq -r .Credentials.AccessKeyId)"
export AWS_SECRET_ACCESS_KEY="$(echo $ASSUME_ROLE | jq -r .Credentials.SecretAccessKey)"
export AWS_SESSION_TOKEN="$(echo $ASSUME_ROLE | jq -r .Credentials.SessionToken)"

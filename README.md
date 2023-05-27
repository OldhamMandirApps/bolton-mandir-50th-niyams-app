# Bolton Mandir 50th Utsav Niyams App

## Deployment instructions

This app uses GitHub actions to deploy to preview, staging and production environments.

- Deployment to `preview` happens on PR changes.
- Deployment to `staging` happens on merge to `staging` branch
- Deployment to `production` happens on merge to `main` branch

Secrets are stored within GitHub Actions so all deployments happen on the pipeline

**Note: service account is setup using firebase cli. See https://github.com/FirebaseExtended/action-hosting-deploy for details**

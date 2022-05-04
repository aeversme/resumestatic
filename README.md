# resumechallenge

Resume website: [resume.alexeversmeyer.com](https://resume.alexeversmeyer.com)

This is the respository for my resume challenge frontend code. Updates to the repo are automatically pushed into AWS, 
where my resume is hosted in an S3 bucket as a static website.

Backend code in a separate repository connects this static website with AWS Lambda, API Gateway, and a DynamoDB table 
to provide a dynamic visitor counter.
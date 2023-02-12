# Infrastructure Description

## **Okay in this file we will translate the diagram into actual steps**

---
### Now we discuss in Architecture Diagram
![ARC](./Diagrams/ArchitectureDiagram.png)


## **RDS FIRST**
---
### 1. Go to RDS in AWS and Create database
![ARC](./ScreenShots/rds/rds1.png)

---
### 2.Create database with this settings 
![ARC](./ScreenShots/rds/rds2-Creation.png)

---
### 3.Wait it be available
![ARC](./ScreenShots/rds/rds3-Available.png)
![ARC](./ScreenShots/rds/rds4-Available.png)

---
### 4.Go to Security Group
![ARC](./ScreenShots/rds/rds5-Security%20Groups.png)

### 5.And Edit inbound rules to 0.0.0.0/0 to be public
![ARC](./ScreenShots/rds/rds6-Makeitpublic.png)


## **FIRST : RDS**
---
### 1. Go to RDS in AWS and Create database
![ARC](./ScreenShots/rds/rds1.png)

---
### 2.Create database with this settings 
![ARC](./ScreenShots/rds/rds2-Creation.png)

---
### 3.Wait it be available
![ARC](./ScreenShots/rds/rds3-Available.png)
![ARC](./ScreenShots/rds/rds4-Available.png)

---
### 4.Go to Security Group
![ARC](./ScreenShots/rds/rds5-Security%20Groups.png)

### 5.And Edit inbound rules to 0.0.0.0/0 to be public
![ARC](./ScreenShots/rds/rds6-Makeitpublic.png)


## **SECOND : Elastic Beanstalk**
---
### 1. Go to Elastic Beanstalk in AWS and Create Applications
![ARC](./ScreenShots/ElasticBeanstalk/ElasticBeanstalk-1.png)

---
### 2.Then Create Environment Variable
![ARC](./ScreenShots/ElasticBeanstalk/ElasticBeanstalk-2.png)

---
### 3.Wait it be available and check health and website link
![ARC](./ScreenShots/ElasticBeanstalk/ElasticBeanstalk-3.png)
![ARC](./ScreenShots/ElasticBeanstalk/ElasticBeanstalk-4.png)

---
### 4.Then after deploy server solve all errors that will face you and check logs after deploy
![ARC](./ScreenShots/ElasticBeanstalk/ElasticBeanstalk-5-After-deploy.png)
![ARC](./ScreenShots/ElasticBeanstalk/ElasticBeanstalk-6-After-deploy.png)


## **THIRD : S3 Bucket**
---
### 1. Go to S3 Bucket in AWS and Create bucket
![ARC](./ScreenShots/S3/S3-1.png)

---
### 2.Then Upload frontend files to the bucket and edit website to generate endpoint link
![ARC](./ScreenShots/S3/S3-3.png)

---
### 3.Open endpoint link to check that website is working
![ARC](./ScreenShots/S3/S3-2.png)
![ARC](./ScreenShots/S3/S3-4.png)

---
### 4.Then after deploy server solve all errors that will face you and check logs after deploy
![ARC](./ScreenShots/ElasticBeanstalk/ElasticBeanstalk-5-After-deploy.png)
![ARC](./ScreenShots/ElasticBeanstalk/ElasticBeanstalk-6-After-deploy.png)


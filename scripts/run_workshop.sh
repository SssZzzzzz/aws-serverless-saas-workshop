#!/bin/bash
##
## This script aims to automatically deploy the labs
## as outlined in this workshop here:
## https://catalog.us-east-1.prod.workshops.aws/workshops/b0c6ad36-0a4b-45d8-856b-8a64f0ac76bb/en-US
##

echo "################ Running pre-req script... ################"
cd ../Cloud9Setup/
# ./increase-disk-size.sh
# ./pre-requisites.sh
cd ../scripts/
echo "################ Done running pre-req script... ################"

# #### Note that deploying lab1 is not a requirement ####
# #######################################################

echo "################ Running lab2... ################"

cd ../Solution/Lab2/scripts
./deployment.sh -s -c --email wangchunyong@163.com
./deploy-updates.sh

echo "################ Done running lab2. ################"

echo "################ Sleeping for a minute before moving to next lab... ################"
sleep 60

echo "################ Running lab3... ################"

cd ../../Lab3/scripts/
./deployment.sh -s -c
./deploy-updates.sh

echo "################ Done running lab3. ################"

echo "################ Sleeping for a minute before moving to next lab... ################"
sleep 60

echo "################ Running lab4... ################"

cd ../../Lab4/scripts/
./deployment.sh -s -c

echo "################ Done running lab4. ################"

echo "################ Sleeping for a minute before moving to next lab... ################"
sleep 60

echo "################ Running lab5... ################"
cd ../../Lab5/scripts/
./deployment.sh -s -c
./deploy-updates.sh

echo "################ Done running lab5. ################"

echo "################ Sleeping for a minute before moving to next lab... ################"
sleep 60

echo "################ Running lab6... ################"

python3 lab6_updates.py
cd ../Lab6/scripts/
./deployment.sh
cd ../../scripts/

echo "################ Done running lab6. ################"

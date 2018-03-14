### **Data Ingestion/Python Engineer Assessment Test**

Thank you for your interest in the Python Engineer role at SteelEye .

We hope the test will not only test your abilities but also give you a little glimpse into some of the tasks we carry out. You are welcome to use any resources that would be available to you during the course of a normal day: e.g. Google is permitted, as are textbooks, however use of existing code libraries you have developed anywhere else would not be allowed. You may include code taken from the internet including JARs that are freely downloadable and have no restrictions on usage. In other words, they must be licensed for commercial use without restriction. You should clearly identify and attribute sources within your code to their appropriate ownership.

One final word of warning - at a startup like SteelEye you will regularly gather your own requirements directly or receive vague details by email. Sometimes it is not possible to get a very detailed specification simply because the user doesn’t know or isn’t available. When this happens you have to use your initiative and work things out for yourself. This test has several ambiguities and vague definitions. It is up to you to make reasonable and valid assumptions. Do not ask your recruitment consultant for help or advice as they know no more than you do.

And one final tip: KISS – Keep It Short and Simple. Don’t overcomplicate it, make it simple, efficient, easy to maintain and easy for the user to use.

**Brief:**

1) The requirement needs to be developed in Python 3
2) Please provide github link for review.

**Requirement:**
1) Download the xlsx from - https://www.iso20022.org/sites/default/files/ISO10383_MIC/ISO10383_MIC.xls
2) Store the xlsx
3) Read the tab titled "MICs List by CC"
4) Create a list of dict containing all rows (except row 1). The values in row 1 would be the keys for in each dict.
5) Store the list from step 4) as a .json file in an AWS S3 bucket
6) The above function should be run as an AWS Lambda

**Assessment criteria:**

1) Percentage of requirements satisfied
2) How clean the code is - In particular simplicity, readability, naming, pep8 validation, test coverage and error handling.


